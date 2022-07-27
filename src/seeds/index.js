const mongoose = require("mongoose");
const { users, thoughts, responses } = require("./data");
const { Users, Thoughts } = require("../models");
const {
  addThoughts,
  addReactions,
  addFriends,
  addCorrectThoughtsInUserDoc,
} = require("../helper/seedUtil");

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/socialNetworkDb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[INFO] : Successfully connected to db");

    // BULK CREATE USERS IN DOCUMENT
    await Users.deleteMany({});
    await Users.insertMany(users);
    console.log("[INFO]: User data has been seeded in the mongoDB");

    // ADD RANDOMLY GENERATED NUMBER OF FRIENDS IN USER DOCUMENT
    const userInfoFromDb = await Users.find({});
    const allUsernames = await Users.find({}).select(["_id"]);
    const userDataWithFriends = addFriends(userInfoFromDb, allUsernames);
    await Users.deleteMany({});
    await Users.insertMany(userDataWithFriends);
    console.log(
      "[INFO]: User data with random number friends has been seeded in the mongoDB"
    );

    // BULK CREATE THOUGHTS AND RANDOM REACTION FOR EACH THOUGHT
    const allUsersFromDb = await Users.find({});
    const newUserDataWithThoughts = addThoughts(
      allUsersFromDb,
      thoughts,
      responses
    );
    await Thoughts.deleteMany({});
    await Thoughts.insertMany(newUserDataWithThoughts);
    console.log(
      "[INFO]: User data with random number of thoughts and reactions has been seeded in the mongoDB"
    );

    // seed thoughts in to user document
    const finalUserData = await Users.find({});
    const finalThoughtData = await Thoughts.find({});
    const combineUserThoughtData = addCorrectThoughtsInUserDoc(
      finalUserData,
      finalThoughtData
    );
    await Users.deleteMany({});
    await Users.insertMany(combineUserThoughtData);
    console.log(
      "[INFO]: Complete User data with random number friends and matching thoughts has been seeded in the mongoDB"
    );

    await mongoose.disconnect();
    console.log("[INFO] : Successfully dis-connected from db");
  } catch (error) {
    console.log(`[ERROR] :  Connection to db has failed | ${error.message}`);
  }
};

init();
