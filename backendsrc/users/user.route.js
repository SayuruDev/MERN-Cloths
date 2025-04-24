const express = require("express");
const User = require("./user.model");
const router = express.Router();

// Register endpoint
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ email, username, password });
    await user.save();
    res.status(201).send({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Error registering user", error);
    res.status(500).send({ message: "Error registering user" });
  }
});

router.get("/", async (req, res) => {
  res.send("Registration Router");
});

module.exports = router;
