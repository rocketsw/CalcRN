import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import { Calculator } from './Calculator';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" hidden={false} />
        <Calculator />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
