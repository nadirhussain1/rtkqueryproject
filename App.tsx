/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Provider as ReduxProvider} from 'react-redux';
import {PaperProvider} from 'react-native-paper';

import store from './src/config/store';
import ProductDetail from './src/features/products/ProductDetail';
import CompleteProfile from './src/features/onboarding/CompleteProfile';
import {theme} from './src/config/theme';

function App(): React.JSX.Element {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <CompleteProfile />
      </PaperProvider>
    </ReduxProvider>
  );
}

export default App;
