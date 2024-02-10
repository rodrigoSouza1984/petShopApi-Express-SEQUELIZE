import Sequelize from "sequelize";
import bancoSequelize from "../bancoDadosConfig/BancoDeDadosSequelize.js"
import animalModel from "./animalSequelize.model.js"

const Servico = bancoSequelize.define('servicos',{
    
    servicoId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },

    valor: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    animalId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
     
}, {underscored: true});
// underscored => para nao dar problema com _ tipo no banco fizemos td com
//underline e aki temos que usar camelCase entao para o sequlize entender que
//client_id = clientId 

Servico.belongsTo(animalModel, { foreignKey: "animalId"})

export default Servico;