import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {persistor, store} from "./redux/store";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>,
  document.querySelector('#root'),
);


