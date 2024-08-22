const express = require("express");
const User = require("../models/userModel");
const router = express.Router();
// Define a POST route to create a new user
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const userData = await User.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(201).json(userData);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// Define a GET route to check if the API is running
router.get("/", async (req, res) => {
  try {
    const showAll = await User.find();
    res.status(201).json(showAll);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

//get single user
router.get("/:id", async (req, res) => {
  const {id} = req.params;
  try {
    const showAll = await User.findById({_id: id});
    res.status(201).json(showAll);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

//delete a user
router.delete("/:id", async (req, res) => {
  const {id} = req.params;
  try {
    const deleteUser = await User.findByIdAndDelete({_id: id});
    res.status(201).json(deleteUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

//update user
router.patch("/:id", async (req, res) => {
  const {id} = req.params;
  const {name, email, age} = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(id, req.body, {new: true,});
    res.status(201).json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;