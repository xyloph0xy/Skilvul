const express = require('express');//panggil express
const app = express();//digunakan untuk membuat aplikasi express ke dalam variabel app

app.use(express.json());
//.json digunakan untuk parsing request ke json ketika melakukan post
//app.use digunakan untuk menggunakan function middleware

app.get("/biodata",(req,res)=>{
   res.send(
      [
         {
            nama: "Luluk",
            tempat: "Magelang",
            tanggal: "20 Juli 2002"
         }
      ]
   )
})

app.post("/biodata",(req,res)=>{
   //post digunakan untuk menerima inputan user dr request
   //untuk menggunakan post diperlukan adanya middleware
   const data = req.body;
   biodata.push(data);
   // console.log(data);
   //menampilkan data yang dikirim oleh user ke dalam terminal
   res.status(201)
   //digunakan untuk memberi status code
   res.send("oke")
})

app.listen(7000);