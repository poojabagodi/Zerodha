
const express = require('express');
const router = express.Router(); // ✅ fix this line

const UserModel = require('../model/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Received signup body:", req.body);
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    
    const newUser = new UserModel({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Signup failed", details: err.message });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  console.log("Password from client:", password);
  console.log("🔥 Headers:", req.headers);
console.log("🔥 Body:", req.body);


  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      console.log("User not found for email:", email);
      return res.status(400).json({ message: "User not found" });
    }

    console.log("Hashed password from DB:", user.password);

    const isMatch = await bcrypt.compare(password, user.password);
     console.log("Comparison result:", isMatch);
    if (!isMatch) {
      console.log("Password mismatch");
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, "secret123", { expiresIn: "1d" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true in production
      sameSite: "Lax"
    });

    console.log("Login successful for:", user.email);
    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = router;
