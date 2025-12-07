import React, { useEffect, useState, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    RefreshControl,
    ActivityIndicator,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../../constants';
import { useAppSelector, useAppDispatch } from '../../hooks/useRedux';
import { businessApi, Business } from '../../api/business';
import { setBusiness } from '../../store/slices/authSlice';
import { useFocusEffect } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'BusinessProfile'>;

const BusinessProfileScreen: React.FC<Props> = ({ navigation }) => {
    const dispatch = useAppDispatch();
    const { business: authBusiness } = useAppSelector((state) => state.auth);
    const [businessData, setBusinessData] = useState<Business | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const fetchBusiness = async () => {
        try {
            const response = await businessApi.getBusiness();
            if (response.success && response.data) {
                setBusinessData(response.data);
                // Sync with Redux
                dispatch(setBusiness({
                    id: response.data.id,
                    name: response.data.name,
                    gstin: response.data.gstin,
                }));
            }
        } catch (error) {
            console.error('Error fetching business:', error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchBusiness();
        }, [])
    );

    const onRefresh = () => {
        setRefreshing(true);
        fetchBusiness();
    };

    const handleEdit = () => {
        // Navigate to Setup screen in edit mode
        // For now, we reuse BusinessSetup with initial params if we implement that,
        // or just navigate and let it fetch/fill. 
        // We'll simplisticly navigate to BusinessSetup.
        // Needs update in Navigation params to support "editMode" or similar.
        navigation.navigate('BusinessSetup', { isEditing: true });
    };

    if (isLoading && !refreshing && !businessData) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={COLORS.primary} />
                </View>
            </SafeAreaView>
        );
    }

    if (!businessData) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={[styles.container, styles.centerContent]}>
                    <Text style={styles.errorText}>Failed to load business profile</Text>
                    <TouchableOpacity style={styles.retryButton} onPress={fetchBusiness}>
                        <Text style={styles.retryButtonText}>Retry</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }

    const DetailItem = ({ label, value }: { label: string; value?: string }) => (
        <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>{label}</Text>
            <Text style={styles.detailValue}>{value || '-'}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>← Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Business Profile</Text>
                <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                style={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View style={styles.content}>
                    {/* Basic Info Card */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Basic Details</Text>
                        <DetailItem label="Business Name" value={businessData.name} />
                        <DetailItem label="Legal Name" value={businessData.legalName} />
                        <DetailItem label="GSTIN" value={businessData.gstin} />
                        <DetailItem label="Phone" value={businessData.phone} />
                        <DetailItem label="Email" value={businessData.email} />
                    </View>

                    {/* Address Card */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Address</Text>
                        <DetailItem label="Address" value={businessData.addressLine1} />
                        {businessData.addressLine2 && <Text style={styles.detailValue}>{businessData.addressLine2}</Text>}
                        <DetailItem label="City" value={businessData.city} />
                        <DetailItem label="State" value={businessData.state} />
                        <DetailItem label="PIN Code" value={businessData.pincode} />
                    </View>

                    {/* Bank Details Card */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Bank Details</Text>
                        <DetailItem label="Bank Name" value={businessData.bankName} />
                        <DetailItem label="Account No" value={businessData.bankAccountNo} />
                        <DetailItem label="IFSC Code" value={businessData.bankIfsc} />
                        <DetailItem label="UPI ID" value={businessData.upiId} />
                    </View>
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
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.md,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        backgroundColor: COLORS.surface,
    },
    headerTitle: {
        fontSize: FONT_SIZES.lg,
        fontWeight: '600',
        color: COLORS.text,
    },
    backButton: {
        padding: SPACING.sm,
    },
    backButtonText: {
        color: COLORS.primary,
        fontSize: FONT_SIZES.md,
    },
    editButton: {
        padding: SPACING.sm,
    },
    editButtonText: {
        color: COLORS.primary,
        fontWeight: '600',
        fontSize: FONT_SIZES.md,
    },
    scrollView: {
        flex: 1,
        padding: SPACING.lg,
    },
    content: {
        paddingBottom: SPACING.xxl,
    },
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.md,
        padding: SPACING.lg,
        marginBottom: SPACING.lg,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    cardTitle: {
        fontSize: FONT_SIZES.lg,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SPACING.md,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        paddingBottom: SPACING.xs,
    },
    detailItem: {
        marginBottom: SPACING.md,
    },
    detailLabel: {
        fontSize: FONT_SIZES.xs,
        color: COLORS.textSecondary,
        marginBottom: 2,
    },
    detailValue: {
        fontSize: FONT_SIZES.md,
        color: COLORS.text,
    },
    errorText: {
        color: COLORS.error,
        fontSize: FONT_SIZES.md,
        marginBottom: SPACING.md,
    },
    retryButton: {
        padding: SPACING.md,
        backgroundColor: COLORS.primary,
        borderRadius: BORDER_RADIUS.md,
    },
    retryButtonText: {
        color: COLORS.white,
        fontWeight: '600',
    },
});

export default BusinessProfileScreen;
