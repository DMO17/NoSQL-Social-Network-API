const { thoughts } = require("../seeds/data");

const addThoughts = (usersData, thoughtsData) => {
  return usersData.map((eachUser) => {
    const userId = eachUser._id.toString();

    const num = Math.floor(Math.random() * (2 - 1 + 1) + 0);
    const listOfUserThoughts = thoughts
      .sort(() => Math.random() - 0.5)
      .filter((each, index) => {
        return index <= num;
      });

    const userThoughtsArray = listOfUserThoughts.map((each) => {
      return {
        thoughtText: each,
        username: eachUser.username,
        reactions: [],
      };
    });

    return {
      username: eachUser.username,
      email: eachUser.email,
      thoughts: userThoughtsArray,
    };
  });
};

module.exports = { addThoughts };
