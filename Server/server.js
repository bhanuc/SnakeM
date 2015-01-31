var WebSocketServer = require('ws').Server
  , http = require('http')
  , express = require('express')
  , app = express();

app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);
server.listen(8080);

var wss = new WebSocketServer({server: server});
wss.on('connection', function(ws) {
      wss.on('message', function incoming(message) {
    console.log('received: %s', message.data);
                    wss.send(JSON.parse(message.data));

  });
    
  ws.send(JSON.stringify({'connected': true}));
//  ws.on('move', function(data, flags) {
//    ws.send(JSON.stringify({'move': data}));
//  });
});

