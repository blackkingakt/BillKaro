import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS, SHADOWS } from '../../constants';

// Placeholder - will be replaced with actual data
const mockCustomers = [
    { id: '1', name: 'ABC Enterprises', phone: '9876543210', balance: 15000 },
    { id: '2', name: 'XYZ Ltd', phone: '9876543211', balance: 0 },
    { id: '3', name: 'Tech Solutions', phone: '9876543212', balance: 8500 },
    { id: '4', name: 'Global Corp', phone: '9876543213', balance: 45000 },
    { id: '5', name: 'Local Shop', phone: '9876543214', balance: 2500 },
];

const CustomersScreen: React.FC = () => {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const renderCustomer = ({ item }: { item: typeof mockCustomers[0] }) => (
        <TouchableOpacity style={styles.customerCard}>
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
            </View>
            <View style={styles.customerInfo}>
                <Text style={styles.customerName}>{item.name}</Text>
                <Text style={styles.customerPhone}>{item.phone}</Text>
            </View>
            <View style={styles.balanceContainer}>
                {item.balance > 0 ? (
                    <>
                        <Text style={styles.balanceLabel}>Due</Text>
                        <Text style={styles.balanceAmount}>{formatCurrency(item.balance)}</Text>
                    </>
                ) : (
                    <Text style={styles.noBalance}>No dues</Text>
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Customers</Text>
                <TouchableOpacity style={styles.createButton}>
                    <Text style={styles.createButtonText}>+ Add</Text>
                </TouchableOpacity>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search customers..."
                    placeholderTextColor={COLORS.textMuted}
                />
            </View>

            {/* Customer List */}
            <FlatList
                data={mockCustomers}
                renderItem={renderCustomer}
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
    searchContainer: {
        paddingHorizontal: SPACING.lg,
        marginBottom: SPACING.md,
    },
    searchInput: {
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.md,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        color: COLORS.text,
        fontSize: FONT_SIZES.md,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    listContainer: {
        padding: SPACING.lg,
        paddingTop: 0,
    },
    customerCard: {
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.lg,
        padding: SPACING.md,
        marginBottom: SPACING.md,
        flexDirection: 'row',
        alignItems: 'center',
        ...SHADOWS.sm,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SPACING.md,
    },
    avatarText: {
        color: COLORS.white,
        fontSize: FONT_SIZES.lg,
        fontWeight: '700',
    },
    customerInfo: {
        flex: 1,
    },
    customerName: {
        fontSize: FONT_SIZES.md,
        fontWeight: '600',
        color: COLORS.text,
    },
    customerPhone: {
        fontSize: FONT_SIZES.sm,
        color: COLORS.textMuted,
        marginTop: SPACING.xs / 2,
    },
    balanceContainer: {
        alignItems: 'flex-end',
    },
    balanceLabel: {
        fontSize: FONT_SIZES.xs,
        color: COLORS.textMuted,
    },
    balanceAmount: {
        fontSize: FONT_SIZES.md,
        fontWeight: '700',
        color: COLORS.error,
    },
    noBalance: {
        fontSize: FONT_SIZES.sm,
        color: COLORS.success,
    },
});

export default CustomersScreen;
