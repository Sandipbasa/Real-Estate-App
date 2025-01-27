import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
  try {
    // Destructure user input
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password asynchronously
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create a new user instance
    const newUser = new User({ username, email, password: hashedPassword });

    // Save to database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
