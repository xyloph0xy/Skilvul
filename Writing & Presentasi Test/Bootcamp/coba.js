const express = require('express');//panggil express
const app = express();//digunakan untuk membuat aplikasi express ke dalam variabel app

app.use(express.json());
//.json digunakan untuk parsing request ke json ketika melakukan post
//app.use digunakan untuk menggunakan function middleware

const biodata =  []


app.post("/biodata",(req,res)=>{
   //post digunakan untuk menerima inputan user dr request
   //untuk menggunakan post diperlukan adanya middleware
   const data = req.body;
   biodata.push(data);
   //digunakan untuk menambahkan data respone yang di request oleh user
   res.send(data)
   //menampilkan data yang dikirim oleh user ke dalam terminal
   res.status(201)
   //digunakan untuk memberi status code
   
})

app.get("/biodata",(req,res)=>{
   res.send(biodata)
})



app.listen(7000);