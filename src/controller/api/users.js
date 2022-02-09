const { Users } = require("../../models");

const getAllUsers = async () => {
  try {
    const allUsers = await Users.find({});

    return res.json({ success: true, data: allUsers });
  } catch (error) {
    console.log(`[ERROR]: Failed to get users | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get users" });
  }
};

const getUserById = async () => {
  try {
    const { userId } = req.params;
    const singleUser = await Users.findById(userId);

    if (!singleUser) {
      console.log("[ERROR]: No user with that ID exists");
      return res
        .status(400)
        .json({ success: false, message: "Failed to get user" });
    }

    return res.json({ success: true, data: singleUser });
  } catch (error) {
    console.log(`[ERROR]: Failed to get user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get user" });
  }
};

const createUser = async () => {
  try {
    const { username, email, thoughts = [], friends = [] } = req.body;

    const createUser = await Users.create({
      username,
      email,
      thoughts,
      friends,
    });

    return res.json({ success: true, data: createUser });
  } catch (error) {
    console.log(`[ERROR]: Failed to to create User | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create User" });
  }
};
const updateUserById = () => {};

const deleteUserById = async () => {
  try {
    const { userId } = req.params;
    const singleUser = await Users.findByIdAndDelete(userId);

    if (!singleUser) {
      console.log("[ERROR]: No user with that ID exists");
      return res
        .status(400)
        .json({ success: false, message: "Failed to delete user" });
    }

    return res.json({
      success: true,
      message: " User Deleted",
      data: singleUser,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to get user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get user" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
