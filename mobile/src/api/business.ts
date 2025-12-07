import api from './client';

export interface Business {
    id: string;
    userId: string;
    name: string;
    legalName?: string;
    gstin?: string;
    pan?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    pincode?: string;
    country: string;
    email?: string;
    phone?: string;
    website?: string;
    logoUrl?: string;
    upiId?: string;
    bankName?: string;
    bankAccountNo?: string;
    bankIfsc?: string;
    invoicePrefix: string;
    invoiceNextNumber: number;
    termsAndConditions?: string;
}

export interface BusinessInput {
    name: string;
    legalName?: string;
    gstin?: string;
    pan?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    pincode?: string;
    email?: string;
    phone?: string;
    website?: string;
    logoUrl?: string;
    upiId?: string;
    bankName?: string;
    bankAccountNo?: string;
    bankIfsc?: string;
    invoicePrefix?: string;
    termsAndConditions?: string;
}

export const businessApi = {
    getBusiness: async () => {
        const response = await api.get<{ success: boolean; data: Business }>('/business');
        return response.data;
    },

    upsertBusiness: async (data: BusinessInput) => {
        const response = await api.post<{ success: boolean; data: Business; message: string }>('/business', data);
        return response.data;
    },

    // Placeholder for when we have real logo upload
    uploadLogo: async (base64OrPath: string) => {
        // For now we assume the URL is passed directly to upsertBusiness
        // This method is just future-proofing
        return { success: false, message: 'Not implemented' };
    }
};
