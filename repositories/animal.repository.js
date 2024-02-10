import animalModel from "../models/animalSequelize.model.js"

async function insertAnimal(animal){    
    try{
        console.log(animal)
        return await animalModel.create(animal);
    }catch(err){
        throw err
    }   
}

async function getAll(){
    try{
        return await animalModel.findAll()
    }catch(err){
        console.log(err)
    }
}

async function getById(id){
    try{
        return await animalModel.findByPk(id)
    }catch(err){
        console.log(err)
    }
}
async function getByIdProprietario(idProprietario){    
    try{
        return animalModel.findAll({ where: { proprietarioId : idProprietario } })
    }catch(err){
        console.log(err)
    }
}

async function update(animal){
    try{
        await animalModel.update(animal, { where: { animalId: animal.animalId} })
        return getById(animal.animalId);
    }catch(err){
        console.log(err)
    }
}
async function deleteAnimal(id){
    try{     
        await animalModel.destroy({ where: {animalId: id} })
        return true
    }catch(err){
        throw err;
    }
}

export default{
    insertAnimal,
    getAll,
    getById,
    getByIdProprietario,
    update,
    deleteAnimal
}