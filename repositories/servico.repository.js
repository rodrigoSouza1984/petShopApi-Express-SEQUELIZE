import servicoModel from "../models/servicoSequelize.model.js"
import animalModel from "../models/animalSequelize.model.js"

async function insertServico(servico){    
    try{
        console.log(servico)
        return await servicoModel.create(servico);
    }catch(err){
        throw err
    }   
}

async function getAll(){
    try{
        return await servicoModel.findAll()
    }catch(err){
        console.log(err)
    }
}

async function getById(id){
    try{
        return await servicoModel.findByPk(id)
    }catch(err){
        console.log(err)
    }
}
async function getByIdAnimal(idAnimal){    
    try{
        return servicoModel.findAll({ where: { animalId : idAnimal } })
    }catch(err){
        console.log(err)
    }
}

async function getByIdPropietario(idProprietario){    
    try{
        return servicoModel.findAll({
            include: {
                model: animalModel,
                where: { proprietarioId : idProprietario } 
            }
        })
    }catch(err){
        console.log(err)
    }
}

async function update(servico){
    try{
        await servicoModel.update(servico, { where: { servicoId: servico.servicoId} })
        return getById(servico.servicoId);
    }catch(err){
        console.log(err)
    }
}
async function deleteServico(id){
    try{     
        await servicoModel.destroy({ where: {servicoId: id} })
        return true
    }catch(err){
        throw err;
    }
}

export default{
    insertServico,
    getAll,
    getById,
    getByIdAnimal,
    getByIdPropietario,
    update,
    deleteServico
}