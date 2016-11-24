var restify = require('restify');
var request = require("request-promise");

var dto = require("./dtos");

var port = process.argv[2];

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);


// starting server
server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);

  // registering server
  request.post("https://kproductor-register.herokuapp.com/api/manufacturer", {
    body: dto.manufacturerDTO("devsummit2015producer.herokuapp.com", "Mirco's Producer " + new Date(), 5, 4, 3),
    json: true
  });
});
