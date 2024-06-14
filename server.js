const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('Nuevo cliente contacto');
  socket.on('message', (message) => {
    io.emit('message', message);
  });
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

server.listen(4000, () => console.log('Listening on port 4000'));
