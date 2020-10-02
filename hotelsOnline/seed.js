var mongoose = require("mongoose");
var Hotel    = require("./models/hotel");
var Comment  = require("./models/comment");
var hotels=[
            {name:"diming gentle",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNQ-6v6jlOi5bhrNsVTZDKf_RC7t87CRiYNy8oFv1qziSkNGX5&usqp=CAU",desc:"blah blah blah"},
            {name:"diming gentle",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNQ-6v6jlOi5bhrNsVTZDKf_RC7t87CRiYNy8oFv1qziSkNGX5&usqp=CAU",desc:"blah blah blah"},
            {name:"diming gentle",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNQ-6v6jlOi5bhrNsVTZDKf_RC7t87CRiYNy8oFv1qziSkNGX5&usqp=CAU",desc:"blah blah blah"},
            {name:"diming gentle",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNQ-6v6jlOi5bhrNsVTZDKf_RC7t87CRiYNy8oFv1qziSkNGX5&usqp=CAU",desc:"blah blah blah"}
        
        ]

function seedDb(){
    Hotel.deleteMany({},(err,res)=>{
        // if(err)
        // {
        //     console.log(err);
        // }
        // console.log("Hotels removed");
        // hotels.forEach((hotel)=>{
        //     Hotel.create(hotel,(err,hotel)=>{
        //         if(err)
        //             console.log(err);
        //         else    
        //         {    console.log("added");
        //             Comment.create({
        //                 text:"place is great",
        //                 author:"user1"
        //             },(err,comment)=>{
        //                 if(err)
        //                     console.log(err)
        //                 else
        //                 {
        //                     hotel.comments.push(comment);
        //                     hotel.save();
        //                 }    console.log("created");
        //             });
        //         }
        //     })
        // })
    });
    
    
}

module.exports =seedDb;