import { Router } from 'express'
import * as commentsCtrl from '../controllers/posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/comments.js'

const router = Router()

// ========= Public Routes ========= 



// ========= Protected Routes ========= 
router.use(decodeUserFromToken)


export {
    router
}