import { Router } from 'express'
import * as parkCtrl from '../controllers/parks.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 
router.get('/results', parkCtrl.indexPark)


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, parkCtrl.createPark)
router.post('/:park_id/comments', checkAuth, parkCtrl.createComment)

export {
    router
}