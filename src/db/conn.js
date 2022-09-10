const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/UsersInfo",{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() =>{
    console.log("Connection 2 is sucessful"); 
}).catch((e) =>{
    console.log("No connection"); 
    console.log(e); 
});

