import express from 'express';
import { authenticate } from '../middlewares/authMiddleware';
import { upsertBusiness, getBusiness, uploadLogo } from '../controllers/businessController';

const router = express.Router();

// Business Profile routes - all require authentication
router.post('/', authenticate, upsertBusiness);
router.get('/', authenticate, getBusiness);
router.post('/logo', authenticate, uploadLogo);

export default router;
