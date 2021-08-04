import { User } from '../models/user.js'

export {
  signup
}

function signup(req, res) {
  const user = new User(req.body)
  user.save()
  .then(user =>{
    // TODO: Send back a JWT instead of the user
    res.status(200).json(user)
  })
  .catch(err => {
    res.status(400).send({ err: err.errmsg })
  })
}
