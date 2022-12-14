
require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const GuestModel = require("./model/user");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 3080;
const CONNECTION_URI = " ---- ";

mongoose.connect(CONNECTION_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err)
            throw err;
        else {
            console.log("Successfully connected to the Mongo Atlas CLUSTER --- and Database --- ");
        }
    }
);

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname + "/public")));

app.use('/', express.static('public/index.html'));

app.get('/api/listuser', async (req, res) => {
    GuestModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});

app.post('/api/adduser', async (req, res) => {
    const guestFullname = req.body.fullname;
    const guestPosition = req.body.position;
    const guestCompany = req.body.company;
    const guestComments = req.body.comments;

    const guestImageURL = req.body.imageUrl;
    const guestFacebookURL = req.body.facebookUrl;
    const guestTwitterURL = req.body.twitterUrl;
    const guestLinkedinURL = req.body.linkedinUrl;
    const guestInstagramURL = req.body.instagramUrl;
    const guestTiktokURL = req.body.tiktokUrl;

    const guest = new GuestModel({ 
        fullname : guestFullname, 
        position : guestPosition, 
        company : guestCompany ,
        comments : guestComments,
        imageUrl : guestImageURL,
        facebookUrl : guestFacebookURL,
        twitterUrl : guestTwitterURL,
        linkedinUrl : guestLinkedinURL,
        instagramUrl : guestInstagramURL,
        tiktokUrl : guestTiktokURL,
    });

    try {
        await guest.save();
        res.send("guest user created");
    } catch (err) {
        console.log(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server has started. This server is listening to port ${ PORT }`);
});
