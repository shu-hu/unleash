import { Router } from 'express'
import * as parkCtrl from '../controllers/parks.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 



// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, parkCtrl.createPark)

export {
    router
}