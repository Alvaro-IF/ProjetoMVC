import { Router } from 'express'
import * as produtoController from "../controller/produtoController"

const router = Router();

router.get("/", produtoController.recuperarTodos)

export default router;