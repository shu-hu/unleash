import { Park } from '../models/park.js'
import { Profile } from '../models/profile.js'
// req.user._id???

const createPark = async (req, res) => {
    try {
        const park = await new Park(req.body)
        await park.save()
        await Profile.updateOne(
            { _id: req.user.profile._id },
            { $push: { yourParks: park } }
        )
        return res.status(201).json(park)
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

const indexPark = async (req, res) => {
    const limitNum = 10
    const skipCount = parseInt(req.params.page) * parseInt(limitNum)
    try {
        const posts = await Park.find({})
            .populate('added_by')
            .limit(limitNum)
            .skip(skipCount)
            .sort({ createdAt: 'desc' })
            return res.status(200).json(posts)
    } catch (error) {
        throw error
    }
}

const createComment = async (req, res) => {
    try {
        const park = await Park.findById(req.params.park_id)
        park.comments.unshift(req.body)
        await park.save()
        const newComment = park.comments[0]
        return res.status(201).json(newComment)
    } catch (err) {
        res.status(400).send(err.message)
    }
}

export {
    createPark,
    createComment,
}