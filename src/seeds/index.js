const mongoose = require("mongoose");
const { users } = require("./data");

const { Users } = require("../models");

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/socialNetworkDb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[INFO] : Successfully connected to db");

    // bulk create students
    await Users.deleteMany({});
    await Users.insertMany(users);

    console.log("[INFO]: User data has been seeded in the mongoDB");

    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR] :  Connection to db has failed | ${error.message}`);
  }
};
init();
