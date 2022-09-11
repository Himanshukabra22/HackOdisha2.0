const mongoose = require("mongoose");
const validator = require("validator");

const userSchema =  new mongoose.Schema({
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
        type: String,
        required: true,
        minlength: 10,
        trim: true
    },
    address:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
        // minlength: 4,
        // maxlength:10,
        // trim: true
    },
    confirmpassword:{
        type: String,
        required: true
        // minlength: 4,
        // maxlength:10,
        // trim: true
    },
   
});

// Creating a new collection and passing the schema 
const UsersData = new mongoose.model("UserData", userSchema);

module.exports = UsersData;