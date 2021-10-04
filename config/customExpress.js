const express = require('express');
const consign = require('consign'); // usado para utilizar as rotas
const bodyParser = require('body-parser')


module.exports = () => {
	const app = express(); //executa o express

	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended: true})) // adicionar bibliotecas no express

	consign()
		.include('controllers')
		.into(app)

	return app
}