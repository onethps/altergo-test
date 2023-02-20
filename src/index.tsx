import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import reportWebVitals from './reportWebVitals';
import * as ReactDOMClient from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

const root = ReactDOMClient.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CssBaseline />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
