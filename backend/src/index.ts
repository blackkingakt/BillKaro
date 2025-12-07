import app from './app';
import { config } from './config';

const startServer = async () => {
    try {
        // Start the server
        app.listen(config.port, () => {
            console.log(`
╔═══════════════════════════════════════════════════════════╗
║                     BillKaro API Server                    ║
╠═══════════════════════════════════════════════════════════╣
║  Status:      🟢 Running                                   ║
║  Environment: ${config.nodeEnv.padEnd(43)}║
║  Port:        ${String(config.port).padEnd(43)}║
║  URL:         http://localhost:${config.port}                        ║
╚═══════════════════════════════════════════════════════════╝
      `);
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason: Error) => {
    console.error('Unhandled Rejection:', reason);
    process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error: Error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully...');
    process.exit(0);
});

startServer();
