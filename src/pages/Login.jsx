import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Reemplazar por llamada API
      // const response = await axios.post('/api/login', { email, password });
      // Cookies.set('token', response.data.token, { expires: 1 });

      // Simulación de login local
      if (email === 'test@test.com' && password === '123') {
        Cookies.set('token', 'mi-token-seguro', { expires: 1 });
        navigate('/dashboard');
      } else {
        setError('Credenciales incorrectas.');
      }
    } catch (err) {
      setError('Error al iniciar sesión.', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h4>Ingresar</h4>
      {error !== '' && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Usuario"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="*********"
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-login text-white mb-3"
          disabled={loading}
        >
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
      </form>
    </div>
  );
}
