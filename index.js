require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser")
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

var app = express();

app.use(cors());
// app.use();
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  const { originalname: name, mimetype: type, size } = req.file;

  res.json({ name, type, size });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
