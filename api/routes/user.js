import express from 'express'; //Express = Servidor 
import { getUsers, addUser, updateUser, deleteUser } from '../controllers/user.js';
const router = express.Router();
// Objeto 'router' defini as rotas do aplicativo.

router.get("/", getUsers); // READ

router.post("/", addUser); // CREATE

router.put("/", updateUser); // UPDATE

router.delete("/:id", deleteUser); // DELETE

export default router; //Exortando o Router 