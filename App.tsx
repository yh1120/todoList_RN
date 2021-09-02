import React from 'react';
import { Provider } from 'react-redux';
import Wrap from './src/Wrap';
import store from './src/Store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Wrap />
    </Provider>
  );
};

export default App;
