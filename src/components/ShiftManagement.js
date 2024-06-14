import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import './ShiftManagement.css';

function ShiftManagement() {
  const [date, setDate] = useState(new Date());
  const [shifts, setShifts] = useState([]);
  const [shiftDetails, setShiftDetails] = useState({ empleado: '', turno: '' });

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShiftDetails({ ...shiftDetails, [name]: value });
  };

  const handleShiftSubmit = (e) => {
    e.preventDefault();
    setShifts([...shifts, { ...shiftDetails, date }]);
    setShiftDetails({ empleado: '', turno: '' });
  };

  return (
    <div>
      <h2>Gestión de Turnos</h2>
      <Calendar onChange={handleDateChange} value={date} />
      <form onSubmit={handleShiftSubmit}>
        <input
          type="text"
          name="empleado"
          placeholder="Nombre del Empleado"
          value={shiftDetails.empleado}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="turno"
          placeholder="Detalles del Turno"
          value={shiftDetails.turno}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Agregar Turno</button>
      </form>
      <div>
        <h3>Turnos Programados</h3>
        <ul>
          {shifts.map((shift, index) => (
            <li key={index}>
              {format(shift.date, 'PPPP', { locale: es })} - {shift.empleado}: {shift.turno}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShiftManagement;
