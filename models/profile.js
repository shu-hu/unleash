import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
    name: String,
    avatar: String,
    dogNames: {type: mongoose.Schema.Types.ObjectId, ref: "Dog"},
    location: String,
    favParks: {type: mongoose.Schema.Types.ObjectId, ref: "Park"},
    yourParks: {type: mongoose.Schema.Types.ObjectId, ref: "Park"},
}, {
    timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
    Profile
}