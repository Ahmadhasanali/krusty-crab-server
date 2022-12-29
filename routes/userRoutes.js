const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();

//routes
//Method - POST
router.post("/login", async (req, res) => {
    try {
        const { userId, password } = req.body;
        const user = await userModel.findOne({ userId, password, verified: true });
        if (user) {
            res.status(200).send(user);
        } else {
            res.json({
                message: "Login Fail",
                user,
            });
        }
    } catch (error) {
        console.log(error);
    }
});

//Method - POST
router.post("/register", async (req, res) => {
    try {
        const newUser = new userModal({ ...req.body, verified: true });
        await newUser.save();
        res.status(201).send("new User added Successfully!");
    } catch (error) {
        res.status(400).send("error", error);
        console.log(error);
    }
});

module.exports = router;