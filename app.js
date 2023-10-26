const express = require('express')
const http = require('http')
const SocketServer = require('socket.io')
const app = express()
const path = require('path')
// cors policy allow all
const cors = require('cors')

// create websocket server
const httpServer = http.createServer(app);
const io = SocketServer(httpServer, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {

    console.log('a user connected');
    // socket.on('disconnect', () => {
    //     console.log('user disconnected');
    // });
});

// get / route to return index.html file
app.use(cors({ origin: '*' }))

app.use('/', (req, res) => {
    console.log('get /');
    // use path.join to get correct file path
    // res.sendFile(path.join(__dirname, 'index.html'));
});


httpServer.listen(3000, () => {
    console.log('server started on port 3000');
});

