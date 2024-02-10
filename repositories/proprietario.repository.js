import proprietarioModel from "../models/proprietarioSequelizer.models.js"

async function insertProprietario(proprietario){
    try{
        return await proprietarioModel.create(proprietario);
    }catch(err){
        throw err
    }   
}

async function getAll(){
    try{
        return await proprietarioModel.findAll()
    }catch(err){
        console.log(err)
    }
}

async function getById(id){
    try{
        console.log(id, 'aki')
        return await proprietarioModel.findByPk(id)
    }catch(err){
        console.log(err)
    }
}

async function update(proprietario){
    try{        
        await proprietarioModel.update(proprietario, { where: { proprietarioId: proprietario.proprietarioId} })
        return getById(proprietario.proprietarioId);
    }catch(err){
        console.log(err)
    }
}

async function deleteProprietario(id){
    try{         
        await proprietarioModel.destroy({ where: {proprietarioId: id} })
        return true     
    }catch(err){
        throw err;
    }
}

export default{
    insertProprietario,
    getAll,
    getById,
    update,
    deleteProprietario
}