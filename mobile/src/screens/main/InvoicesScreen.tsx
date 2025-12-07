import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS, SHADOWS } from '../../constants';

// Placeholder - will be replaced with actual data
const mockInvoices = [
    { id: '1', number: 'INV-001', customer: 'ABC Enterprises', amount: 15000, status: 'paid', date: '2024-12-05' },
    { id: '2', number: 'INV-002', customer: 'XYZ Ltd', amount: 25000, status: 'pending', date: '2024-12-04' },
    { id: '3', number: 'INV-003', customer: 'Tech Solutions', amount: 8500, status: 'overdue', date: '2024-12-01' },
    { id: '4', number: 'INV-004', customer: 'Global Corp', amount: 45000, status: 'draft', date: '2024-12-06' },
];

const InvoicesScreen: React.FC = () => {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'paid': return COLORS.success;
            case 'pending': return COLORS.warning;
            case 'overdue': return COLORS.error;
            case 'draft': return COLORS.textMuted;
            default: return COLORS.textMuted;
        }
    };

    const renderInvoice = ({ item }: { item: typeof mockInvoices[0] }) => (
        <TouchableOpacity style={styles.invoiceCard}>
            <View style={styles.invoiceHeader}>
                <Text style={styles.invoiceNumber}>{item.number}</Text>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) + '20' }]}>
                    <Text style={[styles.statusText, { color: getStatusColor(item.status) }]}>
                        {item.status.toUpperCase()}
                    </Text>
                </View>
            </View>
            <Text style={styles.customerName}>{item.customer}</Text>
            <View style={styles.invoiceFooter}>
                <Text style={styles.amount}>{formatCurrency(item.amount)}</Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Invoices</Text>
                <TouchableOpacity style={styles.createButton}>
                    <Text style={styles.createButtonText}>+ New</Text>
                </TouchableOpacity>
            </View>

            {/* Filter Tabs */}
            <View style={styles.filterContainer}>
                {['All', 'Pending', 'Paid', 'Overdue', 'Draft'].map((filter, index) => (
                    <TouchableOpacity
                        key={filter}
                        style={[styles.filterTab, index === 0 && styles.filterTabActive]}
                    >
                        <Text style={[styles.filterText, index === 0 && styles.filterTextActive]}>
                            {filter}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Invoice List */}
            <FlatList
                data={mockInvoices}
                renderItem={renderInvoice}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SPACING.lg,
        paddingBottom: SPACING.md,
    },
    title: {
        fontSize: FONT_SIZES.xxl,
        fontWeight: '700',
        color: COLORS.text,
    },
    createButton: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        borderRadius: BORDER_RADIUS.md,
    },
    createButtonText: {
        color: COLORS.white,
        fontWeight: '600',
        fontSize: FONT_SIZES.sm,
    },
    filterContainer: {
        flexDirection: 'row',
        paddingHorizontal: SPACING.lg,
        paddingBottom: SPACING.md,
        gap: SPACING.sm,
    },
    filterTab: {
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        borderRadius: BORDER_RADIUS.full,
        backgroundColor: COLORS.surface,
    },
    filterTabActive: {
        backgroundColor: COLORS.primary,
    },
    filterText: {
        color: COLORS.textSecondary,
        fontSize: FONT_SIZES.sm,
        fontWeight: '500',
    },
    filterTextActive: {
        color: COLORS.white,
    },
    listContainer: {
        padding: SPACING.lg,
        paddingTop: 0,
    },
    invoiceCard: {
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.lg,
        padding: SPACING.md,
        marginBottom: SPACING.md,
        ...SHADOWS.sm,
    },
    invoiceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.sm,
    },
    invoiceNumber: {
        fontSize: FONT_SIZES.md,
        fontWeight: '600',
        color: COLORS.primary,
    },
    statusBadge: {
        paddingHorizontal: SPACING.sm,
        paddingVertical: SPACING.xs / 2,
        borderRadius: BORDER_RADIUS.sm,
    },
    statusText: {
        fontSize: FONT_SIZES.xs,
        fontWeight: '700',
    },
    customerName: {
        fontSize: FONT_SIZES.lg,
        color: COLORS.text,
        fontWeight: '500',
        marginBottom: SPACING.sm,
    },
    invoiceFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    amount: {
        fontSize: FONT_SIZES.lg,
        fontWeight: '700',
        color: COLORS.text,
    },
    date: {
        fontSize: FONT_SIZES.sm,
        color: COLORS.textMuted,
    },
});

export default InvoicesScreen;
