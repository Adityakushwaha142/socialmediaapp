const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { db, Users, Posts, Comments } = require("./src/db/db");
const { postroute } = require("./src/routes/post/index");
const { userroute } = require("./src/routes/users/index");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(__dirname + "/src/public"));
app.use("/api/users", userroute);
app.use("/api/posts", postroute);

app.get("/", (req, res) => {
  res.send("welcome to the social media project ");
});
db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server started on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(new Error());
  });
