# NoSQL-Social-Network-API

## Description

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the last part of this course, you’ll use several of the technologies that social networking platforms use in their full-stack applications. Because the foundation of these applications is data, it’s important that you understand how to build and structure the API first.

The project is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I used an Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the [Express.js](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages, i have also used a JavaScript date library of your choice or the native JavaScript `Date` object to format timestamps. Also , no seed data is provided, i created my own data using postman after creating my API.

## Demo

To see the demo of the project click the following sections;

- <a href='https://tech-blogs-m-v-c.herokuapp.com/'>Users </a>
- <a href='https://tech-blogs-m-v-c.herokuapp.com/'>Thoughts </a>

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation

Run the following script to install the packages required for the application:

```
npm install express

npm install date-fns

npm install mongoose

```

## Scripts

Ensure that the package.json file has the following script:

```
"start": "node src/server.js",

 "dev": "nodemon src/server.js",

 "seed": "node src/seeds/index.js"

```

## Usage

To use the application run the following script:

```
npm run start

npm run seed

npm run dev

```

## Tools/Technologies

- node.js
- express Js
- No sql
- JavaScript
- mongoose
- mongodb
- postman
