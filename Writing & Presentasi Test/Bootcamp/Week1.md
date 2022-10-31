# DAY 1: 24 Oktober 2022

# Web Server dan RESTful API

## Server

### Apa itu server ?

Web server merupakan tempat yang digunakan untuk menampung codingan Back-End maupun Front-End.
Server sendiri terdiri dari dua bagian, yaitu :

1. Hardware
2. Software

Terdapat sebuah analogi yang menggambarkan hubungan antara Front-End, Back-End dan Server
<img src="./image/web-server.png">
Web application akan melakukan request ke server melalui API, kemudian request tersebut akan diproses oleh oleh server, data yang dibutuhkan ketika request diproses akan diambil dari database, setelah request selesai diproses data tersebut akan dikembalikan ke web application. Pada API sendiri dapat diberikan sistem keamanan supaya tidak semua orang dapat mengakses informasi yang tersimpan di dalam database.

### Arsitektur Web Service

<img src="./image/web-architecture1.png">
Kelebihan menggunakan arsitektur Front-End dan Back-End terpisah dibanding dengan arsitektur monolith:
1. Apabila salah satu fitur atau fungsi pada monolith rusak maka seluruh sitem tidak dapat digunakan. Berbeda dengan arsitektur terpisah apabila salah satu fitur atau fungsi bermasalah, maka sistem akan tetap berjalan
2. Pada arsitektur terpisah, satu sistem Back-End dapat digunakan diberbagai aplikasi seperti aplikasi dekstop, mobile, web, dll 
<img src="./image/web-architecture2.png">
Pada web architecture di atas, kita akan mempelajari front-end & back-end serta REST.

## REST

### Pengertian REST

REpresentational State Transfer, salah satu arsitektur design yang digunakan untuk membuat web service. Format data yang dikirim dapat dalam bentuk XML, JSON, HTML, dan Plain Text.

### Aturan yang ada pada REST

1. Uniform interface, bentuk masing-masing API seragam untuk memudahkan orang-orang mempelajari atau membaca fungsi pada API
2. client-server, memiliki client dan server
3. stateless, tidak bergantung pada data yang dimiliki oleh user
4. cacheable, dapat dipasangkan pada sistem casing(?) manapun
5. Layered System
6. Code on demand (optional)

