const Categoria = require('../models/Categoria')

module.exports = class CategoriaController {
    static async cadastrar(req, res){
        const nome = req.body.nome

        console.log('Nome categoria: ', req.body.nome)
        if(!nome){
            res.status(422).json({message: 'Nome da Categoria Obrigatório!'})
            return  
        }

        const categoria = {
            codigo: 0,
            nome: nome
        }

        try {
            await Categoria.create(categoria)

            res.status(200).json({message: `Categoria ${categoria.nome} Cadastrada`})
            return
        } catch (error) {
            res.status(422).json({message: error})
            return    
        }
    }

    static editar(req, res){

    }

    static async listar(req, res){
        const categorias = await Categoria.findAll()        
       
        res.status(200).json({Categorias: categorias})
        return    
    }

    static async recuperar(req, res){
        const id = req.params.id

        const categoria = await Categoria.findOne({where: {codigo: id},})

        if(!categoria){
            res.status(422).json({message: 'Código de categoria inexistente, codigo = ',id,categoria})
            return
        }

        res.status(200).json({Categoria : categoria})
        return
    }

    static excluir(req, res){
        
    }
}