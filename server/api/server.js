const express = require("express")
const connection = require("./dataBases/dataBase")
const app = express()
const port = 8080
const conexão = require("./dataBases/dataBase")

//Tabelas SQL
const Favoritos = require("./routes/Favoritos/Favoritos")
const Produtos = require("./routes/Produtos/Produtos")
const Users = require("./routes/Users/Users")

//conexão com o MySQL
conexão
    .authenticate()
    .then(msg => {console.log("Conecatdo com o MySQL")})
    .catch(err => {console.log(err)})





app.listen(port)
