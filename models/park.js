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
    author: {type: Schema.Types.ObjectId, ref: "Profile"},
    features: [featureSchema],
    genComments: String,
    likes: String,
    dislikes: String,
    rating: {type: Number, min: 1, max: 5},
}, {
    timestamps: true,
})

const parkSchema = new Schema ({
    author: {type: Schema.Types.ObjectId, ref: "Profile"},
    parkName: {type: String, required: true},
    address: {type: String, required: true},
    description: String,
    openTime: String,
    closeTime: String,
    comments: [commentSchema],
}, {
    timestamps: true,
})

const Park = mongoose.model('Park', parkSchema)

export {
    Park
}