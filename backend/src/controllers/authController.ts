import { Request, Response } from 'express';
import prisma from '../config/database';
import { sendOTP, verifyOTP } from '../services/otpService';
import { generateTokenPair, refreshTokens, revokeRefreshToken } from '../services/tokenService';

// POST /auth/send-otp
export const sendOTPController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { phone, countryCode = '+91' } = req.body;

        // Validate phone number
        if (!phone || !/^\d{10}$/.test(phone)) {
            res.status(400).json({
                success: false,
                message: 'Please provide a valid 10-digit phone number',
            });
            return;
        }

        // Send OTP
        const result = await sendOTP(phone, countryCode);

        if (!result.success) {
            res.status(400).json({
                success: false,
                message: result.message,
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: result.message,
            data: {
                expiresAt: result.expiresAt,
            },
        });
    } catch (error) {
        console.error('Send OTP error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send OTP',
        });
    }
};

// POST /auth/verify-otp
export const verifyOTPController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { phone, otp, countryCode = '+91' } = req.body;

        // Validate inputs
        if (!phone || !/^\d{10}$/.test(phone)) {
            res.status(400).json({
                success: false,
                message: 'Please provide a valid 10-digit phone number',
            });
            return;
        }

        if (!otp || !/^\d{6}$/.test(otp)) {
            res.status(400).json({
                success: false,
                message: 'Please provide a valid 6-digit OTP',
            });
            return;
        }

        // Verify OTP
        const result = await verifyOTP(phone, otp, countryCode);

        if (!result.success) {
            res.status(400).json({
                success: false,
                message: result.message,
            });
            return;
        }

        // OTP verified - find or create user
        const fullPhone = `${countryCode}${phone}`;
        let user = await prisma.user.findUnique({
            where: { phone: fullPhone },
            include: { business: true },
        });

        const isNewUser = !user;

        if (!user) {
            // Create new user
            user = await prisma.user.create({
                data: {
                    phone: fullPhone,
                    countryCode,
                    isVerified: true,
                },
                include: { business: true },
            });
        } else if (!user.isVerified) {
            // Mark user as verified
            user = await prisma.user.update({
                where: { id: user.id },
                data: { isVerified: true },
                include: { business: true },
            });
        }

        // Generate tokens
        const tokens = await generateTokenPair(user.id, fullPhone);

        res.status(200).json({
            success: true,
            message: isNewUser ? 'Account created successfully' : 'Login successful',
            data: {
                user: {
                    id: user.id,
                    phone: user.phone,
                    countryCode: user.countryCode,
                    isVerified: user.isVerified,
                },
                business: user.business,
                isNewUser,
                ...tokens,
            },
        });
    } catch (error) {
        console.error('Verify OTP error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to verify OTP',
        });
    }
};

// POST /auth/refresh-token
export const refreshTokenController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            res.status(400).json({
                success: false,
                message: 'Refresh token required',
            });
            return;
        }

        // Refresh tokens
        const tokens = await refreshTokens(refreshToken);

        if (!tokens) {
            res.status(401).json({
                success: false,
                message: 'Invalid or expired refresh token',
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: 'Tokens refreshed successfully',
            data: tokens,
        });
    } catch (error) {
        console.error('Refresh token error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to refresh tokens',
        });
    }
};

// POST /auth/logout
export const logoutController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { refreshToken } = req.body;

        if (refreshToken) {
            await revokeRefreshToken(refreshToken);
        }

        res.status(200).json({
            success: true,
            message: 'Logged out successfully',
        });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to logout',
        });
    }
};

// GET /auth/me - Get current user
export const getCurrentUser = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.user) {
            res.status(401).json({
                success: false,
                message: 'Not authenticated',
            });
            return;
        }

        const user = await prisma.user.findUnique({
            where: { id: req.user.userId },
            include: { business: true },
        });

        if (!user) {
            res.status(404).json({
                success: false,
                message: 'User not found',
            });
            return;
        }

        res.status(200).json({
            success: true,
            data: {
                user: {
                    id: user.id,
                    phone: user.phone,
                    countryCode: user.countryCode,
                    isVerified: user.isVerified,
                },
                business: user.business,
            },
        });
    } catch (error) {
        console.error('Get current user error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to get user',
        });
    }
};

export default {
    sendOTPController,
    verifyOTPController,
    refreshTokenController,
    logoutController,
    getCurrentUser,
};
