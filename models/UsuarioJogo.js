const { DataTypes } = require('sequelize')
const db = require('../db/Conn')

const UsuarioJogo = db.define('UsuarioJogo', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {freezeTableName: true, timestamps: false})

module.exports = UsuarioJogo