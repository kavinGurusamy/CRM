const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
let userModel;
const userSchema = new Schema({
    firstName: { type: String},
    lastName : { type: String},
    mail : { type: String},
    budget: { type: Number},
    phnNumber: { type: Number},
    active: { type: Boolean},
    createdBy: ObjectId,
    updatedBy: ObjectId 
}, {
    versionKey: false,
    timestamps: true
}
)
userModel = mongoose.model("user",userSchema)
module.exports = userModel

