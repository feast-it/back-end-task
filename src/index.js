const express = require("express");

var bodyParser = require("body-parser");

const app = express();
const port = 3000;

const supplierRoute = require("./routes/suppliers");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use("/suppliers", supplierRoute);

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
