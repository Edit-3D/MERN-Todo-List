var mongoose = require("mongoose");

todoSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  priority: { type: String, enum: ["low", "medium", "high"], required: true },
  status: { type: Boolean, default: false, required: true },
});

module.exports = mongoose.model("todo", todoSchema);
