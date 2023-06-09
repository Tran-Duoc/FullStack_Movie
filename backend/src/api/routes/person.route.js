const express = require("express");
const router = express.Router();

const {
  getDetailPerson,
  getMediaOfPerson,
} = require("../controllers/person.controller");

router.get("/detail/:id", getDetailPerson);
router.get("/media/:id", getMediaOfPerson);

module.exports = router;
