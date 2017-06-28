var restify = require('restify');

function send (req,res,next) {
	res.send('hello'+req.params.name);
	next();
}



var server = restify.createServer({name:'api'});
server.put('/hello', send);
server.get('/hello/:name', send);
server.head('/hello/:name', send);
server.del('/hello/:name',function rm (req,res,next){
	res.send(204);
	return next();
})

server.post('/hello', function create(req, res, next) {
   res.send(201, Math.random().toString(36).substr(3, 8));
   return next();
});

server.get(/^\/([a-zA-Z0-9_\.~-]+)\/(.*)/, function(req, res, next) {
  console.log(req.params[0]);
  console.log(req.params[1]);
  res.send(200);
  return next();
});

server.listen(8080,function(){
	console.log('%s listening at %s',server.name,server.url);
});
