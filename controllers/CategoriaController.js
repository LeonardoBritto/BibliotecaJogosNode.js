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

    static async editar(req, res){
        const nome = req.body.nome
        const codigo = req.params.id 
        
        if(!nome){
            res.status(422).json({message: 'Nome para edição, obrigatório'})
            return    
        }

        const categoria = await Categoria.findOne({where: {codigo: codigo}})

        if(!categoria){
            res.status(422).json({message: 'Código de categoria inexistente, impossivel editar'})
            return
        }    

        const cat = {
            codigo,
            nome 
        }    

        try {
            await Categoria.update(cat, {where: {codigo: codigo}})  
            
            res.status(200).json({message: 'Categoria alterada com sucesso'})
            return
        } catch (error) {
            console.log(error)    
        }
    }

    static async listar(req, res){
        const categorias = await Categoria.findAll()        
       
        res.status(200).json({Categorias: categorias})
        return    
    }

    static async recuperar(req, res){
        const id = req.params.id

        const categoria = await Categoria.findOne({where: {codigo: id}})

        if(!categoria){
            res.status(422).json({message: 'Código de categoria inexistente, impossivel recuperar'})
            return
        }

        res.status(200).json({Categoria : categoria})
        return
    }

    static async excluir(req, res){
        const codigo = req.params.id
        
        try {
            await Categoria.destroy({where: {codigo: codigo}})
            
            res.status(200).json({message: 'Categoria excluida com sucesso'})
            return
        } catch (error) {
            res.status(422).json({Erro: error})
            return   
        }
    }
}