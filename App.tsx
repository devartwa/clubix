import 'react-native-gesture-handler';

import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Routes} from './src/routes';
import {store, persistor} from '@storage/index';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {useColorScheme} from 'react-native';

import {light, dark} from '@styles/index';

export default function App(): JSX.Element {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? dark : light;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
