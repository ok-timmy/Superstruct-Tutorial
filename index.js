const express = require("express");
const AuthRoute = require("./Routes/auth");
const PostRoute = require("./Routes/post");

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  return res.status(200).json({
    message: "This app is working normally now"
  })
});
app.use("/api/auth", AuthRoute);
app.use("/api/post", PostRoute)

  app.listen(5000, () => {
    console.log("Note app listening on port 5000");
  });