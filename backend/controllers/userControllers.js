const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const registerUser = asyncHandler(async () => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the feilds");
  }

  const userExists = await User.findone({ email });
  if (userExists) {
    res.status(400);
    throw new error("User Already Exists Please Login in");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
});

module.export = registerUser;
