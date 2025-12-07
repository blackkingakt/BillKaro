import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS, SHADOWS } from '../../constants';
import { useAppSelector } from '../../hooks/useRedux';

const DashboardScreen: React.FC = () => {
    const { business } = useAppSelector((state) => state.auth);

    // Mock data - replace with actual API data
    const stats = {
        totalReceivables: 125000,
        overdueAmount: 35000,
        invoicesThisMonth: 12,
        paidThisMonth: 8,
    };

    const recentInvoices = [
        { id: '1', customer: 'ABC Enterprises', amount: 15000, status: 'paid', date: '2024-12-05' },
        { id: '2', customer: 'XYZ Ltd', amount: 25000, status: 'pending', date: '2024-12-04' },
        { id: '3', customer: 'Tech Solutions', amount: 8500, status: 'overdue', date: '2024-12-01' },
    ];

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'paid':
                return COLORS.success;
            case 'pending':
                return COLORS.warning;
            case 'overdue':
                return COLORS.error;
            default:
                return COLORS.textMuted;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.greeting}>Hello! 👋</Text>
                        <Text style={styles.businessName}>{business?.name || 'My Business'}</Text>
                    </View>
                </View>

                {/* Stats Cards */}
                <View style={styles.statsContainer}>
                    <View style={[styles.statCard, styles.primaryCard]}>
                        <Text style={styles.statLabel}>Total Receivables</Text>
                        <Text style={styles.statValue}>{formatCurrency(stats.totalReceivables)}</Text>
                    </View>
                    <View style={[styles.statCard, styles.errorCard]}>
                        <Text style={styles.statLabel}>Overdue</Text>
                        <Text style={styles.statValue}>{formatCurrency(stats.overdueAmount)}</Text>
                    </View>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statCard}>
                        <Text style={styles.statLabel}>Invoices This Month</Text>
                        <Text style={styles.statValueSmall}>{stats.invoicesThisMonth}</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statLabel}>Paid This Month</Text>
                        <Text style={[styles.statValueSmall, { color: COLORS.success }]}>
                            {stats.paidThisMonth}
                        </Text>
                    </View>
                </View>

                {/* Quick Actions */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Quick Actions</Text>
                    <View style={styles.actionsContainer}>
                        <TouchableOpacity style={styles.actionButton}>
                            <Text style={styles.actionIcon}>📄</Text>
                            <Text style={styles.actionText}>New Invoice</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <Text style={styles.actionIcon}>👤</Text>
                            <Text style={styles.actionText}>Add Customer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <Text style={styles.actionIcon}>📦</Text>
                            <Text style={styles.actionText}>Add Product</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Recent Invoices */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Recent Invoices</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    {recentInvoices.map((invoice) => (
                        <TouchableOpacity key={invoice.id} style={styles.invoiceCard}>
                            <View style={styles.invoiceInfo}>
                                <Text style={styles.invoiceCustomer}>{invoice.customer}</Text>
                                <Text style={styles.invoiceDate}>{invoice.date}</Text>
                            </View>
                            <View style={styles.invoiceRight}>
                                <Text style={styles.invoiceAmount}>{formatCurrency(invoice.amount)}</Text>
                                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(invoice.status) + '20' }]}>
                                    <Text style={[styles.statusText, { color: getStatusColor(invoice.status) }]}>
                                        {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollView: {
        flex: 1,
    },
    header: {
        padding: SPACING.lg,
        paddingTop: SPACING.md,
    },
    greeting: {
        fontSize: FONT_SIZES.md,
        color: COLORS.textSecondary,
    },
    businessName: {
        fontSize: FONT_SIZES.xxl,
        fontWeight: '700',
        color: COLORS.text,
        marginTop: SPACING.xs,
    },
    statsContainer: {
        flexDirection: 'row',
        paddingHorizontal: SPACING.lg,
        gap: SPACING.md,
        marginBottom: SPACING.md,
    },
    statCard: {
        flex: 1,
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.lg,
        padding: SPACING.md,
        ...SHADOWS.sm,
    },
    primaryCard: {
        backgroundColor: COLORS.primary,
    },
    errorCard: {
        backgroundColor: COLORS.error,
    },
    statLabel: {
        fontSize: FONT_SIZES.sm,
        color: COLORS.textSecondary,
        marginBottom: SPACING.xs,
    },
    statValue: {
        fontSize: FONT_SIZES.xl,
        fontWeight: '700',
        color: COLORS.white,
    },
    statValueSmall: {
        fontSize: FONT_SIZES.xl,
        fontWeight: '700',
        color: COLORS.text,
    },
    section: {
        padding: SPACING.lg,
        paddingTop: SPACING.md,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.md,
    },
    sectionTitle: {
        fontSize: FONT_SIZES.lg,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SPACING.md,
    },
    seeAll: {
        fontSize: FONT_SIZES.sm,
        color: COLORS.primary,
        fontWeight: '500',
    },
    actionsContainer: {
        flexDirection: 'row',
        gap: SPACING.md,
    },
    actionButton: {
        flex: 1,
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.lg,
        padding: SPACING.md,
        alignItems: 'center',
        ...SHADOWS.sm,
    },
    actionIcon: {
        fontSize: 28,
        marginBottom: SPACING.xs,
    },
    actionText: {
        fontSize: FONT_SIZES.sm,
        color: COLORS.text,
        fontWeight: '500',
    },
    invoiceCard: {
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.md,
        padding: SPACING.md,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.sm,
        ...SHADOWS.sm,
    },
    invoiceInfo: {
        flex: 1,
    },
    invoiceCustomer: {
        fontSize: FONT_SIZES.md,
        color: COLORS.text,
        fontWeight: '500',
    },
    invoiceDate: {
        fontSize: FONT_SIZES.sm,
        color: COLORS.textMuted,
        marginTop: SPACING.xs / 2,
    },
    invoiceRight: {
        alignItems: 'flex-end',
    },
    invoiceAmount: {
        fontSize: FONT_SIZES.md,
        color: COLORS.text,
        fontWeight: '600',
    },
    statusBadge: {
        paddingHorizontal: SPACING.sm,
        paddingVertical: SPACING.xs / 2,
        borderRadius: BORDER_RADIUS.sm,
        marginTop: SPACING.xs,
    },
    statusText: {
        fontSize: FONT_SIZES.xs,
        fontWeight: '600',
    },
});

export default DashboardScreen;
