const { Router } = require("express");
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
} = require("../../controller/api/thoughts");

const router = Router();

router.get("/", getAllThoughts);
router.get("/thoughtId", getThoughtById);
router.post("/", createThought);
router.put("/thoughtId", updateThoughtById);
router.get("/thoughtId", deleteThoughtById);

module.exports = router;
