import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../../constants';
// Added useAppSelector to get user ID if needed, though API handles it via token
import { useAppDispatch } from '../../hooks/useRedux';
import { setBusiness } from '../../store/slices/authSlice';
import { businessApi, BusinessInput } from '../../api/business';
import { validateGSTIN, validateEmail, validatePhone } from '../../utils/validation';

type Props = NativeStackScreenProps<RootStackParamList, 'BusinessSetup'>;

const BusinessSetupScreen: React.FC<Props> = ({ navigation, route }) => {
    const dispatch = useAppDispatch();
    const isEditing = route.params?.isEditing;

    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [logoUrl, setLogoUrl] = useState('');

    const [form, setForm] = useState<BusinessInput>({
        name: '',
        gstin: '',
        phone: '',
        email: '',
        addressLine1: '',
        city: '',
        state: '',
        pincode: '',
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (isEditing) {
            fetchBusinessDetails();
        }
    }, [isEditing]);

    const fetchBusinessDetails = async () => {
        setIsFetching(true);
        try {
            const response = await businessApi.getBusiness();
            if (response.success && response.data) {
                const data = response.data;
                setForm({
                    name: data.name,
                    gstin: data.gstin || '',
                    phone: data.phone || '',
                    email: data.email || '',
                    addressLine1: data.addressLine1 || '',
                    addressLine2: data.addressLine2 || '',
                    city: data.city || '',
                    state: data.state || '',
                    pincode: data.pincode || '',
                    website: data.website || '',
                    upiId: data.upiId || '',
                    bankName: data.bankName || '',
                    bankAccountNo: data.bankAccountNo || '',
                    bankIfsc: data.bankIfsc || '',
                });
                setLogoUrl(data.logoUrl || '');
            }
        } catch (error) {
            console.error('Error fetching business details:', error);
            Alert.alert('Error', 'Failed to load business details');
        } finally {
            setIsFetching(false);
        }
    };

    const updateField = (field: keyof BusinessInput, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: '' }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        if (!form.name.trim()) newErrors.name = 'Business name is required';

        if (form.gstin && !validateGSTIN(form.gstin)) {
            newErrors.gstin = 'Invalid GSTIN format';
        }

        if (form.email && !validateEmail(form.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (form.phone && !validatePhone(form.phone)) {
            newErrors.phone = 'Invalid phone number (10 digits)';
        }

        if (form.pincode && form.pincode.length !== 6) {
            newErrors.pincode = 'PIN Code must be 6 digits';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setIsLoading(true);
        try {
            const payload: BusinessInput = {
                ...form,
                logoUrl: logoUrl || undefined,
            };

            const response = await businessApi.upsertBusiness(payload);

            if (response.success && response.data) {
                dispatch(setBusiness({
                    id: response.data.id,
                    name: response.data.name,
                    gstin: response.data.gstin,
                }));

                if (isEditing) {
                    Alert.alert('Success', 'Profile updated successfully', [
                        { text: 'OK', onPress: () => navigation.goBack() }
                    ]);
                } else {
                    Alert.alert('Success', 'Business setup complete!', [
                        { text: 'OK', onPress: () => navigation.replace('Main') } // Navigate to Main instead of MainTabs if Main is the stack name
                    ]);
                }
            } else {
                Alert.alert('Error', response.message || 'Failed to update business profile');
            }

        } catch (error: any) {
            console.error('Error saving business:', error);
            const msg = error.response?.data?.message || 'Something went wrong';
            Alert.alert('Error', msg);
        } finally {
            setIsLoading(false);
        }
    };

    if (isFetching) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={COLORS.primary} />
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {isEditing ? 'Update Profile' : 'Set up your business'}
                        </Text>
                        <Text style={styles.subtitle}>
                            {isEditing
                                ? 'Update your business details'
                                : 'Enter your business details to start creating invoices'}
                        </Text>
                    </View>

                    {/* Logo Placeholder */}
                    <View style={styles.logoSection}>
                        <Text style={styles.label}>Logo URL (Optional)</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="https://example.com/logo.png"
                            placeholderTextColor={COLORS.textMuted}
                            value={logoUrl}
                            onChangeText={setLogoUrl}
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Form */}
                    <View style={styles.form}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Business Name *</Text>
                            <TextInput
                                style={[styles.input, errors.name && styles.inputError]}
                                placeholder="Enter your business name"
                                placeholderTextColor={COLORS.textMuted}
                                value={form.name}
                                onChangeText={(v) => updateField('name', v)}
                            />
                            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>GSTIN (Optional)</Text>
                            <TextInput
                                style={[styles.input, errors.gstin && styles.inputError]}
                                placeholder="22AAAAA0000A1Z5"
                                placeholderTextColor={COLORS.textMuted}
                                value={form.gstin}
                                onChangeText={(v) => updateField('gstin', v.toUpperCase())}
                                maxLength={15}
                                autoCapitalize="characters"
                            />
                            {errors.gstin ? (
                                <Text style={styles.errorText}>{errors.gstin}</Text>
                            ) : (
                                <Text style={styles.helperText}>
                                    15-digit GST Identification Number
                                </Text>
                            )}
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Phone Number</Text>
                            <TextInput
                                style={[styles.input, errors.phone && styles.inputError]}
                                placeholder="Business phone number"
                                placeholderTextColor={COLORS.textMuted}
                                keyboardType="phone-pad"
                                value={form.phone}
                                onChangeText={(v) => updateField('phone', v)}
                                maxLength={10}
                            />
                            {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={[styles.input, errors.email && styles.inputError]}
                                placeholder="business@example.com"
                                placeholderTextColor={COLORS.textMuted}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={form.email}
                                onChangeText={(v) => updateField('email', v)}
                            />
                            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Address</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Street address"
                                placeholderTextColor={COLORS.textMuted}
                                value={form.addressLine1}
                                onChangeText={(v) => updateField('addressLine1', v)}
                            />
                        </View>

                        <View style={styles.row}>
                            <View style={[styles.inputGroup, styles.halfInput]}>
                                <Text style={styles.label}>City</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="City"
                                    placeholderTextColor={COLORS.textMuted}
                                    value={form.city}
                                    onChangeText={(v) => updateField('city', v)}
                                />
                            </View>
                            <View style={[styles.inputGroup, styles.halfInput]}>
                                <Text style={styles.label}>PIN Code</Text>
                                <TextInput
                                    style={[styles.input, errors.pincode && styles.inputError]}
                                    placeholder="PIN Code"
                                    placeholderTextColor={COLORS.textMuted}
                                    keyboardType="number-pad"
                                    value={form.pincode}
                                    onChangeText={(v) => updateField('pincode', v)}
                                    maxLength={6}
                                />
                                {errors.pincode && <Text style={styles.errorText}>{errors.pincode}</Text>}
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>State</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Select state"
                                placeholderTextColor={COLORS.textMuted}
                                value={form.state}
                                onChangeText={(v) => updateField('state', v)}
                            />
                        </View>
                    </View>

                    {/* Submit Button */}
                    <TouchableOpacity
                        style={[styles.button, isLoading && styles.buttonDisabled]}
                        onPress={handleSubmit}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <ActivityIndicator color={COLORS.white} />
                        ) : (
                            <Text style={styles.buttonText}>
                                {isEditing ? 'Update Profile' : 'Save & Continue'}
                            </Text>
                        )}
                    </TouchableOpacity>
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
    scrollView: {
        flex: 1,
    },
    content: {
        padding: SPACING.lg,
    },
    header: {
        marginBottom: SPACING.xl,
        marginTop: SPACING.md,
    },
    title: {
        fontSize: FONT_SIZES.xxl,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SPACING.sm,
    },
    subtitle: {
        fontSize: FONT_SIZES.md,
        color: COLORS.textSecondary,
    },
    logoSection: {
        marginBottom: SPACING.lg,
    },
    form: {
        marginBottom: SPACING.xl,
    },
    inputGroup: {
        marginBottom: SPACING.md,
    },
    label: {
        fontSize: FONT_SIZES.sm,
        color: COLORS.textSecondary,
        marginBottom: SPACING.xs,
        fontWeight: '500',
    },
    input: {
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: BORDER_RADIUS.md,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm + 2,
        color: COLORS.text,
        fontSize: FONT_SIZES.md,
    },
    inputError: {
        borderColor: COLORS.error,
    },
    errorText: {
        color: COLORS.error,
        fontSize: FONT_SIZES.xs,
        marginTop: SPACING.xs,
    },
    helperText: {
        fontSize: FONT_SIZES.xs,
        color: COLORS.textMuted,
        marginTop: SPACING.xs,
    },
    row: {
        flexDirection: 'row',
        gap: SPACING.md,
    },
    halfInput: {
        flex: 1,
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: BORDER_RADIUS.md,
        paddingVertical: SPACING.md,
        alignItems: 'center',
        marginBottom: SPACING.xxl,
    },
    buttonDisabled: {
        backgroundColor: COLORS.surfaceLight,
        opacity: 0.7,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: FONT_SIZES.lg,
        fontWeight: '600',
    },
});

export default BusinessSetupScreen;
