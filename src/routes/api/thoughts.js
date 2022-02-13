const { Router } = require("express");
const reactions = require("./reactions");
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
} = require("../../controller/api/thoughts");

const router = Router();

router.get("/", getAllThoughts);
router.get("/:thoughtId", getThoughtById);
router.post("/", createThought);
router.put("/:thoughtId", updateThoughtById);
router.delete("/:thoughtId", deleteThoughtById);

router.use("/:thoughtId/reactions", reactions);

module.exports = router;
