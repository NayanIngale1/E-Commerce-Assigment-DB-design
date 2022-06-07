const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const userController = require("./controllers/user.controller");
const brandController = require("./controllers/brand.controller")


app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to E-Commerce DB API</h1>");
});

app.use("/users", userController);
app.use("/brands", brandController);


module.exports = app;
