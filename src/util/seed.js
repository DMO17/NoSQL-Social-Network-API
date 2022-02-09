const { thoughts } = require("../seeds/data");

const randomNumber = (num) => {
  return Math.floor(Math.random() * (num - 1 + 1) + 0);
};

const filteredArray = (array, num) => {
  return array
    .sort(() => Math.random() - 0.5)
    .filter((each, index) => {
      return index <= randomNumber(num);
    });
};

const addThoughts = (usersData, thoughtsData, reactionData) => {
  return thoughtsData.map((each) => {
    return {
      thoughtText: each,
      username:
        usersData[Math.floor(Math.random() * usersData.length)].username,
      reactions: reactionData,
    };
  });
};

const addReactions = (userData, reactionData) => {
  const listOfUserReaction = filteredArray(reactionData, 5);
  return listOfUserReaction.map((each) => {
    return {
      reactionBody: each,
      username: userData[Math.floor(Math.random() * userData.length)].username,
    };
  });
};

checkIfIncluded = (userData) => {
  const listOfFriends = filteredArray(userData, userData.length)
    .map((each) => each._id.toString())
    .map((each) => each);

  return listOfFriends.filter(function (item, pos) {
    return listOfFriends.indexOf(item) == pos;
  });
};

const addFriends = (userData) => {
  // return userData.map((each) => {
  //   return {
  //     username: each.username,
  //     email: each.email,
  //     thoughts: each.thoughts,
  //     // friends: [
  //     //   "6203b31b9456f356f13bf741",
  //     //   "6203b31b9456f356f13bf732",
  //     //   "6203b31b9456f356f13bf75f",
  //     //   "6203b31b9456f356f13bf77c",
  //     // ],
  //     friends: checkIfIncluded(userData),
  //   };
  // });
  const friendsList = checkIfIncluded(userData);
  return userData.map((each) => {
    return {
      username: each.username,
      email: each.email,
      thoughts: each.thoughts,
      friends: friendsList,
    };
  });
};

module.exports = { addThoughts, addReactions, addFriends };
