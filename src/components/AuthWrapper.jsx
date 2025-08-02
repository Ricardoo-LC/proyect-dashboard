import { useLocation, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function AuthWrapper({ children }) {
  const location = useLocation();
  const token = Cookies.get('token');

  const publicRoutes = ['/login'];

  if (!token && !publicRoutes.includes(location.pathname)) {
    return <Navigate to="/login" />;
  }

  if (token && location.pathname === '/login') {
    return <Navigate to="/dashboard" />;
  }

  return children;
}
