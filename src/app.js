const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
// const MensRanking = require("./models/mens"); // models
// const router = require("./routers/men");  // routing
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


// app.use(express.json());


app.get("/", async (req,res) =>{
    res.render("index");
});

app.get("/eventpage", (req,res)=>{
    res.render("event");
  }); 

app.get("/signup", (req,res)=>{
    res.render("loginsignup");
  }); 
// app.get('/event', (req, res) => { res.sendFile(__dirname + '/event.html'); });

// app.use(router);

app.listen(port, () =>{
    console.log(`connection is successful at ${port}`);
}); 