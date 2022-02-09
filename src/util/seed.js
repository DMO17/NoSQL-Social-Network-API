const { thoughts } = require("../seeds/data");

const filteredArray = (array) => {
  return array
    .sort(() => Math.random() - 0.5)
    .filter((each, index) => {
      return index <= Math.floor(Math.random() * (3 - 1 + 1) + 0);
    });
};

const addThoughts = (usersData, thoughtsData, reactionData) => {
  return usersData.map((eachUser) => {
    const userId = eachUser._id.toString();

    const listOfUserThoughts = filteredArray(thoughtsData);

    const userThoughtsArray = listOfUserThoughts.map((each) => {
      return {
        thoughtText: each,
        username: eachUser.username,
        reactions: reactionData,
      };
    });

    return {
      username: eachUser.username,
      email: eachUser.email,
      thoughts: userThoughtsArray,
    };
  });
};

const addReactions = (userData, reactionData) => {
  const listOfUserReaction = filteredArray(reactionData);
  return listOfUserReaction.map((each) => {
    return {
      reactionBody: each,
      username: userData[Math.floor(Math.random() * userData.length)].username,
    };
  });
};

module.exports = { addThoughts, addReactions };
