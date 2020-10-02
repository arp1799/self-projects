
var express=require("express");
var router=express.Router();
var Hotel       = require("../models/hotel.js");
var middlewareObj=require("../middleware/index.js");

var User = require("../models/user");
var Notification = require("../models/notification");
var multer = require('multer');
var storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var imageFilter = function (req, file, cb) {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
var upload = multer({ storage: storage, fileFilter: imageFilter})

var cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'arp1799', 
  api_key:'224896723215436', 
  api_secret: 'u3c8vB0kTBhEtHn9n81QtIOGd2c'
});




router.get("/",(req,res)=>{
    var perPage=12;
    var pageQuery=parseInt(req.query.page);
    var pageNumber=pageQuery?pageQuery:1;
    if(req.query.search)
    {   const regex = new RegExp(escapeRegex(req.query.search), 'gi');//function at end of file
        Hotel.find({ name: regex }).skip((perPage * pageNumber) - perPage).limit(perPage).exec((err,hotels)=>{
            Hotel.count({name:regex}).exec((err,count)=>{
                if(err)
                console.log(err);
                else
                {  
                    if(hotels.length < 1){
                        req.flash("error","No hotels matched with given search query");
                        res.redirect("/hotels");
                    }
                    else
                    res.render("hotels/hotels_list",{list:hotels,current:pageNumber, pages: Math.ceil(count / perPage),search: req.query.search});
                }    
            });
        });
    }
    else
    {
        Hotel.find({}).skip((perPage * pageNumber) - perPage).limit(perPage).exec((err,hotels)=>{
            Hotel.count({}).exec((err,count)=>{
                if(err)
                console.log(err);
                else    
                res.render("hotels/hotels_list",{list:hotels,current:pageNumber, pages: Math.ceil(count / perPage),search: req.query.search});
            });
        });
    }
    
});





router.get("/newhotel",middlewareObj.isLoggedIn,(req,res)=>{
    res.render("hotels/new");
});


router.post("/newhotel", middlewareObj.isLoggedIn, upload.single('image'),async function(req, res) {
    cloudinary.v2.uploader.upload(req.file.path,async function(err, result) { 
        // add cloudinary url for the image to the campground object under image property
            if (err) {
                req.flash('error', err.message);
                return res.redirect('back');
              }
        var name=req.body.name;
        var image=result.secure_url;
        var imageId = result.public_id;
        var desc=req.body.desc;
        var price=req.body.price;
        var newHotel={name:name,image:image,desc:desc,price:price,author:{id:req.user._id,username:req.user.username},imageId:imageId};
        
        console.log(newHotel);
        try {
            let hotel = await Hotel.create(newHotel);
            let user = await User.findById(req.user._id).populate('followers').exec();
            let newNotification = {
              username: req.user.username,
              hotelId: hotel.id
            }
            for(const follower of user.followers) {
              let notification = await Notification.create(newNotification);
              follower.notifications.push(notification);
              follower.save();
            }
      
            //redirect back to campgrounds page
            res.redirect(`/hotels/${hotel.id}`);
          } catch(err) {
            req.flash('error', err.message);
            res.redirect('back');
          }
      
      });
});




router.get("/:id/edit",middlewareObj.checkAuthorization,(req,res)=>{
    Hotel.findById(req.params.id,(err,hotel)=>{
        if(err)
        console.log(err);
        res.render("hotels/edit",{hotel:hotel});  
    });    
    
});

router.put("/:id/edit",middlewareObj.checkAuthorization,upload.single('image'),(req,res)=>{
    Hotel.findById(req.params.id, async function(err, hotel){
        if(err){
            req.flash("error", err.message);
            res.redirect("back");
        } else {
            if (req.file) {
              try {
                if (hotel.imageId = "noimage") {//understand need of adding this even not neccessary
                    var result = await cloudinary.v2.uploader.upload(req.file.path);
                } else {
                    //  if not default, find the old image using imageId and delete
                    await cloudinary.v2.uploader.destroy(hotel.imageId);
                    var result = await cloudinary.v2.uploader.upload(req.file.path);
                }
                  hotel.imageId = result.public_id;
                  hotel.image = result.secure_url;
                } catch(err) {
                    req.flash("error", err.message);
                    return res.redirect("back");
                }
            }
            hotel.name = req.body.hotel.name;
            hotel.desc = req.body.hotel.desc;
            hotel.price=req.body.hotel.price;
            hotel.save();
            req.flash("success","Successfully Updated!");
            res.redirect("/hotels");
        }
    });
});

router.delete("/:id",middlewareObj.checkAuthorization,(req,res)=>{
    Hotel.findById(req.params.id, async function(err, hotel) {
        if(err) {
          req.flash("error", err.message);
          return res.redirect("back");
        }
        try {
            await cloudinary.v2.uploader.destroy(hotel.imageId);
            hotel.remove();
            req.flash('success', 'Campground deleted successfully!');
            res.redirect('/hotels');
        } catch(err) {
            if(err) {
              req.flash("error", err.message);
              return res.redirect("back");
            }
        }
      });
});


//post route for likes

router.post("/:id/like", middlewareObj.isLoggedIn, function (req, res) {
    Hotel.findById(req.params.id, function (err, hotel) {
        if (err) {
            console.log(err);
            return res.redirect("/hotels");
        }

        // check if req.user._id exists in foundCampground.likes
        var foundUserLike = hotel.likes.some(function (like) {
            return like.equals(req.user._id);
        });

        if (foundUserLike) {
            // user already liked, removing like
            hotel.likes.pull(req.user._id);
        } else {
            // adding the new user like
            hotel.likes.push(req.user);
        }

        hotel.save(function (err) {
            if (err) {
                console.log(err);
                return res.redirect("/hotels");
            }
            return res.redirect("/hotels/" + hotel._id);
        });
    });
});





function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports=router;