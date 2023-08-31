// build your `Task` model here
// build your `Resource` model here

const db = require("../../data/dbConfig");

async function getTasks() {
  const Tasks = await db("Tasks");

  return Tasks;
}

async function findById(resource_id) {
  const resource = await db("Tasks").where("resource_id", resource_id);

  return resource;
}

async function add(newProject) {
  // EXERCISE D
  /*
      1D- This function creates a new scheme and resolves to _the newly created scheme_.
    */
  const [resource_id] = await db("Tasks").insert(newProject);
  const newResource = await findById(resource_id);

  return { resource_name: newResource[0].resource_name };
}

module.exports = {
  getTasks,
  findById,
  add,
};
