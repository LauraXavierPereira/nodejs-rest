const Atendimento = require('../models/atendimentos')

module.exports = app => {
	app.get('/atendimentos', (req, res) => {
		Atendimento.lista(res)
	})

	app.get('/atendimentos/:id', (req, res) => {
		const id = parseInt(req.params.id) //Convertendo ID para inteiro

		Atendimento.buscaPorId(id, res)
	})

	app.post('/atendimentos', (req, res) => {
		console.log(req.body)
		
		const atendimentos = req.body
		Atendimento.adiciona(atendimentos, res)

		//res.send('Enviando dados de atendimentos')
	})

	app.patch('/atendimentos/:id', (req, res) => {
		const id = parseInt(req.params.id) //Convertendo ID para inteiro
		const valores = req.body

		Atendimento.altera(id, valores, res)
	})

	app.delete('/atendimentos/:id', (req, res) => {
		const id = parseInt(req.params.id) //Convertendo ID para inteiro

		Atendimento.deleta(id, res)
	})
}