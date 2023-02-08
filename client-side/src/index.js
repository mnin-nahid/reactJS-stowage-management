import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home/Index';
import Inventory from './pages/Inventory/Index';
import Articals from './pages/Articals/Index';
import SignUp from './pages/SignUp/Index';
import Login from './pages/Login/Index';
import reportWebVitals from './reportWebVitals';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/inventory',
    element: < Inventory />
  },
  {
    path: '/articals',
    element: < Articals />
  },
  {
    path: '/signup',
    element: < SignUp />
  },
  {
    path: '/login',
    element: < Login/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

reportWebVitals();
