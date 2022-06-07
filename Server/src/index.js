const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to E-Commerce DB API</h1>");
});

app.get("/users", userController);


module.exports = app;
