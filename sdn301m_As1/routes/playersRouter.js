const express = require("express");
const bodyParser = require("body-parser");

const playersRouter = express.Router();

playersRouter.route("/")

.all((req, res, next) => {
  resstatusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
})
.get( (req, res) => {
  res.end("Show all players of England");
})
.post( (req, res) => {
  res.end(
    "SouthGate will ad players with name: " +
      req.body.name +
      " and nation: " +
      req.body.nation
  );
})
.put((req, res) => {
  res.statusCode = 403;
  res.end("Not support!!!");
});
delete( (req, res) => {
  res.end("Players is being out");
});
//GET
playersRouter.route("/:playerId")
 .get( (req, res) => {
  res.end("This is information of " + req.params.playerId);
});
//POST
playersRouter.route("/:playerId")
.post( (req, res) => {
    res.end(
      "Show name of players: " +
        req.body.name +
        " and age: " +
        req.body.age
    );
  })
//PUT
playersRouter.route("/:playerId")
.put((req, res) => {
    res.statusCode = 403;
    res.end("Not support!!!");
  });
//DELETE
playersRouter.route("/:playerId")
delete( (req, res) => {
    res.end("Players is being out");
  });
module.exports = playersRouter;