import { PrismaClient, BillingType, DiscountType, InvoiceStatus, PaymentStatus, PaymentMethod, ReminderType, ReminderStatus } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting seed...');

    // Clean up existing data (in reverse order of dependencies)
    console.log('🧹 Cleaning existing data...');
    await prisma.payment.deleteMany();
    await prisma.invoiceItem.deleteMany();
    await prisma.invoice.deleteMany();
    await prisma.reminder.deleteMany();
    await prisma.template.deleteMany();
    await prisma.product.deleteMany();
    await prisma.customer.deleteMany();
    await prisma.refreshToken.deleteMany();
    await prisma.oTP.deleteMany();
    await prisma.business.deleteMany();
    await prisma.user.deleteMany();

    // Create test users
    console.log('👤 Creating users...');
    const user1 = await prisma.user.create({
        data: {
            phone: '9876543210',
            countryCode: '+91',
            isVerified: true,
        },
    });

    const user2 = await prisma.user.create({
        data: {
            phone: '9876543211',
            countryCode: '+91',
            isVerified: true,
        },
    });

    // Create businesses
    console.log('🏢 Creating businesses...');
    const business1 = await prisma.business.create({
        data: {
            userId: user1.id,
            name: 'Tech Solutions Pvt Ltd',
            legalName: 'Tech Solutions Private Limited',
            gstin: '27AABCT1234A1Z5',
            pan: 'AABCT1234A',
            addressLine1: '123, Tech Park, Sector 15',
            addressLine2: 'Near Metro Station',
            city: 'Mumbai',
            state: 'Maharashtra',
            pincode: '400001',
            email: 'contact@techsolutions.in',
            phone: '9876543210',
            website: 'https://techsolutions.in',
            upiId: 'techsolutions@upi',
            bankName: 'HDFC Bank',
            bankAccountNo: '50100123456789',
            bankIfsc: 'HDFC0001234',
            invoicePrefix: 'TS',
            invoiceNextNumber: 1,
            termsAndConditions: '1. Payment due within 30 days.\n2. Goods once sold will not be returned.\n3. Subject to Mumbai jurisdiction.',
        },
    });

    const business2 = await prisma.business.create({
        data: {
            userId: user2.id,
            name: 'Creative Designs Studio',
            legalName: 'Creative Designs',
            gstin: '07AABCC5678D1Z3',
            pan: 'AABCC5678D',
            addressLine1: '456, Design Hub',
            city: 'New Delhi',
            state: 'Delhi',
            pincode: '110001',
            email: 'hello@creativedesigns.in',
            phone: '9876543211',
            upiId: 'creative@upi',
            invoicePrefix: 'CD',
            invoiceNextNumber: 1,
        },
    });

    // Create customers for business1
    console.log('👥 Creating customers...');
    const customer1 = await prisma.customer.create({
        data: {
            businessId: business1.id,
            name: 'Acme Corporation',
            phone: '9812345678',
            email: 'orders@acme.com',
            gstin: '27AABCA1234E1Z9',
            addressLine1: '789, Business Center',
            city: 'Mumbai',
            state: 'Maharashtra',
            pincode: '400002',
            billingType: BillingType.INTRA_STATE,
        },
    });

    const customer2 = await prisma.customer.create({
        data: {
            businessId: business1.id,
            name: 'Global Traders',
            phone: '9812345679',
            email: 'purchase@globaltraders.com',
            gstin: '07AABCG5678F1Z2',
            addressLine1: '321, Trade Tower',
            city: 'New Delhi',
            state: 'Delhi',
            pincode: '110002',
            billingType: BillingType.INTER_STATE,
        },
    });

    const customer3 = await prisma.customer.create({
        data: {
            businessId: business1.id,
            name: 'Local Retail Shop',
            phone: '9812345680',
            addressLine1: '555, Market Street',
            city: 'Mumbai',
            state: 'Maharashtra',
            pincode: '400003',
            billingType: BillingType.INTRA_STATE,
        },
    });

    // Create products for business1
    console.log('📦 Creating products...');
    const product1 = await prisma.product.create({
        data: {
            businessId: business1.id,
            name: 'Web Development Service',
            description: 'Full-stack web development with React and Node.js',
            hsnCode: '998314',
            unit: 'hrs',
            price: new Decimal(2500.00),
            gstRate: new Decimal(18),
        },
    });

    const product2 = await prisma.product.create({
        data: {
            businessId: business1.id,
            name: 'Mobile App Development',
            description: 'React Native mobile app development',
            hsnCode: '998314',
            unit: 'hrs',
            price: new Decimal(3000.00),
            gstRate: new Decimal(18),
        },
    });

    const product3 = await prisma.product.create({
        data: {
            businessId: business1.id,
            name: 'UI/UX Design',
            description: 'User interface and experience design',
            hsnCode: '998314',
            unit: 'hrs',
            price: new Decimal(2000.00),
            gstRate: new Decimal(18),
        },
    });

    const product4 = await prisma.product.create({
        data: {
            businessId: business1.id,
            name: 'Laptop Stand',
            description: 'Ergonomic aluminum laptop stand',
            hsnCode: '76042900',
            unit: 'pcs',
            price: new Decimal(1500.00),
            gstRate: new Decimal(18),
        },
    });

    const product5 = await prisma.product.create({
        data: {
            businessId: business1.id,
            name: 'Consulting Fee',
            description: 'Technical consulting and advisory',
            hsnCode: '998311',
            unit: 'session',
            price: new Decimal(5000.00),
            gstRate: new Decimal(18),
        },
    });

    // Create invoices for business1
    console.log('📄 Creating invoices...');

    // Invoice 1: Intra-state (CGST + SGST)
    const invoice1 = await prisma.invoice.create({
        data: {
            businessId: business1.id,
            customerId: customer1.id,
            invoiceNumber: 'TS-001',
            invoiceDate: new Date('2025-12-01'),
            dueDate: new Date('2025-12-31'),
            subtotal: new Decimal(62500.00),
            discountType: DiscountType.PERCENTAGE,
            discountValue: new Decimal(10),
            discountAmount: new Decimal(6250.00),
            taxableAmount: new Decimal(56250.00),
            cgstAmount: new Decimal(5062.50),
            sgstAmount: new Decimal(5062.50),
            igstAmount: new Decimal(0),
            totalGst: new Decimal(10125.00),
            grandTotal: new Decimal(66375.00),
            amountPaid: new Decimal(66375.00),
            balanceDue: new Decimal(0),
            status: InvoiceStatus.SENT,
            paymentStatus: PaymentStatus.PAID,
            notes: 'Thank you for your business!',
            items: {
                create: [
                    {
                        productId: product1.id,
                        name: 'Web Development Service',
                        description: 'Full-stack web development with React and Node.js',
                        hsnCode: '998314',
                        quantity: new Decimal(20),
                        unit: 'hrs',
                        rate: new Decimal(2500.00),
                        gstRate: new Decimal(18),
                        amount: new Decimal(50000.00),
                        cgstAmount: new Decimal(4500.00),
                        sgstAmount: new Decimal(4500.00),
                        igstAmount: new Decimal(0),
                        totalAmount: new Decimal(59000.00),
                    },
                    {
                        productId: product3.id,
                        name: 'UI/UX Design',
                        description: 'User interface and experience design',
                        hsnCode: '998314',
                        quantity: new Decimal(6.25),
                        unit: 'hrs',
                        rate: new Decimal(2000.00),
                        gstRate: new Decimal(18),
                        amount: new Decimal(12500.00),
                        cgstAmount: new Decimal(1125.00),
                        sgstAmount: new Decimal(1125.00),
                        igstAmount: new Decimal(0),
                        totalAmount: new Decimal(14750.00),
                    },
                ],
            },
        },
    });

    // Invoice 2: Inter-state (IGST)
    const invoice2 = await prisma.invoice.create({
        data: {
            businessId: business1.id,
            customerId: customer2.id,
            invoiceNumber: 'TS-002',
            invoiceDate: new Date('2025-12-03'),
            dueDate: new Date('2026-01-02'),
            subtotal: new Decimal(30000.00),
            discountType: DiscountType.NONE,
            discountValue: new Decimal(0),
            discountAmount: new Decimal(0),
            taxableAmount: new Decimal(30000.00),
            cgstAmount: new Decimal(0),
            sgstAmount: new Decimal(0),
            igstAmount: new Decimal(5400.00),
            totalGst: new Decimal(5400.00),
            grandTotal: new Decimal(35400.00),
            amountPaid: new Decimal(0),
            balanceDue: new Decimal(35400.00),
            status: InvoiceStatus.SENT,
            paymentStatus: PaymentStatus.UNPAID,
            notes: 'Payment due within 30 days.',
            items: {
                create: [
                    {
                        productId: product2.id,
                        name: 'Mobile App Development',
                        description: 'React Native mobile app development',
                        hsnCode: '998314',
                        quantity: new Decimal(10),
                        unit: 'hrs',
                        rate: new Decimal(3000.00),
                        gstRate: new Decimal(18),
                        amount: new Decimal(30000.00),
                        cgstAmount: new Decimal(0),
                        sgstAmount: new Decimal(0),
                        igstAmount: new Decimal(5400.00),
                        totalAmount: new Decimal(35400.00),
                    },
                ],
            },
        },
    });

    // Invoice 3: Draft invoice
    const invoice3 = await prisma.invoice.create({
        data: {
            businessId: business1.id,
            customerId: customer3.id,
            invoiceNumber: 'TS-003',
            invoiceDate: new Date('2025-12-05'),
            dueDate: new Date('2025-12-20'),
            subtotal: new Decimal(4500.00),
            discountType: DiscountType.FLAT,
            discountValue: new Decimal(500),
            discountAmount: new Decimal(500.00),
            taxableAmount: new Decimal(4000.00),
            cgstAmount: new Decimal(360.00),
            sgstAmount: new Decimal(360.00),
            igstAmount: new Decimal(0),
            totalGst: new Decimal(720.00),
            grandTotal: new Decimal(4720.00),
            amountPaid: new Decimal(0),
            balanceDue: new Decimal(4720.00),
            status: InvoiceStatus.DRAFT,
            paymentStatus: PaymentStatus.UNPAID,
            items: {
                create: [
                    {
                        productId: product4.id,
                        name: 'Laptop Stand',
                        description: 'Ergonomic aluminum laptop stand',
                        hsnCode: '76042900',
                        quantity: new Decimal(3),
                        unit: 'pcs',
                        rate: new Decimal(1500.00),
                        gstRate: new Decimal(18),
                        amount: new Decimal(4500.00),
                        cgstAmount: new Decimal(405.00),
                        sgstAmount: new Decimal(405.00),
                        igstAmount: new Decimal(0),
                        totalAmount: new Decimal(5310.00),
                    },
                ],
            },
        },
    });

    // Create payments
    console.log('💰 Creating payments...');
    await prisma.payment.create({
        data: {
            invoiceId: invoice1.id,
            amount: new Decimal(66375.00),
            paymentDate: new Date('2025-12-05'),
            paymentMethod: PaymentMethod.BANK_TRANSFER,
            reference: 'TXN123456789',
            notes: 'Full payment received',
        },
    });

    // Create reminders
    console.log('⏰ Creating reminders...');
    await prisma.reminder.create({
        data: {
            businessId: business1.id,
            customerId: customer2.id,
            title: 'Follow up on unpaid invoice',
            description: 'Invoice TS-002 is due on 2nd January. Follow up with Global Traders.',
            remindAt: new Date('2025-12-28'),
            type: ReminderType.PAYMENT_DUE,
            status: ReminderStatus.PENDING,
        },
    });

    await prisma.reminder.create({
        data: {
            businessId: business1.id,
            customerId: customer1.id,
            title: 'Schedule project review',
            description: 'Review project progress with Acme Corporation',
            remindAt: new Date('2025-12-15'),
            type: ReminderType.FOLLOW_UP,
            status: ReminderStatus.PENDING,
        },
    });

    // Create default templates
    console.log('📝 Creating templates...');
    await prisma.template.create({
        data: {
            name: 'Invoice Reminder',
            content: 'Dear {{customerName}},\n\nThis is a gentle reminder that invoice {{invoiceNumber}} for Rs. {{amount}} is due on {{dueDate}}.\n\nPlease make the payment at your earliest convenience.\n\nThank you,\n{{businessName}}',
            variables: ['customerName', 'invoiceNumber', 'amount', 'dueDate', 'businessName'],
            isDefault: true,
        },
    });

    await prisma.template.create({
        data: {
            name: 'Thank You',
            content: 'Dear {{customerName}},\n\nThank you for your payment of Rs. {{amount}} for invoice {{invoiceNumber}}.\n\nWe appreciate your business and look forward to serving you again.\n\nBest regards,\n{{businessName}}',
            variables: ['customerName', 'amount', 'invoiceNumber', 'businessName'],
            isDefault: true,
        },
    });

    await prisma.template.create({
        data: {
            name: 'Overdue Notice',
            content: 'Dear {{customerName}},\n\nInvoice {{invoiceNumber}} for Rs. {{amount}} was due on {{dueDate}} and is now {{daysOverdue}} days overdue.\n\nPlease make the payment immediately to avoid any inconvenience.\n\nThank you,\n{{businessName}}',
            variables: ['customerName', 'invoiceNumber', 'amount', 'dueDate', 'daysOverdue', 'businessName'],
            isDefault: true,
        },
    });

    // Business-specific template
    await prisma.template.create({
        data: {
            businessId: business1.id,
            name: 'Project Completion',
            content: 'Dear {{customerName}},\n\nWe are pleased to inform you that your project is complete.\n\nPlease find the final invoice attached.\n\nThank you for choosing Tech Solutions!\n\nBest regards,\n{{businessName}}',
            variables: ['customerName', 'businessName'],
            isDefault: false,
        },
    });

    console.log('✅ Seed completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   - Users: 2`);
    console.log(`   - Businesses: 2`);
    console.log(`   - Customers: 3`);
    console.log(`   - Products: 5`);
    console.log(`   - Invoices: 3`);
    console.log(`   - Payments: 1`);
    console.log(`   - Reminders: 2`);
    console.log(`   - Templates: 4`);
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
