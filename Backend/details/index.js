const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
const router1 = require("./routes/db1router.js");

app.use(cors());
app.use(express.json());
app.use("/api/products", router1);

const db1ConnectionString = `mongodb+srv://jrs:648JUNxml6krs0fZ@cluster0.lxec8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(db1ConnectionString)
  .then(() => {
    console.log("Connected to Database 1");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database: ", err);
    process.exit(1);
  });
