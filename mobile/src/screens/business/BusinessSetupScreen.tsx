import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../../constants';
import { useAppDispatch } from '../../hooks/useRedux';
import { setBusiness } from '../../store/slices/authSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'BusinessSetup'>;

const BusinessSetupScreen: React.FC<Props> = () => {
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        gstin: '',
        phone: '',
        email: '',
        addressLine1: '',
        city: '',
        state: '',
        pincode: '',
    });

    const updateField = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        if (!form.name.trim()) {
            // Show error
            return;
        }

        setIsLoading(true);
        try {
            // TODO: Call API to create business
            // const response = await api.post('/business', form);

            // Mock success
            dispatch(setBusiness({
                id: '1',
                name: form.name,
                gstin: form.gstin || undefined,
            }));
        } catch (error) {
            console.error('Error creating business:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const isValid = form.name.trim().length > 0;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.title}>Set up your business</Text>
                        <Text style={styles.subtitle}>
                            Enter your business details to start creating invoices
                        </Text>
                    </View>

                    {/* Form */}
                    <View style={styles.form}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Business Name *</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your business name"
                                placeholderTextColor={COLORS.textMuted}
                                value={form.name}
                                onChangeText={(v) => updateField('name', v)}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>GSTIN (Optional)</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="22AAAAA0000A1Z5"
                                placeholderTextColor={COLORS.textMuted}
                                value={form.gstin}
                                onChangeText={(v) => updateField('gstin', v.toUpperCase())}
                                maxLength={15}
                                autoCapitalize="characters"
                            />
                            <Text style={styles.helperText}>
                                15-digit GST Identification Number
                            </Text>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Phone Number</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Business phone number"
                                placeholderTextColor={COLORS.textMuted}
                                keyboardType="phone-pad"
                                value={form.phone}
                                onChangeText={(v) => updateField('phone', v)}
                                maxLength={10}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="business@example.com"
                                placeholderTextColor={COLORS.textMuted}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={form.email}
                                onChangeText={(v) => updateField('email', v)}
                            />
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
                                    style={styles.input}
                                    placeholder="PIN Code"
                                    placeholderTextColor={COLORS.textMuted}
                                    keyboardType="number-pad"
                                    value={form.pincode}
                                    onChangeText={(v) => updateField('pincode', v)}
                                    maxLength={6}
                                />
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
                        style={[styles.button, !isValid && styles.buttonDisabled]}
                        onPress={handleSubmit}
                        disabled={!isValid || isLoading}
                    >
                        <Text style={styles.buttonText}>
                            {isLoading ? 'Creating...' : 'Continue'}
                        </Text>
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
    },
    buttonText: {
        color: COLORS.white,
        fontSize: FONT_SIZES.lg,
        fontWeight: '600',
    },
});

export default BusinessSetupScreen;
