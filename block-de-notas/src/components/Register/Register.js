import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      console.error('Error en el registro', error);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-700">Registro</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-600">Usuario</label>
          <input 
            type="text" 
            name="username" 
            placeholder="Usuario" 
            onChange={handleChange} 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Correo</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Correo" 
            onChange={handleChange} 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Contraseña</label>
          <input 
            type="password" 
            name="password" 
            placeholder="Contraseña" 
            onChange={handleChange} 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;

