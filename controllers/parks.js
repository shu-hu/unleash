import { User } from '../models/user.js'
import { Park } from '../models/park.js'
import { Profile } from '../models/profile.js'

const create = async (req, res) => {
    try {
        const park = await new Park(req.body)
        await park.save()
        await Profile.updateOne(
            { _id: req.user._id },
            { $push: { yourParks: park } }
        )
        return res.status(201).json(park)
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

export {
    create,
}