const Sequelize = require("sequelize")
const connection = require("../../dataBases/dataBase")

const Favoritos = connection.define('favoritos',{
    usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    produtoId: {
        type: Sequelize.INTEGER
    }
})

Favoritos.sync({force: false})

module.exports = Favoritos