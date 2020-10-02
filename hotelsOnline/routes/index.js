var express=require("express");
var router=express.Router();
var passport    = require("passport");
var    User       = require("../models/user.js");
var    Hotel        = require("../models/hotel.js");
var { isLoggedIn } = require('../middleware/index.js');


router.get("/home",(req,res)=>{
  Hotel.aggregate([{$sample:{size:3}}]).exec((err,hotels)=>{
        if(err)
        console.log(err);
        else{    
        res.render("home",{hotels:hotels});
        }
    });

});


router.get("/register",(req,res)=>{
    res.render("user/register");
});

router.post("/register",(req,res)=>{
    if(req.body.adminCode==="secretCode1234")
        var admin=true;
    User.register(new User({username:req.body.username,isAdmin:admin,avatar:req.body.avatar,firstName:req.body.firstName,
        lastName:req.body.lastName,email:req.body.email}), req.body.password, function(err, account) {
        if (err) {
            req.flash("err",err.message);
            return res.render("user/register");
        }

        passport.authenticate('local')(req, res, function () {
            req.flash("success","Welcome To HotelLite "+account.username);
            res.redirect('/hotels');
    });
});
});

router.get("/login",(req,res)=>{
    res.render("user/login");
});

router.post("/login",passport.authenticate("local",
    {
    successRedirect:"/hotels",
    failureRedirect:"/login"
    }),(req,res)=>{
});

router.get("/logout",(req,res)=>{
    req.logout();
    req.flash("success","logged you out");
    res.redirect("/hotels");
});


//user profiles

router.get("/users/:id",async (req,res)=>{
    
    try {
        let user = await User.findById(req.params.id).populate('followers').exec();
        let hotels=await Hotel.find().where('author.id').equals(user._id).exec();
        
        res.render("user/profile",{user:user,hotels:hotels});
      } catch(err) {
        req.flash('error', err.message);
        console.log(err);
        return res.redirect('/hotels');
      }
});

router.get('/follow/:id', isLoggedIn, async function(req, res) {
    try {
      let user = await User.findById(req.params.id);
      user.followers.push(req.user._id);
      user.save();
      req.flash('success', 'Successfully followed ' + user.username + '!');
      res.redirect('/users/' + req.params.id);
    } catch(err) {
      req.flash('error', err.message);
      res.redirect('back');
    }
  });
  
  // view all notifications
  router.get('/notifications', isLoggedIn, async function(req, res) {
    try {
      let user = await User.findById(req.user._id).populate({
        path: 'notifications',
        options: { sort: { "_id": -1 } }
      }).exec();
      let allNotifications = user.notifications;
      res.render('notifications/index', { allNotifications });
    } catch(err) {
      req.flash('error', err.message);
      res.redirect('back');
    }
  });
  
  // handle notification
  router.get('/notifications/:id', isLoggedIn, async function(req, res) {
    try {
      let notification = await Notification.findById(req.params.id);
      notification.isRead = true;
      notification.save();
      res.redirect(`/hotels/${notification.hotelId}`);
    } catch(err) {
      req.flash('error', err.message);
      res.redirect('back');
    }
  });
  




module.exports=router;