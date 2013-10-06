var app    = require('express')(),
    server = require('http').createServer(app),
    io     = require('socket.io').listen(server);

server.listen(5000);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html')
});

function rand() {
    return Math.floor((Math.random() * 100) + 1);
}

io.sockets.on('connection', function (socket) {
    setInterval(function () {
        socket.emit('measurements',
                    { n:  rand() });
    }, 1000);
});