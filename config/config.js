const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = () => {
    mongoose
        .connect(`mongodb+srv://test:${process.env.DB_PASSWORD}@cluster0.i2opxrl.mongodb.net/Kashier?retryWrites=true&w=majority`)
        .catch((err) => console.log(err));
};

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error", err);
});

module.exports = connectDb;