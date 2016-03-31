var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");
var handle = {};

handle["/cinema.json"] = requestHandler.showInfo;
server.start(router.route, handle);
