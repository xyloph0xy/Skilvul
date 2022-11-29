const mongoose = require('mongoose');
const {Schema} = mongoose

const userSchema = new Schema({
    name: {
        type : String,
        require : true
    },
    email: {
        type : String,
        require : true,
        unique : true
    },
    password: {
        type : String,
        require : true,
        min : 8
    },
    ToDo:[{
        type: Schema.Types.ObjectId,
        ref : 'ToDo'
    }]
})
//nentuin struktur data

const User = mongoose.model("User",userSchema)

module.exports = User //diekspor supaya bisa dipanggil untuk melakukan berbagai macam query