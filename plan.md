# BillKaro — Project Plan

## Document Info
| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Last Updated** | 2025-12-06 |
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

### Week 3-4: Core Backend Development
| Task | Owner | Deliverable |
|------|-------|-------------|
| User authentication (OTP) | Backend | Auth API endpoints |
| Business profile CRUD | Backend | Profile API |
| Customer management API | Backend | Customer API |
| Product catalog API | Backend | Product API |

### Week 5-6: Invoice Engine & Integrations
| Task | Owner | Deliverable |
|------|-------|-------------|
| Invoice CRUD API | Backend | Invoice API |
| GST calculation engine | Backend | GST service |
| PDF generation service | Backend | PDF API |
| UPI QR code generation | Backend | UPI service |

### Week 7-8: Mobile App Development
| Task | Owner | Deliverable |
|------|-------|-------------|
| Authentication screens | Mobile | Login flow |
| Business setup screens | Mobile | Onboarding |
| Customer/Invoice screens | Mobile | Core modules |
| Dashboard & testing | QA | Test reports |

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

### Week 11-12: Mobile CRM Features
| Task | Owner | Deliverable |
|------|-------|-------------|
| Payment tracking UI | Mobile | Payment screens |
| Reminder management | Mobile | Reminder module |
| Reports screens | Mobile | Reports module |

---

## 4. Phase 3: Growth (Weeks 13-16)

### Week 13-14: Advanced Features
| Task | Owner | Deliverable |
|------|-------|-------------|
| GSTR-1 JSON export | Backend | GSTR API |
| Multi-user & roles | Backend | Team API |
| Subscription & billing | Backend | Payments integration |

### Week 15-16: Polish & Launch Prep
| Task | Owner | Deliverable |
|------|-------|-------------|
| Performance optimization | Dev | Optimized app |
| Play Store submission | Dev | Published app |
| Landing page | Marketing | Website |

---

## 5. Resource Requirements

### Team Composition
| Role | Count | Responsibility |
|------|-------|----------------|
| Full-Stack Developer | 1-2 | Backend + Mobile |
| UI/UX Designer | 1 (part-time) | Design system |
| QA Tester | 1 (part-time) | Testing |
| Product Owner | 1 | PRD, priorities |

### Infrastructure Costs (Monthly)
| Service | Cost |
|---------|------|
| Cloud Hosting (AWS/DO) | ₹3,000-5,000 |
| Database (PostgreSQL) | ₹2,000-3,000 |
| SMS OTP (MSG91) | ₹1,000-2,000 |
| **Total** | **₹8,000-15,000** |

---

## 6. Risk Register

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Scope creep | High | Medium | Strict MVP definition |
| WhatsApp sharing issues | Medium | High | Test on multiple devices |
| GST calculation errors | Medium | High | Thorough testing; consult CA |
| Low user adoption | Medium | High | User interviews; iterate UX |

---

## 7. Success Criteria

### MVP Launch (Week 8)
- [ ] 50 beta users onboarded
- [ ] WhatsApp delivery > 95%
- [ ] No critical bugs
- [ ] App crash rate < 1%

### Public Launch (Week 16)
- [ ] 500+ Play Store downloads
- [ ] 4+ star rating
- [ ] 10+ paying customers

---

## 8. Tech Stack

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
| Hosting | AWS (Mumbai) or DigitalOcean |
