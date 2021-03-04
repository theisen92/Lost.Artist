if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
  
  // Required External Modules
  const express = require("express");
  const cors = require("cors");
  const helmet = require("helmet");
  const bodyParser = require("body-parser");
  const mysql = require("mysql");
  const path = require("path");
  
  let db = require("./models");
  
  // App/Port
  const app = express();
  const PORT = process.env.PORT || 8080;
 
  
  // use
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(cors());
  
  // ROUTES
  require("./routes")(app);
  

  
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
  