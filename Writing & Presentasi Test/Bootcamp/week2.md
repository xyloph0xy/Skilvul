# Day 3: 2 November 2022

# Authentication & Authorization in Express

## Authentication vs Authorization vs Encryption

### Authentication

Authentication adalah suatu proses yang bertujuan untuk membuktikan identitas pengguna ketika ingin mengakses suatu sistem, mudahnya autentikasi akan memastikan bahwa itu benar-benar kamu atau bukan.

Autentikasi dapat dilakukan melalui 3 faktor utama, yaitu :

1. Knowledge, mengenai sesuatu yang kamu ketahui, misal username dan password
2. Possession, mengenai sesuatu yang kamu punya, misal kartu keamanan
3. Inherence, mengenai sesuatu tentang anda, biasanya berupa data biomtrik seperti fingerprint

Autentikasi yang hanya bergantung pada satu faktor disebut single-factor authentication, karena hanya bergantung pada satu faktor saja maka autentikasi tersebut menjadi semakin tidak aman.

### Authorization

Otorisasi adalah proses verifikasi yang menentukan hal yang boleh kamu lakukan. Contoh beberapa fungsi otorisasi pada keamanan web adalah

1. Mencegah pengguna memodifikasi akun satu sama lain
2. Melindungi data dari penyerang
3. Memberi batas akses pada layanan eksternal

### Encryption

Enkripsi adalah proses mengubah data menjadi format yang tidak dapat dibaca, data tersebut hanya akan dapat dibaca apabila kamu mempunyai kunci yang benar untuk mengartikannya.

Enkripsi sendiri terbagi menjadi 2 jenis:

1. Enkripsi simetris, hanya menggunakan satu kunci yang sama untuk penguncian dan pembukaan datanya
2. Enkripsi asimetris, memiliki 2 kunci, yaitu kunci publik dan pribadi. Kunci publik dapat diakses oleh publik, sedangkan kunci pribadi hanya dapat diakses oleh pemilik kunci untuk menjaga privasi. Jenis enkripsi ini lebih kompleks namun keamanannya lebih kuat

<img src="https://dwblog-ecdf.kxcdn.com/wp-content/uploads/2022/03/Cara-Kerja-Enkripsi.jpg" weidth="600" height="250">

## [Session VS Cookie VS LocalStorage](http://www.muhammadmiftahululum.com/2020/05/perbedaan-cookie-session-storage-local.html)

### Session

Sebuah penyimpanan data yang hanya bertahan ketika browser atau tab dibuka, apabila browser ditutup maka secara otomatis data yang disimpan di session storage akan hilang.

### Cookie

Sama seperti session, bedanya data pada cookie masih bisa digunakan setelah browser atau tab ditutup sesaui dengan waktu yang sudah diatur sebelumnya. Waktu bisa di set 1 jam hingga 1 hari bahkan 1 minggu. Cookies sering menyimpan informasi sensitif, terutama ketika digunakan pada manajemen session. Untuk itu cookies perlu ditambahkan tanggal kadaluarsa atau durasi sehingga cookie tidak bertahan lebih lama dari yang dibutuhkan. Untuk menambahkan durasi atau tanggal kadaluarsa dapat menggunakan [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) di Http response

```javascript
Set-Cookie: Key=Value; expires=Monday, 29-Nov-2021 07:30:10 GMT; HTTPOnly
```

atribut HttpOnly pada Set-Cookie di atas memastikan bahwa data tidak dapat diakses oleh script ketika menjalankan client-side. Hal ini dapat membantu mencegah dari serangan Cross-Site Scripting (XSS) attack yang mencoba untuk mencuri session cooie dan mengambil alih session korban

### Local Storage

Berbeda dengan session dan cookie, local storage ini akan tetap menyimpan data meskipun browser telah ditutup. Data yang ada pada local storage dapat dihapus dengan menjalankan perintah hapus atau clear data pada browser.

<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40puneetahuja_23950%2Fcookies-vs-localstorage-vs-sessionstorage-9cd77b864f&psig=AOvVaw1WF1ZyZmczNaW0fO3hEaL4&ust=1667666445871000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKjsi-P7lPsCFQAAAAAdAAAAABAO" weidth="600" height="250">

## [Session Based Authentication in Express](https://www.section.io/engineering-education/session-management-in-nodejs-using-expressjs-and-express-session/)

