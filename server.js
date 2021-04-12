const app = require('./backend/app')
const port = process.env.PORT || 3000
const http = require('http')
app.set('port', port);
const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log('Node server listening at http://' + server.address().address + ':' + server.address().port);
  });
