const express = require("express");
const routers = express.Router()
const Produtos = require("./Produtos");


//Criar um produto
routers.post("/produto", (req, res) => {
    var { nomeProduto,
         descricao, 
         preco, 
         precoDesconto } = req.body

    Produtos.create({
        nomeProduto,
        descricao,
        preco,
        precoDesconto
    }).then(() => {})
})

//mostrar todos os produtos
routers.get("/produtos", (req, res) => {
    Produtos.findAll().then(find => {
        res.json(find)
    })
})

//mostrar apenas um produto
routers.get("/produto/:id", (req, res) => {
    var  id  = req.params.id
    if (isNaN(id)) {
        res.send("Error")
    }

    Produtos.findOne({
        where: {
            id: id
        }
    }).then(find => {
        if (find != undefined) {
            res.json(find)
        } else {
            res.send("Error")
        }
    })
})

//DELETAR UM PRODUTO
routers.delete("produto/:id", (req, res) => {
    
    Produtos.destroy({
        where: {id: req.params.id}
    })
    return res.sendStatus(200)

    
})

//

module.exports = routers;