1. Menyiapkan library
   Install library express, express-session, dan cookie-parser menggunakkan command `npm install express express-session cookie-parser` - Express-session, framework yang digunakan untuk membuat dan mengatur middleware session - Cookie-parser, digunakan untuk mengurai cookie header untuk menyimpan data pada browser setiap session dibuat.
2. Menyiapkan middleware session
   - siapkan file html berisi form dan css, letakkan file css ke dalam folder views
   ```html
   <html>
     <head>
       <link rel="stylesheet" href="views/app.css" />
     </head>
     <body>
       <form action="/user" method="post">
         <h2>Login</h2>
         <div class="input-field">
           <input
             type="text"
             name="username"
             id="username"
             placeholder="Enter Username"
           />
         </div>
         <div class="input-field">
           <input
             type="password"
             name="password"
             id="password"
             placeholder="Enter Password"
           />
         </div>
         <input type="submit" value="LogIn" />
       </form>
     </body>
   </html>
   ```
3. Import semua library node.js
   ```javascript
   const express = require("express");
   const cookieParser = require("cookie-parser");
   const sessions = require("express-session");
   ```
4. inisialisasi express app
   ```javascript
   const app = express();
   const PORT = 4000;
   ```
5. Tambahkan Express-session options

   ```javascript
   // creating 24 hours from milliseconds
   const oneDay = 1000 * 60 * 60 * 24;

   //session middleware
   app.use(
     sessions({
       secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
       saveUninitialized: true,
       cookie: { maxAge: oneDay },
       resave: false,
     })
   );
   ```

   - secret, merupakan kunci string random yang bersifat unik yang digunakan untuk autentikasi session
   - resave, mengambil boolean value dengan value defaultnya dalah true
   - saveUninitialized, mengizinkan beberapa session uninitialized untuk dikirim ke penyimpan.
   - cookie: { maxAge: oneDay }, digunakan untuk mengatur waktu expiry

6. pisahkan file html form yang sudah dibuat tadi

   ```javascript
   // parsing the incoming data
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));

   //serving public file
   app.use(express.static(__dirname));
   ```

   Hal ini membantu kita untuk memisahkan method HTTP POST request dari dokumen HTML

7. atur Cookie-parser
   dilakukan supaya server dapat mengakses opsi yang diperlukan untuk menyimpan, membaca, dan mengakses cookie
   ```javascript
   // cookie parser middleware
   app.use(cookieParser());
   ```
8. atur authentication credentials(data yang wajib diisi)

   ```js
   //username and password
   const myusername = "user1"; //hanyacontoh
   const mypassword = "mypassword"; //hanyacontoh

   // a variable to save a session
   var session;
   ```

9. tambahkan endpoint

   - http://localhost:4000/

   ```js
   app.get("/", (req, res) => {
     session = req.session;
     if (session.userid) {
       res.send("Welcome User <a href='/logout'>click to logout</a>");
     } else res.sendFile("views/index.html", { root: __dirname });
   });
   ```

   Digunakan untuk menampilkan form html kepada user supaya user dapat mengisi form login, kemudian jika sudah login maka akan ditampilkan link logout.

   - http://localhost:4000/user

   ```js
   app.post("/user", (req, res) => {
     if (req.body.username == myusername && req.body.password == mypassword) {
       session = req.session;
       session.userid = req.body.username;
       console.log(req.session);
       res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
     } else {
       res.send("Invalid username or password");
     }
   });
   ```

   untuk membuat session, server akan memverifikasi data yang diterima di body request dengan username dan password pengguna.

   jika data yang dimasukkan valid, maka :

   > user akan diberikan akses yang diperlukan
   > server akan membuat ID session untuk mengidentifikasi session tersebut
   > server akan mengirim cookie ke browser client, ID session akan ditempatkan di cookie ini

   jika data yang dimasukkan tidak valid, maka server tidak akan memberikan akses ke resources, tidak ada session yang dinisialisasi dan tidak ada cookie yang disimpan

   - http://localhost:4000/logout

   ```js
   app.get("/logout", (req, res) => {
     req.session.destroy();
     res.redirect("/");
   });
   ```

   Ketika user log out, server akan menghancurkan session dan membersihkan cookie dari client-side. Cookie pada browser akan bersih ketika `maxAge` sudah kadaluarsa.

10. listen port
    ```js
    app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));
    ```
