const { DataTypes } = require('sequelize')
const db = require('../db/Conn')

const Jogo = require('./Jogo')
const UsuarioJogo = require('./UsuarioJogo')

const Usuario = db.define('Usuario', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true   
    },
    nome: {
        type: DataTypes.STRING(20)
    },
    email: {
        type: DataTypes.STRING(30)
    },
    senha: {
        type: DataTypes.STRING(10)
    }
}, {freezeTableName: true, timestamps:false})

Usuario.belongsToMany(Jogo, {through: {model: UsuarioJogo}, foreignKey: 'codproduto', constraints: true})
Jogo.belongsToMany(Usuario, {through: {model: UsuarioJogo}, foreignKey: 'codcategoria', constraints: true})

module.exports = Usuario