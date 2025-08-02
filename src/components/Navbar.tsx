import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove('token');
    navigate('/login');
  };
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand">Dashboard</a>
        <button className="btn btn-secondary " type="button" onClick={logout}>
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}
