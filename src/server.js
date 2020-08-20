const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");
const path = require("path");

const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

app.use(cors());
app.use(express.json());

try {
  mongoose.connect(process.env.MONGO_DB_SECRET_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected succesfuly");
} catch (err) {
  console.log(err);
}
app.use("/files", express.static(path.resolve(__dirname, "..", "files")));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
