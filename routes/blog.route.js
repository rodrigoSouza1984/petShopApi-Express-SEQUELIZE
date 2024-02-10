import express from "express";
import blogController from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/createPost", blogController.postBlogCreate);
router.get("/getPosts", blogController.getAllPosts)
router.get("/getPosts/:_id", blogController.getByIdPosts)
router.put("/updatePosts/:_id", blogController.updatePosts)
router.post("/comentario", blogController.createComentario);

export default router