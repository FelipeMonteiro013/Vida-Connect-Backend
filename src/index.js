import express from 'express'
import userController from './controllers/user'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.use("/user", userController)

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})
