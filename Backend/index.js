const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routers = require("./routes/router.js");

app.use(cors());
app.use(express.json());
app.use("/api/products", routers);



mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.lxec8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("DataBase Connected");
  })
  .then(() => app.listen(3000))
  .catch((err) => console.log("Error : ", err));
  

