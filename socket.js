const SocketServer = require('socket.io')

function initializeSocket(httpServer) {
    const io = SocketServer(httpServer, {
        cors: {
            origin: '*',
        }
    })
    io.on('connection', (socket) => {
        console.log('new user connected');

        socket.on('clientMessage', (data) => {
            console.log('clientMessage =>', data);
            // io.to(data.roomId).emit('serverMessage', data.message); // send message to all users in room 
            // socket.broadcast.to(data.roomId).emit('serverMessage', data.message); // send message to all users in room except sender
        });

        socket.on("leaveRoom", (data) => {
            console.log('leaveRoom =>', data);
            socket.leave(data.roomId);
        });

        socket.on("joinRoom", (data) => {
            console.log('joinRoom =>', data);
            socket.join(data.roomId);
        });

        socket.on("leaveAllRooms", () => {
            console.log('leaveAllRooms');
            socket.leaveAll();
        });

    });


}

module.exports = { initializeSocket }
// socket.on('disconnect', () => {
//     console.log('user disconnected');
// });