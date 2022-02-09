const mongoose = require("mongoose");
const { users, thoughts, responses } = require("./data");
const { Users } = require("../models");
const { addThoughts, addReactions, addFriends } = require("../util/seed");

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
    const newUserDataWithReactions = addReactions(allUsersFromDb, responses);
    const newUserDataWithThoughts = addThoughts(
      allUsersFromDb,
      thoughts,
      newUserDataWithReactions
    );
    await Users.deleteMany({});
    await Users.insertMany(newUserDataWithThoughts);
    console.log(
      "[INFO]: User data with random number of thoughts and reactions has been seeded in the mongoDB"
    );

    const latestUserData = await Users.find({});
    // console.log(latestUserData);
    const completeUserData = addFriends(latestUserData);
    console.log(completeUserData, completeUserData.length);
    await Users.deleteMany({});
    await Users.insertMany(completeUserData);
    console.log(
      "[INFO]: Complete User data with random number of thoughts, reactions and friends has been seeded in the mongoDB"
    );

    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR] :  Connection to db has failed | ${error.message}`);
  }
};
init();
