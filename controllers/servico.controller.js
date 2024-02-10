import servicoService from "../services/servico.service.js";

async function createServico(req, res){
    try{
        let servico = req.body;        
        if (!servico.valor || !servico.descricao || !servico.animalId){
            throw new Error("Nome tipo e proprietarioId são obrigatorios")
        }
        res.send(await servicoService.createServico(servico))
    }catch(err){
        console.log(err)
    }
}

async function getAll(req, res){
    try{
        res.send(await servicoService.getall())
    }catch(err){
        console.log(err)
    }
}

async function getById(req, res){
    try{
        let id = req.params.id
        res.send(await servicoService.getById(id))
    }catch(err){
        console.log(err)
    }
}

async function getByIdAnimal(req, res){
    try{
        let idAnimal = req.params.id        
        res.send(await servicoService.getByIdAnimal(idAnimal))
    }catch(err){
        console.log(err)
    }
}

async function getByIdPropietario(req, res){
    try{
        let idProprietario = req.params.id        
        res.send(await servicoService.getByIdPropietario(idProprietario))
    }catch(err){
        console.log(err)
    }
}

async function UpdateServico(req, res){
    try{
        let servico = req.body;               
        if (!servico.servicoId || !servico.valor || !servico.descricao || !servico.animalId){
            throw new Error('Nome Id tipo e proprietario_id são obrigatorios')
        }
        res.send(await servicoService.UpdateServico(servico))
    }catch(err){
        console.log(err)
    }
}

async function deleteServico(req, res){
    try{
      let id = req.params.id
      const servico = (await servicoService.getById(id))
      
      if(!servico){
          return console.log('Servico não encontrado')
      }

      //depois que criar a tabela servico vamos
      //criar uma verificacao aki que so deleta
      //o servico se nao houver servico cadastrado 
      //relacionado ao servico
      
      res.send(await servicoService.deleteServico(id))
        
    }catch(err){
        throw err
    }
}

export default{
    createServico,
    getAll,
    getById,
    getByIdAnimal,
    getByIdPropietario,
    UpdateServico,
    deleteServico
}

