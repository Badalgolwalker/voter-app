var mongoose = require("mongoose")

var partySchema = mongoose.Schema({
name:String,
logo:String,
age:Number,
candidate:String,
candidatePic:String,
userid:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
}],
wardnumber:Number
})
 module.exports = mongoose.model("party",partySchema)