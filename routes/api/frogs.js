const express = require("express");
const router = express.Router();
const headers = require('../../middleware/headers')

let frogs = require('../../frogs_metadata.js');

router.get("/", headers, (req, res) => {
  res.json(frogs);
});

router.get("/:id.json", headers, (req, res) => {
  const found = frogs.some(frog => frog.edition === parseInt(req.params.id));

  if (found) {
    res.json(frogs.filter(frog => frog.edition === parseInt(req.params.id))[0]);
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;