const express = require("express");
const routes = express.Router();
const UserControlller = require("./controllers/UserControlller");

routes.get("/", (req, res) => {
  res.send("Hello!");
});

routes.post("/user/register", UserControlller.createUser);
routes.get("/user/:userId", UserControlller.getByUserId);

module.exports = routes;
