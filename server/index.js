//
// the express server and socket.io library are imported and set up here
//

const config = require('../config');
const express = require('express');
const app = express();

//the helmet library configures the express server in a secure way
var helmet = require('helmet')
app.use(helmet())

//set the directory for static content (eg.: bundle.js, images) 
app.use(express.static(config.rootDirectory + '/public'));

//add the handler for the domain root /
app.get('/', function(req, res){
  res.sendFile(config.rootDirectory + '/index.html');
});

//create the HTTP request handler
var http = require('http').Server(app);

//set the handler to listen on port 3000.
http.listen(3000, () => {
  console.log("> server running!")
});

module.exports = io;