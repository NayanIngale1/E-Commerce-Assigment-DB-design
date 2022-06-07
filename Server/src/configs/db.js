const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    "mongodb+srv://nayan:nayan123@e-commerce-db.dhw5e.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;
