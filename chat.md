Ankur Thakrar  
blackking.akt@gmail.com  
December 06, 2025


# suggest a place holder name, and gemerate a prd, plan, requirment and tasklist md files, 
also suggest tech stack for it,

# BillKaro — Product Documentation Suite

I suggest **BillKaro** as your placeholder name — it's simple, memorable, and action-oriented ("Karo" = "Do it" in Hindi). It immediately communicates the core value: billing made easy.

Below are four comprehensive markdown files you can use directly in your project repository.

---

## 1. `PRD.md` — Product Requirements Document

```markdown
# BillKaro — Product Requirements Document (PRD)

## Document Info
| Field | Value |
|-------|-------|
| **Product Name** | BillKaro |
| **Version** | 1.0 |
| **Author** | [Your Name] |
| **Last Updated** | 2024-12-06 |
| **Status** | Draft |

---

## 1. Overview

### 1.1 Problem Statement
Millions of Indian micro-businesses (small retailers, freelancers, home-based businesses, local service providers) struggle with:
- Creating GST-compliant invoices manually
- Sending invoices efficiently to customers
- Tracking payments and following up on dues
- Maintaining customer relationships and purchase history
- Managing their business operations from mobile devices

Existing solutions like Tally, Zoho Invoice, and ClearTax target SMBs and enterprises with complex features and higher price points, leaving micro-businesses underserved.

### 1.2 Solution
BillKaro is a mobile-first, WhatsApp-integrated invoicing and customer management platform designed specifically for Indian micro-businesses. It combines GST-compliant invoice generation with lightweight CRM capabilities, enabling business owners to:
- Create and send professional GST invoices via WhatsApp in under 60 seconds
- Collect payments instantly via UPI QR codes embedded in invoices
- Track customer relationships, purchase history, and payment status
- Set reminders for follow-ups and overdue payments
- Generate reports for CA handoff during GST filing

### 1.3 Target Users

#### Primary Persona: Ramesh (Small Retailer)
- **Age:** 35-50
- **Business:** Kirana store, small electronics shop, stationery store
- **Tech Comfort:** Basic smartphone user, comfortable with WhatsApp
- **Pain Points:** Manual billing, tracking credit customers, GST compliance
- **Goals:** Digitize billing, reduce paperwork, get paid faster

#### Secondary Persona: Priya (Freelancer/Service Provider)
- **Age:** 25-40
- **Business:** Tutor, beautician, consultant, photographer
- **Tech Comfort:** Moderate smartphone user
- **Pain Points:** Unprofessional invoices, forgetting follow-ups, no customer records
- **Goals:** Look professional, manage clients, track income

#### Tertiary Persona: Amit (Home-Based Business)
- **Age:** 28-45
- **Business:** Home bakery, handicrafts, reseller
- **Tech Comfort:** Good smartphone user, uses social media for business
- **Pain Points:** Managing orders via WhatsApp, no billing system, tracking customers
- **Goals:** Streamline operations, scale business

---

## 2. Product Goals & Success Metrics

### 2.1 Business Goals
| Goal | Target | Timeline |
|------|--------|----------|
| User Acquisition | 10,000 registered users | 6 months |
| Paid Conversion | 5% free-to-paid conversion | 6 months |
| Monthly Recurring Revenue | ₹2,00,000 MRR | 12 months |
| User Retention | 40% monthly active users | Ongoing |

### 2.2 Success Metrics (KPIs)
- **Activation Rate:** % of users who create first invoice within 24 hours
- **Invoice Volume:** Average invoices per user per month
- **WhatsApp Delivery Rate:** % of invoices successfully sent via WhatsApp
- **Payment Collection Rate:** % of invoices paid within 7 days
- **NPS Score:** Net Promoter Score > 40
- **Churn Rate:** < 8% monthly churn for paid users

---

## 3. Features & Requirements

### 3.1 Phase 1: MVP (Core Invoicing)

#### F1.1 User Authentication
- **F1.1.1** Phone number-based OTP login (no password)
- **F1.1.2** Business profile setup (name, address, GSTIN optional, logo optional)
- **F1.1.3** Support for multiple businesses per account (Phase 2)

#### F1.2 Customer Management
- **F1.2.1** Add customer (name, phone number required; GSTIN, email, address optional)
- **F1.2.2** Import customers from phone contacts
- **F1.2.3** Customer list with search and filter
- **F1.2.4** Customer detail view with purchase history

#### F1.3 Product/Service Catalog
- **F1.3.1** Add product/service (name, price, HSN/SAC code, GST rate)
- **F1.3.2** Product list with search
- **F1.3.3** Quick-add products while creating invoice
- **F1.3.4** Support for units (pieces, kg, hours, etc.)

#### F1.4 Invoice Generation
- **F1.4.1** Create new invoice with customer selection
- **F1.4.2** Add line items from catalog or quick-add
- **F1.4.3** Auto-calculate GST (CGST/SGST for intra-state, IGST for inter-state)
- **F1.4.4** Apply discounts (% or flat)
- **F1.4.5** Auto-generate invoice number (customizable prefix)
- **F1.4.6** Add notes/terms to invoice
- **F1.4.7** Preview invoice before sending
- **F1.4.8** Generate PDF invoice

#### F1.5 UPI Payment Integration
- **F1.5.1** Setup UPI ID in business profile
- **F1.5.2** Auto-generate UPI QR code on invoice
- **F1.5.3** Deep link for UPI payment apps
- **F1.5.4** Manual payment status update (Paid/Pending)

#### F1.6 WhatsApp Delivery
- **F1.6.1** Send invoice PDF via WhatsApp (single tap)
- **F1.6.2** Pre-formatted message with invoice summary
- **F1.6.3** Track delivery status (sent/delivered/read) - Phase 2

#### F1.7 Invoice Management
- **F1.7.1** Invoice list with filters (date, status, customer)
- **F1.7.2** Search invoices
- **F1.7.3** Mark invoice as Paid/Partially Paid/Cancelled
- **F1.7.4** Duplicate invoice functionality
- **F1.7.5** Edit draft invoices

---

### 3.2 Phase 2: CRM & Stickiness Features

#### F2.1 Payment Tracking
- **F2.1.1** Dashboard showing receivables summary
- **F2.1.2** Overdue invoice alerts
- **F2.1.3** Payment reminder via WhatsApp (one-tap)
- **F2.1.4** Partial payment recording

#### F2.2 Customer Relationship Management
- **F2.2.1** Customer tags (VIP, Regular, New, Credit)
- **F2.2.2** Customer notes
- **F2.2.3** Last interaction date tracking
- **F2.2.4** Customer-wise sales summary

#### F2.3 Follow-up Reminders
- **F2.3.1** Set reminder for customer follow-up
- **F2.3.2** Push notification for reminders
- **F2.3.3** Reminder list view
- **F2.3.4** Snooze/complete reminder actions

#### F2.4 Quick Reply Templates
- **F2.4.1** Pre-defined WhatsApp message templates
- **F2.4.2** Custom template creation
- **F2.4.3** Variable substitution (customer name, amount, etc.)

#### F2.5 Reports
- **F2.5.1** Monthly sales summary
- **F2.5.2** GST summary report (for CA handoff)
- **F2.5.3** Customer-wise sales report
- **F2.5.4** Product-wise sales report
- **F2.5.5** Export reports as PDF/Excel

---

### 3.3 Phase 3: Growth Features

#### F3.1 GSTR-1 Export
- **F3.1.1** Generate GSTR-1 JSON file
- **F3.1.2** B2B and B2C invoice segregation
- **F3.1.3** HSN summary generation

#### F3.2 Multi-User Access
- **F3.2.1** Invite staff members
- **F3.2.2** Role-based permissions (Admin, Billing, View-only)
- **F3.2.3** Activity log

#### F3.3 WhatsApp Business API Integration
- **F3.3.1** Official WhatsApp Business API integration
- **F3.3.2** Message templates approval workflow
- **F3.3.3** Broadcast messages to customer segments
- **F3.3.4** Two-way chat sync (read customer replies)

#### F3.4 Advanced Analytics
- **F3.4.1** Revenue trends
- **F3.4.2** Customer acquisition/churn
- **F3.4.3** Best-selling products
- **F3.4.4** Payment collection trends

---

## 4. Non-Functional Requirements

### 4.1 Performance
- App launch time: < 3 seconds on mid-range Android devices
- Invoice generation: < 5 seconds
- PDF generation: < 3 seconds
- API response time: < 500ms (p95)

### 4.2 Scalability
- Support 100,000 concurrent users
- Handle 1 million invoices per month

### 4.3 Security
- End-to-end encryption for sensitive data
- Secure OTP-based authentication
- GSTIN validation against government database
- Regular security audits

### 4.4 Availability
- 99.5% uptime SLA
- Offline invoice creation (sync when online)

### 4.5 Localization
- Support for English and Hindi UI
- Support for regional languages (Phase 3)
- Indian number formatting (₹, lakhs/crores)
- Indian date format (DD/MM/YYYY)

### 4.6 Compliance
- GST-compliant invoice format
- Data stored in India (data residency)
- GDPR-like privacy controls

---

## 5. User Flows

### 5.1 First-Time User Flow
```
Open App → Enter Phone Number → Receive OTP → Verify OTP → 
Setup Business Profile (Name, Address) → Optional: Add GSTIN/Logo → 
Dashboard (Empty State with CTA to create first invoice)
```

### 5.2 Create & Send Invoice Flow
```
Tap "New Invoice" → Select/Add Customer → Add Line Items → 
Review Totals (Auto GST calculation) → Preview Invoice → 
Tap "Send via WhatsApp" → WhatsApp opens with pre-filled message + PDF → 
Invoice marked as Sent → Return to Dashboard
```

### 5.3 Payment Follow-up Flow
```
View Overdue Invoices → Select Invoice → Tap "Send Reminder" → 
WhatsApp opens with reminder message → After payment received → 
Tap "Mark as Paid" → Enter payment details → Invoice status updated
```

---

## 6. Design Principles

1. **Mobile-First:** Every feature designed for thumb-friendly mobile use
2. **WhatsApp-Native:** Leverage familiar WhatsApp patterns
3. **Minimal Inputs:** Reduce typing; use smart defaults, dropdowns, voice input
4. **Vernacular Ready:** Design for Hindi/English code-switching
5. **Offline Capable:** Core features work without internet
6. **Trust Signals:** Show GST compliance badges, secure payment icons

---

## 7. Monetization

| Plan | Price | Limits | Features |
|------|-------|--------|----------|
| **Free** | ₹0 | 15 invoices/month, 30 customers | Basic invoicing, WhatsApp send |
| **Starter** | ₹199/month | 150 invoices, 200 customers | + Reminders, templates, reports |
| **Pro** | ₹499/month | Unlimited | + GSTR export, 2 users, priority support |
| **Business** | ₹999/month | Unlimited | + 5 users, WhatsApp API, broadcast, analytics |

**Annual Discount:** 20% off on yearly plans

---

## 8. Risks & Mitigations

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| WhatsApp policy changes | High | Medium | Build alternative channels (SMS, Email); use official API |
| Low willingness to pay | High | Medium | Strong freemium tier; demonstrate clear ROI |
| Competition from established players | Medium | High | Focus on micro-business niche; superior UX |
| GST rule changes | Medium | Low | Modular GST calculation engine; quick update capability |
| User data security breach | High | Low | Security audits; encryption; minimal data collection |

---

## 9. Open Questions

- [ ] Should we support quotation/estimate creation in Phase 1?
- [ ] Integration with accounting software (Tally) - which phase?
- [ ] Inventory management - separate product or feature?
- [ ] Credit limit tracking for customers?

---

## 10. Appendix

### A. Competitor Analysis
| Feature | BillKaro | Khatabook | Zoho Invoice | Vyapar |
|---------|----------|-----------|--------------|--------|
| GST Invoicing | ✅ | ✅ | ✅ | ✅ |
| WhatsApp-First | ✅ | ❌ | ❌ | Partial |
| UPI QR on Invoice | ✅ | ✅ | ❌ | ✅ |
| CRM Features | ✅ | ❌ | ✅ | ❌ |
| Price (Entry) | ₹199 | Free | ₹749 | ₹299 |
| Target Segment | Micro | Micro | SMB | Small |

### B. References
- GST Invoice Rules: https://www.gst.gov.in
- WhatsApp Business API: https://business.whatsapp.com
- UPI Deep Link Spec: https://www.npci.org.in
```

