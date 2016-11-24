var restify = require('restify');
var request = require("request-promise");

var dto = require("./dtos");
var api = require("./api");

var port = process.argv[2];



var server = restify.createServer();
server.get('/hello/', api.respond);


// starting server
server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);

  // registering server
  request.post("https://kproductor-register.herokuapp.com/api/manufacturer", {
    body: dto.manufacturerDTO("https://devsummit2015producer.herokuapp.com", "Mirco's Producer " + new Date(), 5, 4, 3),
    json: true
  });
});
