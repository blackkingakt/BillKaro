import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Keychain from 'react-native-keychain';

import { store } from './src/store';
import RootNavigator from './src/navigation/RootNavigator';
import { setInitialized, setUser, setBusiness } from './src/store/slices/authSlice';
import { COLORS } from './src/constants';
import { getMe } from './src/api/auth';

// App initialization component
const AppContent: React.FC = () => {
  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      // Check for stored auth token
      const credentials = await Keychain.getGenericPassword();

      if (credentials && credentials.password) {
        // Token exists - validate and get user data
        const result = await getMe();

        if (result.success && result.data) {
          // User is authenticated
          store.dispatch(setUser({
            id: result.data.user.id,
            phone: result.data.user.phone,
            countryCode: result.data.user.countryCode,
            isVerified: result.data.user.isVerified,
          }));

          if (result.data.business) {
            store.dispatch(setBusiness({
              id: result.data.business.id,
              name: result.data.business.name,
              gstin: result.data.business.gstin,
              logoUrl: result.data.business.logoUrl,
            }));
          }
        } else {
          // Token invalid - clear stored credentials
          await Keychain.resetGenericPassword();
          await Keychain.resetGenericPassword({ service: 'refreshToken' });
        }
      }
    } catch (error) {
      console.error('Error initializing app:', error);
      // Clear any stored credentials on error
      try {
        await Keychain.resetGenericPassword();
        await Keychain.resetGenericPassword({ service: 'refreshToken' });
      } catch (e) {
        // Ignore cleanup errors
      }
    } finally {
      // Mark app as initialized
      store.dispatch(setInitialized(true));
    }
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.background}
      />
      <RootNavigator />
    </>
  );
};

// Root App component with providers
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppContent />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
