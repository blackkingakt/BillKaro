# BillKaro — Requirements Specification

## Document Info
| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Last Updated** | 2025-12-06 |

---

## 1. Functional Requirements

### 1.1 Authentication Module

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| AUTH-001 | User can sign up using phone number | P0 | OTP sent within 30 seconds |
| AUTH-002 | OTP expires after 5 minutes | P0 | Expired OTP shows error |
| AUTH-003 | User can resend OTP after 30 seconds | P0 | Resend button enabled after countdown |
| AUTH-004 | User session persists for 30 days | P1 | No re-login required |
| AUTH-005 | User can logout from all devices | P2 | All sessions invalidated |

### 1.2 Business Profile Module

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| BIZ-001 | User can set business name | P0 | Name displayed on invoices |
| BIZ-002 | User can set business address | P0 | Address on invoices |
| BIZ-003 | User can add GSTIN (optional) | P0 | GSTIN validated if provided |
| BIZ-004 | User can upload business logo | P1 | Logo displayed on invoices |
| BIZ-005 | User can set default payment terms | P1 | Terms on invoice footer |
| BIZ-006 | User can configure invoice number prefix | P1 | e.g., "INV-2024-001" |
| BIZ-007 | User can add UPI ID for payments | P0 | UPI QR generated on invoices |
| BIZ-008 | User can add bank account details | P2 | Bank details on invoice |

### 1.3 Customer Management Module

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| CUST-001 | User can add customer with name and phone | P0 | Customer saved to database |
| CUST-002 | User can add customer GSTIN (optional) | P0 | GSTIN shown on B2B invoices |
| CUST-003 | User can add customer email (optional) | P1 | Email used for digital delivery |
| CUST-004 | User can add customer address | P1 | Address on invoices |
| CUST-005 | User can import contacts from phone | P1 | Bulk import with selection |
| CUST-006 | User can search customers by name/phone | P0 | Search results in < 500ms |
| CUST-007 | User can view customer purchase history | P1 | List of all invoices for customer |
| CUST-008 | User can add tags to customers | P2 | Filter customers by tags |
| CUST-009 | User can add notes to customers | P2 | Notes visible in customer detail |
| CUST-010 | User can delete customer | P1 | Soft delete, invoices retained |

### 1.4 Product/Service Catalog Module

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| PROD-001 | User can add product with name and price | P0 | Product saved |
| PROD-002 | User can set HSN/SAC code | P0 | Code on invoice line items |
| PROD-003 | User can set GST rate (0%, 5%, 12%, 18%, 28%) | P0 | GST calculated correctly |
| PROD-004 | User can set unit of measurement | P1 | e.g., pcs, kg, hrs |
| PROD-005 | User can search products | P0 | Search in < 500ms |
| PROD-006 | User can edit product details | P0 | Changes don't affect past invoices |
| PROD-007 | User can delete product | P1 | Soft delete |
| PROD-008 | User can quick-add product during invoicing | P0 | Inline add without leaving flow |

### 1.5 Invoice Module

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| INV-001 | User can create new invoice | P0 | Invoice created in draft state |
| INV-002 | User can select customer for invoice | P0 | Customer details auto-filled |
| INV-003 | User can add line items to invoice | P0 | Multiple items supported |
| INV-004 | System auto-calculates GST per line item | P0 | CGST/SGST or IGST based on state |
| INV-005 | User can apply discount (% or flat) | P1 | Discount reflected in total |
| INV-006 | System generates unique invoice number | P0 | Sequential, no duplicates |
| INV-007 | User can set invoice date | P0 | Default to current date |
| INV-008 | User can set due date | P1 | Used for overdue tracking |
| INV-009 | User can add notes to invoice | P1 | Notes on invoice PDF |
| INV-010 | User can preview invoice before sending | P0 | Preview matches final PDF |
| INV-011 | System generates PDF invoice | P0 | GST-compliant format |
| INV-012 | PDF includes UPI QR code | P0 | Scannable QR |
| INV-013 | User can send invoice via WhatsApp | P0 | WhatsApp opens with PDF attached |
| INV-014 | User can view list of all invoices | P0 | Paginated list |
| INV-015 | User can filter invoices by status | P0 | Draft, Sent, Paid, Overdue |
| INV-016 | User can filter invoices by date range | P1 | Custom date picker |
| INV-017 | User can filter invoices by customer | P1 | Customer dropdown |
| INV-018 | User can search invoices by number | P0 | Search in < 500ms |
| INV-019 | User can mark invoice as Paid | P0 | Status updated |
| INV-020 | User can record partial payment | P2 | Balance due calculated |
| INV-021 | User can duplicate invoice | P1 | New invoice with same items |
| INV-022 | User can cancel invoice | P1 | Status changed, not deleted |
| INV-023 | User can edit draft invoice | P0 | Full editing capability |
| INV-024 | Sent invoices are not editable | P0 | Edit disabled after sending |

