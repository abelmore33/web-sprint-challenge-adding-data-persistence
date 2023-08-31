// build your `/api/projects` router here
const express = require("express");

const router = express.Router();

const Projects = require("./model");

router.get("/", (req, res, next) => {
  Projects.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.get("/:project_id", (req, res, next) => {
  Projects.findById(req.params.project_id)
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Projects.add(req.body)
    .then((projects) => {
      res.status(202).json(projects);
    })
    .catch(next);
});

module.exports = router;
