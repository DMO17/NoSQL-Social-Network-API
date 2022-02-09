const { Router } = require("express");
const { createFriend, deleteFriend } = require("../../controller/api/friends");

const router = Router();

router.post("/", createFriend);
router.delete("/:friendId", deleteFriend);

module.exports = router;
