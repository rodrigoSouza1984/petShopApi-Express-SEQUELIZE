import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/api_petShopBlog_modulo3IGTI';
mongoose.connect(url, {useNewUrlParser: true}); 

export default mongoose	