const SocketServer = require('socket.io')

function initializeSocket(httpServer) {
    const oi = SocketServer(httpServer, {
        cors: {
            origin: '*',
        }
    })
    oi.on('connection', (socket) => {
        console.log('new user connected');

        socket.on('clientMessage', (data) => {
            console.log('clientMessage =>', data);
            // socket.emit // send message to client that connected to this socket only
            socket.emit('serverMessage', { message: 'send message to client that connected to this socket only' })
            // io.emit // send message to all clients that connected to this socket 
            oi.emit('serverMessage', { message: 'send message to all clients that connected to this socket' })
            // socket.broadcast.emit // send message to all clients that connected to this socket except the sender client 
            socket.broadcast.emit('serverMessage', { message: 'send message to all clients except the sender client' })
        });



    });


}

module.exports = { initializeSocket }
// socket.on('disconnect', () => {
//     console.log('user disconnected');
// });