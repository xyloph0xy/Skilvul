const User = require("../models/user")

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.find({},"-password -ToDo")
    try {
      res.status(200).json({
        message :"success",
        data: users
      })
    } catch (error) {
      res.status(500).json({
        message :"error"
      })
    }
  },

  getUserByID: async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id)
    try {
      res.status(200).json({
      message :"success",
      data:user
    })
  } catch (error) {
    res.status(404).json({
      message :"error"
    })
  }
  },


  deleteUserByID: async (req, res)=>{
    const { id } = req.params
    try {
        await User.deleteOne({_id: id})
        res.status(200).json({
        message: "succes"
    })
    } catch (error) {
        res.status(404).json({
        message: "error"
    })
    }
  },

  updateUserByID:async (req, res)=>{
    const data = req.body
    const { id } = req.params
    const update = await User.updateOne({_id: id},data);
    try {
        res.status(200).json({
            message: "Selamat tidak error *emot jempol",
            data : update
        })
    } catch (error) {
        res.status(404).json({
            message: "error bang"
        })
    }
  }
}