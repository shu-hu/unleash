import { Router } from 'express'
import * as authCtrl from '../controllers/auth.js'
import { decodeUserFromToken } from '../middleware/auth.js' 

export {
  router
}

const router = Router()

/*---------- Public Routes ----------*/
router.post('/signup', authCtrl.register)
router.post('/login', authCtrl.login)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)