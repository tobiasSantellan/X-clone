import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username is already taken" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email is already taken" });
    }
  } catch (error) {}
};

export const login = async (req, res) => {
  res.json({
    data: "you hit the login endpoint",
  });
};

export const logout = async (req, res) => {
  res.json({
    data: "you hit the logout endpoint",
  });
};
