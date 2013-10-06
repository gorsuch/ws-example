var app    = require('express')(),
    server = require('http').createServer(app),
    io     = require('socket.io').listen(server);

server.listen(5000);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html')
});

io.sockets.on('connection', function (socket) {
    setInterval(function () {
        socket.emit('measurements',
                    { site: 1, exit_code: 0, http_code: 200, random: Math.floor((Math.random() * 100) + 1) });
    }, 1000);
});

