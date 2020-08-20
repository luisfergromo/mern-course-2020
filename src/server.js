const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const RegisterController = require("./controllers/RegisterControlller");

const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello!");
});
// app.post("/register", (req, res) => {
//   res.send("Hello from register");
// });
app.post("/register", RegisterController.store);

try {
  mongoose.connect(process.env.MONGO_DB_SECRET_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected succesfuly");
} catch (err) {
  console.log(err);
}

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
