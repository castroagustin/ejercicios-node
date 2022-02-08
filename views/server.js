const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const messageDB = []

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
})

httpServer.listen(3000, () => console.log('Server ON'));

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado')
    socket.emit('mensajeServidor', messageDB)

    socket.on('mensajeCliente', data => {
        messageDB.push({ socketid: socket.id, message: data })
        io.sockets.emit('mensajeServidor', messageDB)
    })
})