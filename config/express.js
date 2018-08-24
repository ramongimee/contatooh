//config/express.js
var express = require('express');
var home = require('./app/routes/home');


module.exports = function () {
	var app = express();

	//configuração de ambiente
	app.set('port',3000);

	//middleware
	app.use(express.static('./public'));

	home(app);
	app.get('/',);

	app.set('view-engine','ejs');

	app.set('views','./app/views');

	// necessário apenas na versão 3.X
	// app.use(app.router);


	return app;
}
