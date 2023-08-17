var mongoose = require("mongoose");

userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("user", userSchema);
