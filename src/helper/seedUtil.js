const { thoughts } = require("../seeds/data");

const randomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

const randomlyGeneratedList = (array, num) => {
  return array
    .sort(() => Math.random() - 0.5)
    .filter((each, index) => {
      return index <= randomNumber(num);
    });
};

const randomFriendsListNoDuplicates = (userData) => {
  const listOfRandomFriendsIds = randomlyGeneratedList(
    userData,
    userData.length
  ).map((each) => each._id.toString());

  return listOfRandomFriendsIds.filter(
    (item, pos) => listOfRandomFriendsIds.indexOf(item) == pos
  );
};

const addFriends = (userDataArray, listOfUsernames) => {
  return userDataArray.map((eachUser) => {
    return {
      username: eachUser.username,
      email: eachUser.email,
      friends: randomFriendsListNoDuplicates(listOfUsernames),
    };
  });
};

const addReactions = (userData, reactionData) => {
  // const listOfUserReaction = randomlyGeneratedList(reactionData, 5);
  return randomlyGeneratedList(reactionData, 5).map((each) => {
    return {
      reactionBody: each,
      username: userData[Math.floor(Math.random() * userData.length)].username,
    };
  });
};

const addThoughts = (usersData, thoughtsData, reactionData) => {
  return thoughtsData.map((each) => {
    return {
      thoughtText: each,
      username:
        usersData[Math.floor(Math.random() * usersData.length)].username,
      reactions: addReactions(usersData, reactionData),
    };
  });
};

const addCorrectThoughtsInUserDoc = (userData, thoughtsData) => {
  return userData.map((user) => {
    const dataMatch = thoughtsData.find((thought) => {
      return thought.username === user.username;
    });
    return {
      username: user.username,
      email: user.email,
      thoughts: dataMatch ? [dataMatch._id.toString()] : [],
      friends: user.friends,
    };
  });
};

module.exports = {
  addThoughts,
  addReactions,
  addFriends,
  addCorrectThoughtsInUserDoc,
};
