const mongoose = require("mongoose");
const schema = mongoose.Schema;

//create Schema
const UserSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
