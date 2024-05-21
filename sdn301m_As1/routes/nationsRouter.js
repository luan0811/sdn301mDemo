const express = require("express");
const bodyParser = require("body-parser");

const nationsRouter = express.Router();

nationsRouter.route("/")

.all((req, res, next) => {
  resstatusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
})
.get( (req, res) => {
  res.end("Show all members of Blackpink");
})
.post( (req, res) => {
  res.end(
    "Blackpink will ad a new member with name: " +
      req.body.name +
      "and nation: " +
      req.body.nation
  );
})
.put((req, res) => {
  res.statusCode = 403;
  res.end("Not support!!!");
});
delete( (req, res) => {
  res.end("Blackpink giai tan");
});
//GET
nationsRouter.route("/:nationId")
 .get( (req, res) => {
  res.end("This is information of " + req.params.nationId);
});
//POST
nationsRouter.route("/:nationId")
.post( (req, res) => {
    res.end(
      "Naitons will ad a land with name: " +
        req.body.name +
        " and address: " +
        req.body.address
    );
  })
//PUT
  nationsRouter.route("/:nationId")
  .put((req, res) => {
    res.statusCode = 403;
    res.end("Not support!!!");
  });
//Delete
  nationsRouter.route("/:nationId")
  delete( (req, res) => {
  res.end("nations biến mất");
});



module.exports = nationsRouter;