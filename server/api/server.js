const express = require("express")
const connection = require("./src/dataBases/dataBase")
const app = express()
const port = 8080
const bodyParser = require("body-parser")

//Parser Json
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//Tabelas SQL
const Favoritos = require("./src/routes/Favoritos/Favoritos")
const Produtos = require("./src/routes/Produtos/Produtos")
const Users = require("./src/routes/Users/Users")

//conexão com o MySQL
connection
    .authenticate()
    .then(() => {console.log("Conectado com o MySQL")})
    .catch(err => {console.log(err)})

//Controlers 
const ProdutosControlers = require("./src/routes/Produtos/ProdutosControlers")



//Routes
app.use( ProdutosControlers )



app.listen(port)
