import api from './client';

interface SendOTPResponse {
    success: boolean;
    message: string;
    data?: {
        expiresAt: string;
    };
}

interface VerifyOTPResponse {
    success: boolean;
    message: string;
    data?: {
        user: {
            id: string;
            phone: string;
            countryCode: string;
            isVerified: boolean;
        };
        business: {
            id: string;
            name: string;
            gstin?: string;
            logoUrl?: string;
        } | null;
        isNewUser: boolean;
        accessToken: string;
        refreshToken: string;
    };
}

interface RefreshTokenResponse {
    success: boolean;
    message: string;
    data?: {
        accessToken: string;
        refreshToken: string;
    };
}

interface GetMeResponse {
    success: boolean;
    data?: {
        user: {
            id: string;
            phone: string;
            countryCode: string;
            isVerified: boolean;
        };
        business: {
            id: string;
            name: string;
            gstin?: string;
            logoUrl?: string;
        } | null;
    };
}

// Send OTP to phone number
export const sendOTP = async (phone: string, countryCode: string = '+91'): Promise<SendOTPResponse> => {
    try {
        const response = await api.post<SendOTPResponse>('/auth/send-otp', {
            phone,
            countryCode,
        });
        return response.data;
    } catch (error: any) {
        return {
            success: false,
            message: error.response?.data?.message || 'Failed to send OTP',
        };
    }
};

// Verify OTP
export const verifyOTP = async (
    phone: string,
    otp: string,
    countryCode: string = '+91'
): Promise<VerifyOTPResponse> => {
    try {
        const response = await api.post<VerifyOTPResponse>('/auth/verify-otp', {
            phone,
            otp,
            countryCode,
        });
        return response.data;
    } catch (error: any) {
        return {
            success: false,
            message: error.response?.data?.message || 'Failed to verify OTP',
        };
    }
};

// Refresh tokens
export const refreshToken = async (refreshTokenValue: string): Promise<RefreshTokenResponse> => {
    try {
        const response = await api.post<RefreshTokenResponse>('/auth/refresh-token', {
            refreshToken: refreshTokenValue,
        });
        return response.data;
    } catch (error: any) {
        return {
            success: false,
            message: error.response?.data?.message || 'Failed to refresh token',
        };
    }
};

// Logout
export const logout = async (refreshTokenValue: string): Promise<{ success: boolean; message: string }> => {
    try {
        const response = await api.post('/auth/logout', {
            refreshToken: refreshTokenValue,
        });
        return response.data;
    } catch (error: any) {
        return {
            success: false,
            message: error.response?.data?.message || 'Failed to logout',
        };
    }
};

// Get current user
export const getMe = async (): Promise<GetMeResponse> => {
    try {
        const response = await api.get<GetMeResponse>('/auth/me');
        return response.data;
    } catch (error: any) {
        return {
            success: false,
            data: undefined,
        };
    }
};

export default {
    sendOTP,
    verifyOTP,
    refreshToken,
    logout,
    getMe,
};
