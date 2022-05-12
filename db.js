const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/iNotebook";

const connectToMongo = () => {
  mongoose.connect(url, () => {
    console.log("connected successfully");
  });
};

module.exports = connectToMongo;
