const restify = require('restify');

const Api = require("./api");

const port = process.argv[2];



const server = restify.createServer();
server.get('/hello/', Api.respond);


// starting server
server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);

  // registering server
  Api.registerProducer();
});
