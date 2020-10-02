var mongoose=require("mongoose");

var hotelSchema=new mongoose.Schema({
    name:String,
    image:String,
    imageId:String,
    price:String,
    desc:String,
    createdAt:{type:Date, default:Date.now},
    author:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        username:String
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    rating: {
        type: Number,
        default: 0
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
});

module.exports=mongoose.model("Hotel",hotelSchema);