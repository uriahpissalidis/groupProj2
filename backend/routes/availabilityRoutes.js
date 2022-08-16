const express = require("express");
const router = express.Router();
const {
  getAvailabilities,
  setAvailabilities,
  updateAvailabilities,
  deleteAvailabilities,
} = require("../controllers/availabilityController");

router.get("/", getAvailabilities);

router.post("/", setAvailabilities);

router.put("/:id", updateAvailabilities);

router.delete("/:id", deleteAvailabilities);

module.exports = router;
