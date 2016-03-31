var querystring = require("querystring");
var static = require('node-static');
var file = new static.Server('.',{
	cache:0
});

function showInfo(response){
	file.serve(require, response);
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("Hello");
	response.end();
}

exports.showInfo = showInfo;

