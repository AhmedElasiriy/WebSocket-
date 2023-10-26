const SocketServer = require('socket.io')

function initializeSocket(httpServer) {
    const oi = SocketServer(httpServer, {
        cors: {
            origin: '*',
        }
    })
    oi.on('connection', (socket) => {
        console.log('a user connected');

        socket.on('clientMessage', (data) => {
            console.log('clientMessage', data);
        })

    });


}

module.exports = { initializeSocket }
// socket.on('disconnect', () => {
//     console.log('user disconnected');
// });