const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const router1 = require("./routes/db1router.js");
const router2 = require("./routes/db2router.js");

app.use(cors());
app.use(express.json());
app.use("/api/products", router1);
app.use("/api/reviews", router2);

const port = process.env.PORT || 3000;
const connectDatabases = async () => {
  try {
    const db1Connection = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB1_PASSWORD}@cluster0.lxec8.mongodb.net/db1?retryWrites=true&w=majority`
    );
    console.log("Connected to Database 1");

    const db2Connection = mongoose.createConnection(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB2_PASSWORD}@cluster0.feosi.mongodb.net/db2?retryWrites=true&w=majority`
    );
    console.log("Connected to Database 2");

    return { db1Connection, db2Connection };
  } catch (err) {
    console.error("Error while connecting to the databases: ", err);
    process.exit(1);
  }
};

connectDatabases().then(() => {
  app.listen(port, () => {
    console.log("Server is running on port 3000");
  });
});
