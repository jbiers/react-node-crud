var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(require('cors')());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', function (req, res) {
    res.json({ data: 'registers' });
});
var registrations = [];
app.post('/register', function (req, res) {
    var newRegistration = {
        name: req.body.textName,
        age: parseInt(req.body.textAge),
        uf: req.body.cmbUF
    };
    registrations.push(newRegistration);
    res.json({ data: registrations });
});
var server = http.createServer(app);
server.listen(3031);
console.log('Server listening on port 3031...');
