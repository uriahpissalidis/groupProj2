//  @desc       Register new user
//  @route      POST /api/availabilities/:id
//  @access     Public
const registerUser = (req, res) => {
  // can't access protected route without being logged in
  // can't login without being registered
  res.json({ message: "Register User" });
};

//  @desc       Authenticate a user
//  @route      POST /api/users
//  @access     Public
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

//  @desc       Get user data
//  @route      POST /api/users/me
//  @access     Public
const getMe = (req, res) => {
  // getting id of logged in user
  res.json({ message: "User Data Display" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
