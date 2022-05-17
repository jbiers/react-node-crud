const http = require('http');
const express = require('express');

const app = express();
app.use(require("cors")());

app.get('/states', (req, res, next) => {
    const ufs = [
        {id:1,uf:'RS'},
        {id:2,uf:'SC'},
        {id:3,uf:'PR'},
        {id:4,uf:'SP'},
        {id:5,uf:'RJ'},
        {id:6,uf:'ES'},
        {id:7,uf:'MG'},
        {id:8,uf:'MT'},
        {id:9,uf:'MS'},
        {id:10,uf:'GO'},
        {id:11,uf:'TO'},
        {id:12,uf:'RO'},
        {id:13,uf:'RR'},
        {id:14,uf:'CE'},
        {id:15,uf:'RN'},
        {id:16,uf:'PB'},
        {id:17,uf:'PA'},
        {id:18,uf:'AM'},
        {id:19,uf:'AL'},
        {id:20,uf:'BA'},
        {id:21,uf:'AP'},
        {id:22,uf:'SE'},
        {id:23,uf:'PI'},
        {id:24,uf:'PE'},
        {id:25,uf:'MA'},
        {id:26,uf:'AP'},
        {id:27,uf:'DF'},
    ]
    res.json(ufs);
})

var server = http.createServer(app); 
server.listen(3030);
console.log("Server listening on port 3030...")
