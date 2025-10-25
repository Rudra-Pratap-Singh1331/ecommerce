import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainLayout from './pages/MainLayout/MainLayout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import AuthContextProvider from './context/Auth/Auth';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
import CartContextProvider from './context/Cart/Cart';
import WishlistContextProvider from './context/Wishlist/Wishlist';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import VerifyCode from './pages/VerifyCode/VerifyCode';
import Checkout from './pages/Checkout/Checkout';
import Wishlist from './pages/Wishlist/Wishlist';
import Brands from './pages/Brands/Brands';
import Categories from './pages/Categories/Categories';
import ProductsContextProvider from './context/Products/Products';
import Search from './pages/Search/Search';

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        // {
        //   path: 'register',
        //   element: (
        //     <RedirectIfAuthenticated>
        //       <Register />
        //     </RedirectIfAuthenticated>
        //   ),
        // },
        {
          path: 'forgotPassword',
          element: <ForgotPassword />,
        },
        { path: 'forgotPassword/verifyCode', element: <VerifyCode /> },
        {
          path: 'forgotPassword/verifyCode/resetPassword',
          element: <ResetPassword />,
        },
        {
          path: 'product/:id',
          element: <ProductDetails />,
        },
        {
          path: '/checkout/:id',
          element: <Checkout />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: 'wishlist',
          element: <Wishlist />,
        },
        {
          path: 'brands',
          element: <Brands />,
        },
        {
          path: 'categories',
          element: <Categories />,
        },
        {
          path: 'search',
          element: <Search />,
        },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <WishlistContextProvider>
          <QueryClientProvider client={queryClient}>
            <ProductsContextProvider>
              <Toaster />
              {/* <ReactQueryDevtools initialIsOpen={false} /> */}
              <RouterProvider router={router} />
            </ProductsContextProvider>
          </QueryClientProvider>
        </WishlistContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
