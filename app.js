const express = require('express')
const http = require('http')
const app = express()
const cors = require('cors')
const { initializeSocket } = require('./socket')

const httpServer = http.createServer(app);
initializeSocket(httpServer)


app.use(cors())
app.use('/', (req, res) => {
    console.log('get /');
    res.send('hello world')
});

httpServer.listen(3000, () => {
    console.log('server started on port 3000');
});

