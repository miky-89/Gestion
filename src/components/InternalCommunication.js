import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './InternalCommunication.css';

const socket = io('http://localhost:4000');

function InternalCommunication() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <div>
      <h2>Comunicacion interna</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">{msg}</div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Ingrese su Mensaje"
          value={message}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default InternalCommunication;
