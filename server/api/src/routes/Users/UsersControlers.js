const express = require("express");
const routers = express.Router()
const Users = require("./Users");


//MOSTRAR TODOS OS USUARIOS
routers.get("/usuarios", (req, res) => {
    Users.findAll().then(find => {
       return res.sendStatus(200).json(find)
    })
})

//REGISTRO DE USUARIO
routers.post("/usuario", (req, res) => {
    var { id, 
        nome, 
        email, 
        telefone, 
        cep, 
        rua, 
        numero, 
        bairro, 
        complemento, 
        residenciaTipo } = req.body

    Users.create({
        id,
        nome,
        email,
        telefone,
        cep,
        rua,
        numero,
        bairro,
        complemento,
        residenciaTipo
    }).then(() => {
        return res.sendStatus(200)
    }).catch(() => {
        return res.sendStatus(400)
    })

    
})


//MOSTRAR APENAS UM USUÁRIO
routers.get("/usuario/:id", (req, res) => {
    var  id  = req.params.id
    if (isNaN(id)) {

        return res.sendStatus(400).send("Error")
    }

    Users.findOne({
        where: {
            id: id
        }
    }).then(find => {
        if (find != undefined) {
            return res.sendStatus(200).json(find)
        } else {
           return res.sendStatus(400).send(400)
        }
    })
})

//DELETAR UM usuario
routers.delete("/usuario/:id", (req, res) => {
    var { id } = req.params
    if (isNaN(id)) {
        return res.sendStatus(400)
    }

    Users.destroy({
        where: {id: id}
    })
    return res.sendStatus(200)
})

//

module.exports = routers;