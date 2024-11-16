const express = require("express");
const router = express.Router();
const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

router.get("/", (request, response) => {
  response.send("Please include a post ID");
});

router.get("/:postID", (request, response) => {
  const postID = request.params.postID;
  const postQuery = firestore.getDoc(firestore.doc(db, "posts", postID));
  postQuery
    .then((res) => {
      const post = rest.data();
      if (!post) response.send("Data does not exist");
      response.send(post);
    })
    .catch((error) => {
      console.log(error);
      return response.send(error);
    });
});

module.exports = router;
