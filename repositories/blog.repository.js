import postModel from "../models/postsBlogMongo.model.js";

async function postBlogCreate(postBlog){
    try{
        const post = new postModel(postBlog);
    
        return post.save()
    }catch(err){
        throw err
    }
}

async function getAllPosts(){
    try{   
        return postModel.find()
    }catch(err){
        throw err
    }
}

async function getByIdPosts(id){
    console.log(id)
    try{   
        return postModel.findById(id)
    }catch(err){
        throw err
    }
}

async function updatePosts(idPost, postBody){
    try{
        return await postModel.findByIdAndUpdate({'_id': idPost}, postBody, {new: true})
    }catch(err){
        throw err
    }
}

async function createComentario( postId, comentario){
    try{
        const post = await getByIdPosts(postId)        
        post.comentarios.push(comentario)
        console.log(post)
        return await updatePosts(postId, post)
    }catch(err){
        throw err
    }
}

export default {
    postBlogCreate,
    getAllPosts,
    getByIdPosts,
    updatePosts,
    createComentario
}