---

## 2. `PLAN.md` — Project Plan

```markdown
# BillKaro — Project Plan

## Document Info
| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Last Updated** | 2024-12-06 |
| **Project Duration** | 16 weeks (Phase 1 MVP) |

---

## 1. Project Phases Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  PHASE 1: MVP (Weeks 1-8)                                                   │
│  Core Invoicing + WhatsApp Delivery + UPI Payment                           │
├─────────────────────────────────────────────────────────────────────────────┤
│  PHASE 2: Stickiness (Weeks 9-12)                                           │
│  CRM Features + Reminders + Reports                                         │
├─────────────────────────────────────────────────────────────────────────────┤
│  PHASE 3: Growth (Weeks 13-16)                                              │
│  GSTR Export + Multi-user + Analytics                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│  PHASE 4: Scale (Post-Launch)                                               │
│  WhatsApp API + Broadcast + Regional Languages                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Phase 1: MVP (Weeks 1-8)

### Week 1-2: Foundation & Setup
| Task | Owner | Deliverable |
|------|-------|-------------|
| Project setup (repo, CI/CD, environments) | Dev | GitHub repo, pipelines |
| Design system & UI kit creation | Design | Figma component library |
| Database schema design | Dev | ERD document |
| API architecture design | Dev | OpenAPI spec |
| Authentication flow design | Dev | Auth flow diagram |

### Week 3-4: Core Backend Development
| Task | Owner | Deliverable |
|------|-------|-------------|
| User authentication (OTP) | Backend | Auth API endpoints |
| Business profile CRUD | Backend | Profile API |
| Customer management API | Backend | Customer API |
| Product catalog API | Backend | Product API |
| Database setup & migrations | Backend | Production DB |

### Week 5-6: Invoice Engine & Integrations
| Task | Owner | Deliverable |
|------|-------|-------------|
| Invoice CRUD API | Backend | Invoice API |
| GST calculation engine | Backend | GST service |
| PDF generation service | Backend | PDF API |
| UPI QR code generation | Backend | UPI service |
| WhatsApp sharing integration | Backend | WhatsApp service |

### Week 7-8: Mobile App Development
| Task | Owner | Deliverable |
|------|-------|-------------|
| Authentication screens | Mobile | Login flow |
| Business setup screens | Mobile | Onboarding |
| Customer management screens | Mobile | Customer module |
| Invoice creation flow | Mobile | Invoice module |
| Dashboard & invoice list | Mobile | Home screen |
| Testing & bug fixes | QA | Test reports |

### MVP Milestone Deliverables
- [ ] Working Android app (APK)
- [ ] User can sign up with phone OTP
- [ ] User can create business profile
- [ ] User can add customers and products
- [ ] User can create GST-compliant invoice
- [ ] User can send invoice via WhatsApp
- [ ] Invoice includes UPI QR code

---

## 3. Phase 2: Stickiness (Weeks 9-12)

### Week 9-10: CRM & Payment Tracking
| Task | Owner | Deliverable |
|------|-------|-------------|
| Payment status tracking | Backend | Payment API |
| Customer tags & notes | Backend | CRM API |
| Reminder system | Backend | Notification service |
| Dashboard analytics | Backend | Analytics API |

### Week 11-12: Mobile CRM Features
| Task | Owner | Deliverable |
|------|-------|-------------|
| Payment tracking UI | Mobile | Payment screens |
| Customer detail enhancements | Mobile | CRM screens |
| Reminder creation & management | Mobile | Reminder module |
| Quick reply templates | Mobile | Templates module |
| Reports screens | Mobile | Reports module |

### Phase 2 Milestone Deliverables
- [ ] Payment status tracking (Paid/Pending/Overdue)
- [ ] Customer tags and notes
- [ ] Follow-up reminders with notifications
- [ ] Quick reply WhatsApp templates
- [ ] Monthly sales & GST summary reports

---

## 4. Phase 3: Growth (Weeks 13-16)

### Week 13-14: Advanced Features
| Task | Owner | Deliverable |
|------|-------|-------------|
| GSTR-1 JSON export | Backend | GSTR API |
| Multi-user & roles | Backend | Team API |
| Advanced analytics | Backend | Analytics v2 |
| Subscription & billing | Backend | Payments integration |

### Week 15-16: Polish & Launch Prep
| Task | Owner | Deliverable |
|------|-------|-------------|
| Multi-user UI | Mobile | Team screens |
| GSTR export UI | Mobile | Export screens |
| Analytics dashboard | Mobile | Analytics screens |
| Performance optimization | Dev | Optimized app |
| Play Store submission | Dev | Published app |
| Landing page & marketing site | Marketing | Website |

### Phase 3 Milestone Deliverables
- [ ] GSTR-1 JSON export for GST filing
- [ ] Multi-user access with roles
- [ ] Subscription payments via Razorpay
- [ ] App published on Google Play Store
- [ ] Marketing website live

---

## 5. Resource Requirements

### Team Composition (Minimum Viable)
| Role | Count | Responsibility |
|------|-------|----------------|
| Full-Stack Developer | 1-2 | Backend + Mobile |
| UI/UX Designer | 1 (part-time) | Design system, screens |
| QA Tester | 1 (part-time) | Testing |
| Product Owner | 1 (You) | PRD, priorities, feedback |

### Infrastructure Costs (Estimated Monthly)
| Service | Provider | Cost |
|---------|----------|------|
| Cloud Hosting | AWS/DigitalOcean | ₹3,000-5,000 |
| Database | PostgreSQL (managed) | ₹2,000-3,000 |
| WhatsApp API | Gupshup/Wati | ₹2,000-5,000 |
| SMS OTP | MSG91/Twilio | ₹1,000-2,000 |
| PDF Generation | Self-hosted | Included |
| Push Notifications | Firebase | Free |
| **Total** | | **₹8,000-15,000/month** |

---

## 6. Risk Register

| Risk | Probability | Impact | Mitigation | Owner |
|------|-------------|--------|------------|-------|
| Scope creep | High | Medium | Strict MVP definition, say no | Product |
| WhatsApp sharing issues | Medium | High | Test on multiple devices; fallback to share intent | Dev |
| GST calculation errors | Medium | High | Thorough testing; consult CA | Dev + QA |
| Slow PDF generation | Medium | Medium | Optimize templates; async generation | Backend |
| Low user adoption | Medium | High | User interviews; iterate on UX | Product |

---

## 7. Success Criteria for Launch

### MVP Launch (End of Week 8)
- [ ] 50 beta users onboarded
- [ ] Average 5 invoices created per active user
- [ ] WhatsApp delivery success rate > 95%
- [ ] No critical bugs in production
- [ ] App crash rate < 1%

### Public Launch (End of Week 16)
- [ ] 500+ downloads on Play Store
- [ ] 4+ star rating
- [ ] 10+ paying customers
- [ ] < 5 critical support tickets per week

---

## 8. Communication Plan

| Meeting | Frequency | Participants | Purpose |
|---------|-----------|--------------|---------|
| Daily Standup | Daily | Dev team | Progress, blockers |
| Sprint Planning | Bi-weekly | All | Plan next 2 weeks |
| Sprint Review | Bi-weekly | All + stakeholders | Demo completed work |
| Design Review | Weekly | Product + Design | Review designs |
| User Feedback Session | Weekly | Product | Interview beta users |
```

