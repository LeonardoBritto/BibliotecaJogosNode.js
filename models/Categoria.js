const { DataTypes } = require('sequelize')
const db = require('../db/Conn')

const Categoria = db.define('Categoria', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true   
    },
    nome: {
        type: DataTypes.STRING(20)
    }
})