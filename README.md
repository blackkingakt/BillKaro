# BillKaro

A mobile-first, WhatsApp-integrated invoicing and customer management platform designed specifically for Indian micro-businesses.

## Overview

BillKaro enables small retailers, freelancers, and home-based businesses to:
- Create and send professional GST invoices via WhatsApp in under 60 seconds
- Collect payments instantly via UPI QR codes embedded in invoices
- Track customer relationships, purchase history, and payment status
- Set reminders for follow-ups and overdue payments
- Generate reports for CA handoff during GST filing

## Documentation

| Document | Description |
|----------|-------------|
| [PRD](./prd.md) | Product Requirements Document |
| [Requirements](./requirements.md) | Technical & Functional Specifications |
| [Plan](./plan.md) | Project Plan & Timeline |
| [Tasks](./tasks.md) | Implementation Task List |

## Tech Stack

| Layer | Technology |
|-------|------------|
| Mobile App | React Native + TypeScript |
| Backend | Node.js + Express + TypeScript |
| Database | PostgreSQL + Prisma |
| Cache | Redis |
| File Storage | AWS S3 / Cloudinary |
| PDF Generation | Puppeteer or PDFKit |
| Push Notifications | Firebase |
| SMS Gateway | MSG91 or Twilio |
| Payments | Razorpay |

## Project Structure

```
billkaro/
├── api/                    # Backend (Node.js + Express)
│   ├── src/
│   │   ├── config/         # Environment, database config
│   │   ├── controllers/    # Route handlers
│   │   ├── services/       # Business logic
│   │   ├── routes/         # API routes
│   │   ├── middlewares/    # Auth, validation
│   │   └── utils/          # Helpers (GST calc, PDF gen)
│   └── prisma/             # Database schema
│
└── app/                    # Mobile App (React Native)
    └── src/
        ├── screens/        # All screens
        ├── components/     # Reusable components
        ├── navigation/     # Navigation setup
        ├── store/          # Redux store
        └── services/       # API calls
```

## Getting Started

### Prerequisites
- Node.js 20 LTS
- PostgreSQL 15+
- Redis 7+
- React Native CLI

### Setup
```bash
# Clone repository
git clone https://github.com/yourusername/billkaro.git
cd billkaro

# Setup backend
cd api
npm install
cp .env.example .env
npx prisma migrate dev

# Setup mobile app
cd ../app
npm install
npx react-native run-android
```

## License

MIT
