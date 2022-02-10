const { Users } = require("../../models");

const createFriend = async (req, res) => {
  try {
    const { userId } = req.params;
    const { yourFriendsId } = req.body;

    const checkIfUserExists = await Users.findById(userId);
    if (!checkIfUserExists) {
      console.log("[ERROR]: No user with that id exists");
      return res
        .status(400)
        .json({ success: false, message: "Failed to add friend" });
    }

    const checkIfFriendExists = await Users.findById(yourFriendsId);
    if (!checkIfFriendExists) {
      console.log("[ERROR]: No user (friend) with that id exists");
      return res
        .status(400)
        .json({ success: false, message: "Failed to add friend" });
    }

    if (
      checkIfUserExists.friends.includes(yourFriendsId) ||
      userId === yourFriendsId
    ) {
      console.log(
        "[ERROR]: That user already exists as a friend or you cant add yourself as a friend"
      );
      return res
        .status(400)
        .json({ success: false, message: "Failed to add friend" });
    }

    // const friends = yourFriendsId;

    const addFriend = await Users.findByIdAndUpdate(userId, {
      $push: { friends: yourFriendsId },
    });

    return res.json({ success: true, data: addFriend });
  } catch (error) {
    console.log(`[ERROR]: Failed to to add friend | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to to add friend" });
  }
};

const deleteFriend = (req, res) => {};

module.exports = { createFriend, deleteFriend };
