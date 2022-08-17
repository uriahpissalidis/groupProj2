const express = require("express");
const router = express.Router();
const {
  getAvailabilities,
  setAvailabilities,
  updateAvailabilities,
  deleteAvailabilities,
} = require("../controllers/availabilityController");

const { protect } = require("../middleware/authMiddleware");

//VERIFY IF THESE WORK
router.get("/", (protect, getAvailabilities));
router.post("/", (protect, setAvailabilities));
router.put("/:id", (protect, updateAvailabilities));
router.delete("/:id", (protect, deleteAvailabilities));

module.exports = router;
