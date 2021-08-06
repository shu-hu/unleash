import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
    name: {type: String, required: true},
    avatar: String,
    dogNames: {type: Schema.Types.ObjectId, ref: "Dog"},
    location: String,
    favParks: {type: Schema.Types.ObjectId, ref: "Park"},
    yourParks: {type: Schema.Types.ObjectId, ref: "Park"},
}, {
    timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
    Profile
}