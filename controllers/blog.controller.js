import blogService from "../services/blog.service.js";

async function postBlogCreate(req, res){
    try{
        let postBlog = req.body;  
        console.log(postBlog, 'awww')      
        if (!postBlog.titulo || !postBlog.conteudo){
            throw new Error("Nome titulo e conteudo são obrigatorios")
        }
        res.send(await blogService.postBlogCreate(postBlog))
    }catch(err){
        console.log(err)
    }
}

async function getAllPosts(req, res){
    try{
        res.send(await blogService.getAllPosts())
    }catch(err){
        console.log(err)
    }
}

async function getByIdPosts(req, res){
    try{        
        let id = req.params._id              
        res.send(await blogService.getByIdPosts(id))
    }catch(err){
        console.log(err)
    }
}

async function updatePosts(req, res, next){    
    try {
        let postBody = req.body; 
        let idPost = req.params._id      

        res.send(await blogService.updatePosts(idPost, postBody))
        logger.info(`POST/product - ${JSON.stringify(product)}`)
    } catch (err) {
        next(err)
    }
}

async function createComentario(req, res, next){
    try {
        let body = req.body; 
        
        console.log(body)        
        
        if(!body.postId || !body.comentario){
            throw new Error("Product Id e review são obrigatório")
        }        

        res.send(await blogService.createComentario(body.postId, body.comentario))
        logger.info(`POST/product - ${JSON.stringify(product)}`)
    } catch (err) {
        next(err)
    }
}

    export default {
        postBlogCreate,
        getAllPosts,
        getByIdPosts,
        updatePosts,
        createComentario
    }
