// will have all availabilities until oauth is done!

//  @desc       get availabilities
//  @route      GET /api/availabilities
//  @access     Private
const getAvailabilities = (req, res) => {
  res.status(200).json({ message: "Get availabilities" });
};

//  @desc       set availabilities
//  @route      POST /api/availabilities
//  @access     Private
const setAvailabilities = (req, res) => {
  res.status(200).json({ message: "Set availability" });
};

//  @desc       Update availabilities
//  @route      PUT /api/availabilities/:id
//  @access     Private
const updateAvailabilities = (req, res) => {
  res.status(200).json({ message: `Update availability ${req.params.id}` });
};

//  @desc       Delete availability
//  @route      DELETE /api/availabilities
//  @access     Private
const deleteAvailabilities = (req, res) => {
  res.status(200).json({ message: `Delete availability ${req.params.id}` });
};

module.exports = {
  getAvailabilities,
  setAvailabilities,
  updateAvailabilities,
  deleteAvailabilities,
};
