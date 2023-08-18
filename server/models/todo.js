var mongoose = require("mongoose");

todoSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  text: { type: String, required: true },
  priority: { type: String, enum: ["Low", "Medium", "High"], required: true },
  status: { type: String, enum: ["Incomplete", "Complete"], required: true },
});

module.exports = mongoose.model("todo", todoSchema);
