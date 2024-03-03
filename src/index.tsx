import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import Layout from './Components/LayoutArea/Layout/Layout';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HashRouter>
    <Layout />
  </HashRouter>
);

