var express = require('express');
var app = express();

var server = app.listen(3000, () => {
    console.log('servidor está rodando na porta', server.address().port);
}
);

app.use(express.static(__dirname));

var mongoose = require('mongoose');
var dbUrl = 'https://betterprogramming.pub/simple-chat-application-in-node-js-using-express-mongoose-and-socket-io-ee62d94f5804'