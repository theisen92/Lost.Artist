const apiRouter = require("express").Router();

apiRouter.use("/users", require("./users"));
apiRouter.use("/items", require("./items"));

module.exports = apiRouter;