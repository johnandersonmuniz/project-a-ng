const express = require("express");
const { route } = require("../Users/UsersControlers");
const routers = express.Router()
const Produtos = require("./Produtos");

//CRIAR UM PRODUTO
routers.get("/create", (req,res) => {
    res.render("produtos/criar") 
})


routers.post("/create", (req,res) => {
    var { nomeProduto } = req.body
    var { descricao } = req.body
    var { preco } = req.body
    var { precoDesconto } = req.body
    Produtos.create({
        nomeProduto: nomeProduto,
        descricao: descricao,
        preco: preco,
        precoDesconto: precoDesconto
    }).then(() => {
        res.redirect("/")
    })
})

//mostrar todos os produtos
routers.get("/api/all", (req,res) => {
    Produtos.findAll().then(find => {
        res.json(find)
    })
  })  

//mostrar apenas um produto
routers.get("/api/:id", (req,res) => {
    var { id } = req.params
    if (isNaN(id)){
        res.send("Error")
    }

    Produtos.findOne({
        where: {
            id: id
        }
    }).then(find => {
        if( find != undefined ) {
            res.json(find)
        }else {
            res.send("Error")
        }
    })
})

//DELETAR UM PRODUTO
routers.get("/delete", (req,res) => {
    Produtos.findAll().then(find => {
        res.render("produtos/del", {
            produto: find
        })
    })
})

  module.exports = routers;