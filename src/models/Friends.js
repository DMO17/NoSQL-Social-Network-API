const { Schema } = require("mongoose");

const friendSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = friendSchema;
