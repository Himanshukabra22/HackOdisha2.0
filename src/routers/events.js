const express = require("express");
const router2 = new express.Router();
const multer = require("multer");
const EventsData = require("./models/event");

// Storage
// const Storage = multer.diskStorage({
//     destination: "uploads",
//     filename: (req, file, cb) =>{
//         cb(null, file.originalname);
//     },
// });

// const upload = multer({
//     storage: Storage
// }).single("testImage");





