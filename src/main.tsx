import React from 'react';

import ReactDOM from 'react-dom/client';

import '@/styles/styles.scss';
import Routes from './routes/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Routes />
  </React.StrictMode>,
);
