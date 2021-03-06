const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  async createUser(req, res) {
    try {
      console.warn(req.body);
      const { firstName, lastName, password, email } = req.body;
      const existentUser = await User.findOne({ email });

      if (!existentUser) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
          firstName,
          lastName,
          password: hashedPassword,
          email,
        });
        return res.json(user);
      }
      return res.status(400).json({
        message:
          "email and / or user already exist! do you want to login instead?",
      });
    } catch (err) {
      console.warn(err);
      throw Error(`Error while registering a new user : ${err}`);
    }
  },
  async getByUserId(req, res) {
    const { userId: user_id } = req.params;

    try {
      const user = await User.findById(user_id);
      return res.json(user);
    } catch (err) {
      return res.status(400).json({
        message: "UserId not found",
      });
      // console.warn(err);
      // throw Error(`Error while registering a new user : ${err}`);
    }
  },
};
