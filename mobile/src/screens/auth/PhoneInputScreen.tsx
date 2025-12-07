import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../../constants';

type Props = NativeStackScreenProps<RootStackParamList, 'PhoneInput'>;

const PhoneInputScreen: React.FC<Props> = ({ navigation }) => {
    const [phone, setPhone] = useState('');
    const [countryCode] = useState('+91');
    const [isLoading, setIsLoading] = useState(false);

    const handleSendOTP = async () => {
        if (phone.length !== 10) {
            // Show error
            return;
        }

        setIsLoading(true);
        try {
            // TODO: Call API to send OTP
            // await api.post('/auth/send-otp', { phone, countryCode });
            navigation.navigate('OTPVerification', { phone, countryCode });
        } catch (error) {
            console.error('Error sending OTP:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <View style={styles.content}>
                    {/* Logo/Branding */}
                    <View style={styles.header}>
                        <Text style={styles.logo}>BillKaro</Text>
                        <Text style={styles.tagline}>GST Invoicing Made Simple</Text>
                    </View>

                    {/* Form */}
                    <View style={styles.form}>
                        <Text style={styles.title}>Enter your mobile number</Text>
                        <Text style={styles.subtitle}>
                            We'll send you a verification code
                        </Text>

                        <View style={styles.inputContainer}>
                            <View style={styles.countryCode}>
                                <Text style={styles.countryCodeText}>{countryCode}</Text>
                            </View>
                            <TextInput
                                style={styles.phoneInput}
                                placeholder="10-digit mobile number"
                                placeholderTextColor={COLORS.textMuted}
                                keyboardType="phone-pad"
                                maxLength={10}
                                value={phone}
                                onChangeText={setPhone}
                            />
                        </View>

                        <TouchableOpacity
                            style={[
                                styles.button,
                                phone.length !== 10 && styles.buttonDisabled,
                            ]}
                            onPress={handleSendOTP}
                            disabled={phone.length !== 10 || isLoading}
                        >
                            <Text style={styles.buttonText}>
                                {isLoading ? 'Sending...' : 'Continue'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Footer */}
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>
                            By continuing, you agree to our Terms of Service and Privacy Policy
                        </Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    keyboardView: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: SPACING.lg,
    },
    header: {
        alignItems: 'center',
        marginTop: SPACING.xxl,
        marginBottom: SPACING.xxl,
    },
    logo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: COLORS.primary,
        letterSpacing: 1,
    },
    tagline: {
        fontSize: FONT_SIZES.md,
        color: COLORS.textSecondary,
        marginTop: SPACING.sm,
    },
    form: {
        flex: 1,
    },
    title: {
        fontSize: FONT_SIZES.xl,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: SPACING.sm,
    },
    subtitle: {
        fontSize: FONT_SIZES.md,
        color: COLORS.textSecondary,
        marginBottom: SPACING.lg,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: SPACING.lg,
    },
    countryCode: {
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: BORDER_RADIUS.md,
        paddingHorizontal: SPACING.md,
        justifyContent: 'center',
        marginRight: SPACING.sm,
    },
    countryCodeText: {
        color: COLORS.text,
        fontSize: FONT_SIZES.lg,
        fontWeight: '500',
    },
    phoneInput: {
        flex: 1,
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: BORDER_RADIUS.md,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.md,
        color: COLORS.text,
        fontSize: FONT_SIZES.lg,
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: BORDER_RADIUS.md,
        paddingVertical: SPACING.md,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: COLORS.surfaceLight,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: FONT_SIZES.lg,
        fontWeight: '600',
    },
    footer: {
        marginTop: SPACING.lg,
    },
    footerText: {
        color: COLORS.textMuted,
        fontSize: FONT_SIZES.sm,
        textAlign: 'center',
        lineHeight: 20,
    },
});

export default PhoneInputScreen;
