const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models/user.model");
const secret = process.env['secret'];

const signupUser = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    const doesUserExist = await User.findOne({ username });

    if (doesUserExist) {
      return res.status(409).json({ success: false, message: "user already exists!" });
    } else {
      const user = new User({ username, email, password }); 
      await user.save();
      const token = jwt.sign({ userId: user._id }, secret, { expiresIn: "24h" });

      return res.json({ success: true, user, token, message: "User successfully added" })
    }

  } catch (error) {
    res.json({ success: false, errorMessage: errorMessage })
  }
};

module.exports = { signupUser };

