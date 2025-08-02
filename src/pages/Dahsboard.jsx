import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
  });
  const [usuarios, setUsuarios] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsuarios([...usuarios, formData]);
    setFormData({ nombre: '', apellido: '', email: '', password: '' });

    // Llamada a la API
    // const response = await axios.post('/api/register', formData);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>Agregar Usuario</h3>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              name="nombre"
              className="form-control"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="apellido"
              className="form-control"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Agregar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
