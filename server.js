import 'dotenv/config.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import cors from 'cors'

import { router as authRouter } from './routes/auth.js'
import { router as usersRouter } from './routes/users.js'
import { router as parksRouter} from './routes/parks.js'
import { router as commentsRouter} from './routes/comments.js'

const app = express()

import('./config/database.js')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)
app.use('/api/parks', parksRouter)
app.use('/api/comments', commentsRouter)

app.get('/*', function (req, res) {
  res.sendFile(
    path.dirname(fileURLToPath(import.meta.url), 'build', 'index.html')
  )
})

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`)
})
