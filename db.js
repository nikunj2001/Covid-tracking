const mongoose = require("mongoose");
const url = "mongodb+srv://rohit:12345@cluster0.xpext.mongodb.net/userDatabase?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(url, () => {
    console.log("connected successfully");
  });
};

module.exports = connectToMongo;
