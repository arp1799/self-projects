var express=require("express");
var router=express.Router({mergeParams:true});
var Hotel       = require("../models/hotel.js");
var Comment     = require("../models/comment.js");
var middlewareObj=require("../middleware/index.js");
 
router.get("/new",middlewareObj.isLoggedIn,middlewareObj.checkCommentExistence,(req,res)=>{
    Hotel.findById(req.params.id,(err,hotel)=>{
        if(err)
           console.log(err);
       else
           res.render("comments/newComment",{hotel:hotel});
    })
});

router.post("/",middlewareObj.isLoggedIn,middlewareObj.checkCommentExistence,(req,res)=>{
   var hotelId=req.params.id;
   Hotel.findById(hotelId).populate("comments").exec((err,hotel)=>{
       if(err)
       {    console.log(err);redirect("/hotels");}
       else
       {   Comment.create(req.body.comment,(err,comment)=>{
           if(err)
               console.log(err);
           else{
               comment.author.id=req.user._id;
               comment.author.username=req.user.username;
               comment.hotel=hotel;
               comment.save();
               hotel.comments.push(comment);
               hotel.rating=calculateAverage(hotel.comments);
               hotel.save();
               req.flash("success","Comment Added");
               res.redirect("/hotels/"+hotel._id);
           }
       })
       }
   })
});

router.get("/:cid/edit",middlewareObj.checkCommentAuthorization,(req,res)=>{
    Comment.findById(req.params.cid,(err,comment)=>{
        if(err)
            {console.log(err);res.redirect("back");}
        else
            {
                res.render("comments/edit",{comment:comment,hotel:req.params.id});
            }
    });
});

router.put("/:cid",middlewareObj.checkCommentAuthorization,(req,res)=>{
    Comment.findByIdAndUpdate(req.params.cid,req.body.comment,{new:true},(err,res)=>{
        if(err)
        {console.log(err);res.redirect("back");}
        
        Hotel.findById(req.params.id).populate("comments").exec(function (err, hotel) {
            if (err) {
                req.flash("error", err.message);
                return res.redirect("back");
            }
            // recalculate campground average
            hotel.rating = calculateAverage(hotel.comments);
            //save changes
            hotel.save();
            req.flash("success", "Your review was successfully edited.");
        res.redirect("/hotels/"+req.params.id);
        });
    });
});

router.delete("/:cid",middlewareObj.checkCommentAuthorization,(req,res)=>{
    Comment.findByIdAndRemove(req.params.cid,(err)=>{
        if(err)
            {console.log(err);res.redirect("back");}
         Hotel.findByIdAndUpdate(req.params.id, {$pull: {comments: req.params.cid}}, {new: true}).populate("reviews").exec(function (err, hotel) {
            if (err) {
                req.flash("error", err.message);
                return res.redirect("back");
            }
            // recalculate campground average
            hotel.rating = calculateAverage(hotel.comments);
            //save changes
            hotel.save();
            req.flash("success", "Your review was deleted successfully.");
            res.redirect("/hotels/"+req.params.id);
        });
         
    });
});

function calculateAverage(reviews) {
    if (reviews.length === 0) {
        return 0;
    }
    var sum = 0;
    reviews.forEach(function (element) {
        sum += element.rating;
    });
    return sum / reviews.length;
}

module.exports=router;