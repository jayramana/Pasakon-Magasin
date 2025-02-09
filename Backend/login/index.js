const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require("./routes/authrouter");
const authR = require("./routes/userrouter");


const app = express();
const port = 8000;
app.use(cors())
app.use(express.json());
app.use("/api/auth", routes);
app.use("/api/auth", authR);

const authString = `mongodb+srv://jrs:dKkXhHWpEvryenkY@authcluster.4dasp.mongodb.net/?retryWrites=true&w=majority&appName=AuthCluster`
mongoose.connect(authString).then(() => {
    console.log("Connected to Auth Server")
    app.listen(port,() => {
        console.log(`App listening on port ${port}`);
    })
}).catch((err) => {
    console.log("Error");
    process.exit(1);
})
