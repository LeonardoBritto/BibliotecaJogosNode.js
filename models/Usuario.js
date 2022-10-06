const { DataTypes } = require('sequelize')
const db = require('../db/Conn')

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

module.exports = Usuario