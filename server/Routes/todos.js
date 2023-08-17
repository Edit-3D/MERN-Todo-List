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

module.exports = router;
