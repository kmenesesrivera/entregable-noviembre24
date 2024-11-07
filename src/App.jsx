import React, { useState } from 'react';
import Card from './Card';

const App = () => {
  const [formData, setFormData] = useState({
    marca: '',
    modelo: ''
  });

  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.marca.trim().length >= 4 && formData.modelo.length >= 5) {
      setSubmitted(true);
      setError(false);
    } else {
      setError(true);
      setSubmitted(false);
    }
  };

  return (
    <div className="App">
      <h1>Elige un auto</h1>

      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="marca">Marca:</label>
        <input
          type="text"
          id="marca"
          name="marca"
          value={formData.marca}
          onChange={handleInputChange}
          placeholder="Ingresa marca"
          required
        />
        <br />
        <label htmlFor="modelo">Modelo:</label>
        <input
          type="text"
          id="modelo"
          name="modelo"
          value={formData.modelo}
          onChange={handleInputChange}
          placeholder="Ingresa modelo"
          required
        />
        <br />
        <button type="submit">Enviar</button>
      </form>

      {error && (
        <h4 style={{ color: 'red' }}>
          Por favor chequea que la información sea correcta
        </h4>
      )}

      {submitted && !error && (
        <Card marca={formData.marca} modelo={formData.modelo} />
      )}
    </div>
  );
};

export default App;
