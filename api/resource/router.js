// build your `/api/resources` router here
// build your `/api/projects` router here
const express = require("express");

const router = express.Router();

const Resources = require("./model");

router.get("/", (req, res, next) => {
  Resources.getResources()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.get("/:resource_id", (req, res, next) => {
  Resources.findById(req.params.resource_id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Resources.add(req.body)
    .then((projects) => {
      res.status(202).json(projects);
    })
    .catch(next);
});

module.exports = router;
