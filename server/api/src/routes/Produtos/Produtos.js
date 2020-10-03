const Sequelize = require('sequelize')
const connection = require("../../dataBases/dataBase")

const Produtos = connection.define('produtos',{
    nomeProduto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.STRING,
        allowNull: false    
    },
    precoDesconto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    avaliacao: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
})

Produtos.sync({force: false})

module.exports = Produtos