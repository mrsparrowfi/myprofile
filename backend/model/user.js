
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GuestSchema = new Schema({

    fullname : {
        type : String,
        required : [true, "Username is required"]
    },
    position : {
        type : String,
        required : [true, "Jobtitle is required"]
    },
    company : {
        type : String,
        required : [true, "Company Name is required"]
    },
    comments : {
        type : String,
        required : [true, "Comments is required"]
    },
    imageUrl : {
        type : String
    },
    facebookUrl : {
        type : String
    },
    twitterUrl : {
        type : String
    },
    linkedinUrl : {
        type : String
    },
    instagramUrl : {
        type : String
    },
    tiktokUrl : {
        type : String
    },
    publish : {
        type : Boolean,
        default : false
    }

});

const Guest = mongoose.model("guests", GuestSchema);
module.exports = Guest;
