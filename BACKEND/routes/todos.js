const express = require("express");
const routes = express.Router();
const {
  getTodos,
  createTodo,
  deleteTodo,
  getTodo,
} = require("../controllers/totosController");

routes.get("/", getTodos);
routes.get("/:id", getTodo);
routes.post("/", createTodo);
routes.delete("/:id", deleteTodo);

module.exports = routes;
