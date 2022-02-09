const { Schema } = require("mongoose");
const moment = require("moment");

const reactionSchema = new Schema({
  // reactionId: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   auto: true,
  // },

  reactionBody: {
    type: String,
    required: true,
    max: 280,
  },

  username: {
    type: String,
    ref: "user",
  },

  createdAt: {
    type: Date,
    default: moment(),
  },
});

module.exports = reactionSchema;
