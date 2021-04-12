const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
let userModel;
const userSchema = new Schema({
    firstName: { type: String, required: true},
    lastName : { type: String, required: true},
    mail : { type: String, lowercase:true, unique: true,required: true},
    budget: { type: Number, required: true},
    phnNumber: { type: Number, required: true},
    active: { type: Boolean, required: true },
    createdBy: ObjectId,
    updatedBy: ObjectId 
}, {
    versionKey: false,
    timestamps: true
}
)
userModel = mongoose.model("user",userSchema)
module.exports = userModel

