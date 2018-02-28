const express = require('express');
const bodyParser = require('body-parser');

var server = express();

server.use(bodyParser.json());

server.use(bodyParser.urlencoded({
    extended : false
}));

server.post('/',function(req,res,next){

    var dataToSend = req.body.message;
    console.log("This is test from server "+dataToSend);

    return res.json({
        speech : dataToSend,
        displayText : dataToSend,
        source : '/'
    });

});

server.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and running...");
});