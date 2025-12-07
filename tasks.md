# BillKaro — Implementation Task List

## Document Info
| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Last Updated** | 2025-12-06 |
| **Status** | In Progress |

---

## Phase 1: MVP

### 1. Project Setup & Infrastructure
- [x] **1.1 Repository Setup**
  - [x] 1.1.1 Create GitHub repository with README
  - [ ] 1.1.2 Setup branch protection rules (main, develop)
  - [x] 1.1.3 Create .gitignore for Node.js and React Native
  - [ ] 1.1.4 Setup commit message conventions

- [x] **1.2 Backend Project Initialization**
  - [x] 1.2.1 Initialize Node.js project with TypeScript
  - [x] 1.2.2 Setup Express.js with middleware (cors, helmet, morgan)
  - [x] 1.2.3 Configure ESLint and Prettier
  - [x] 1.2.4 Setup environment variables (.env.example)
  - [x] 1.2.5 Create folder structure

- [x] **1.3 Database Setup**
  - [x] 1.3.1 Setup PostgreSQL database (local and cloud)
  - [x] 1.3.2 Configure Prisma ORM
  - [x] 1.3.3 Create initial schema with all entities
  - [ ] 1.3.4 Setup database migrations
  - [ ] 1.3.5 Create seed data for testing

- [x] **1.4 Mobile Project Initialization**
  - [x] 1.4.1 Initialize React Native project with TypeScript
  - [x] 1.4.2 Setup React Navigation
  - [x] 1.4.3 Configure Redux Toolkit for state management
  - [x] 1.4.4 Setup Axios for API calls
  - [x] 1.4.5 Configure environment variables
  - [x] 1.4.6 Setup ESLint and Prettier

- [x] **1.5 CI/CD Pipeline**
  - [x] 1.5.1 Setup GitHub Actions for backend (lint, test, build)
  - [x] 1.5.2 Setup GitHub Actions for mobile (lint, build APK)
  - [ ] 1.5.3 Configure deployment to staging environment

- [x] **1.6 Development Environment**
  - [x] 1.6.1 Create Docker Compose for local development
  - [ ] 1.6.2 Document local setup instructions in README
  - [ ] 1.6.3 Setup Postman/Insomnia collection for API testing

---

### 2. Authentication Module
- [x] **2.1 Backend: OTP Service**
  - [ ] 2.1.1 Integrate SMS gateway (MSG91 or Twilio) - Mock implementation ready
  - [x] 2.1.2 Create OTP generation utility (6-digit, 5-min expiry)
  - [x] 2.1.3 Create OTP storage (Redis or database)
  - [x] 2.1.4 Implement rate limiting for OTP requests

- [x] **2.2 Backend: Auth APIs**
  - [x] 2.2.1 POST /auth/send-otp - Send OTP to phone number
  - [x] 2.2.2 POST /auth/verify-otp - Verify OTP and return JWT
  - [x] 2.2.3 POST /auth/refresh-token - Refresh access token
  - [x] 2.2.4 POST /auth/logout - Invalidate refresh token
  - [x] 2.2.5 Create JWT middleware for protected routes

- [x] **2.3 Mobile: Auth Screens**
  - [x] 2.3.1 Create PhoneInputScreen with country code picker
  - [x] 2.3.2 Create OTPVerificationScreen with auto-read
  - [x] 2.3.3 Implement resend OTP with countdown timer
  - [x] 2.3.4 Store JWT securely (react-native-keychain)
  - [x] 2.3.5 Implement auto-login on app launch
  - [x] 2.3.6 Handle auth errors gracefully

---

### 3. Business Profile Module
- [ ] **3.1 Backend: Business APIs**
  - [ ] 3.1.1 POST /business - Create business profile
  - [ ] 3.1.2 GET /business - Get current user's business
  - [ ] 3.1.3 PUT /business - Update business profile
  - [ ] 3.1.4 POST /business/logo - Upload business logo (S3/Cloudinary)
  - [ ] 3.1.5 Implement GSTIN validation (format + checksum)

- [ ] **3.2 Mobile: Business Setup Screens**
  - [ ] 3.2.1 Create BusinessSetupScreen (name, address fields)
  - [ ] 3.2.2 Add GSTIN input with validation
  - [ ] 3.2.3 Add logo upload with image picker
  - [ ] 3.2.4 Add UPI ID input
  - [ ] 3.2.5 Create BusinessProfileScreen for editing
  - [ ] 3.2.6 Add state/city picker for address

---

### 4. Customer Management Module
- [ ] **4.1 Backend: Customer APIs**
  - [ ] 4.1.1 POST /customers - Create customer
  - [ ] 4.1.2 GET /customers - List customers with pagination
  - [ ] 4.1.3 GET /customers/:id - Get customer details
  - [ ] 4.1.4 PUT /customers/:id - Update customer
  - [ ] 4.1.5 DELETE /customers/:id - Soft delete customer
  - [ ] 4.1.6 GET /customers/search?q= - Search customers
  - [ ] 4.1.7 POST /customers/import - Bulk import customers

