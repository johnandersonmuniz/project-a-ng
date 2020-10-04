const express = require("express");
const routers = express.Router()
const Produtos = require("./Produtos");


//MOSTRAR TODOS OS PRODUTOS
routers.get("/produtos", (req, res) => {
    Produtos.findAll().then(find => {
        return res.sendStatus(200).json(find)
    })
})

//CRIAR UM PRODUTO
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
    }).then(() => {
        return res.sendStatus(200)
    }).catch(() => {
        return res.sendStatus(400)
    })

    
})


//MOSTRAR APENAS UM PRODUTO
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
            return res.sendStatus(200).json(find)
        } else {
           return res.sendStatus(400).send("Error")
        }
    })
})

//DELETAR UM PRODUTO
routers.delete("/produto/:id", (req, res) => {
    var { id } = req.params
    if (isNaN(id)) {
        return res.sendStatus(400).send(400)
    }

    Produtos.destroy({
        where: {id: id}
    })
    return res.sendStatus(200)
})

//

module.exports = routers;