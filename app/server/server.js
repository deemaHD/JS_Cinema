var http = require("http"),
	url = require("url");

function start(route, handle){
	function onRequest(request, response){
		var pathName = url.parse(request.url).pathname;
		console.log("Request for " + pathName + " recieved.");
		route(handle, pathName, response);
	}

	http.createServer(onRequest).listen(8080);
	console.log("Server has successful started");
}		
exports.start = start;