---

## 3. `REQUIREMENTS.md` — Technical & Functional Requirements

```markdown
# BillKaro — Requirements Specification

## Document Info
| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Last Updated** | 2024-12-06 |

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
```

---

## 4. `TASKS.md` — Implementation Task List

```markdown
# BillKaro — Implementation Task List

## Document Info
| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Last Updated** | 2024-12-06 |
| **Status** | In Progress |

---

## Phase 1: MVP

### 1. Project Setup & Infrastructure
- [ ] **1.1 Repository Setup**
  - [ ] 1.1.1 Create GitHub repository with README
  - [ ] 1.1.2 Setup branch protection rules (main, develop)
  - [ ] 1.1.3 Create .gitignore for Node.js and React Native
  - [ ] 1.1.4 Setup commit message conventions (conventional commits)

- [ ] **1.2 Backend Project Initialization**
  - [ ] 1.2.1 Initialize Node.js project with TypeScript
  - [ ] 1.2.2 Setup Express.js with middleware (cors, helmet, morgan)
  - [ ] 1.2.3 Configure ESLint and Prettier
  - [ ] 1.2.4 Setup environment variables (.env.example)
  - [ ] 1.2.5 Create folder structure (controllers, services, models, routes, utils)

- [ ] **1.3 Database Setup**
  - [ ] 1.3.1 Setup PostgreSQL database (local and cloud)
  - [ ] 1.3.2 Configure Prisma ORM
  - [ ] 1.3.3 Create initial schema with all entities
  - [ ] 1.3.4 Setup database migrations
  - [ ] 1.3.5 Create seed data for testing

- [ ] **1.4 Mobile Project Initialization**
  - [ ] 1.4.1 Initialize React Native project with TypeScript
  - [ ] 1.4.2 Setup React Navigation
  - [ ] 1.4.3 Configure Redux Toolkit for state management
  - [ ] 1.4.4 Setup Axios for API calls
  - [ ] 1.4.5 Configure environment variables
  - [ ] 1.4.6 Setup ESLint and Prettier

- [ ] **1.5 CI/CD Pipeline**
  - [ ] 1.5.1 Setup GitHub Actions for backend (lint, test, build)
  - [ ] 1.5.2 Setup GitHub Actions for mobile (lint, build APK)
  - [ ] 1.5.3 Configure deployment to staging environment

- [ ] **1.6 Development Environment**
  - [ ] 1.6.1 Create Docker Compose for local development
  - [ ] 1.6.2 Document local setup instructions in README
  - [ ] 1.6.3 Setup Postman/Insomnia collection for API testing

---

### 2. Authentication Module
- [ ] **2.1 Backend: OTP Service**
  - [ ] 2.1.1 Integrate SMS gateway (MSG91 or Twilio)
  - [ ] 2.1.2 Create OTP generation utility (6-digit, 5-min expiry)
  - [ ] 2.1.3 Create OTP storage (Redis or database)
  - [ ] 2.1.4 Implement rate limiting for OTP requests

- [ ] **2.2 Backend: Auth APIs**
  - [ ] 2.2.1 POST /auth/send-otp - Send OTP to phone number
  - [ ] 2.2.2 POST /auth/verify-otp - Verify OTP and return JWT
  - [ ] 2.2.3 POST /auth/refresh-token - Refresh access token
  - [ ] 2.2.4 POST /auth/logout - Invalidate refresh token
  - [ ] 2.2.5 Create JWT middleware for protected routes

- [ ] **2.3 Mobile: Auth Screens**
  - [ ] 2.3.1 Create PhoneInputScreen with country code picker
  - [ ] 2.3.2 Create OTPVerificationScreen with auto-read
  - [ ] 2.3.3 Implement resend OTP with countdown timer
  - [ ] 2.3.4 Store JWT securely (react-native-keychain)
  - [ ] 2.3.5 Implement auto-login on app launch
  - [ ] 2.3.6 Handle auth errors gracefully

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
| 2024-12-06 | Use React Native over Flutter | Larger talent pool, better for solo dev |
| 2024-12-06 | Use PostgreSQL over MongoDB | Relational data, GST compliance needs |
| 2024-12-06 | Start with WhatsApp Share Intent | Avoid WhatsApp API costs initially |

---

## Blockers & Dependencies

| Item | Dependency | Status |
|------|------------|--------|
| SMS Gateway | MSG91 account approval | Pending |
| WhatsApp Business API | Facebook verification (Phase 3) | Not Started |
| Play Store | Developer account (₹2,000) | Pending |
```

