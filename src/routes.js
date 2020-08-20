const express = require("express");
const multer = require("multer");

const UserControlller = require("./controllers/UserControlller");
const EventController = require("./controllers/EventController");
const uploadConfig = require("./config/upload");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get("/status", (req, res) => {
  res.send({ status: 200 });
});

// Event
routes.post("/event", upload.single("thumbnail"), EventController.createEvent);

// User
routes.post("/user/register", UserControlller.createUser);
routes.get("/user/:userId", UserControlller.getByUserId);

module.exports = routes;
