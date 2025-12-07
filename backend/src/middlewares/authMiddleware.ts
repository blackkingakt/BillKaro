import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from '../services/tokenService';
import prisma from '../config/database';

// Extend Express Request type to include user
declare global {
    namespace Express {
        interface Request {
            user?: {
                userId: string;
                phone: string;
            };
        }
    }
}

// JWT Authentication Middleware
export const authenticate = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({
                success: false,
                message: 'Access token required',
            });
            return;
        }

        const token = authHeader.split(' ')[1];
        const payload = verifyAccessToken(token);

        if (!payload) {
            res.status(401).json({
                success: false,
                message: 'Invalid or expired access token',
            });
            return;
        }

        // Verify user exists
        const user = await prisma.user.findUnique({
            where: { id: payload.userId },
        });

        if (!user) {
            res.status(401).json({
                success: false,
                message: 'User not found',
            });
            return;
        }

        // Attach user to request
        req.user = {
            userId: payload.userId,
            phone: payload.phone,
        };

        next();
    } catch (error) {
        console.error('Auth middleware error:', error);
        res.status(500).json({
            success: false,
            message: 'Authentication failed',
        });
    }
};

// Optional authentication (doesn't fail if no token)
export const optionalAuth = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const authHeader = req.headers.authorization;

        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];
            const payload = verifyAccessToken(token);

            if (payload) {
                req.user = {
                    userId: payload.userId,
                    phone: payload.phone,
                };
            }
        }

        next();
    } catch (error) {
        next();
    }
};

export default {
    authenticate,
    optionalAuth,
};
