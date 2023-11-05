import express from 'express' // é usado para configurar e executar um servidor web em JS
import { getUsers } from '../controllers/user.js'

const route = express.Router()

router.get("/", getUsers)

export default router