const express = require("express");
const verifyjwt = require("../middleware/authmiddleware");
const accessControl = require("../middleware/accessmiddleware");
const router = express.Router();

router.post("/admin", verifyjwt, accessControl("admin"),(req, res) => {
  res.send("Welcome Admin");
});

router.post("/developer", verifyjwt,accessControl("admin","manager"), (req, res) => {
  res.send("Welcome Developer");
});

router.post("/user", verifyjwt,accessControl("admin","manager","user"), (req, res) => {
  res.send("Welcome User");
});

module.exports = router;
