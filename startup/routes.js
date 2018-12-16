const express = require("express");
const members = require("../routes/members");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/members", members);
  app.use(error);
};
