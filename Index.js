const express = require('express')
const app = express()
const conn = require('./db/Conn')

//Models
const Categoria = require('./models/Categoria')
const Jogo = require('./models/Jogo')
const Usuario = require('./models/Usuario')


//Routes
const categoriaRoutes = require('./routes/categoriaRoutes')
const jogoRoutes = require('./routes/jogoRoutes')
const usuarioRoutes = require('./routes/usuarioRoutes')
app.use('/categoria', categoriaRoutes)
app.use('/jogo', jogoRoutes)
app.use('/usuario', usuarioRoutes)

//Controllers

//Receber resposta do body
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

conn.sync({force: true}).then(app.listen(2121)).catch((err) => console.log(err))