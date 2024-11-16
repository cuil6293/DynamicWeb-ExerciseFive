const express = require("express");
const firebase = require("firebase/app");
const app = express();
const port = 3000;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "dynamic-web-exercise-fiv-b94e7.firebaseapp.com",
  projectId: "dynamic-web-exercise-fiv-b94e7",
  storageBucket: "dynamic-web-exercise-fiv-b94e7.firebasestorage.app",
  messagingSenderId: "27403229332",
  appId: "1:27403229332:web:08c596a782d467e6927c81",
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index.js");
const createPostRoute = require("./routes/createPost.js");
const singlePostRoute = require("./routes/singlePost.js");

app.use("/", indexRoute);
app.use("/create", createPostRoute);
app.use("/post", singlePostRoute);
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Exercise Five app listening on port ${port}`);
});

module.exports = app;
