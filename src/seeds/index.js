const mongoose = require("mongoose");
const { users, thoughts } = require("./data");
const { Users } = require("../models");
const { addThoughts } = require("../util/seed");

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

    // bulk create thoughts for each user

    const allUsersFromDb = await Users.find({});

    const newUserDataWithThoughts = addThoughts(allUsersFromDb, thoughts);

    await Users.deleteMany({});
    await Users.insertMany(newUserDataWithThoughts);

    console.log(
      "[INFO]: User data with thoughts has been seeded in the mongoDB"
    );

    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR] :  Connection to db has failed | ${error.message}`);
  }
};
init();
