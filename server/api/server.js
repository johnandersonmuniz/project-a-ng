const express = require("express")
const connection = require("./dataBases/dataBase")
const app = express()
const port = 8080
const conexão = require("./dataBases/dataBase")
const bodyParser = require("body-parser")

//Parser Json
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//view engine 
app.set("view engine", "ejs")
app.use(express.static("public"))

//Tabelas SQL
const Favoritos = require("./routes/Favoritos/Favoritos")
const Produtos = require("./routes/Produtos/Produtos")
const Users = require("./routes/Users/Users")

//conexão com o MySQL
conexão
    .authenticate()
    .then(() => {console.log("Conectado com o MySQL")})
    .catch(err => {console.log(err)})

//Controlers 
const ProdutosControlers = require("./routes/Produtos/ProdutosControlers")



//Routes
app.use("/produtos", ProdutosControlers )



app.listen(port)
