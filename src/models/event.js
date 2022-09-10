const mongoose = require("mongoose");
const validator = require("validator");

const eventSchema =  new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique:true,
        trim: true
    },
    Dob:{
        type: Date,
        required: true,
        trim: true
    },
    email: {
        type:String,
        required: true,
        unique: [true, "Email is already present"],
        validate(value){
            if (!validator.isEmail(value)) {
                throw new error("Invalid Email")
            }
        }
    },
    contact:{
        type: Number,
        required: true,
        unique: true,
        minlength: 10,
        trim: true
    },
    address:{
        type: String,
        unique:true,
        required: true,
        trim: true
    },
    password:{
        type: Number,
        required: true,
        unique: true,
        minlength: 4,
        maxlength:10,
        trim: true
    },
    Confirmpassword:{
        type: Number,
        required: true,
        unique: true,
        minlength: 4,
        maxlength:10,
        trim: true
    },
   
});

// Creating a new collection and passing the schema 
const EventsData = new mongoose.model("EventData", eventSchema);

module.exports = EventsData;