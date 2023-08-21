/* const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/api/users", async function (req, res, next) {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    return next(error);
  }
});
router.get("/api/users/:username", async (req, res, next) => {
  const username = req.params.username;

  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
 */