- [ ] **4.2 Mobile: Customer Screens**
  - [ ] 4.2.1 Create CustomerListScreen with search bar
  - [ ] 4.2.2 Create AddCustomerScreen with form validation
  - [ ] 4.2.3 Create CustomerDetailScreen with purchase history
  - [ ] 4.2.4 Implement contact import from phone
  - [ ] 4.2.5 Add pull-to-refresh on customer list
  - [ ] 4.2.6 Add empty state for no customers

---

### 5. Product Catalog Module
- [ ] **5.1 Backend: Product APIs**
  - [ ] 5.1.1 POST /products - Create product
  - [ ] 5.1.2 GET /products - List products with pagination
  - [ ] 5.1.3 GET /products/:id - Get product details
  - [ ] 5.1.4 PUT /products/:id - Update product
  - [ ] 5.1.5 DELETE /products/:id - Soft delete product
  - [ ] 5.1.6 GET /products/search?q= - Search products
  - [ ] 5.1.7 GET /products/hsn-codes - HSN code lookup

- [ ] **5.2 Mobile: Product Screens**
  - [ ] 5.2.1 Create ProductListScreen with search
  - [ ] 5.2.2 Create AddProductScreen with HSN picker
  - [ ] 5.2.3 Create GST rate selector (0%, 5%, 12%, 18%, 28%)
  - [ ] 5.2.4 Create unit selector (pcs, kg, hrs, etc.)
  - [ ] 5.2.5 Add quick-add product modal for invoice flow

---

### 6. Invoice Module
- [ ] **6.1 Backend: GST Calculation Service**
  - [ ] 6.1.1 Create GST calculation utility
  - [ ] 6.1.2 Implement CGST/SGST split for intra-state
  - [ ] 6.1.3 Implement IGST for inter-state
  - [ ] 6.1.4 Handle GST rounding rules
  - [ ] 6.1.5 Create invoice total calculator

- [ ] **6.2 Backend: Invoice APIs**
  - [ ] 6.2.1 POST /invoices - Create invoice
  - [ ] 6.2.2 GET /invoices - List invoices with filters
  - [ ] 6.2.3 GET /invoices/:id - Get invoice details
  - [ ] 6.2.4 PUT /invoices/:id - Update draft invoice
  - [ ] 6.2.5 POST /invoices/:id/send - Mark as sent
  - [ ] 6.2.6 PUT /invoices/:id/status - Update payment status
  - [ ] 6.2.7 POST /invoices/:id/duplicate - Duplicate invoice
  - [ ] 6.2.8 Generate unique invoice number per business

- [ ] **6.3 Backend: PDF Generation**
  - [ ] 6.3.1 Create invoice PDF template (HTML/Handlebars)
  - [ ] 6.3.2 Integrate Puppeteer or PDFKit for PDF generation
  - [ ] 6.3.3 Include business logo in PDF
  - [ ] 6.3.4 Include GST breakup in PDF
  - [ ] 6.3.5 Generate UPI QR code (using qrcode library)
  - [ ] 6.3.6 Include UPI QR in PDF
  - [ ] 6.3.7 Store PDF in S3/Cloudinary
  - [ ] 6.3.8 POST /invoices/:id/pdf - Generate and return PDF URL

- [ ] **6.4 Mobile: Invoice Creation Flow**
  - [ ] 6.4.1 Create InvoiceListScreen with filters
  - [ ] 6.4.2 Create SelectCustomerScreen for invoice
  - [ ] 6.4.3 Create AddLineItemsScreen with product search
  - [ ] 6.4.4 Show running total with GST breakup
  - [ ] 6.4.5 Create DiscountInputModal (% or flat)
  - [ ] 6.4.6 Create InvoicePreviewScreen
  - [ ] 6.4.7 Create InvoiceDetailScreen

- [ ] **6.5 Mobile: WhatsApp Integration**
  - [ ] 6.5.1 Implement share intent for WhatsApp
  - [ ] 6.5.2 Create pre-formatted message with invoice summary
  - [ ] 6.5.3 Attach PDF to WhatsApp share
  - [ ] 6.5.4 Handle WhatsApp not installed error
  - [ ] 6.5.5 Track share completion (if possible)

- [ ] **6.6 Mobile: Payment Tracking**
  - [ ] 6.6.1 Add "Mark as Paid" button on invoice
  - [ ] 6.6.2 Create PaymentRecordModal
  - [ ] 6.6.3 Show payment status badges on invoice list
  - [ ] 6.6.4 Filter invoices by payment status

---

### 7. Dashboard & Home Screen
- [ ] **7.1 Backend: Dashboard APIs**
  - [ ] 7.1.1 GET /dashboard/summary - Totals, counts
  - [ ] 7.1.2 GET /dashboard/recent-invoices - Last 5 invoices
  - [ ] 7.1.3 GET /dashboard/overdue - Overdue invoices count

- [ ] **7.2 Mobile: Home Screen**
  - [ ] 7.2.1 Create DashboardScreen with summary cards
  - [ ] 7.2.2 Show total receivables
  - [ ] 7.2.3 Show overdue amount
  - [ ] 7.2.4 Show recent invoices list
  - [ ] 7.2.5 Add quick action buttons (New Invoice, Add Customer)
  - [ ] 7.2.6 Create bottom navigation (Home, Invoices, Customers, More)

