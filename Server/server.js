var WebSocketServer = require('ws').Server
  , http = require('http')
  , express = require('express')
  , app = express();

app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);
server.listen(8080);

var wss = new WebSocketServer({server: server});
wss.on('connection', function(ws) {
  ws.send(JSON.stringify({'connected': true}));
  ws.on('move', function(data, flags) {
    ws.send(JSON.stringify({'move': data}));
  });
});

      ws.onmessage = function (event) {
        console.log(JSON.parse(event.data));
          ws.send(JSON.parse(event.data));
      };