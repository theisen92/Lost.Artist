if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Required External Modules
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");

let db = require("./models");

// App/Port
const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());

const apiRouter = express.Router();

// use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
require("./routes/api")(app);
app.use("/api", apiRouter);
// apiRouter.use("/messages", messagesRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
