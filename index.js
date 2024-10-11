const express = require("express")
const router = require("./src/routes/api")

const app = express()

app.use(express.json())

app.use(router)

//criar as rotas

const port = 3000

app.listen(port, () => {
    console.log('Server rodando na porta ' )
})