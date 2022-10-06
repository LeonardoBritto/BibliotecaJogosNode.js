const express = require('express')
const router = express.Router()

//Controller
const JogoController = require('../controllers/JogoController')

router.get('/listar', JogoController.listar)

module.exports = router