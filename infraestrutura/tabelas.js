class Tabelas {
	init(conexao) {
		this.conexao = conexao;
		this.criarAtendimentos();
		console.log('Tabelas criadas!')
	}

	criarAtendimentos() {

		const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

		this.conexao.query(sql, error =>{
			if (error) {
				console.log(error)
			} else {
				console.log("TABELA ATENDIMENTOS VALIDADA COM SUCESSO!")
			}

		})
		//espera uma query sql e função
	}
}

module.exports = new Tabelas