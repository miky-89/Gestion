import React, { useState } from 'react';
import './PerformanceTracking.css';

function PerformanceTracking() {
  const [performanceData, setPerformanceData] = useState([]);
  const [newEntry, setNewEntry] = useState({ employee: '', performance: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPerformanceData([...performanceData, newEntry]);
    setNewEntry({ employee: '', performance: '' });
  };

  return (
    <div>
      <h2>Seguimiento del Rendimento</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="employee"
          placeholder="Nombre de Empleado"
          value={newEntry.employee}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="performance"
          placeholder="Detalle de Rendimiento"
          value={newEntry.performance}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Agregar entrada de Redndimidento</button>
      </form>
      <div>
        <h3>Datos de Rendimiento</h3>
        <ul>
          {performanceData.map((entry, index) => (
            <li key={index}>
              {entry.employee}: {entry.performance}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PerformanceTracking;
