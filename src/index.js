import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './reducers/store';
import ContadorApp from './ContadorApp';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContadorApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

