// perhaps have this in
// days of the week
// then try and work from there
const mongoose = require("mongoose");

const availabilitySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Availability",
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timpestamps: true,
  }
);

module.exports = mongoose.model("Availability", availabilitySchema);
