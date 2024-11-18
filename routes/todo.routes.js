const { getTodo, addTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller")
const { useProtected } = require("../middewares/auth.middleware")

const router = require("express").Router()

router
    .get("/get", useProtected, getTodo)
    .post("/add", useProtected, addTodo)
    .put("/update/:id", useProtected, updateTodo)
    .delete("/delete/:id", useProtected, deleteTodo)

module.exports = router
