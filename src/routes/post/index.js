const { Router } = require("express");
const { createposts, findallposts } = require("../../controllers/posts");
const route = Router();

route.get("/", async (req, res) => {
  const posts = await findallposts();
  res.status(200).send(posts);
});
route.post("/", async (req, res) => {
  const { userId, title, body } = req.body;
  console.log(req.body);

  if (!userId || !title || !body) {
    return res.status(400).send({
      Error: " Need userId  , title , body ",
    });
  }

  const post = await createposts(userId, title, body);
  res.status(201).send(post);
});
module.exports = {
  postroute: route,
};
