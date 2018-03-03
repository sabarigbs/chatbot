const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

var server = express();

server.use(bodyParser.json());

server.use(bodyParser.urlencoded({
    extended : false
}));

server.post('/',function(req,res,next){
    console.log(req.body.result.parameters.message);
    var dataToSend = req.body.result.parameters.message;
    console.log("This is test from server "+dataToSend);
    res.setHeader('Content-Type', 'application/json');
    return res.json({
        speech : dataToSend,
        displayText : dataToSend,
        source : '/'
    });

});

server.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and running...");
});
