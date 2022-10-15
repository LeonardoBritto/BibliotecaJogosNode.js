const express = require('express')
const router = express.Router()

//Controller
const CategoriaController = require('../controllers/CategoriaController')

router.get('/listar', CategoriaController.listar)
router.get('/listar/:id', CategoriaController.recuperar)
router.post('/cadastrar', CategoriaController.cadastrar)
router.patch('/editar/:id', CategoriaController.editar)

module.exports = router