API yang menerapkan aturan arsitektur di atas disebut [**RESTful API**](https://restfulapi.net/)

RESTful API akan berjalan pada HTTP, HTTP sendiri memiliki beberapa [method](https://restfulapi.net/http-methods/) :

1. GET, digunakan untuk mengambil data dari API
2. POST, digunakan untuk mengirim data user ke API
3. DELETE, digunakan untuk menghapus data
4. PUT, digunakan untuk meng-Update data keseluruhan
5. PATCH, digunakan untuk meng-Update data sebagian. Namun penggunaan patch tidak disaranan karena tidak bersifat Universal

Bagimana membentuk alamat API yang bagus :

1. Gunakan sebuah nama benda, contoh `/user`
2. Gunakan _kebab-case_ untuk nama yang memiliki lebih dari satu suku kata, contoh `.user-device/`
3. Gunakan **lowercase**, jangan camelCase
   <img scr="./image/be-1.png">
   untuk mendapatkan satu data saja tambahkan id dibelakang alamat.

Pada proses transfer data terdapat [status code](https://restfulapi.net/http-status-codes/):

1. 2xx - success
2. 3xx - redirect
3. 4xx - client error, kesalahan yang terjadi pada pengguna
4. 5xx - server error, kesalahan yang terjadi pada server

# DAY 2: 25 Oktober 2022

# Node JS

Merupakan javaScript runtime yang dibangun di atas javaScript engine yang bernama _V8_. Runtime sendiri adalah sebuah tempat untuk mengeksekuis code yang kita buat. **Node Js** dibuat pada tahun 2009 oleh Ryan Dahl, Ryan Dahl ingin membuat sebuah web server yang menggunakan event loop, web server tersebut sudah pernah dicoba menggunakan bahasa pemrograman C, Lua, dan Haskell namun masih menemukan banyak problem. Akhirnya Ryan Dahl mencoba menggunakan V8 dan berhasil.

Fitur utama yang ada pada Node Js :

1. File system
2. Http dan Https
3. REPL (Read, Eval, Print, Loop)
4. Console

## [Install](https://nodejs.org/en/) node js

1. Ketik node-v untuk mengetahui apakah installasi berhasil atau tidak
2. Ketik npm-v untuk mengecek NPM yang sudah disediakan oleh NodeJs
3. Untuk melakukan running, ketik `node namaFile` pada terminal direktori file js nya

## Build in Module pada Node Js

1. **console**
   Sama seperti javaScript, node js memiliki module bawaan untuk menampilkan debug atau code secara interface

   <img src="./image/console.png">

2. **process**
   digunakan untuk mengontrol dan menampilkan proses yang sedang dijalankan

   <img src="./image/process.png">

3. **os**
   digunakan untuk menampilkan informasi terkait sistem operasi komputer yang digunakan user

   <img src="./image/os.png">

4. **util**
   alat bantu yang mendukung kebutuhan internal API di Node Js

   <img src="./image/util.png">

5. **events**

   <img src="./image/event.png">
   Callback dengan event memang hampir sama, bedanya callback dikerjakan setelah fungsi tak sinkron memberikan nilai kembalian, sedangkan  event dikerjakan dengan menggunakan pendekatan observer. Observer disini adalah fungsi yang dimanfaatkan sebagai pendeteksi ketika terjadi suatu event. Gunakan `method on(nama_event, fungsi observer)` untuk menambahkan observer sebagai detektor event.

6. **HTTP**
   built-in module tersebut memungkinakn node js mentransfer data melalui Hyper Text Transfer Protocol (HTTP) sehingga server HTTP dapat mendengarkan port server dan memberikan respons kembali ke klien.
   rules :

   - gunakan `require()`
   - gunakan method `createServer()` untuk membuat server HTTP
   - Callback function yang digunakan pada method `http.createServer()`, akan dijalankan ketika seseorang mencoba mengakses komputer pada port 8080.

   ```javascript
   const http = require("http");

   http
     .createServer((req, res) => {
       //createServer merupakan callback function,
       //yang isinya requestlistener(request dan respon)
       //req merupakan nama parameter dari request dan res untuk respon
       res.write("Hai");
       res.end();
       //res.end digunakan untuk memberi tanda bahwa respon sudah selesai
     })
     .listen(8080, () => {
       console.log("Server running at http://localhost:8080");
       //untuk menentukan port mana yang akan digunakan
       //port harus dicek apakah sudah dipakai atau belum, supaya tidak terjadi conflict
       //cek port https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers
     });
   //.listen digunakan untuk mengaktifkan apa yang kita buat
   ```

   <img src="./image/running-port.png">

   apabila alamat http://localhost:8080 diklik, maka akan muncul tampilan seperti dibawah ini

   <img src="./image/hasil-running.png">

   **HTTP Header**

   - gunakan method `res.writeHead()` untuk menambahkan header HTTP
   - Argumen pertama dari method res.writeHead() adalah status code
   - Argumen kedua adalah objek yang berisi header respons.
   - Respons yang dikembalikan dari HTTP web server bisa dalam berbagai format (JSON, HTML, XML, CSV, zip, audio, video, PDF ,dan lain-lain)

   ```javascript
   const http = require("http");

   http
     .createServer((req, res) => {
       res.writeHead(200, { "Content-Type": "text/html" });
       res.write("Hai");
       res.end();
     })
     .listen(8080, () => {
       console.log("Server running at http://localhost:8080");
     });
   ```

   <img src="./image/writeHead.png">

   **Membaca query string**

   - Callback function pada method http.createServer() memiliki argumen req yang mewakili request dari klien, sebagai objek (objek http.IncomingMessage).
   - Objek ini memiliki sebuah properti yang disebut "url" yang menyimpan informasi url yang sedang mengakses.

   ```javascript
   const http = require("http");

   http
     .createServer((req, res) => {
       res.writeHead(200, { "Content-Type": "text/html" });
       res.write(req.url);
       res.end();
     })
     .listen(8080, () => {
       console.log("Server running at http://localhost:8080");
     });
   ```

   <img src="./image/Luluk.png">

   apabila alamat yang diketik adalah http://localhost:8080/sofi , maka yang ditampilkan di browser adalah sofi

# DAY 3: 26 Oktober 2022

# [Express JS](https://www.npmjs.com/package/express)

Merupakan framework yang digunakan untuk membuat web server yang membantu pengelolaan aliran data dari server ke aplikasi, dibangun di atas node js dan bersifat open source.

## Membuat express nodejs

Untuk menggunakan express kita harus menginstallnya dengan mengetikkan `npm install express`, hasilnya akan terlihat seperti contoh di bawah ini :

`$ npm i express

added 57 packages, and audited 58 packages in 12s

7 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities`

setelah berhasil menginstall express maka akan ada beberapa file baru pada direktorinya.

Kemudian terdapat sebuah module yang digunakan untuk mempermudah develop server side application agar dapat merestart application secara otomatis selama proses development

cara installnya cukup ketikkan `npm install --save-dev nodemon` pada terminal direktori, kemudian akan muncul teks seperti di bawah ini

`added 32 packages, and audited 90 packages in 24s

10 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities`

kemudian install nodemon secara global untuk mempermudah penggunaannya
`$ npm i -g nodemon

added 32 packages, and audited 33 packages in 6s

3 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities`

cara menggunakan nodemon dalah `nodemon namaApp`

```javascript
const express = require("express"); //panggil express
const app = express(); //digunakan untuk membuat aplikasi express ke dalam variabel app

app.get("/movies", (req, res) => {
  // .get selain menerima path:/movies, juga menerima handler berupa callback dengan maksimal 3 parameter
  res.send("hai");
  //digunakan untuk mengirim objek, array, string dll
});

app.get("/biodata", (req, res) => {
  res.send([
    {
      nama: "Luluk",
      tempat: "Magelang",
      tanggal: "20 Juli 2002",
    },
  ]);
});

app.listen(7000);
```

hasil pemanggilan localhost menggunakan endpoint /movies

<img src="./image/express1.png">

hasil pemanggilan localhost menggunakan endpoint /biodata

<img src="./image/express2.png">

## Middleware pada express

Middleware merupakan function yang menjadi penyaring, penengah, yang memiliki akses ke object request dan response. Contoh kerja middleware adalah pada fitur login, middleware akan menyaring apakah password sudah sesuai atau belum untuk bisa dikelola di controller.
const express = require('express');//panggil express
const app = express();//digunakan untuk membuat aplikasi express ke dalam variabel app

```javascript
app.use(express.json());
//.json digunakan untuk parsing request ke json ketika melakukan post
//app.use digunakan untuk menggunakan function middleware

app.get("/biodata", (req, res) => {
  res.send([
    {
      nama: "Luluk",
      tempat: "Magelang",
      tanggal: "20 Juli 2002",
    },
  ]);
});

app.post("/biodata", (req, res) => {
  //post digunakan untuk menerima inputan user dr request
  //untuk menggunakan post diperlukan adanya middleware
  const data = req.body;
  biodata.push(data);
  // console.log(data);
  //menampilkan data yang dikirim oleh user ke dalam terminal
  res.status(201);
  //digunakan untuk memberi status code
  res.send("oke");
});

app.listen(7000);
```

#
