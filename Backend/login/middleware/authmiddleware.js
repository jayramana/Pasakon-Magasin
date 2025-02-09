const jwt = require("jsonwebtoken");

const verifyWebToken = (req, res, next) => {
  let token;
  const authH = req.headers.Authorization || req.headers.authorization;
  if (authH && authH.startsWith("Bearer ")) {
    token = authH.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token found" });
    }
    try {
      const dcde = jwt.verify(token, process.env.JWT_SECRET);
      req.user = dcde;
      console.log("The decoded user is : ", req.user);
      next();
    } catch (err) {
      res.status(400).json({ message: "Token is invalid" });
    }
  } else {
    res.status(404).json({ message: "No token recieved ! Authorization failed" });
  }
};

module.exports = verifyWebToken;
