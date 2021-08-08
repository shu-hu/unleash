import { User } from '../models/user.js'
import { Profile } from '../models/profile.js'
import jwt from 'jsonwebtoken'

const SECRET = process.env.SECRET

const createJWT = (user) => {
    return jwt.sign({ user }, SECRET, { expiresIn: '24h' })
}

const register = async (req, res) => {
  const user = new User(req.body)
  const newProfile = new Profile({
    name: user.handle,
  }) 
  user.profile = newProfile._id
  await newProfile.save()
    try {
        await user.save()
        const token = createJWT(user)
        res.json({ token })
    } catch (error) {
        let errMsg
        if (error.errors?.email) {
            errMsg = 'This email already exists'
        } else if (error.errors?.handle) {
            errMsg = 'This Username already exists'
        } else {
            errMsg = 'Something went wrong!'
        }
        res.status(400).send({ err: errMsg })
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) return res.status(402).json({ error: 'bad credentials' })
        await user.comparePassword(req.body.password, (error, isMatch) => {
            if (isMatch) {
                const token = createJWT(user)
                res.json({ token })
            } else {
                return res.status(401).json({ error: 'bad credentials' })
            }
        })
    } catch (error) {
        return res.status(401).json(error)
    }
}

export {
    register,
    login,
}
