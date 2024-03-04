var express = require('express');
var router = express.Router();
var userModel = require("./users");
var partyModel = require("./party");
const passport = require('passport');
var mongoose = require("mongoose")

var localStrategy = require("passport-local")

passport.use(new localStrategy(userModel.authenticate()))
mongoose.connect("mongodb://127.0.0.1:27017/voterapp").then(function(){
  console.log("user connected successfully")
})

/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post("/register",(req,res,next) =>{
  const user = new userModel({
    username:req.body.username,
    wardNumber:req.body.wardNumber,
    email:req.body.email,
    age:req.body.age,
    contact:req.body.contact,
    name:req.body.name,
    AadharNumber:req.body.AadharNumber
  })
  userModel.register(user,req.body.password)
  .then(function(){
    passport.authenticate("local")(req,res,function(){
      res.redirect("/party")
    })
  })
})

router.get("/party",isLoggedIn,async(req,res,next) =>{
    const user = req.user.wardNumber
const user1 = await userModel.findOne({username:req.session.passport.user})

const party = await partyModel.find({wardnumber:user})

  res.render("party",{party,user1})
})

router.get("/votehogya/:id",isLoggedIn,async(req,res,next) =>{
  const user = await userModel.findOne({username:req.session.passport.user})

  const party = await partyModel.findOne({_id:req.params.id})

if(party.userid.includes(user.id)){
console.log("user already voted")
}
else{
  party.userid.push(user.id)

  user.partyid = party.id
}

await user.save()
await(party.save())
res.redirect("back")

})

router.get("/result",isLoggedIn,async(req,res,next) =>{
  const user = req.user.wardNumber
const party = await partyModel.find({wardnumber:user})
.populate("userid")

let winparty = null;
let maxcount = 0

party.forEach(element => {
  if(element.userid.length > maxcount){
    maxcount = element.userid.length
    winparty= element
  }
});
  res.render("result",{winparty})
})


router.get("/signup",(req,res,next) =>{
  res.render("signup")
})


router.get("/login",(req,res,next) =>{
  res.render("login")
})

router.get("/government",isLoggedIn,isAdmin,(req,res,next) =>{
  
  res.render("government")
})


router.post("/governmentpage",isLoggedIn,async(req,res,next) =>{
var user = await userModel.findOne({username:req.session.passport.user})
// console.log(user)
  const party = await partyModel.create({
    name:req.body.name,
logo:req.body.logo,
age:req.body.age,
candidate:req.body.candidate,
candidatePic:req.body.candidatepic,
wardnumber:req.body.wardnumber,
userid:user.id
  })
  res.redirect("back")

})
router.post('/loggin', passport.authenticate('local', {
  successRedirect: '/party',
  failureRedirect: '/login'
}));


router.get("/logout",(req,res,next) =>{
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
})

})

function isAdmin(req,res,next){
if(req.user.isAdmin){
  return next()
}else{
  res.redirect("/party")
}
}
function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next()
  }
  else{
    res.redirect("/login")
  }
}

module.exports = router;
