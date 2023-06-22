const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["Reader", "Writer"],
    required: true,
  },
  username: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    maxlength: 50,
  },
  is_delete: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const Charity = mongoose.model("Users", usersSchema);

module.exports = Charity;
