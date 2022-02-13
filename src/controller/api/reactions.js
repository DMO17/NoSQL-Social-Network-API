const { Thoughts, Users } = require("../../models");

const createReaction = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const { username, reactionBody } = req.body;

    const checkIfThoughtExists = await Thoughts.findById(thoughtId);
    if (!checkIfThoughtExists) {
      console.log("[ERROR]: No Thought with that id exists");
      return res
        .status(400)
        .json({ success: false, message: "Failed to create reaction" });
    }

    const checkIfUserExists = await Users.findOne({ username });
    if (!checkIfUserExists) {
      console.log("[ERROR]: No user with that username exists");
      return res
        .status(400)
        .json({ success: false, message: "Failed to create reaction" });
    }

    const addReaction = await Thoughts.findByIdAndUpdate(
      thoughtId,
      {
        $push: { reactions: { reactionBody, username } },
      },
      { new: true }
    );

    return res.json({ success: true, data: addReaction });
  } catch (error) {
    console.log(`[ERROR]: Failed to create reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create reaction" });
  }
};

const deleteReaction = async (req, res) => {
  try {
    const { reactionId, thoughtId } = req.params;

    const checkIfThoughtExists = await Thoughts.findById(thoughtId);

    if (!checkIfThoughtExists) {
      console.log("[ERROR]: No Thought with that id exists");
      return res
        .status(400)
        .json({ success: false, message: "Failed to create reaction" });
    }

    const deleteReaction = await Thoughts.findByIdAndUpdate(
      thoughtId,
      {
        $pull: { reactions: { _id: reactionId } },
      },
      { new: true }
    );

    if (!deleteReaction) {
      console.log("[ERROR]: No Reaction with that id exists");
      return res
        .status(400)
        .json({ success: false, message: "Failed to delete reaction" });
    }

    return res.json({ success: true, data: deleteReaction });
  } catch (error) {
    console.log(`[ERROR]: Failed to to delete friend | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to to delete friend" });
  }
};

module.exports = { createReaction, deleteReaction };
