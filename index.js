const restify = require('restify');

const Api = require("./api");

const port = process.argv[2] || 8080;



const server = restify.createServer();
server.post('/api/order/', Api.onOrder);


// starting server
server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);

  // registering server
  Api.registerManufacturer();
});
