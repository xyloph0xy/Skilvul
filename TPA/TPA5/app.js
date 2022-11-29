//file utama
const express = require('express'); //install express

const app = express() //buat app dengan express

const mongoose = require ('mongoose');

const db  = require('./config/db');

const allRoutes = require('./routes');

const PORT = process.env.PORT || 3000
//inisialisasi port , process.env.PORT = sever akan menentukan portnya sendiri, 3000 akan digunakan apabila process.env.PORT kosong

db.
then(()=>{
  console.log("database terkoneksi");
})
.catch((err)=>{
  console.log("error");
}) //digunakan untuk mengetes apakah db sudah terkoneksi

app.use(express.json())
app.use(allRoutes) //menandakan menggunakan toutes yang ada di file ./routes/index.js

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
})
//proses akan dijalankan pada port yang ditentukan