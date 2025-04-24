import React from 'react';
import AOS from 'aos';

import ReactDOM from 'react-dom/client';

import '@/styles/styles.scss';
import Routes from './routes/index.tsx';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Routes />
  </React.StrictMode>,
);
