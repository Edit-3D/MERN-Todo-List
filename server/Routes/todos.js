const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

router.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Error fetching todos" });
  }
});

router.post("/api/todos", async function (req, res, next) {
  try {
    const todo = new Todo(req.body);
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    return next(error);
  }
});

router.delete("/api/todos/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findOneAndDelete({ id: id });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
});

router.put("/api/todos/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const updatedTodo = await Todo.findOneAndUpdate({ id: id }, req.body, {
      new: true,
    });
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(updatedTodo);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
