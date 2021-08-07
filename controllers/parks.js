import { Park } from '../models/park.js'
import { Profile } from '../models/profile.js'


const createPark = async (req, res) => {
    try {
        const park = await new Park(req.body)
        park.added_by = req.user.profile
        await park.save()
        console.log(req.body, 'after save')
        await Profile.updateOne(
            { _id: req.user.profile },
            { $push: { yourParks: park } }
        )
        return res.status(201).json(park)
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

const indexPark = async (req, res) => {
    const limitNum = 10
    const skipCount = parseInt(req.params.page) * limitNum
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

const updatePark = async (req, res) => {
    try {
        const updatedPark = await Park.findByIdAndUpdate(
            req.params.park_id,
            req.body,
            { new: true }
        )
        return res.status(200).json(updatedPark)
    } catch (error) {
        throw error
    }
}

const deletePark = async (req, res) => {
    try {  
        const removedPark = await Park.findByIdAndDelete(req.params.park_id)
        const profile = await Profile.findById(req.user.profile)
        profile.yourParks.remove({ _id: req.params.park_id })
        await profile.save()
        return res.status(200).json(removedPark)
    } catch (error) {
        res.json(error)
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

const indexComment = async (req, res) => {
    try {
        const park = await Park.findById(req.params.park_id)
        return res.status(200).json(park.comments)
    } catch (error) {
        return res.status(500).send(error.message, 'No Comments')
    }
}

export {
    createPark,
    indexPark,
    updatePark,
    deletePark,

    createComment,
    indexComment,
}