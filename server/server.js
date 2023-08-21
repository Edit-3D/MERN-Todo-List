const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Routes
//var usersRoute = require("./Routes/users");
var todosRoute = require("./Routes/todos");

//Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1/todo-list", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

//Quick test for backend
app.get("/api", function (req, res) {
  res.json({ message: "Todo List Backend" });
});

//Importing the Routes
//app.use(usersRoute);
app.use(todosRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