### 1.6 Reminder Module (Phase 2)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| REM-001 | User can set reminder for customer follow-up | P1 | Reminder saved with date/time |
| REM-002 | User receives push notification for reminder | P1 | Notification at scheduled time |
| REM-003 | User can view list of pending reminders | P1 | Sorted by date |
| REM-004 | User can snooze reminder | P2 | Rescheduled by 1 hour/1 day |
| REM-005 | User can mark reminder as complete | P1 | Removed from pending list |
| REM-006 | User can send payment reminder via WhatsApp | P1 | Pre-formatted message |

### 1.7 Reports Module (Phase 2)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| RPT-001 | User can view monthly sales summary | P1 | Total sales, invoice count |
| RPT-002 | User can view GST summary | P1 | CGST, SGST, IGST totals |
| RPT-003 | User can view customer-wise sales | P2 | Top customers by revenue |
| RPT-004 | User can view product-wise sales | P2 | Top products by revenue |
| RPT-005 | User can export reports as PDF | P1 | Downloadable PDF |
| RPT-006 | User can export reports as Excel | P2 | Downloadable XLSX |
| RPT-007 | User can generate GSTR-1 JSON | P1 | Valid JSON for GST portal |

---

## 2. Non-Functional Requirements

### 2.1 Performance Requirements

| ID | Requirement | Target |
|----|-------------|--------|
| PERF-001 | App cold start time | < 3 seconds |
| PERF-002 | Invoice creation to PDF ready | < 5 seconds |
| PERF-003 | API response time (p95) | < 500ms |
| PERF-004 | Search results display | < 500ms |
| PERF-005 | Image upload (logo) | < 10 seconds |
| PERF-006 | Offline invoice creation | Supported |

### 2.2 Scalability Requirements

| ID | Requirement | Target |
|----|-------------|--------|
| SCALE-001 | Concurrent users | 100,000 |
| SCALE-002 | Invoices per month | 1,000,000 |
| SCALE-003 | Database size | 100 GB |
| SCALE-004 | File storage | 500 GB |

### 2.3 Security Requirements

| ID | Requirement | Implementation |
|----|-------------|----------------|
| SEC-001 | Data encryption at rest | AES-256 |
| SEC-002 | Data encryption in transit | TLS 1.3 |
| SEC-003 | Authentication | JWT with refresh tokens |
| SEC-004 | OTP security | Rate limiting, expiry |
| SEC-005 | GSTIN validation | Government API verification |
| SEC-006 | Input validation | Server-side validation |
| SEC-007 | SQL injection prevention | Parameterized queries |
| SEC-008 | API rate limiting | 100 requests/minute/user |

### 2.4 Availability Requirements

| ID | Requirement | Target |
|----|-------------|--------|
| AVAIL-001 | Uptime SLA | 99.5% |
| AVAIL-002 | Planned maintenance window | Sunday 2-4 AM IST |
| AVAIL-003 | Disaster recovery RTO | 4 hours |
| AVAIL-004 | Disaster recovery RPO | 1 hour |
| AVAIL-005 | Backup frequency | Daily |

### 2.5 Usability Requirements

