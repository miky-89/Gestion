import React from 'react';
import Dashboard from './components/Dashboard';
import ShiftManagement from './components/ShiftManagement';
import PerformanceTracking from './components/PerformanceTracking';
import InternalCommunication from './components/InternalCommunication';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Gestion de Recursos Humanos</h1>
        <nav>
          <ul>
            <li><a href="#dashboard">Panel</a></li>
            <li><a href="#shift-management">Gestion de Turnos</a></li>
            <li><a href="#performance-tracking">Seguimiento del Rendimiento</a></li>
            <li><a href="#internal-communication">Comunicacion Interna</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="dashboard"><Dashboard /></section>
        <section id="shift-management"><ShiftManagement /></section>
        <section id="performance-tracking"><PerformanceTracking /></section>
        <section id="internal-communication"><InternalCommunication /></section>
      </main>
    </div>
  );
}

export default App;
