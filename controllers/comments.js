import { Comment } from '../models/comment.js'


const create = async (req, res) => {
    try {
        const comment = await new Comment(req.body)
        await comment.save()
        return res.status(201).json(comment)
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

export {
    create,
}