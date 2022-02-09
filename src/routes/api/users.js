const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require("../../controller/api/users");

const router = Router();

router.get("/", getAllUsers);
router.get("/userId", getUserById);
router.post("/", createUser);
router.put("/userId", updateUserById);
router.get("/userId", deleteUserById);

module.exports = router;
