// const express = require("express");
// const router = new express.Router();

// const UsersData = require("./models/user");

// router.post("/user", async (req,res) =>{
//     try {
//     //    const addingUsersRecord = new UsersData(req.body);
//     //    console.log(req.body);
//     //    const insertUsers = await addingUsersRecord.save();
//     //    res.status(201).send(insertUsers);
//     console.log(reg.body.username);
//     } catch (e) {
//        res.status(400).send(e);
//     }
// });

// // we will handle get requests
// router.get("/user", async (req,res) =>{
//     try {
//        const getUsers = await UsersData.find();
//        res.send(getUsers);
//     } catch (e) {
//        res.status(400).send(e);
//     }
// });

// // router.get("/mens/:id", async (req,res) =>{
// //     try {
// //        const _id = req.params.id;
// //        const getMen = await MensRanking.findById(_id);
// //        res.send(getMen);
// //     } catch (e) {
// //        res.status(400).send(e);
// //     }
// // });

// // router.patch("/mens/:id", async (req,res) =>{
// //     try {
// //        const _id = req.params.id;
// //        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body,{
// //            new: true
// //        });
// //        res.send(getMen);
// //     } catch (e) {
// //        res.status(500).send(e);
// //     }
// // });

// // router.delete("/mens/:id", async (req,res) =>{
// //     try {
// //        const _id = req.params.id;
// //        const deleteMen = await MensRanking.findByIdAndDelete(_id);
// //        res.send(deleteMen);
// //     } catch (e) {
// //        res.status(500).send(e);
// //     }
// // });

// module.exports = router;


