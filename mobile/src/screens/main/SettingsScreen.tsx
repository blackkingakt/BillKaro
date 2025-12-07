import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { logout } from '../../store/slices/authSlice';
import * as Keychain from 'react-native-keychain';

const SettingsScreen: React.FC = () => {
    const dispatch = useAppDispatch();
    const { business, user } = useAppSelector((state) => state.auth);

    const handleLogout = async () => {
        try {
            // Clear stored tokens
            await Keychain.resetGenericPassword();
            await Keychain.resetGenericPassword({ service: 'refreshToken' });

            // Clear redux state
            dispatch(logout());
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const settingsSections = [
        {
            title: 'Business',
            items: [
                { label: 'Business Profile', icon: '🏢', action: () => { } },
                { label: 'Invoice Settings', icon: '📄', action: () => { } },
                { label: 'Products', icon: '📦', action: () => { } },
            ],
        },
        {
            title: 'App',
            items: [
                { label: 'Notifications', icon: '🔔', action: () => { } },
                { label: 'Language', icon: '🌐', action: () => { } },
            ],
        },
        {
            title: 'Support',
            items: [
                { label: 'Help & FAQ', icon: '❓', action: () => { } },
                { label: 'Contact Us', icon: '💬', action: () => { } },
                { label: 'Rate the App', icon: '⭐', action: () => { } },
            ],
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>Settings</Text>
                </View>

                {/* User Info Card */}
                <TouchableOpacity style={styles.userCard}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>{business?.name?.charAt(0) || 'B'}</Text>
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.businessName}>{business?.name || 'My Business'}</Text>
                        <Text style={styles.userPhone}>+91 {user?.phone}</Text>
                        {business?.gstin && (
                            <Text style={styles.gstin}>GSTIN: {business.gstin}</Text>
                        )}
                    </View>
                    <Text style={styles.chevron}>›</Text>
                </TouchableOpacity>

                {/* Settings Sections */}
                {settingsSections.map((section) => (
                    <View key={section.title} style={styles.section}>
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                        <View style={styles.sectionContent}>
                            {section.items.map((item, index) => (
                                <TouchableOpacity
                                    key={item.label}
                                    style={[
                                        styles.settingItem,
                                        index < section.items.length - 1 && styles.settingItemBorder,
                                    ]}
                                    onPress={item.action}
                                >
                                    <Text style={styles.settingIcon}>{item.icon}</Text>
                                    <Text style={styles.settingLabel}>{item.label}</Text>
                                    <Text style={styles.chevron}>›</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                ))}

                {/* Logout Button */}
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>Log Out</Text>
                </TouchableOpacity>

                {/* App Version */}
                <Text style={styles.version}>BillKaro v1.0.0</Text>
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
        paddingBottom: SPACING.md,
    },
    title: {
        fontSize: FONT_SIZES.xxl,
        fontWeight: '700',
        color: COLORS.text,
    },
    userCard: {
        backgroundColor: COLORS.surface,
        marginHorizontal: SPACING.lg,
        borderRadius: BORDER_RADIUS.lg,
        padding: SPACING.md,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.lg,
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SPACING.md,
    },
    avatarText: {
        color: COLORS.white,
        fontSize: FONT_SIZES.xl,
        fontWeight: '700',
    },
    userInfo: {
        flex: 1,
    },
    businessName: {
        fontSize: FONT_SIZES.lg,
        fontWeight: '600',
        color: COLORS.text,
    },
    userPhone: {
        fontSize: FONT_SIZES.sm,
        color: COLORS.textSecondary,
        marginTop: 2,
    },
    gstin: {
        fontSize: FONT_SIZES.xs,
        color: COLORS.textMuted,
        marginTop: 2,
    },
    chevron: {
        fontSize: FONT_SIZES.xl,
        color: COLORS.textMuted,
    },
    section: {
        marginBottom: SPACING.lg,
        paddingHorizontal: SPACING.lg,
    },
    sectionTitle: {
        fontSize: FONT_SIZES.sm,
        color: COLORS.textMuted,
        fontWeight: '600',
        marginBottom: SPACING.sm,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    sectionContent: {
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.lg,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SPACING.md,
    },
    settingItemBorder: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    settingIcon: {
        fontSize: FONT_SIZES.lg,
        marginRight: SPACING.md,
    },
    settingLabel: {
        flex: 1,
        fontSize: FONT_SIZES.md,
        color: COLORS.text,
    },
    logoutButton: {
        marginHorizontal: SPACING.lg,
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.lg,
        padding: SPACING.md,
        alignItems: 'center',
        marginBottom: SPACING.lg,
    },
    logoutText: {
        fontSize: FONT_SIZES.md,
        color: COLORS.error,
        fontWeight: '600',
    },
    version: {
        textAlign: 'center',
        color: COLORS.textMuted,
        fontSize: FONT_SIZES.sm,
        marginBottom: SPACING.xxl,
    },
});

export default SettingsScreen;
