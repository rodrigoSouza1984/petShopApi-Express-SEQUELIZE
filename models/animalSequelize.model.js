import Sequelize from "sequelize";
import bancoSequelize from "../bancoDadosConfig/BancoDeDadosSequelize.js"
import proprietarioModel from "./proprietarioSequelizer.models.js"

const Animal = bancoSequelize.define('animais',{
    
    animalId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    },

    proprietarioId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
     
}, {underscored: true});
// underscored => para nao dar problema com _ tipo no banco fizemos td com
//underline e aki temos que usar camelCase entao para o sequlize entender que
//client_id = clientId 

Animal.belongsTo(proprietarioModel, { foreignKey: "proprietarioId"})

export default Animal;