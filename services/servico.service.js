import servicoRepositorio from "../repositories/servico.repository.js"

async function createServico(servico){       
    return await servicoRepositorio.insertServico(servico)
}

async function UpdateServico(servico){
    return await servicoRepositorio.update(servico)
}

async function getall(){    
    return await servicoRepositorio.getAll()
}

async function getById(id){    
    return await servicoRepositorio.getById(id)
}

async function getByIdAnimal(idAnimal){    
    return await servicoRepositorio.getByIdAnimal(idAnimal)
}

async function getByIdPropietario(idProprietario){    
    return await servicoRepositorio.getByIdPropietario(idProprietario)
}

async function deleteServico(id){    
    return await servicoRepositorio.deleteServico(id)
}

export default{
    createServico,
    getall,
    getById,
    getByIdAnimal,
    getByIdPropietario,
    UpdateServico,
    deleteServico
}