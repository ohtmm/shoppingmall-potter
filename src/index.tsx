import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products/Products';
import AuthProvider from './lib/context/authProvider';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from './styles/theme';
import UserCart from './pages/UserCart';
import NewProducts from './pages/Products/NewProducts/NewProducts';
import ProductProvider from './lib/context/productsProvider';
import ProductDetail from './pages/Products/ProductDetail/ProductDetail';

// privateRoute 공통 설정 어떻게 하지?

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/products/:category', element: <Products /> },
      { path: '/products/new', element: <NewProducts /> },
      { path: '/products/:category/:id', element: <ProductDetail /> },
      { path: '/carts', element: <UserCart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <ThemeProvider theme={LightTheme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>
);
