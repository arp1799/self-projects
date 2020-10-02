var Hotel       = require("../models/hotel.js");
var Comment     = require("../models/comment.js");

var middlewareObj={};
middlewareObj.checkAuthorization=function(req,res,next){
    if(req.isAuthenticated()){
        Hotel.findById(req.params.id,(err,hotel)=>{
            if(err)
            {    console.log(err);res.redirect("back");}
            else
            {   
                if(hotel.author.id.equals(req.user._id)||req.user.isAdmin)
                    next();
                else
                {
                    req.flash("error","You don,t have permission to do that");
                    res.redirect("back"); 
                }    
            }  
        });
    }else
    {
        req.flash("error","You need to be logged to do that");
        res.redirect("back");
    }
}

middlewareObj.checkCommentAuthorization=function(req,res,next){ 
    if(req.isAuthenticated()){
        Comment.findById(req.params.cid,(err,comment)=>{
            if(err)
            {    req.flash("error","Hotel not found");;res.redirect("back");}
            else
            {   
                if(comment.author.id.equals(req.user._id)||req.user.isAdmin)
                    next();
                else
                 {req.flash("error","You don,t have permission to do that");   res.redirect("back");} 
            }  
        });
    }else
    {   req.flash("error","You need to be logged to do that");
        res.redirect("back");
    }
}

middlewareObj.checkCommentExistence = function (req, res, next) {
    if (req.isAuthenticated()) {
        Hotel.findById(req.params.id).populate("comments").exec(function (err,hotel) {
            if (err || !hotel) {
                req.flash("error", "Campground not found.");
                res.redirect("back");
            } else {
                // check if req.user._id exists in foundCampground.reviews
                var foundUserReview = hotel.comments.some(function (comment) {
                    return comment.author.id.equals(req.user._id);
                });
                if (foundUserReview) {
                    req.flash("error", "You already wrote a review.");
                    return res.redirect("/hotels/" + hotel._id);
                }
                // if the review was not found, go to the next middleware
                next();
            }
        });
    } else {
        req.flash("error", "You need to login first.");
        res.redirect("back");
    }
};

middlewareObj.isLoggedIn=function(req,res,next){
        if(req.isAuthenticated()){
            return next();
        }
        req.flash("error","You need to be logged to do that");
        res.redirect("/login");
}

module.exports=middlewareObj;