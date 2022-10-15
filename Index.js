const express = require('express')
const app = express()
const conn = require('./db/Conn')

app.use(express.json())

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

conn.sync({force: true}).then(app.listen(2121)).catch((err) => console.log(err))