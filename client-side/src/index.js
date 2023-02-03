import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Articals from './pages/Articals';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
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
    path: '/signin',
    element: < SignIn />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

reportWebVitals();
