import { StatusBar, View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppRoutes from '@routes/AppRoute.routes';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <View style={{ flex: 1 }}>

      <ThemeProvider theme={theme}>

        <StatusBar 
          barStyle="dark-content" 
          backgroundColor="transparent" 
          translucent 
        />

      <GestureHandlerRootView style={{ flex: 1 }} >
        <SafeAreaProvider>
          <AppRoutes />
          <Toast />
        </SafeAreaProvider>
      </GestureHandlerRootView>

      </ThemeProvider>
    </View>
  );
}