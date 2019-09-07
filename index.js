const asyncify = require('express-asyncify')
var express = require('express');
var app = asyncify(express());
var server = require('http').Server(app);
var io = require('socket.io')(server);
//const client = redis.createClient('6379', 'cliper_redis');

//loading routes and sockets
require('./routes')(app);
require('./sockets')(io)

const port = process.env.PORT || 8080;

//json request enabled
app.use(express.json())

//error handler
app.use((err, req, res, next) => {
  res.status(500).send({
      error: err.message
  })
})

server.listen(port, function() {
  console.log(`Server running on ${port} port`);
});
