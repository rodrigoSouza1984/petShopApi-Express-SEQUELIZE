import express from "express";
import servicoController from "../controllers/servico.controller.js"

const router = express.Router();

router.post("/", servicoController.createServico)
router.get("/", servicoController.getAll)
router.get("/:id", servicoController.getById)
router.get("/animal/:id", servicoController.getByIdAnimal)
router.get("/proprietario/:id", servicoController.getByIdPropietario)
router.put("/", servicoController.UpdateServico)
router.delete("/:id", servicoController.deleteServico)


export default router