import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Keychain from 'react-native-keychain';

import { store } from './src/store';
import RootNavigator from './src/navigation/RootNavigator';
import { setInitialized, setUser, setBusiness } from './src/store/slices/authSlice';
import { COLORS } from './src/constants';

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
        // TODO: Call API to validate token and get user/business data
        // For now, just set initialized
      }
    } catch (error) {
      console.error('Error initializing app:', error);
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
