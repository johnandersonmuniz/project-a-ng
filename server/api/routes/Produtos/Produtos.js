const Sequelize = require('sequelize')
const connection = require("../../dataBases/dataBase")

const Produtos = connection.define('produtos',{
    nomeProduto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    precoDesconto: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    avaliacao: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
})

Produtos.sync({force: false})

module.exports = Produtos