const Sequelize = require('sequelize')

const connection = new Sequelize("loja", "root", "samuel31", {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;