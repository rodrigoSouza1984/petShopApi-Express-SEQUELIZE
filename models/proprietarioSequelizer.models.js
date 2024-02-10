import Sequelize from "sequelize";
import sequelizeBanco from "../bancoDadosConfig/BancoDeDadosSequelize.js"

const Proprietario = sequelizeBanco.define('proprietarios', {
    
    proprietarioId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, { underscored: true} );

export default Proprietario