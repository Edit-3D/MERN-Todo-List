const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

router.post("/api/todos", async function (req, res, next) {
  try {
    const todo = new Todo(req.body);
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    return next(error);
  }
});
router.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Error fetching todos" });
  }
});

module.exports = router;
