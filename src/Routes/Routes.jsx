import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import HomePage from '../pages/HomePage';
import BookDetailPage from '../pages/BookDetailPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import PageNotFound from '../pages/PageNotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      { path: '/books/:bookId', element: <BookDetailPage /> },
      {
        path: '*',
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
]);
