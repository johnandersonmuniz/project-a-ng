const express = require("express");
const routers = express.Router()
const Favoritos = require("./Favoritos");


//MOSTRAR TODOS OS FAVORITOS == id Cliente e id Produto
routers.get("/favoritos", (req, res) => {
    Favoritos.findAll().then(find => {
        return res.sendStatus(200).json(find)
    })
})

//CRIAR UM FAVORITO
routers.post("/favorito", (req, res) => {
    var { usuarioId, produtoId } = req.body

    Favoritos.create({
        usuarioId,
        produtoId
    }).then(() => {
        return res.sendStatus(200)
    }).catch(() => {
        return res.sendStatus(400)
    })

    
})


//MOSTRAR APENAS UM FAVORITO
routers.get("/favorito/:id", (req, res) => {
    var  id  = req.params.id
    if (isNaN(id)) {
        res.send("Error")
    }

    Favoritos.findOne({
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

//DELETAR UM FAVORITO
routers.delete("/favorito/:id", (req, res) => {
    var { id } = req.params
    if (isNaN(id)) {
        return res.sendStatus(400).send(400)
    }

    Favoritos.destroy({
        where: {id: id}
    })
    return res.sendStatus(200)
})

//

module.exports = routers;