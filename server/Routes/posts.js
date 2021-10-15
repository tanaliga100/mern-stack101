import express from 'express'

const router = express.Router()

//controllers 
import {getPosts, createPost} from '../controllers/posts.js'

router.get('/', getPosts)
router.post('/', createPost)

export default router;