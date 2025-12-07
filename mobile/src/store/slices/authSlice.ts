import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id: string;
    phone: string;
    countryCode: string;
    isVerified: boolean;
}

interface Business {
    id: string;
    name: string;
    gstin?: string;
    logoUrl?: string;
}

interface AuthState {
    user: User | null;
    business: Business | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    isInitialized: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    business: null,
    isAuthenticated: false,
    isLoading: false,
    isInitialized: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setInitialized: (state, action: PayloadAction<boolean>) => {
            state.isInitialized = action.payload;
        },
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
            state.error = null;
        },
        setBusiness: (state, action: PayloadAction<Business | null>) => {
            state.business = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        logout: (state) => {
            state.user = null;
            state.business = null;
            state.isAuthenticated = false;
            state.error = null;
        },
    },
});

export const {
    setLoading,
    setInitialized,
    setUser,
    setBusiness,
    setError,
    logout,
} = authSlice.actions;

export default authSlice.reducer;
