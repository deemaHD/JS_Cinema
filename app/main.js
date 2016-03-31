	
$(document).ready(function(){
		var cinema = new Cinema(5, 10);
		/*var	server = require('./server'),
			router = require('./router'),
			requestHandler = require('./requestHandler');
		handle = {};
		handle["/"] = requestHandler.start;
		server.start(router.route, handle);*/

		view = new View(cinema);
		controller = new Controller(cinema, view);
});