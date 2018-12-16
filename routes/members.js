const moment = require("moment");
const faker = require("faker");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const members = [];
  for (let i = 0; i < 100000; i++) {
    members.push({
      _id: i,
      firstname: faker.name.firstName(),
      name: faker.name.lastName(),
      status: "Active"
    });
  }
  res.send(members);
});

module.exports = router;
