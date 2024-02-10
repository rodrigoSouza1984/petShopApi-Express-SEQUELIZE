import mongoose from "../bancoDadosConfig/BancoDadosMongo.js"
import ComentarioShcema from "./comentariosMongo.model.js";

const postsBlogShcema = new mongoose.Schema({    
    titulo: {type: String, required: true},
    conteudo: {type: String, required: false},
    comentarios: [ComentarioShcema],
})

export default mongoose.model('postsBlog', postsBlogShcema);