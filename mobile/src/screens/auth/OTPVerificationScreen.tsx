import React, { useState, useRef, useEffect } from 'react';
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
import { useAppDispatch } from '../../hooks/useRedux';
import { setUser, setBusiness } from '../../store/slices/authSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'OTPVerification'>;

const OTP_LENGTH = 6;

const OTPVerificationScreen: React.FC<Props> = ({ route, navigation }) => {
    const { phone, countryCode } = route.params;
    const dispatch = useAppDispatch();

    const [otp, setOtp] = useState<string[]>(new Array(OTP_LENGTH).fill(''));
    const [isLoading, setIsLoading] = useState(false);
    const [resendTimer, setResendTimer] = useState(30);
    const inputRefs = useRef<(TextInput | null)[]>([]);

    useEffect(() => {
        // Focus first input
        inputRefs.current[0]?.focus();

        // Start resend timer
        const timer = setInterval(() => {
            setResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleOtpChange = (value: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input
        if (value && index < OTP_LENGTH - 1) {
            inputRefs.current[index + 1]?.focus();
        }

        // Auto verify when all digits entered
        if (newOtp.every((digit) => digit) && newOtp.join('').length === OTP_LENGTH) {
            handleVerifyOTP(newOtp.join(''));
        }
    };

    const handleKeyPress = (key: string, index: number) => {
        if (key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerifyOTP = async (otpCode: string) => {
        setIsLoading(true);
        try {
            // TODO: Call API to verify OTP
            // const response = await api.post('/auth/verify-otp', { phone, countryCode, otp: otpCode });

            // Mock success - replace with actual API call
            dispatch(setUser({
                id: '1',
                phone,
                countryCode,
                isVerified: true,
            }));

            // Check if user has business, if not navigation will show BusinessSetup
            // dispatch(setBusiness(response.data.business));

        } catch (error) {
            console.error('Error verifying OTP:', error);
            // Show error
        } finally {
            setIsLoading(false);
        }
    };

    const handleResendOTP = async () => {
        if (resendTimer > 0) return;

        try {
            // TODO: Call API to resend OTP
            // await api.post('/auth/send-otp', { phone, countryCode });
            setResendTimer(30);
            setOtp(new Array(OTP_LENGTH).fill(''));
            inputRefs.current[0]?.focus();
        } catch (error) {
            console.error('Error resending OTP:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <View style={styles.content}>
                    {/* Back Button */}
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.backButtonText}>← Back</Text>
                    </TouchableOpacity>

                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.title}>Verify your number</Text>
                        <Text style={styles.subtitle}>
                            Enter the 6-digit code sent to{'\n'}
                            <Text style={styles.phoneText}>{countryCode} {phone}</Text>
                        </Text>
                    </View>

                    {/* OTP Input */}
                    <View style={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={(ref) => { inputRefs.current[index] = ref; }}
                                style={[
                                    styles.otpInput,
                                    digit && styles.otpInputFilled,
                                ]}
                                keyboardType="number-pad"
                                maxLength={1}
                                value={digit}
                                onChangeText={(value) => handleOtpChange(value, index)}
                                onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
                            />
                        ))}
                    </View>

                    {/* Resend */}
                    <View style={styles.resendContainer}>
                        {resendTimer > 0 ? (
                            <Text style={styles.resendTimer}>
                                Resend code in {resendTimer}s
                            </Text>
                        ) : (
                            <TouchableOpacity onPress={handleResendOTP}>
                                <Text style={styles.resendButton}>Resend Code</Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    {/* Verify Button */}
                    <TouchableOpacity
                        style={[
                            styles.button,
                            (!otp.every((d) => d) || isLoading) && styles.buttonDisabled,
                        ]}
                        onPress={() => handleVerifyOTP(otp.join(''))}
                        disabled={!otp.every((d) => d) || isLoading}
                    >
                        <Text style={styles.buttonText}>
                            {isLoading ? 'Verifying...' : 'Verify'}
                        </Text>
                    </TouchableOpacity>
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
    backButton: {
        marginBottom: SPACING.lg,
    },
    backButtonText: {
        color: COLORS.primary,
        fontSize: FONT_SIZES.md,
    },
    header: {
        marginBottom: SPACING.xl,
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
        lineHeight: 24,
    },
    phoneText: {
        color: COLORS.text,
        fontWeight: '600',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SPACING.lg,
    },
    otpInput: {
        width: 48,
        height: 56,
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: BORDER_RADIUS.md,
        textAlign: 'center',
        fontSize: FONT_SIZES.xl,
        color: COLORS.text,
        fontWeight: '600',
    },
    otpInputFilled: {
        borderColor: COLORS.primary,
    },
    resendContainer: {
        alignItems: 'center',
        marginBottom: SPACING.xl,
    },
    resendTimer: {
        color: COLORS.textMuted,
        fontSize: FONT_SIZES.md,
    },
    resendButton: {
        color: COLORS.primary,
        fontSize: FONT_SIZES.md,
        fontWeight: '600',
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
});

export default OTPVerificationScreen;
