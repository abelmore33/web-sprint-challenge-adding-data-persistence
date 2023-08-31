// build your `/api/tasks` router here

const express = require("express");

const { validateTask } = require("./middleware");

const router = express.Router();

const Tasks = require("./model");

router.get("/", (req, res, next) => {
  Tasks.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.get("/:resource_id", (req, res, next) => {
  Tasks.findById(req.params.resource_id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post("/", validateTask, (req, res, next) => {
  Tasks.add(req.body)
    .then((projects) => {
      res.status(202).json(projects);
    })
    .catch(next);
});

module.exports = router;
