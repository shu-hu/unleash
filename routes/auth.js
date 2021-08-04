import { Router } from 'express'
import * as authCtrl from '../controllers/auth.js'

export {
  router
}

const router = Router()

/*---------- Public Routes ----------*/
router.post('/signup', authCtrl.signup)

/*---------- Protected Routes ----------*/
