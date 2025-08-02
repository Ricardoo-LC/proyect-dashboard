import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dahsboard';
import ProtectedRoute from './components/ProtectedRoute';
import AuthWrapper from './components/AuthWrapper';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthWrapper>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="*"
            element={
              <div className="container mt-5">
                <h2>404 - Página no encontrada</h2>
              </div>
            }
          />
        </Routes>
      </AuthWrapper>
    </BrowserRouter>
  );
}

export default App;
