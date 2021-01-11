import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import { colorfulLog } from 'colorful-log-sw';

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
    colorfulLog(`Connected to: ${socket.client.id}`);
        
    socket.on('message', data => {
        colorfulLog(data);
    });

    socket.on('disconnect', () => {
        colorfulLog(`Disconnected from: ${socket.client.id}`);
    });
});

server.listen(8000, () => {
    colorfulLog('Waiting for connections on port 8000', '');
});