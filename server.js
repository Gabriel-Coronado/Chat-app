var express = require('express');
var app = express();

var server = app.listen(3000, () => {
    console.log('servidor está rodando na porta', server.address().port);
}
);

app.use(express.static(__dirname));