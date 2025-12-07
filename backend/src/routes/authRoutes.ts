import { Router } from 'express';
import {
    sendOTPController,
    verifyOTPController,
    refreshTokenController,
    logoutController,
    getCurrentUser
} from '../controllers/authController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

// Public routes
router.post('/send-otp', sendOTPController);
router.post('/verify-otp', verifyOTPController);
router.post('/refresh-token', refreshTokenController);
router.post('/logout', logoutController);

// Protected routes
router.get('/me', authenticate, getCurrentUser);

export default router;
