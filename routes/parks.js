import { Router } from 'express'
import * as parkCtrl from '../controllers/parks.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 
router.get('/:page', parkCtrl.indexPark)
router.get('/details/:park_id', parkCtrl.showPark)

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)


router.post('/', checkAuth, parkCtrl.createPark)
router.post('/create_api', checkAuth, parkCtrl.createFromAPI)
router.get('/:park_id/comments', checkAuth, parkCtrl.indexComment)
router.post('/:park_id/comments', checkAuth, parkCtrl.createComment)
router.put('/:park_id/comments/:comment_id', checkAuth, parkCtrl.updateComment)
router.put('/:park_id', checkAuth, parkCtrl.updatePark)
router.delete('/:park_id/comments/:comment_id', checkAuth, parkCtrl.deleteComment)
router.delete('/:park_id', checkAuth, parkCtrl.deletePark)

export {
    router
}