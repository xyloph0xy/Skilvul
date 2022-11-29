const express = require("express");
const router = express.Router();

const {
  getAllTodo,
  getTodoByID,
  addTodo,
  updateTodoByID,
  deleteTodoByID,
  deleteTodo
} = require("../controllers/Todo.controller");

const verifyToken = require("../middleware/verifyToken")

router.get("/:idUser",verifyToken, getAllTodo);
router.get("/:idUser/:id",verifyToken, getTodoByID);
router.post("/:idUser",verifyToken, addTodo);
router.put("/:idUser/:id",verifyToken, updateTodoByID);
router.delete("/:idUser/:id",verifyToken, deleteTodoByID);
router.delete("/:idUser",verifyToken, deleteTodo);

module.exports = router;
