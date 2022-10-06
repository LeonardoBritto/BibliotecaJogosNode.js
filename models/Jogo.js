const { DataTypes } = require('sequelize')
const db = require('../db/Conn')

const Categoria = require('./Categoria')

const Jogo = db.define('Jogo', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true   
    },
    nome: {
        type: DataTypes.STRING(20)
    }
}, {freezeTableName: true, timestamps:false})

Jogo.belongsTo(Categoria, {constraints: true, foreignKey: 'codcategoria'})
Categoria.hasMany(Jogo, {constraints: true, foreignKey: 'codcategoria'})

module.exports = Jogo