import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './configs/ReactotronConfig';
import store from './store';
import Routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
    </Provider>
  );
};

export default App;
