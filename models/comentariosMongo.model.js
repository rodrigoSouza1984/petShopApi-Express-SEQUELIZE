import mongoose from "../bancoDadosConfig/BancoDadosMongo.js"

const ComentarioShcema = new mongoose.Schema({
    nome: {type: String, required: false},
    conteudo: {type : String, required: false}

}, {collecttion: "postsBlog"})

export default ComentarioShcema;