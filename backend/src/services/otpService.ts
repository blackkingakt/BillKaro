import crypto from 'crypto';
import prisma from '../config/database';
import { config } from '../config';

const OTP_EXPIRY_MINUTES = 5;
const MAX_OTP_ATTEMPTS = 3;
const OTP_RESEND_COOLDOWN_SECONDS = 30;

interface SendOTPResult {
    success: boolean;
    message: string;
    expiresAt?: Date;
}

interface VerifyOTPResult {
    success: boolean;
    message: string;
}

// Generate a 6-digit OTP
const generateOTP = (): string => {
    return crypto.randomInt(100000, 999999).toString();
};

// Send OTP via SMS (Mock implementation - replace with actual SMS gateway)
const sendSMS = async (phone: string, otp: string): Promise<boolean> => {
    // TODO: Integrate with MSG91 or Twilio
    // For development, just log the OTP
    console.log(`📱 OTP for ${phone}: ${otp}`);

    // Mock SMS gateway integration
    // In production, use MSG91 or Twilio API
    /*
    const response = await fetch('https://api.msg91.com/api/v5/otp', {
      method: 'POST',
      headers: {
        'authkey': config.sms.apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        template_id: config.sms.templateId,
        mobile: phone,
        otp: otp,
      }),
    });
    return response.ok;
    */

    return true;
};

// Send OTP to phone number
export const sendOTP = async (phone: string, countryCode: string = '+91'): Promise<SendOTPResult> => {
    try {
        const fullPhone = `${countryCode}${phone}`;

        // Check if there's a recent OTP (rate limiting)
        const recentOTP = await prisma.oTP.findFirst({
            where: {
                phone: fullPhone,
                createdAt: {
                    gte: new Date(Date.now() - OTP_RESEND_COOLDOWN_SECONDS * 1000),
                },
            },
            orderBy: { createdAt: 'desc' },
        });

        if (recentOTP) {
            const waitTime = Math.ceil(
                (OTP_RESEND_COOLDOWN_SECONDS * 1000 - (Date.now() - recentOTP.createdAt.getTime())) / 1000
            );
            return {
                success: false,
                message: `Please wait ${waitTime} seconds before requesting a new OTP`,
            };
        }

        // Generate OTP and expiry time
        const otp = generateOTP();
        const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);

        // Delete any existing OTPs for this phone
        await prisma.oTP.deleteMany({
            where: { phone: fullPhone },
        });

        // Store OTP in database
        await prisma.oTP.create({
            data: {
                phone: fullPhone,
                code: otp,
                expiresAt,
                attempts: 0,
            },
        });

        // Send OTP via SMS
        const smsSent = await sendSMS(fullPhone, otp);

        if (!smsSent) {
            return {
                success: false,
                message: 'Failed to send OTP. Please try again.',
            };
        }

        return {
            success: true,
            message: 'OTP sent successfully',
            expiresAt,
        };
    } catch (error) {
        console.error('Error sending OTP:', error);
        return {
            success: false,
            message: 'Failed to send OTP. Please try again.',
        };
    }
};

// Verify OTP
export const verifyOTP = async (phone: string, code: string, countryCode: string = '+91'): Promise<VerifyOTPResult> => {
    try {
        const fullPhone = `${countryCode}${phone}`;

        // Find the OTP record
        const otpRecord = await prisma.oTP.findFirst({
            where: {
                phone: fullPhone,
                expiresAt: { gte: new Date() },
            },
            orderBy: { createdAt: 'desc' },
        });

        if (!otpRecord) {
            return {
                success: false,
                message: 'OTP expired or not found. Please request a new OTP.',
            };
        }

        // Check max attempts
        if (otpRecord.attempts >= MAX_OTP_ATTEMPTS) {
            await prisma.oTP.delete({ where: { id: otpRecord.id } });
            return {
                success: false,
                message: 'Maximum attempts exceeded. Please request a new OTP.',
            };
        }

        // Verify OTP
        if (otpRecord.code !== code) {
            // Increment attempts
            await prisma.oTP.update({
                where: { id: otpRecord.id },
                data: { attempts: { increment: 1 } },
            });

            const remainingAttempts = MAX_OTP_ATTEMPTS - otpRecord.attempts - 1;
            return {
                success: false,
                message: `Invalid OTP. ${remainingAttempts} attempts remaining.`,
            };
        }

        // OTP verified - delete it
        await prisma.oTP.delete({ where: { id: otpRecord.id } });

        return {
            success: true,
            message: 'OTP verified successfully',
        };
    } catch (error) {
        console.error('Error verifying OTP:', error);
        return {
            success: false,
            message: 'Failed to verify OTP. Please try again.',
        };
    }
};

export default {
    sendOTP,
    verifyOTP,
};
