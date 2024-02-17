import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import Layout from './Components/Layout/Layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// Remove!!!!
document.title = "Carpenters";
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>
);

