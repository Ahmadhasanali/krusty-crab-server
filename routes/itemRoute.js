const express = require("express");
const {
  getItemController,
  addItemController,
  updateItemController,
  deleteItemController
} = require("./../controllers/itemController");

const router = express.Router();

//routes
//Method - get
router.get("/get-item", getItemController)

//Method - add
router.post("/add-item", addItemController)

//Method - update
router.put("/update-item", updateItemController)

//Method - delete
router.post("/delete-item", deleteItemController)

module.exports = router;