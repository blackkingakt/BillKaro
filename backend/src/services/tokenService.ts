import jwt from 'jsonwebtoken';
import { config } from '../config';
import prisma from '../config/database';

interface TokenPayload {
    userId: string;
    phone: string;
}

interface TokenPair {
    accessToken: string;
    refreshToken: string;
}

// Generate access token (short-lived)
export const generateAccessToken = (payload: TokenPayload): string => {
    return jwt.sign(payload, config.jwt.secret, {
        expiresIn: config.jwt.expiresIn,
    });
};

// Generate refresh token (long-lived)
export const generateRefreshToken = (payload: TokenPayload): string => {
    return jwt.sign(payload, config.jwt.refreshSecret, {
        expiresIn: config.jwt.refreshExpiresIn,
    });
};

// Generate both access and refresh tokens
export const generateTokenPair = async (userId: string, phone: string): Promise<TokenPair> => {
    const payload: TokenPayload = { userId, phone };

    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    // Calculate refresh token expiry
    const expiresAt = new Date();
    const daysMatch = config.jwt.refreshExpiresIn.match(/(\d+)d/);
    if (daysMatch) {
        expiresAt.setDate(expiresAt.getDate() + parseInt(daysMatch[1]));
    } else {
        expiresAt.setDate(expiresAt.getDate() + 7); // Default 7 days
    }

    // Store refresh token in database
    await prisma.refreshToken.create({
        data: {
            token: refreshToken,
            userId,
            expiresAt,
        },
    });

    return { accessToken, refreshToken };
};

// Verify access token
export const verifyAccessToken = (token: string): TokenPayload | null => {
    try {
        return jwt.verify(token, config.jwt.secret) as TokenPayload;
    } catch (error) {
        return null;
    }
};

// Verify refresh token
export const verifyRefreshToken = (token: string): TokenPayload | null => {
    try {
        return jwt.verify(token, config.jwt.refreshSecret) as TokenPayload;
    } catch (error) {
        return null;
    }
};

// Refresh tokens
export const refreshTokens = async (refreshToken: string): Promise<TokenPair | null> => {
    try {
        // Verify the refresh token
        const payload = verifyRefreshToken(refreshToken);
        if (!payload) {
            return null;
        }

        // Check if refresh token exists in database and is valid
        const storedToken = await prisma.refreshToken.findUnique({
            where: { token: refreshToken },
        });

        if (!storedToken || storedToken.expiresAt < new Date()) {
            // Token expired or not found
            if (storedToken) {
                await prisma.refreshToken.delete({ where: { id: storedToken.id } });
            }
            return null;
        }

        // Delete old refresh token
        await prisma.refreshToken.delete({ where: { id: storedToken.id } });

        // Generate new token pair
        return generateTokenPair(payload.userId, payload.phone);
    } catch (error) {
        console.error('Error refreshing tokens:', error);
        return null;
    }
};

// Revoke refresh token (logout)
export const revokeRefreshToken = async (refreshToken: string): Promise<boolean> => {
    try {
        await prisma.refreshToken.deleteMany({
            where: { token: refreshToken },
        });
        return true;
    } catch (error) {
        console.error('Error revoking token:', error);
        return false;
    }
};

// Revoke all refresh tokens for a user (logout from all devices)
export const revokeAllUserTokens = async (userId: string): Promise<boolean> => {
    try {
        await prisma.refreshToken.deleteMany({
            where: { userId },
        });
        return true;
    } catch (error) {
        console.error('Error revoking all tokens:', error);
        return false;
    }
};

export default {
    generateAccessToken,
    generateRefreshToken,
    generateTokenPair,
    verifyAccessToken,
    verifyRefreshToken,
    refreshTokens,
    revokeRefreshToken,
    revokeAllUserTokens,
};
