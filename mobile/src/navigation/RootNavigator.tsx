import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppSelector } from '../hooks/useRedux';

// Auth Screens
import PhoneInputScreen from '../screens/auth/PhoneInputScreen';
import OTPVerificationScreen from '../screens/auth/OTPVerificationScreen';

// Main App Screens
import MainNavigator from './MainNavigator';

// Business Setup
import BusinessSetupScreen from '../screens/business/BusinessSetupScreen';

export type RootStackParamList = {
    // Auth
    PhoneInput: undefined;
    OTPVerification: { phone: string; countryCode: string };

    // Business Setup
    BusinessSetup: undefined;

    // Main App
    Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
    const { isAuthenticated, business, isInitialized } = useAppSelector((state) => state.auth);

    if (!isInitialized) {
        // Show splash/loading screen while checking auth status
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!isAuthenticated ? (
                    // Auth Stack
                    <>
                        <Stack.Screen name="PhoneInput" component={PhoneInputScreen} />
                        <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
                    </>
                ) : !business ? (
                    // Business Setup
                    <Stack.Screen name="BusinessSetup" component={BusinessSetupScreen} />
                ) : (
                    // Main App
                    <Stack.Screen name="Main" component={MainNavigator} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
