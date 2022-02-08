const users = [
  {
    username: "bobsmith",
    email: "bobsmith@email.com",
    thoughts: [
      {
        thoughtText: "NoSQL is super easy",
        // createdAt: "20th Mar 2021 14:00",
        username: "bobsmith",
        reactions: [
          {
            // reactionId: "123",
            reactionBody: "Yes I agree with you!!",
            username: "janesmith",
            // createdAt: "20th Mar 2021 14:10",
          },
          {
            // reactionId: "456",
            reactionBody: "Yup agree",
            username: "tomsmith",
            // createdAt: "20th Mar 2021 14:15",
          },
          {
            // reactionId: "789",
            reactionBody: "I am struggling with NoSQL",
            username: "jacksmith",
            // createdAt: "20th Mar 2021 14:18",
          },
        ],
      },
    ],
  },
];

module.exports = users;
