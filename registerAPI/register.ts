var http = require('http'); 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(require('cors')());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({data: 'registers'});
})

interface Registration {
    name: string;
    age: number;
    uf: string;
}

const registrations = [] as Registration[];
app.post('/register', (req, res) => {
    const newRegistration = {
        name: req.body.textName,
        age: parseInt(req.body.textAge),
        uf: req.body.cmbUF,
    }
    registrations.push(newRegistration as Registration);
    res.json({data: registrations});
})

var server = http.createServer(app);
server.listen(3031);
console.log('Server listening on port 3031...');