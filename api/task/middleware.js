const Tasks = require("./model");

const validateTask = (req, res, next) => {
  const { project_id } = req.body;
  if (!project_id) {
    res.status(400).json({
      message: "missing project_id",
    });
  } else {
    next();
  }
};

module.exports = { validateTask };