---

### 8. Settings & Miscellaneous
- [ ] **8.1 Mobile: Settings**
  - [ ] 8.1.1 Create SettingsScreen
  - [ ] 8.1.2 Add business profile link
  - [ ] 8.1.3 Add invoice settings (prefix, terms)
  - [ ] 8.1.4 Add help/support link
  - [ ] 8.1.5 Add logout functionality
  - [ ] 8.1.6 Add app version display

- [ ] **8.2 Error Handling & Edge Cases**
  - [ ] 8.2.1 Implement global error boundary
  - [ ] 8.2.2 Add offline detection and indicator
  - [ ] 8.2.3 Handle API errors gracefully
  - [ ] 8.2.4 Add retry mechanisms for failed requests
  - [ ] 8.2.5 Implement form validation errors

---

## Phase 2: CRM & Stickiness (Weeks 9-12)

### 9. Reminder System
- [ ] **9.1 Backend: Reminder APIs**
  - [ ] 9.1.1 POST /reminders - Create reminder
  - [ ] 9.1.2 GET /reminders - List pending reminders
  - [ ] 9.1.3 PUT /reminders/:id - Update reminder
  - [ ] 9.1.4 PUT /reminders/:id/complete - Mark complete
  - [ ] 9.1.5 Implement scheduled job for notifications

- [ ] **9.2 Mobile: Reminder Features**
  - [ ] 9.2.1 Create ReminderListScreen
  - [ ] 9.2.2 Create AddReminderModal
  - [ ] 9.2.3 Integrate push notifications (Firebase)
  - [ ] 9.2.4 Add reminder from customer/invoice screen
  - [ ] 9.2.5 Add snooze functionality

---

### 10. Reports Module
- [ ] **10.1 Backend: Report APIs**
  - [ ] 10.1.1 GET /reports/sales-summary - Monthly sales
  - [ ] 10.1.2 GET /reports/gst-summary - GST breakup
  - [ ] 10.1.3 GET /reports/customer-sales - Customer-wise
  - [ ] 10.1.4 GET /reports/product-sales - Product-wise
  - [ ] 10.1.5 Generate PDF reports
  - [ ] 10.1.6 Generate Excel exports

- [ ] **10.2 Mobile: Report Screens**
  - [ ] 10.2.1 Create ReportsScreen with report types
  - [ ] 10.2.2 Create SalesSummaryScreen
  - [ ] 10.2.3 Create GSTSummaryScreen
  - [ ] 10.2.4 Add date range picker
  - [ ] 10.2.5 Add export/download functionality

---

### 11. Quick Reply Templates
- [ ] **11.1 Backend: Template APIs**
  - [ ] 11.1.1 GET /templates - List templates
  - [ ] 11.1.2 POST /templates - Create custom template
  - [ ] 11.1.3 Seed default templates

- [ ] **11.2 Mobile: Template Features**
  - [ ] 11.2.1 Create TemplateListScreen
  - [ ] 11.2.2 Create AddTemplateScreen
  - [ ] 11.2.3 Add template picker in customer detail
  - [ ] 11.2.4 Implement variable substitution

---

## Phase 3: Growth (Weeks 13-16)

### 12. GSTR-1 Export
- [ ] 12.1 Create GSTR-1 JSON schema
- [ ] 12.2 Implement B2B invoice extraction
- [ ] 12.3 Implement B2C invoice extraction
- [ ] 12.4 Generate HSN summary
- [ ] 12.5 Create export API endpoint
- [ ] 12.6 Create GSTR export screen in mobile

---

### 13. Multi-User Access
- [ ] 13.1 Create team member invitation system
- [ ] 13.2 Implement role-based permissions
- [ ] 13.3 Create team management screens
- [ ] 13.4 Add activity logging

---

### 14. Subscription & Payments
- [ ] 14.1 Integrate Razorpay
- [ ] 14.2 Create subscription plans
- [ ] 14.3 Implement paywall logic
- [ ] 14.4 Create subscription management screens
- [ ] 14.5 Handle subscription webhooks

---

### 15. Launch Preparation
- [ ] 15.1 Performance optimization
- [ ] 15.2 Security audit
- [ ] 15.3 Create Play Store listing
- [ ] 15.4 Prepare screenshots and videos
- [ ] 15.5 Submit to Play Store
- [ ] 15.6 Create landing page
- [ ] 15.7 Setup analytics (Mixpanel/Amplitude)

---

## Notes & Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2025-12-06 | Use React Native over Flutter | Larger talent pool, better for solo dev |
| 2025-12-06 | Use PostgreSQL over MongoDB | Relational data, GST compliance needs |
| 2025-12-06 | Start with WhatsApp Share Intent | Avoid WhatsApp API costs initially |

---

## Blockers & Dependencies

| Item | Dependency | Status |
|------|------------|--------|
| SMS Gateway | MSG91 account approval | Pending |
| WhatsApp Business API | Facebook verification (Phase 3) | Not Started |
| Play Store | Developer account (₹2,000) | Pending |
