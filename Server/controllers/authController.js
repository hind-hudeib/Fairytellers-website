const Admin = require("../models/adminModel");
const Writer = require("../models/writerModel");
const Reader = require("../models/readerModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const errorHandler = require("../middleware/500");

const createToken = (req, res) => {
  const accessToken = jwt.sign(
    JSON.parse(
      JSON.stringify({
        userId: req.body._id,
        role: req.body.role,
        email: req.body.email,
      })
    ),
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1w" }
  );

  res.json({ Token: accessToken, data: req.body });
};

const loginWriter = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await Writer.findOne({ email: email });

    if (
      !user ||
      !(await bcrypt.compare(password, user.password)) ||
      user.is_delete
    ) {
      return res.status(401).send("incorrect email or password");
    }
    req.body = user;
    next();
  } catch (error) {
    errorHandler(error, req, res);
  }
};

const loginAdmin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await Admin.findOne({ email: email });

    if (
      !user ||
      !(await bcrypt.compare(password, user.password)) ||
      user.is_delete
    ) {
      return res.status(401).send("incorrect email or password");
    }
    req.body = user;
    next();
  } catch (error) {
    errorHandler(error, req, res);
  }
};

const loginReader = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await Reader.findOne({ email: email });

    if (
      !user ||
      !(await bcrypt.compare(password, user.password)) ||
      user.is_delete
    ) {
      return res.status(401).send("incorrect email or password");
    }

    if (!user.active) {
      return res.status(401).send("Don't have access");
    }
    req.body = user;
    next();
  } catch (error) {
    errorHandler(error, req, res);
  }
};

module.exports = {
  loginWriter,
  loginAdmin,
  loginReader,
  createToken,
};
