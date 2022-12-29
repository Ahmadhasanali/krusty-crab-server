const itemModel = require("../models/itemModel");

// get items
const getItemController = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200).send(items);
  } catch (error) {
    console.log(error);
  }
};

// add items
const addItemController = async (req, res) => {
  try {
    const newItem = new itemModel(req.body)
    await newItem.save()
    res.status(201).json({ message: "Item has been created!", newItem })
  } catch (error) {
    console.log(error);
    res.status(400).send("error", error)
  }
}

// update items
const updateItemController = async (req, res) => {
  try {
    const { itemId } = req.body
    await itemModel.findOneAndUpdate({ _id: itemId }, req.body, {
      new: true,
    })

    res.status(201).json("item Updated")
  } catch (error) {
    console.log(error);
    res.status(400).send("error", error)
  }
}

// delete items
const deleteItemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    await itemModel.findOneAndDelete({ _id: itemId });
    res.status(200).json(`item with id ${itemId} successfully deleted`);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

module.exports = {
  getItemController,
  addItemController,
  updateItemController,
  deleteItemController
};