---

## 5. Recommended Tech Stack

```markdown
# BillKaro — Tech Stack Recommendation

## Overview

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Mobile App** | React Native + TypeScript | Cross-platform, large ecosystem, hot reload |
| **Backend** | Node.js + Express + TypeScript | JavaScript everywhere, fast development |
| **Database** | PostgreSQL | Relational data, ACID compliance, GST needs |
| **ORM** | Prisma | Type-safe, great DX, migrations |
| **Cache** | Redis | OTP storage, session cache |
| **File Storage** | AWS S3 / Cloudinary | PDF and logo storage |
| **PDF Generation** | Puppeteer or PDFKit | GST invoice PDFs |
| **Push Notifications** | Firebase Cloud Messaging | Free, reliable |
| **SMS Gateway** | MSG91 (India) or Twilio | OTP delivery |
| **Payments** | Razorpay | Indian market leader |
| **Hosting** | AWS (Mumbai) or DigitalOcean | Data residency in India |
| **CI/CD** | GitHub Actions | Free for small teams |
| **Monitoring** | Sentry + Logtail | Error tracking, logs |

---

## Detailed Stack

### Mobile App
```
React Native 0.73+
├── TypeScript
├── React Navigation 6 (navigation)
├── Redux Toolkit + RTK Query (state + API)
├── React Native Paper (UI components)
├── React Native Keychain (secure storage)
├── React Native Share (WhatsApp sharing)
├── React Native PDF (PDF viewing)
├── React Native Contacts (import contacts)
├── React Native Image Picker (logo upload)
├── React Native Firebase (notifications + analytics)
└── React Native NetInfo (offline detection)
```

### Backend
```
Node.js 20 LTS
├── Express.js 4
├── TypeScript 5
├── Prisma ORM
├── PostgreSQL 15
├── Redis 7
├── JWT (jsonwebtoken + passport)
├── Puppeteer (PDF generation)
├── qrcode (UPI QR generation)
├── Multer + AWS S3 SDK (file uploads)
├── node-cron (scheduled jobs)
├── Joi/Zod (validation)
├── Helmet + CORS (security)
├── Winston (logging)
└── Jest + Supertest (testing)
```

### Infrastructure
```
AWS (ap-south-1 Mumbai)
├── EC2 or ECS (backend hosting)
├── RDS PostgreSQL (managed database)
├── ElastiCache Redis (managed cache)
├── S3 (file storage)
├── CloudFront (CDN for PDFs)
├── Route 53 (DNS)
└── ACM (SSL certificates)

