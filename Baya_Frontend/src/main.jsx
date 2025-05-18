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

import SearchPage from "./pages/SearchPage.jsx";
import AddPromotionAdmin from './pages/AddPromotionAdmin';
import EditPromotionAdmin from './pages/EditPromotionAdmin';
import UserAdmin from './pages/UserAdmin';



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
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailPage />,
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
      },

      {
        path: "add-promotion",
        element: <AddPromotionAdmin />,
      },
      {
        path: "edit-promotion/:id",
        element: <EditPromotionAdmin />,
      },
      {
        path: "users",
        element: <UserAdmin />,
      },
    ],
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
