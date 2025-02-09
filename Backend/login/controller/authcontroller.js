const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Auth = require("../model/authmodel");

const register = async (req, res) => {
  try {
    const { name, password, email, role } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = new Auth({ name, password: hashedPass, email, role });
    await newUser.save();
    res
      .status(201)
      .json({ message: `User registered in with UserName : ${name}` });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const User = await Auth.findOne({ email });
    if (!User) {
      return res.status(404).json({ messsage: "User Not Found" });
    }

    const check = await bcrypt.compare(password, User.password);
    if (!check) {
      return res.status(401).send({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { id: User._id, role: User.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res
      .status(200)
      .json({
        token,
        user: { name: User.name, email: User.email, role: User.role },
      });
  } catch (err) {
    res.status(500).json({ message: err });
    console.log(err);
  }
};

exports.register = register;
exports.login = login;
