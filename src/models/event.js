const mongoose = require("mongoose");
const validator = require("validator");

const eventSchema =  new mongoose.Schema({
    eventname:{
        type: String,
        required: true,
        unique:true,
        trim: true
    },
    about:{
        type: String,
        required: true,
        unique:true,
        trim: true
    },
    date:{
        type: Date,
        required: true,
        trim: true
    },
    time: {
        type:String,
        required: true,
        unique: true,
        trim: true
    },
    location:{
        type: String,
        required: true,
        trim: true
    },
    organiser:{
        type: String,
        required: true,
        trim: true
    },
    poster:{
       data: Buffer,
       contentType: String
    },
    Ngocode:{
        type: Number,
        required: true,
        unique: true,
        trim: true
    },  
});

// Creating a new collection and passing the schema 
const EventsData = new mongoose.model("EventData", eventSchema);

module.exports = EventsData;