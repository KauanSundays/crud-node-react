import express from 'express';
//configurar e executar um servidor web em JavaScript.
import { getUsers } from '../controllers/user.js';
const router = express.Router();
// Objeto 'router' defini as rotas do aplicativo.

router.get("/", getUsers);
// Rota GET na raiz ("/") associada à 'getUsers' importada.

export default router;
//Exporta o objeto 'router' para ser usado em outros lugares do aplicativo.
