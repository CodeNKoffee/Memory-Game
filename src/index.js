import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as ServiceWorkerRegistration from './serviceWorkerRegistration';
import { WinsProvider } from './hooks/winsProvider';

const root = document.getElementById('root');

render(
  <StrictMode>
    <WinsProvider>
      <App />
    </WinsProvider>
  </StrictMode>,
  root,
);

ServiceWorkerRegistration.register();