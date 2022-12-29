const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotanv = require("dotenv");
const { bgCyan } = require("colors");
require("colors");
const connectDb = require("./config/config");
const userRoutes = require("./routes/userRoutes");
const invoiceRoutes = require('./routes/invoiceRoutes');
//dotenv config
dotanv.config();
//db config
connectDb();
//rest object
const app = express();

//middlwares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//routes
app.use('/bill', invoiceRoutes);

app.get("/", (req, res) => res.status(200).send("Hello"))
app.use("/users", userRoutes);

//route item
const itemRoute = require('./routes/itemRoute')
app.use("/", itemRoute)


//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`.bgCyan.white);
});