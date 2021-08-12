import mongoose from 'mongoose'

const Schema = mongoose.Schema

const featureSchema = new Schema({
    fullyFenced: { type: Boolean, default: false },
    partFenced: { type: Boolean, default: false },
    offLeash: { type: Boolean, default: false },
    smDogArea: { type: Boolean, default: false },
    agility: { type: Boolean, default: false },
    swimming: { type: Boolean, default: false },
    dogWater: { type: Boolean, default: false },
    washStation: { type: Boolean, default: false },
    pooBags: { type: Boolean, default: false },
    trash: { type: Boolean, default: false },
    restrooms: { type: Boolean, default: false },
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
    added_by: {type: Schema.Types.ObjectId, ref: "Profile"},
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