const Jogo = require('../models/Jogo')

module.exports = class JogoController {
    static async cadastrar(req, res){
        const {nome, codcategoria} = req.body

        if(!nome){
            res.status(422).json({message: 'Nome do jogo obrigatório!'})
            return  
        }

        if(!codcategoria){
            res.status(422).json({message: 'Código da Categoria Obrigatório!'})
            return  
        }
        
    }

    static editar(req, res){

    }

    static async listar(req, res){
        const jogos = await Jogo.findAll()

        res.status(200).json({Jogos: jogos})
        return
    }

    static recuperar(req, res){

    }

    static excluir(req, res){
        
    }
}