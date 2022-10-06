const express = require('express')
const router = express.Router()

//Controller
const UsuarioController = require('../controllers/UsuarioController')

router.get('/listar', UsuarioController.listar)

module.exports = router