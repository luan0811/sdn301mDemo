const hostname = "localhost";
const port = 5000;
const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const nationsRouter = require("./routes/nationsRouter");
const playersRouter = require("./routes/playersRouter");

app.use(bodyParser.json());

app.use("/nations", nationsRouter);
app.use("/players", playersRouter);
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use(morgan("dev"));

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});