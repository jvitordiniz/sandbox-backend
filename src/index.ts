import 'reflect-metadata'
import { createConnection } from 'typeorm'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import routes from './routes'

const app = express()
const cors = require('cors')
app.use(cors({
  origin: 'http://localhost:3311', // permissão frontend (usar '*' para tudo)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'] // permitidos
}))

createConnection()

app.use(bodyParser.json())
app.use(routes)

app.listen(3310, () => {
  console.log('⚡ Server running at port 3310')
})
