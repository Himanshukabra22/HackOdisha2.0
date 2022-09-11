const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const hbs = require("hbs");
const router = require("./routers/users");
const multer = require("multer");
const EventsData = require("./models/event");
const UsersData = require("./models/user");

const port = process.env.PORT || 3000;
require("./db/conn"); // connection



const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

console.log(path.join(__dirname,"../public")); 
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path); 
hbs.registerPartials(partials_path);

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.use(router);


app.get("/", async (req,res) =>{
    res.render("index");
});

app.get("/eventpage", (req,res)=>{
    res.render("event");
  }); 

app.get("/signup", (req,res)=>{
    res.render("loginsignup");
  }); 

app.get("/login", (req,res)=>{
    res.render("loginsignup");
  }); 

app.get("/addevent", (req,res)=>{
    res.render("addevent");
  }); 

  app.post("/user", async (req,res) =>{
    try {
    //    const addingUsersRecord = new UsersData(req.body);
    //    console.log(req.body);
    //    const insertUsers = await addingUsersRecord.save();
    //    res.status(201).send(insertUsers); 
    console.log(req.body);
    console.log("hi");
    console.log(req.body.username);
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;
    console.log(cpassword);
    console.log(password);

    if(password == cpassword){
        // res.write("passwords matches");
        const registerUser = new UsersData({
          name: req.body.username,
          Dob: req.body.dateOfBirth,
          email: req.body.email,
          contact: req.body.contact,
          address: req.body.address,
          password: req.body.password,
          confirmpassword: req.body.confirmpassword
        })
        const create = async()=>{
          try {
            const registered = await registerUser.save();
          } catch (error) {
            console.log(error)
          }
        }
        create()

      res.status(201).render("event"); 
      // res.send("hi");
    }else{
      res.send("Passwords are not matching");
    }
   // res.send("success");
    } catch (e) {
       res.status(400).send(e);
    }
});


// login validataion

app.post("/login", async(req,res) =>{
  try {
    const name = req.body.username;
    const password = req.body.password;
    console.log(name);
    console.log(password);

    const username = await UsersData.findOne({name: name});

    if(username.password === password){
      res.status(201).render("index");
    }else{
      res.send("Invalid login details");
    }
    // res.send("success");
  } catch (e) {
    res.status(400).send("Invalid login details");
  }
});

app.listen(port, () =>{
    console.log(`connection is successful at ${port}`);
}); 