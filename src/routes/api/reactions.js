const { Router } = require("express");
const {
  createReaction,
  deleteReaction,
} = require("../../controller/api/reactions");

const router = Router({ mergeParams: true });

router.post("/", createReaction);
router.delete("/:reactionId", deleteReaction);

module.exports = router;
