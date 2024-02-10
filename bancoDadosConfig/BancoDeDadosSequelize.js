import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    "postgres://qvrolsgf:mvOp3ZluscSAdVM37KPATNKiygCTvj9V@batyr.db.elephantsql.com/qvrolsgf",
    {
        dialect: "postgres",								       
        define: {									       
            timestamps: false
        }
    }
)

export default sequelize




