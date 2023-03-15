const express = require("express")
const bodyParser = require('body-parser')
const port = 3000
const cervejaRoutes = require('./routes/cerveja')

const app = express()
app.use(bodyParser.json())

app.use('/', cervejaRoutes)

app.listen(port, () => {
    console.log("Servidor express rodando na porta 3000")
})

// Por onde começar:
// 1) Server
// Banco
// 2) Routes
// 3) Controller
// 4) Model