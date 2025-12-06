# BillKaro — Product Requirements Document (PRD)

## Document Info
| Field | Value |
|-------|-------|
| **Product Name** | BillKaro |
| **Version** | 1.0 |
| **Author** | Ankur Thakrar |
| **Last Updated** | 2025-12-06 |
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
