const Atendimentos = require('../models/atendimentos')

module.exports = app => {
	app.get('/atendimentos', (req, res) => {
		Atendimentos.lista(res)
	})

	app.get('/atendimentos/:id', (req, res) => {
		const id = parseInt(req.params.id) //Convertendo ID para inteiro

		Atendimentos.buscaPorId(id, res)
	})

	app.post('/atendimentos', (req, res) => {
		console.log(req.body)
		
		const atendimentos = req.body
		Atendimentos.adiciona(atendimentos, res)

		//res.send('Enviando dados de atendimentos')
	})
}