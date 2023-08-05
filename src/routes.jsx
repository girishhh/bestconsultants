import { Navigate } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import UnauthorizedPage from './pages/UnauthorizedPage';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },      
      { path: 'unauthorized', element: <UnauthorizedPage /> },
      { path: '404', element: <NotFoundPage /> },
      { path: '*', element: <Navigate to="/404" replace /> },
    ],
  },
];

export default routes;
