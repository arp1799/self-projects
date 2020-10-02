var express     = require('express'),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Hotel       = require("./models/hotel.js"),
    Comment     = require("./models/comment.js"),
    seedDb      = require("./seed.js"),
    flash       = require("connect-flash");
    passport    = require("passport"),
LocalStrategy   = require("passport-local"),
methodOverride=require("method-override"),
    User        = require("./models/user.js"),
    commentRoutes    = require("./routes/comments"),
    hotelRoutes  =require("./routes/hotels"),
    indexRoutes  =require("./routes/index"),
    app.locals.moment = require('moment');


mongoose.connect("mongodb://localhost/hotel_lite",{ useNewUrlParser: true , useUnifiedTopology: true});
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(flash());

//passport setup==============================
app.use(require("express-session")({
    secret:"user session maintained",
    resave:false,
    saveUninitialized:false,
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//=============================================

app.use(async function(req, res, next){
    res.locals.currUser = req.user;
    res.locals.notifications =[];
    if(req.user) {
     try {
       let user = await User.findById(req.user._id).populate('notifications', null, { isRead: false }).exec();
       res.locals.notifications = user.notifications.reverse();
     } catch(err) {
       console.log(err.message);
     }
    }
    res.locals.errmsg=req.flash("error");
    res.locals.sucmsg=req.flash("success");
    next();
 });



//=================================================

app.use("/",indexRoutes);
app.use("/hotels/:id/comments",commentRoutes);
app.use("/hotels",hotelRoutes);

app.set('port', process.env.PORT || 3000);
    app.listen(3000,function(){
        console.log("server started"); 
        
        
        
        
        
        
       
});