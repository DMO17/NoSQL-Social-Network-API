const { Schema, model } = require("mongoose");
const moment = require("moment");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    min: 1,
    max: 280,
  },

  createdAt: {
    type: Date,
    default: moment(),
  },

  username: {
    type: String,
    ref: "users",
    required: true,
  },

  reactions: [reactionSchema],
});

const Thoughts = model("thoughts", thoughtSchema);

module.exports = Thoughts;
