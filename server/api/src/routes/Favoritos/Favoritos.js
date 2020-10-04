const Sequelize = require("sequelize")
const connection = require("../../dataBases/dataBase")
const Produtos = require("../Produtos/Produtos")
const Users = require("../Users/Users")

const Favoritos = connection.define('favoritos',{
    usuarioId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    produtoId: {
        type: Sequelize.STRING,
        allowNull: false
    }
})



Favoritos.sync({force: false})



module.exports = Favoritos