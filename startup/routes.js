const express = require("express");
const members = require("../routes/members");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());
  const cors = require("cors");
  //app.use(cors({ origin: "https://poc-react-member-search.herokuapp.com" }));
  app.use(cors({ origin: "http://localhost:3000" }));
  app.use("/api/members", members);
  app.use(error);
};
