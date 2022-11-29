const User = require("../models/user");
const ToDo = require("../models/ToDo");

module.exports = {
  getAllTodo: async (req, res) => {
    const {idUser} = req.params;
    try {
      const user = await User.findByIdAndUpdate(idUser).populate("ToDo");
      res.status(200).json(user)
    } catch (error) {
      res.status(404).json({
          message : "error todo"
          })
    } 
  },
  getTodoByID: async (req, res) => {
    const { id } = req.params;
    const todo = await ToDo.findById(id);
    try {
      res.status(200).json({
        message: "success",
        data: todo,
      });
    } catch (error) {
      res.status(404).json({
        message: "error",
      });
    }
  },
  addTodo: async (req, res) => {
    const {idUser} = req.params 
    const data = req.body;

    const todo = await ToDo(data);
    todo.save()
    try {
      const user = await User.findByIdAndUpdate(idUser,{
          $push: { 
              ToDo: todo,
          },
      });
      res.status(200).json(user)
    } catch (error) {
      res.status(404).json({
          message : "error todo"
          })
    } 
  },
  updateTodoByID: async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const update = await ToDo.updateOne({ _id: id }, data);
    try {
      res.status(200).json({
        message: "success",
        data: update,
      });
    } catch (error) {
      res.status(404).json({
        message: "error",
      });
    }
  },

  deleteTodoByID: async (req, res) => {
    const { idUser, id } = req.params;
    const todo = await ToDo.findById(id);
 
    try {
      const user= await User.findByIdAndUpdate(idUser,{
        $pull: { 
            ToDo: {_id : todo},
        },
    });
    user.save()
    // await ToDo.deleteOne(todo)
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      res.status(404).json({
        message: "error",
      });
    }
  },

  deleteTodo: async (req, res) => {
    const { idUser } = req.params;
    const todo = idUser.ToDo
    try {
      await ToDo.deleteOne(todo)
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      res.status(404).json({
        message: "error",
      });
    }
}
}
