const express = require('express')
const app = express()
const conn = require('./db/Conn')

//Models
const Categoria = require('./models/Categoria')
const Jogo = require('./models/Jogo')
const Usuario = require('./models/Usuario')


//Routes

//Controllers

//Receber resposta do body
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

conn.sync().then(app.listen(2121)).catch((err) => console.log(err))