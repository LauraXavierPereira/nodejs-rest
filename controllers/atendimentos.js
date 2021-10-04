const Atendimento = require('../models/atendimentos')

module.exports = app => {
	app.get('/atendimentos', (req, res) => res.send('Rota de atendimentos'))

	app.post('/atendimentos', (req, res) => {
		console.log(req.body)
		
		const atendimento = req.body
		Atendimento.adiciona(atendimento, res)

		//res.send('Enviando dados de atendimentos')
	})
}