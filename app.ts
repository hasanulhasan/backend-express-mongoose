import express, { Application } from 'express'
import cors from 'cors'
import bookRoutes from './app/modules/book/book.route'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/book', bookRoutes)

app.get('/test', (req, res) => {
  res.send('this is testing purpose')
})

export default app;