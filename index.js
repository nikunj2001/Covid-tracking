require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
const path = require("path");
const port = process.env.PORT || 5000;
connectToMongo();
const app = express();
app.use(cors());

//middle ware
console.log(process.env.PORT);
app.use(express.json());
app.use(require("./routes/auth"));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static("frontend/build"));
  app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
app.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
