const mongoose = require("mongoose");

const Blackpink = require("./models/blackpink");
const url = "mongodb://localhost:27017/blackpinkVN";
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("connect thanh cong");
  const newBlackpink = Blackpink({
    name: "kha banh",
  });
  newBlackpink
    .save()
    .then((blackpink) => {
      console.log(blackpink);
      return Blackpink.find({}).exec();
    })
    .then((blackpink) => {
      console.log(blackpink);
    })
    // .then((blackpink) => {
    //   console.log(blackpink);

    //   return Blackpink.deleteOne({});
    // })
    .then(() => {
      return mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
    });
});
