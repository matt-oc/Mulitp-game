var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

io.on('connection', function(socket){
  console.log('A user connected');
  
  socket.on('disconnect', function(){
    console.log('A user disconnected')
  })
})
http.listen(3000, function(){
  console.log('Server listening on port 3000')
})
