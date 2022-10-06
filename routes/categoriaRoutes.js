const express = require('express')
const router = express.Router()

//Controller
const CategoriaController = require('../controllers/CategoriaController')

router.get('/listar', CategoriaController.listar)

module.exports = router