// will have ALL availabilities until oauth is done!
// after oauth we can handle one

const asyncHandler = require("express-async-handler");
const { globalAgent } = require("http");
const Availability = require("../models/availabilityModel");
const User = require("../models/userModel");

//  @desc       get availabilities
//  @route      GET /api/availabilities
//  @access     Private
const getAvailabilities = asyncHandler(async (req, res) => {
  const availabilities = await Availability.find({ user: req.user });

  res.status(200).json({ message: "Get availabilities" });
});

//  @desc       Set availabilities
//  @route      POST /api/availabilities
//  @access     Private
const setAvailabilities = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const availability = await Availability.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(availability);
});

//  @desc       Update availabilities
//  @route      PUT /api/availabilities/:id
//  @access     Private
const updateAvailabilities = asyncHandler(async (req, res) => {
  //getting the availability by the id in the URL
  const availability = await Availability.findById(req.params.id);

  //checking if the availability exists
  if (!availability) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id);

  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  //make sure only the logged in user matches the availability user
  if (availability.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedAvailability = await Availability.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedAvailability);
});

//  @desc       Delete availability
//  @route      DELETE /api/availabilities
//  @access     Private
const deleteAvailabilities = asyncHandler(async (req, res) => {
  const availability = await Availability.findById(req.params.id);

  if (!availability) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id);

  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  //make sure only the logged in user matches the availability user
  if (availability.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await Availability.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAvailabilities,
  setAvailabilities,
  updateAvailabilities,
  deleteAvailabilities,
};
