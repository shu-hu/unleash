import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  email: { type: String, required: true, lowercase: true, unique: true },
  password: String,
  profile: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true,
})

userSchema.set('toJSON', {
  transform: function (doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password
    return ret
  },
})

const User = mongoose.model('User', userSchema)

export { User }