| ID | Requirement | Target |
|----|-------------|--------|
| UX-001 | Invoice creation steps | < 5 taps |
| UX-002 | Onboarding completion | < 2 minutes |
| UX-003 | Error messages | Clear, actionable |
| UX-004 | Offline indicator | Visible when offline |
| UX-005 | Loading indicators | For all async operations |

### 2.6 Compatibility Requirements

| ID | Requirement | Target |
|----|-------------|--------|
| COMPAT-001 | Android version | 7.0+ (API 24+) |
| COMPAT-002 | iOS version | Phase 2 |
| COMPAT-003 | Screen sizes | 5" to 7" optimized |
| COMPAT-004 | WhatsApp version | Standard + Business |

---

## 3. Data Requirements

### 3.1 Data Entities

```
User
├── id (UUID)
├── phone_number (string, unique)
├── created_at (timestamp)
└── updated_at (timestamp)

Business
├── id (UUID)
├── user_id (FK)
├── name (string)
├── address (text)
├── gstin (string, nullable)
├── logo_url (string, nullable)
├── upi_id (string, nullable)
├── invoice_prefix (string)
├── invoice_counter (integer)
├── state_code (string)
└── timestamps

Customer
├── id (UUID)
├── business_id (FK)
├── name (string)
├── phone (string)
├── email (string, nullable)
├── gstin (string, nullable)
├── address (text, nullable)
├── state_code (string, nullable)
├── tags (array)
├── notes (text, nullable)
├── is_deleted (boolean)
└── timestamps

Product
├── id (UUID)
├── business_id (FK)
├── name (string)
├── price (decimal)
├── hsn_code (string, nullable)
├── gst_rate (decimal)
├── unit (string)
├── is_deleted (boolean)
└── timestamps

Invoice
├── id (UUID)
├── business_id (FK)
├── customer_id (FK)
├── invoice_number (string, unique per business)
├── invoice_date (date)
├── due_date (date, nullable)
├── subtotal (decimal)
├── discount_type (enum: percent, flat)
├── discount_value (decimal)
├── cgst_total (decimal)
├── sgst_total (decimal)
├── igst_total (decimal)
├── total (decimal)
├── notes (text, nullable)
├── status (enum: draft, sent, paid, partial, cancelled)
├── paid_amount (decimal)
├── pdf_url (string, nullable)
└── timestamps

InvoiceItem
├── id (UUID)
├── invoice_id (FK)
├── product_id (FK, nullable)
├── description (string)
├── quantity (decimal)
├── unit_price (decimal)
├── hsn_code (string)
├── gst_rate (decimal)
├── cgst (decimal)
├── sgst (decimal)
├── igst (decimal)
├── total (decimal)
└── timestamps

Reminder
├── id (UUID)
├── business_id (FK)
├── customer_id (FK, nullable)
├── invoice_id (FK, nullable)
├── title (string)
├── scheduled_at (timestamp)
├── status (enum: pending, completed, snoozed)
└── timestamps
```

### 3.2 Data Retention

| Data Type | Retention Period |
|-----------|------------------|
| Invoices | 8 years (GST requirement) |
| Customer data | Until user deletion request |
| User activity logs | 1 year |
| OTP records | 24 hours |
| PDF files | 8 years |

---

## 4. Integration Requirements

### 4.1 External Integrations

| System | Purpose | Priority |
|--------|---------|----------|
| SMS Gateway (MSG91/Twilio) | OTP delivery | P0 |
| WhatsApp Share Intent | Invoice sharing | P0 |
| UPI Deep Link | Payment initiation | P0 |
| Firebase | Push notifications, analytics | P0 |
| WhatsApp Business API | Official messaging (Phase 3) | P2 |
| Razorpay | Subscription payments | P1 |
| GST Portal API | GSTIN validation | P2 |

### 4.2 API Requirements

| Endpoint Category | Auth Required | Rate Limit |
|-------------------|---------------|------------|
| /auth/* | No (public) | 10/min |
| /business/* | Yes | 100/min |
| /customers/* | Yes | 100/min |
| /products/* | Yes | 100/min |
| /invoices/* | Yes | 100/min |
| /reports/* | Yes | 20/min |
