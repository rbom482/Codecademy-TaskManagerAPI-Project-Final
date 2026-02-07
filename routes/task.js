const express = require("express");
const router = express.Router();

//controller functions
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require("../controllers/task");

//routes
router.get("/", getTasks);           // GET /task
router.post("/", createTask);         // POST /task
router.patch("/:id", updateTask);     // PATCH /task/:id
router.delete("/:id", deleteTask);    // DELETE /task/:id

module.exports = router;
