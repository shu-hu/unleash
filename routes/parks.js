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
router.put('/:park_id', checkAuth, parkCtrl.updatePark)
router.delete('/:park_id', checkAuth, parkCtrl.deletePark)

export {
    router
}