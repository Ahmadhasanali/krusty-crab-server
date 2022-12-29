const Invoice = require("../models/invoiceModel");

const express = require("express");
const router = express.Router();

// Add Invoice
router.post("/", async (req, res) => {
    try {
      const newBill = new Invoice(req.body);
      await newBill.save();
      res.send("Bill Created Successfully!");
    } catch (error) {
      res.send(`something went wrong ${error}`);
      console.log(error);
    }
  });

// Get Invoice
router.get("/", async (req, res) => {
    try {
      const bills = await Invoice.find();
      res.send(bills);
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;