//
const mongoose = require('mongoose');
const {Schema} = mongoose;

const ToDoSchema = new Schema({
   nama : {
      type: String,
      required : true
   },
   deskripsi : String,
   deadline : {
      Type: Date,
   },
   keterangan : {
    type : String
   }
})
//nentuin struktur data

const ToDo = mongoose.model("ToDo",ToDoSchema)

module.exports = ToDo //diekspor supaya bisa dipanggil untuk melakukan berbagai macam query