import mongoose from 'mongoose'

const Schema = mongoose.Schema

const featureSchema = new Schema({
    fullyFenced: Boolean,
    partFenced: Boolean,
    offLeash: Boolean,
    smDogArea: Boolean,
    agility: Boolean,
    swimming: Boolean,
    dogWater: Boolean,
    washStation: Boolean,
    pooBags: Boolean,
    trash: Boolean,
    restrooms: Boolean,
}, {
    timestamps: true,
})

const commentSchema = new Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
    features: {type: [featureSchema]},
    genComments: String,
    likes: String,
    dislikes: String,
    rating: {type: Number, min: 1, max: 5},
}, {
    timestamps: true,
})

const Comment = mongoose.model('Comment', commentSchema)

export {
    Comment
}