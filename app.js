//Understanding Middleware
"use strict";
const express = require("express");
const app = express();
// const cors = require("cors");

const { sup, how } = require("./middle");

app.use(sup);
// app.use(cors());

app.get("/", how, sup, (req, res) => {
  res.send({ data: "hi" });
});

app.listen(8000, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("listening on port 3000");
});