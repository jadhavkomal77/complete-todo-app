const Todo = require("../modules/Todo")

exports.getTodo = async (req, res) => {
    const result = await Todo.find({ userId: req.user })
    res.json({ message: "todo fetch success", result })
}
exports.addTodo = async (req, res) => {
    await Todo.create({ ...req.body, userId: req.user })
    res.json({ message: "todo add success" })
}
exports.updateTodo = async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "todo update success" })
}
exports.deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "todo delete success" })
}