import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 6
const Schema = mongoose.Schema

const userSchema = new Schema({
  handle: String,
  email: { type: String, required: true, lowercase: true, unique: true },
  password: String,
  profile: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true,
})

userSchema.plugin(uniqueValidator, {message: '{PATH} must be unique.'})

userSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password
    return ret
  },
})

userSchema.pre('save', function (next) {
  const user = this
  if (!user.isModified('password')) return next()
  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
      if (err) return next(err)
      user.password = hash
      next()
  })
})

userSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb)
}

const User = mongoose.model('User', userSchema)

export { User }
