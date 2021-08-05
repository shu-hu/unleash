import mongoose from 'mongoose'

const Schema = mongoose.Schema

const parkSchema = new Schema ({
    author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
    parkName: {type: String, required: true},
    address: {type: String, required: true},
    description: String,
    openTime: String,
    closeTime: String,
    comments: {type: mongoose.Schema.Types.ObjectId, ref: "Comment", required: true},
}, {
    timestamps: true,
})

const Park = mongoose.model('Park', parkSchema)

export {
    Park
}