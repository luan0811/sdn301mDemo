const Players = require("../models/players");
class PlayerController {
  index(req, res, next) {
    Players.find({})
      .then((players) => {
        res.render("players", {
          title: "The list of Players",
          players: players,
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    const player = new Players(req.body);
    player
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
}
module.exports = new PlayerController();
