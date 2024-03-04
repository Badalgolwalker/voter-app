var mongoose = require("mongoose")
var plm = require("passport-local-mongoose")

var userSchema = mongoose.Schema({
  username:String,
  password:String,
  email:String,
  AadharNumber:Number,
  age:Number,
  contact:Number,
  name:String,
pic:String,
wardNumber:Number,
isAdmin:{
  type:Boolean,
  default:false

},
partyid:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"party"
}
})
 userSchema.plugin(plm)
 module.exports = mongoose.model("user",userSchema)