//Conexoes com o banco de dados
const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {

	adiciona(atendimento, res) {
		const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
		const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
		const atendimentoDatado = {...atendimento, dataCriacao, data} //Tudo de atendimento + Data
		const sql = 'INSERT INTO atendimentos SET ?'

		conexao.query(sql, atendimentoDatado, (error, results) => {
			if (error){
				res.json(error)
			} else {
				console.log("SUCCESS")
				res.json(results)
			}
		})

	}
}
module.exports = new Atendimento