Alternative: DigitalOcean
├── App Platform (backend)
├── Managed PostgreSQL
├── Spaces (S3-compatible storage)
└── Lower cost for early stage
```

### Third-Party Services
```
├── MSG91 - SMS OTP (₹0.12-0.15 per SMS)
├── Razorpay - Payments (2% transaction fee)
├── Firebase - Push notifications (free tier)
├── Sentry - Error tracking (free tier)
├── Cloudinary - Image optimization (alternative to S3)
└── Gupshup/Wati - WhatsApp Business API (Phase 3)
```

---

## Folder Structure

### Backend
```
billkaro-api/
├── src/
│   ├── config/           # Environment, database config
│   ├── controllers/      # Route handlers
│   ├── services/         # Business logic
│   ├── models/           # Prisma schema
│   ├── routes/           # API routes
│   ├── middlewares/      # Auth, validation, error handling
│   ├── utils/            # Helpers (GST calc, PDF gen, etc.)
│   ├── jobs/             # Scheduled tasks
│   └── types/            # TypeScript types
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── tests/
├── .env.example
├── Dockerfile
└── package.json
```

### Mobile
```
billkaro-app/
├── src/
│   ├── screens/          # All screens
│   ├── components/       # Reusable components
│   ├── navigation/       # Navigation setup
│   ├── store/            # Redux store, slices
│   ├── services/         # API calls
│   ├── hooks/            # Custom hooks
│   ├── utils/            # Helpers
│   ├── theme/            # Colors, typography
│   └── types/            # TypeScript types
├── assets/               # Images, fonts
├── android/
├── ios/
├── .env.example
└── package.json
```

---

## Cost Estimation (Monthly)

| Service | Free Tier | Paid Estimate |
|---------|-----------|---------------|
| AWS EC2 (t3.small) | - | ₹1,500 |
| AWS RDS PostgreSQL | - | ₹2,500 |
| AWS S3 (10 GB) | Free | ₹100 |
| Redis (ElastiCache) | - | ₹1,500 |
| MSG91 (1000 SMS) | - | ₹150 |
| Firebase | Free | Free |
| Sentry | Free | Free |
| Domain | - | ₹800/year |
| **Total (Early Stage)** | | **~₹6,000-8,000/month** |

---

## Alternative: Low-Cost Stack for Validation

If you want to validate quickly with minimal cost:

| Layer | Technology | Cost |
|-------|------------|------|
| Backend | Railway.app or Render | Free tier |
| Database | Supabase (PostgreSQL) | Free tier (500 MB) |
| Storage | Cloudinary | Free tier (25 GB) |
| Mobile | Expo (React Native) | Free |
| SMS | Firebase Auth (phone) | Free tier |
| **Total** | | **~₹0-500/month** |

This lets you launch MVP with near-zero infrastructure cost and upgrade as you get paying customers.
```

