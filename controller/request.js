var url = require('url');
var route = {

  routes : {},
  for : function(method,path,handler){

    this.routes[method + path] = handler;
  }
};
route.for("GET","/start",function(request,response){
  response.writeHead(200,{"Content-Type" :"text/plain"});
  response.write("Hello");
  response.end();

});
route.for("GET","/finish",function(request,response){
  response.writeHead(200,{"Content-Type" :"text/plain"});
  response.write("GoodBye");
  response.end();

});

module.exports = function(request,response){
  var pathname = url.parse(request.url).pathname;
  if(typeof(route.routes[request.method + pathname]) === 'function'){

    route.routes[request.method + pathname](request,response);
  }else{

    response.writeHead(404,{'Content-Type':'text/plain'});
    response.end('404 not found');
  }

};
