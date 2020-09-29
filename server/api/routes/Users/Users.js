const Sequelize = require("sequelize")
const connection = require("../../dataBases/dataBase")

const Users = connection.define("users", {
    nome: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rua: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    complemento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    residenciaTipo: {
        type: Sequelize.TEXT,
        allowNull: false
    }
    
})

Users.sync({force: false})

module.exports = Users