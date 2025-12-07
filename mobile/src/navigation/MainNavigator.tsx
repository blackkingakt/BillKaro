import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES } from '../constants';

// Tab Screens (Placeholder for now)
import DashboardScreen from '../screens/main/DashboardScreen';
import InvoicesScreen from '../screens/main/InvoicesScreen';
import CustomersScreen from '../screens/main/CustomersScreen';
import SettingsScreen from '../screens/main/SettingsScreen';

export type MainTabParamList = {
    Dashboard: undefined;
    Invoices: undefined;
    Customers: undefined;
    Settings: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

// Simple icon component (replace with actual icons later)
const TabIcon: React.FC<{ name: string; focused: boolean }> = ({ name, focused }) => (
    <View style={styles.iconContainer}>
        <Text style={[styles.iconText, focused && styles.iconTextActive]}>
            {name.charAt(0)}
        </Text>
    </View>
);

const MainNavigator: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.textMuted,
                tabBarLabelStyle: styles.tabLabel,
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => <TabIcon name="Home" focused={focused} />,
                }}
            />
            <Tab.Screen
                name="Invoices"
                component={InvoicesScreen}
                options={{
                    tabBarLabel: 'Invoices',
                    tabBarIcon: ({ focused }) => <TabIcon name="Invoice" focused={focused} />,
                }}
            />
            <Tab.Screen
                name="Customers"
                component={CustomersScreen}
                options={{
                    tabBarLabel: 'Customers',
                    tabBarIcon: ({ focused }) => <TabIcon name="Customers" focused={focused} />,
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'More',
                    tabBarIcon: ({ focused }) => <TabIcon name="More" focused={focused} />,
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: COLORS.surface,
        borderTopColor: COLORS.border,
        borderTopWidth: 1,
        height: 60,
        paddingBottom: 8,
        paddingTop: 8,
    },
    tabLabel: {
        fontSize: FONT_SIZES.xs,
        fontWeight: '500',
    },
    iconContainer: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: COLORS.surfaceLight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconText: {
        color: COLORS.textMuted,
        fontSize: FONT_SIZES.sm,
        fontWeight: 'bold',
    },
    iconTextActive: {
        color: COLORS.primary,
    },
});

export default MainNavigator;