---

## Quick Start Commands

```bash
# Create project folder
mkdir billkaro && cd billkaro

# Initialize backend
mkdir api && cd api
npm init -y
npm install express typescript prisma @prisma/client
npx tsc --init
npx prisma init

# Initialize mobile app
cd ..
npx react-native init BillKaroApp --template react-native-template-typescript
```

---

Would you like me to:
1. **Create a detailed database schema** (Prisma schema file)?
2. **Design the API endpoints** with request/response examples?
3. **Create wireframes description** for the key screens?
4. **Build a landing page copy** to validate demand before building?


### References

1. **GitHub - snarktank/ai-dev-tasks: A simple task management system for managing AI dev agents**. [https://github.com](https://github.com/snarktank/ai-dev-tasks)
2. **Align, Plan, Ship: From Ideas to Iterations with PRD-Driven AI Agents - Oleksiy Kovyrin :: Oleksiy Kovyrin**. [https://kovyrin.net](https://kovyrin.net/2025/06/20/prd-tasklist-process/)
3. **GitHub - BaldissaraMatheus/Tasks.md: A self-hosted, Markdown file based task management board**. [https://github.com](https://github.com/BaldissaraMatheus/Tasks.md)
4. **Best Practices for Using PRDs with Cursor | ChatPRD Resources**. [https://www.chatprd.ai](https://www.chatprd.ai/resources/PRD-for-Cursor)
5. **Writing Better Instructions for Cursor**. [https://carlrippon.com](https://carlrippon.com/writing-better-instructions-for-cursor/)
6. **The Only PRD Template You Need (with Example)**. [https://productschool.com](https://productschool.com/blog/product-strategy/product-template-requirements-document-prd)
7. **Implement a method to generate PRD · Issue #37 · eyaltoledano/claude-task-master**. [https://github.com](https://github.com/eyaltoledano/claude-task-master/issues/37)
8. **Repo file-based task management in Codex - example solution - Coding with ChatGPT - OpenAI Developer Community**. [https://community.openai.com](https://community.openai.com/t/repo-file-based-task-management-in-codex-example-solution/1278584)
9. **r/ProductManagement on Reddit: Does anyone have example PRDs?**. [https://www.reddit.com](https://www.reddit.com/r/ProductManagement/comments/r5q2iq/does_anyone_have_example_prds/)
10. **r/selfhosted on Reddit: Tasks.md: A self-hosted, file based task management board that supports Markdown syntax**. [https://www.reddit.com](https://www.reddit.com/r/selfhosted/comments/11okgzl/tasksmd_a_selfhosted_file_based_task_management/)
