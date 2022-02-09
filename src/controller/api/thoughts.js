const { Users } = require("../../models");

const getAllThoughts = async (req, res) => {
  try {
    const allThoughts = await Users.find({}).select(["thoughts"]);

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
    const { userId } = req.params;
    const singleThought = await Users.findById(userId).select(["thoughts"]);

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
const createThought = (req, res) => {};
const updateThoughtById = (req, res) => {};
const deleteThoughtById = (req, res) => {};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
};
