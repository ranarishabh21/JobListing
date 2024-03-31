const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  try {
    const headerToken = req.headers["authorization"];

    if (!headerToken) {
      return res.status(401).json({ message: "Unauthorised acess" });
    }

    const decode = jwt.verify(headerToken, process.env.SECRET_CODE);
    res.userId = decode.userId;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Something went wrong" });
  }
};

module.exports = verifyToken;
