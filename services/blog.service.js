import blogRepository from "../repositories/blog.repository.js";

async function postBlogCreate(blogPost){       
    return await blogRepository.postBlogCreate(blogPost)
}

async function getAllPosts(){       
    return await blogRepository.getAllPosts()
}

async function getByIdPosts(id){  
    console.log(id)     
    return await blogRepository.getByIdPosts(id)
}

async function updatePosts(idPost,postBody){
    return await blogRepository.updatePosts(idPost, postBody)
    
}

async function createComentario(postId, comentario){
    return await blogRepository.createComentario(postId, comentario)
    
}

export default {
    postBlogCreate,
    getAllPosts,
    getByIdPosts,
    updatePosts,
    createComentario
}