import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import { Outlet, Link } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StoreAddress from './pages/StoreAddress';
import ProductDetailPage from './pages/ProductDetailPage'
import App from './App';
import HomePage from './pages/HomePage';
import Admin from './Admin'
import DashboardAdmin from './pages/DashboardAdmin';

import ProductAdmin from './pages/ProductAdmin';
import PromotionAdmin from './pages/PromotionAdmin';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/store-address",
        element: <StoreAddress />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ]
  },

  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        index: true,
        element: <DashboardAdmin />

      },
      {
        path: "product",
        element: <ProductAdmin />,
      },
      {
        path: "promotion",
        element: <PromotionAdmin />,
      }

    ],

  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
