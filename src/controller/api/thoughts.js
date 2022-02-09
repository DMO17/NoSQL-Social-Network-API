const { Thoughts } = require("../../models");

const getAllThoughts = async (req, res) => {
  try {
    const allThoughts = await Thoughts.find({}).select([
      "thoughts",
      "thoughtText",
      "createdAt",
      "username",
    ]);

    return res.json({ success: true, data: allThoughts });
  } catch (error) {
    console.log(`[ERROR]: Failed to get Thoughts | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get Thoughts" });
  }
};

const getThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const singleThought = await Thoughts.findById(thoughtId).select([
      "thoughts",
      "thoughtText",
      "createdAt",
      "username",
    ]);

    if (!singleThought) {
      console.log("[ERROR]: No thought with that ID exists");
      return res
        .status(400)
        .json({ success: false, message: "Failed to get thought" });
    }

    return res.json({ success: true, data: singleThought });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get thought" });
  }
};

const createThought = async (req, res) => {
  try {
    const { thoughts, thoughtText, username } = req.body;

    const createThought = await Thoughts.create({
      thoughts,
      thoughtText,
      username,
    });

    return res.json({ success: true, data: createThought });
  } catch (error) {
    console.log(`[ERROR]: Failed to to create Thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create Thought" });
  }
};

const updateThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const { thoughts, thoughtText, username } = req.body;

    const updateThought = await Thoughts.findByIdAndUpdate(thoughtId, {
      thoughts,
      thoughtText,
      username,
    });

    return res.json({ success: true, data: updateThought });
  } catch (error) {
    console.log(`[ERROR]: Failed to to update Thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to update Thought" });
  }
};

const deleteThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const singleThought = await Thoughts.findByIdAndDelete(thoughtId);

    if (!singleThought) {
      console.log("[ERROR]: No thought with that ID exists");
      return res
        .status(400)
        .json({ success: false, message: "Failed to delete thought" });
    }

    return res.json({
      success: true,
      message: " thought Deleted",
      data: singleThought,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get thought" });
  }
};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
};
