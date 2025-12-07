import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { config } from './config';

// Import routes
import authRoutes from './routes/authRoutes';

// Initialize Express app
const app: Application = express();

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
    origin: config.nodeEnv === 'production'
        ? ['https://billkaro.app']
        : ['http://localhost:3000', 'http://localhost:8081'],
    credentials: true,
}));

// Request logging
app.use(morgan(config.nodeEnv === 'production' ? 'combined' : 'dev'));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting for auth routes
const authRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 20, // limit each IP to 20 requests per windowMs
    message: {
        success: false,
        message: 'Too many requests, please try again later',
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// Global rate limiter
const globalRateLimiter = rateLimit({
    windowMs: config.rateLimit.windowMs,
    max: config.rateLimit.maxRequests,
    message: {
        success: false,
        message: 'Too many requests, please try again later',
    },
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(globalRateLimiter);

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        environment: config.nodeEnv,
    });
});

// API Routes
app.use('/api/v1/auth', authRateLimiter, authRoutes);
// app.use('/api/v1/business', businessRoutes);
// app.use('/api/v1/customers', customerRoutes);
// app.use('/api/v1/products', productRoutes);
// app.use('/api/v1/invoices', invoiceRoutes);
// app.use('/api/v1/dashboard', dashboardRoutes);

// 404 handler
app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        path: req.originalUrl,
    });
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Error:', err);

    res.status(500).json({
        success: false,
        message: config.nodeEnv === 'production'
            ? 'Internal server error'
            : err.message,
        ...(config.nodeEnv !== 'production' && { stack: err.stack }),
    });
});

export default app;
