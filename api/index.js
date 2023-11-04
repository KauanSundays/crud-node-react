import express from 'express' // é usado para configurar e executar um servidor web em JS
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(8800)