# Day 1: 31 Oktober 2022

# Database Intro

### Database Introduction

Sekumpulan data yang dikelola dengan sedemikian rupa berdasarkan ketentuan tertentu yang saling berkaitan sehingga memudahkan dalam pengelolaannya. Lewat pengelolaan itulah pengguna bisa mendapatkan kemudahan dalam mencari sebuah informasi, membuang informasi, maupun menyimpan informasi. Selain pengertian database diatas, terdapat pengertian lain dari database yaitu sebuah sistem yang berguna untuk mengumpulkan file, arsip, atau tabel yang disimpan dan terhubung dalam berbagai media elektronik yang ada. Data kemudian dapat dengan mudah diakses, dikelola, dimodifikasi, diperbarui, dikendalikan, dan diatur. Sebagian besar database menggunakan bahasa kueri terstruktur (SQL) untuk menulis dan meminta data.

### Database Management System

Sebuah database biasanya memerlukan program perangkat lunak database yang komprehensif yang dikenal sebagai sistem manajemen database (DBMS). Sebuah DBMS berfungsi sebagai antarmuka antara database dan pengguna akhir atau program, memungkinkan pengguna untuk mengambil, memperbarui, dan mengelola bagaimana informasi diatur dan dioptimalkan. DBMS juga memfasilitasi pengawasan dan pengendalian basis data, memungkinkan berbagai operasi administratif seperti pemantauan kinerja, penyetelan, serta pencadangan dan pemulihan

### MySQL

MySQL merupakan sistem manajemen basis data relasional open source berbasis SQL. mysql dirancang dan dioptimalkan untuk aplikasi web yang dapat berjalan di platform apa pun. Dapat di install di [sini](https://dev.mysql.com/downloads/installer)

Keuntungan belajar mysql :

1. `Portabilitas`, MySQL dapat berjalan stabil pada berbagai sistem operasi seperti Windows, Linux, MacOS dll.
2. `Open Source`, MySQL didistribusikan sebagai open source sehingga dapat digunakan secara gratis.
3. `Multi User`, MySQL dapat digunakan oleh beberapa pengguna dalam waktu yang bersamaan tanpa mengalami masalah / konflik.

### Data type SQL

1. `number`, Tipe data Number adalah data yang berisi kumpulan karakter angka

  <img src="https://www.dumetschool.com/uploads/fck//Tipe-Tipe-Data-pada-MySQL-01-29112017.JPG">

2. `String`, tipe data berupa kumpulan karakter termasuk karakter simbol

  <img src="https://www.dumetschool.com/uploads/fck//Tipe-Tipe-Data-pada-MySQL-02-29112017.JPG">

3. `Boolean`, Tipe ini hanya menyimpan 2 tipe data yaitu TRUE dan FALSE, dan dapat di convert menjadi int dengan representasi TRUE = 1, dan FALSE = 0

4. `Date time`, Tipe ini merupakan tipe data untuk menyimpan tanggal dan waktu

  <img src="https://www.dumetschool.com/uploads/fck//Tipe-Tipe-Data-pada-MySQL-03-29112017.JPG">

### Key pada mysql

1. Primary Key
   Secara sederhana, Primary Key disebut juga dengan Kunci Primer. Kunci Primer tersebut dipilih sebagai identifikasi untuk membedakan satu baris dengan baris lainnya dalam suatu tabel. Pada dasarnya, setiap tabel hanya memiliki satu primary key saja.

Bentuk perintah dasar untuk membuat Primary Key dalam SQL adalah :

```sql
Column data_type1 PRIMARY KEY
```

2. Foreign Key
   Secara sederhana, foreign key dapat diartikan sebagai kunci asing. Definisi tersebut juga berlaku dalam pengolahan relasional database. Kunci asing (Foreign Key) adalah sebuah atribut atau gabungan atribut yang terdapat dalam suatu tabel yang digunakan untuk menciptakan hubungan (relasi) antara dua tabel.

# Mysql

Pada Materi MySQL Lanjutan ini kita akan mencoba memahami dengan contoh kasus database sebuah Book Store

- Key point dalam sebuah Book Store Application adalah mencatat setiap transaksi pembelian buku oleh customer
- Setiap transaksi pembelian buku harus tersimpan data sebagai berikut : Tanggal transaksi, id transaksi, buku

## SQL Command

```sql
SHOW Database;
```

Command ini digunakan untuk menunjukkan seluruh list database di mysql kita

## Database Commands

1. membuat database baru

```sql
CREATE DATABASE bookstore;
```

2. menggunakan database yang sudah ada

```sql
USE bookstore
```

3. digunakan untuk menghapus / menghilangkan database yang dipilih dari MySQL kita

```sql
DROP DATABASE bookstore
```

## Table command

1. Setelah masuk ke database yang dipilih, kita bisa menggunakan command untuk memodifikasi table di database tersebut, salah satunya adalah SHOW, untuk melihat semua ini table di database

```sql
SHOW TABLES
```

2. Membuat table baru di database dengan nama “books”. Sintaks yang dibuat menggunakan CREATE TABLE [name] dan memberikan definisi tiap kolom di table tersebut.

```sql
CREATE TABLE books (
  id INT(10) AUTO_INCREMENT PRIMARY KEY,
  authorl VARCHAR(10O) NOT NULL,
  author? VARCHAR(100),
  author3 VARCHAR(100),
  title VARCHAR(100) NOT NULL,
  description TEXT,
  place_sell CHAR(3),
  stock INT DEFAULT(O),
  creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

3. Menghapus table yang diinginkan

```sql
DROP TABLE books
```

4. Menambah atau menghilangkap kolom pada table

```sql
ALTER TABLE books
ADD
price INT,
status ENUM('available', 'out of stock', 'limited');

ALTER TABLE books
DROP COLUMN place.sell;
```

gunakan ALTER dan menggunakan ADD untuk menambah kolom atau DROP COLUMN untuk menghapus kolom seperti contoh diatas.

## Insert into

```sql
INSERT INTO books
(id, author1, author2, author3, title, description, creation_date, price, status, stock) VALUES
(2, 'jaya', 'rendi', '', 'buku 2', 'buku ini adalah bla bla...', '2021-10-10 10:10:10', 50000, 'available', 100),
(3, 'eddy', 'basuki', '', 'buku 3', 'buku ini adalah bla bla...', '2021-10-10 10:10:10', 40000, 'available', 25),
(4, 'joyo', 'susilo', '', 'buku 4', 'buku ini adalah bla bla...', '2021-10-10 10:10:10', 45000, 'available', 50);
```

Digunakan untuk menambah lebih dari 1 atau multiple kita dapat menggunakan query INSERT INTO lebih dari 1 assign values

## Select

1. Digunakan untuk melakukan query melihat isi seluruh data di table yang dipilih

```sql
SELECT * FROM books;
```

2. Melakukan query untuk beberapa kolom yang ingin dilihat seperti query diatas, jadi kita ingin melihat id, author1, author2, author3 di table books

```sql
SELECT author1, author2, author3, from books;
```

3. Membuat alias

```sql
SELECT author1 AS A1, author2 AS A2, author3 AS A3, from books;
```

Kita dapat menggunakan alias / AS untuk menggunakan mengubah nama kolom agar output kolomnya sesuai dengan yang kita inginkan

## Where

Query WHERE digunakan untuk mencari data dengan kondisi tertentu dengan command WHERE [column_name] = condition . Contoh diatas kita melakukan query dengan id = 1

```sql
SELECT * FROM books WHERE id = 1;
```

Kita juga dapat menggunakan WHERE lebih dari 1 parameter kondisi menggunakan IN. Contoh diatas kita query dengan kondisi id = 1 dan 2.

```sql
SELECT * FROM books WHERE id IN (1,2);
```

## AND , OR , NOT

Kita juga bisa mengkolaborasikan WHERE menggunakan kondisi lebih dari 1 menggunakan AND, OR dan NOT.

1. menggunakan AND untuk mencari kondisi id = 1 dan author1 = ‘jaya’ maka kita akan memunculkan row dengan 2 kondisi tersebut.

```sql
SELECT * FROM books WHERE id = 1 and authorl = 'jaya';
```

2. menggunakan OR untuk mencari query dengan kondisi salah satu.

```sql
SELECT * FROM books WHERE id = 1 OR authorl = 'eddy';
```

Contoh diatas kita akan mencari row dengan kondisi id = 1 atau author1 = ‘eddy’. Maka kita akan muncul 2 row dengan salah satu kondisi yang di declare.

3. NOT untuk mencari query yang tidak ada dalam kondisi yang di definisikan

```sql
SELECT * FROM books WHERE NOT id = 1;
```

Contoh diatas kita mencari query yang tidak mengandung id = 1, maka muncul 3 data dengan id yang tidak sama dengan 1

## ORDER BY

Terdapat command yang bisa kita gunakan untuk melakukan ordering menggunakan ORDER BY dengan menggunakan 2 kondisi yaitu ASC dan DESC. Struktur commandnya adalah ORDER BY [column_name] ASC / DESC.

```sql
SELECT * FROM books WHERE NOT id = 1
ORDER BY id DESC;
```

## GRUOP BY

```sql
SELECT * FROM books WHERE NOT id = 1
GROUP BY id DESC;
```

## lIMIT

Command LIMIT digunakan untuk membatasi berapa query yang akan dimunculkan dengan urutan dari atas. Contoh diatas adalah kita query dan memunculkan hanya 2 data.

```sql
SELECT * FROM books
LIMIT 2;
```

## UPDATE

Command UPDATE digunakan untuk melakukan perbaruan data di table. Contoh diatas adalah kita melakukan update data author1 dan title di row id = 1.

```sql
UPDATE books
SET authorl='pratama', title='buku 1'
WHERE id = 1;
```

## DELETE

Command DELETE digunakan untuk melakukan penghapusan data. Contoh diatas kita melakukan penghapusan data di id = 1

```sql
DELETE FROM books
WHERE id = 4
```

INGAT !! ketika ingin melakukan delete jangan lupa menggunakan WHERE agar semua data tidak terhapus

# Day 2: 1 November 2022

# Mysql Lanjutan

## Tools

1. Terminal
1. DBMS Management apps

## Relations di SQL

1. One to many

- Paling Sering Digunakan
- Satu baris dalam tabel dapat memiliki beberapa baris di table relasinya

2. Many to Many

- Digunakan ketika kedua tabel yang berelasi dapat memiliki beberapa baris di tabel relasinya.

3. One to One

- Sangat jarang digunakan
- Diimplementasikan dengan cara yang sama seperti One to Many tetapi dengan kondisi tambahan (foreign key merupakan primary key)

## Database Normalization

Merupakan teknik analisis data yang mengorganisasikan atribut-atribut data dengan cara mengelompokkan sehingga terbentuk entitas yang non-redundant, stabil, dan fleksible.

**Tujuan Database Normalization**

- Menghilangkan redundan data pada database.
- Memudahkan juka ada perubahan struktur table database.
- Memperkecil pengaruh jika ada perubahan dari struktur table database.

**Efek Jika Tidak Melakukan Database Normalization**

- INSERT Anomali : Situasi dimana tidak memungkinkan memasukkan beberapa jenis data secara langsung di database.
- DELETE Anomali : Penghapusan data yang tidak sesuai dengan yang diharapkan, artinya data yang harusnya tidak terhapus mungkin ikut terhapus.
- UPDATE Anomali : Situasi dimana nilai yang diubah menyebabkan inkonsistensi database, dalam artian data yang diubah tidak sesuai dengan yang diperintahkan atau yang diinginkan.

### Bentuk Database Normalization

1. First Normal Form (1NF)
   Menghilangkan multiple value pada sebuah kolom table database
   Sebuah table memenuhi kaidah 1NF jika :

   - Setiap kolom bernilai tunggal (single value)
   - Setiap kolom memiliki nama yang unik
   - Urutan penyimpanan data tidak menjadi masalah

2. Second Normal Form (2NF)

- Harus sudah dalam bentuk 1NF untuk mendapatkan 2NF
- Menghapus beberapa subset data yang ada pada tabel dan menempatkan mereka pada tabel terpisah.

3. Third Normal Form (3NF)
   Menghilangkan seluruh atribut atau field yang tidak berhubungan dengan primary key. Dengan demikian tidak ada ketergantungan transitif pada setiap kandidat key.

**Masih ada banyak bentuk database normalisasi, diantaranya :**

1. EKNF
2. BCNF
3. 4NF
4. 5NF
5. DKNF
6. 6NF

## Keys di SQL

1. Super Key
   Kumpulan dari satu atau lebih dari satu key yang dapat digunakan untuk mengidentifikasi record secara unik dalam sebuah tabel. Super Key adalah superset dari Candidate Key.

2. Candidate Key
   kumpulan satu atau lebih fields/columns yang dapat mengidentifikasi record secara unik dalam tabel. Bisa jadi ada beberapa Candidate Keys di dalam satu tabel, setiap Candidate Key bisa digunakan sebagai Primary Key. Candidate Key adalah super key yang tidak mempunyai value yang berulang

3. Primary Key
   kumpulan satu atau lebih fields/columns dari sebuah tabel yang secara unik mengidentifikasi sebuah record dalam tabel database. Valuenya tidak boleh berupa null ataupun duplicate value. Hanya boleh salah satu Candidate Key yang bisa menjadi Primary Key.

4. Alternate Key
   key yang bisa digunakan menjadi primary key. Pada dasarnya, Key ini merupakan candidate key yang tidak dijadikan primary key.

5. Unique Key
   Kumpulan dari satu atau lebih fields/columns di sebuah table database yang secara unik mengidentifikasi sebuah record dalam table database tersebut. Hampir sama dengan Primary key, namun value dari Unique Key bisa berupa satu buah null value di dalam sebuah table database, dan Unique Key tidak bisa memiliki duplicate values

6. Foreign Key
   Field di sebuah table database yang menjadi Primary Key di table database lain. Value dari Foreign key bisa menerima multiple null dan duplicate values.

## Join Multiple Tables

Mengambil records dari dua atau lebih table database yang memiliki relationship dan akan di sajikan dalam single result set.

1. INNER JOIN
   Semua baris akan diambil dari kedua table yang akan di JOIN, selama columns cocok dengan kondisi yang sudah di tentukan. Memungkinkan baris dari salah satu tabel muncul di hasil jika dan hanya jika kedua tabel memenuhi kondisi yang ditentukan dalam klausa ON.

2. LEFT JOIN
   Pada JOIN ini, semua records dari table di sisi kiri JOIN statement akan di pilih. Jika record yang di pilih dari table kiri tidak memiliki record yang cocok pada table JOIN yang kanan, maka record tersebut masih dipilih, dan kolom pada table yang kanan akan bernilai NULL.

3. right JOIN
   Pada JOIN ini, semua records dari table di sisi kiri JOIN statement akan di pilih, bahkan jika table di sebelah kiri tidak memiliki record yang cocok.

## Aggregate Functions

Mengambil satu nilai setelah melakukan perhitungan pada sekumpulan nilai

1. `MAX`, fungsi mengembalikan nilai terbesar dari kolom yang dipilih.
2. `MIN`, fungsi mengembalikan nilai terkecil dari kolom yang dipilih.
3. `SUM`, fungsi mengembalikan jumlah total kolom numerik.
4. `COUNT`, fungsi mengembalikan jumlah baris yang cocok dengan kriteria yang ditentukan.
5. `AVG`, fungsi mengembalikan nilai rata-rata kolom numerik

## UNION

Digunakan untuk menggabungkan kumpulan hasil dari dua atau lebih pernyataan SELECT.

- Setiap pernyataan SELECT dalam UNION harus memiliki jumlah kolom yang sama
- Kolom juga harus memiliki tipe data yang serupa
- Kolom dalam setiap pernyataan SELECT juga harus dalam urutan yang sama

## GROUP BY

Mengelompokkan baris yang memiliki nilai yang sama ke dalam baris ringkasan dan sering digunakan dengan fungsi agregat untuk mengelompokkan kumpulan hasil dengan satu atau lebih kolom.

## HAVING

HAVING ditambahkan ke SQL karena kata kunci WHERE tidak dapat digunakan dengan aggregate functions.

## LIKE & Wildcards

Operator LIKE digunakan dalam klausa WHERE untuk mencari pola tertentu dalam kolom. Sedangkan karakter wildcard digunakan untuk menggantikan satu atau lebih karakter dalam sebuah string

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

<img src="https://miro.medium.com/max/1100/1*HC1PWdue5ZofBEwOMEsBBA.png" weidth="600" height="250">

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

## JSON Web Token

Merupakan cara aman untuk mewakili sekumpuan informasi antara dua pihak dengan mendefinisikan JSON Object dalam RFC 7519. JWT bersifat aman karena ditandai secara digital menggunakan sepasang kunci rahasia atau pribadi. Token terdiri dari:

1. Header, mengandung informasi mengenai jenis token dan algoritma yang digunakan
2. Payload, berisi data yang ingin dikirim melalui token. Biasanya data ini berupa data yang bersifat unik bagi user, contoh email, id dan data role karena data tersebut akan digunakan sebgai tanda pengenal si pengirim token
3. Signature, merupakan hash gabungan dari heaer, payload dan secret key. Berguna untuk memverifikasi bahwa header maupun payload yang ada di token tidak berubah dari nilai asinya

<img src="https://supertokens.com/static/b0172cabbcd583dd4ed222bdb83fc51a/9af93/jwt-structure.png" weidth="600" height="200">

Install `npm install jsonwebtoken` pada terminal sebelum menggunakan jwt

```js
//memanggil jwt dari dependency
const { appendFile } = require("fs");
const jwt = require("jsonwebtoken");

//sign asynchronously, nilai privateKey bebas
jwt.sign(
  { foo: "bar" },
  "privateKey",
  { algortihm: "RS222" },
  function (err, token) {
    console.log(token);
  }
);

//contoh penerapan pada express
jwt.sign({ example }, "secret", { expiresIn: "10h" }, (error, token) => {
  if (error) {
    console.log(error);
  } else {
    resizeBy.json({
      token,
    });
  }
});

//contoh verify token pada express
const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};

//contoh penerapan pada express, pada routes tertentu hanya bisa diakses saat user melakukan login
app.post("/users/posts", verifyToken, (req, res) => {
  const newPost = req.body.post;
  jwt.verify(req.token, "secret", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: `Post Created......`,
        comment: newPost,
        authData,
      });
    }
  });
});
```

## Password Authentication (Bcrypt)

Semakin cepat function, semakin cepat pula hacker dapat mengambil password hashing melalui serangan brute-force. Sehingga menggunakan function yang lebih lambat dapat melindungi usermu. Untuk menangani masalah ini, kita dapat menggunakan algoritma bcrypt dan library.

function hash hanya dapat bekerja pada satu jalur, sehingga password tidak mudh diambil tanpa mengetahui salt, rounds, dan key (password).
Berbeda dengan enkripsi yang dapat dengan mudah di decrypt selama mengetahui algoritma enkripsinya.

### Hash + Salt

Salt merupakan value random yang ditambhakan kepada input function hashing untuk membuat setiap hash password yang unik. Salts membantu kita untuk mengurangi resiko serangan forcing attackers terhadap tabel hash.

# Day 4: 4 November 2022

# Sequelize

Merupakan sebuah ORM Node JS berbasis promise yang mendukung berbagai macam relational database seperti MySQL, PostgresQL, MariaDB, SQLite dan Microsoft SQL Server.

## ORM

Sebuah teknik pemrograman yang digunakan untuk mengkonversi data dari bahasa OOP menjadi database relational

### Installallation Sequelize

1. install sequelize-cli
   ketik `npm install -g sequelize-cli`, digunakan untuk memudahkan kita dalam menjalankan generator menggunakan terminal.

2. Install Sequelize

```js
npm install --save sequelize
install Driver Database
npm install --save mysql
```

digunakan untuk menginisiasi project

### Generate sequelize

`npx sequelize-cli init`, supaya dapat meng-generate code kita perlu melakukan inisialisasi pada project.
Setelah proses inisialisasi selesai maka akan muncul 4 folder baru :

1. config, terdapat sebuah file config yang memberi tahu CLI bagaimana melakukan cnnect dengan database
2. models, berisi semua models untuk project yang kamu buat
3. migrations, mengandung semua fle migration
4. seeders, berisi semua file seed

### Setting databse

```js
const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
```

### [Generate Model](https://sequelize.org/docs/v6/other-topics/migrations/)

```js
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

Command di atas akan membuat model file user di folder user dan membuat file migration dengan nama XXXXXXXXXXXXX-create-user.js di folder migration

### Running migrations

```js
npx sequelize-cli db:migrate
```

command di atas akan mengeksekusi step di bawah ini:

1. `SequelizeMeta`, tabel ini digunakan ntuk merekam migration yang di run di database terbaru
2. Mencari file migration yang belum di run dengan mengecek tabel `SequelizaMeta`, pada bagian ini akan merunning migration `XXXXXXXXXXXXX-create-user.js`
3. Membuat tabel `Users` dengan semua kolom yang ditentukan di file migration

### Undo

- `npx sequelize-cli db:migrate:undo` ,command tersebut digunakan untuk kembali ke migrasi yang paling terbaru.
- `npx sequelize-cli db:migrate:undo:all`, digunakan untuk kembali ke tahap inisial dengan meng-undo semua migrasi
- `npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js`, kamu juga dapat kembali ke migrasi tertentu dengan menyelipkaan nama di opsi `--to`

### Membuat first seed

Untuk mengatur data migrasi, kamu dapat menggunakan seeders. File seed adalah beberapa perubahan data yang dapat digunakan untuk mengisi tabel database dengan sebuah sampel, seed sendiri adalah data awal yang dapat digunakan untuk mengisi data di database untuk keperluan awal project menggunakan sequelize.

`npx sequelize-cli seed:generate --name demo-user`

command di atas akan membuat file di folder seedeers, nama file mungkin akan seperti XXXXXXXXXXXXXX-demo-user.js. ini akan mengikuti semantic up/down yang sama dengan file migrasi

di bawah ini adalah contoh cara menggunakan seed

```js
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "example@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
```

up digunakan untuk mengisi data di database, sedangkan down digunakan untuk menghapus semua data seed di database

### Running seed

Untuk mengcommitted seed file, lakukan command di bawah ini

`npx sequelize-cli db:seed:all`, command tersebut akan mengeksekusi file seed dan demo user akan di tambahkan ke dalam tabel `User`.

Karena riwayat eksesusi seeder tidak disimpan seperti pada SequelizeMeta. maka jika kamu ingin mengubah ini, kamu dapat membacanya di Storage

### Undoing Seeds

Seed dapat di undo jika seed menggunakan beberapa penyimpanan, terdapat 2 command yang tersedia untuk melakukan undo

- `npx sequelize-cli db:seed:undo`, digunakan unutk mengundo seed terbaru
- `npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data`, digunakan untuk mengundo seed yang spesifik
- `npx sequelize-cli db:seed:undo:all`, digunakan untuk meng-undo seluruh seeds

### Membuat CRUD dengan Express dan Sequelize

Beberapa endpoint RESTFUL yang dapat digunakan untuk membuat CRUD :

1. Get All Todos

```js
const TodoModel = require('./models').Todo;

app.get('./todos',async function (req,res){
  try{
    const todos = await TodoModel.findAll();

    res.status(200).json(todos);
  }catch(error){
    res.status(500).json({
      message: error.message |'internal server error'|
    });
  }
})
```

2. Get Todo Detail By Id

```js
const TodoModel = require("./models").Todo;

app.get("/todos/:todoId", async function (req, res) {
  try {
    const { todoId } = req.params;
    const todo = await TodoModel.findOne({ id: Number(todoId) });

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({
      message: error.message || "internal server error",
    });
  }
});
```

3. Create New Todo

```js
const TodoModel = require("./models").Todo;

app.post("./todos", async function (req, res) {
  try {
    const { title, description, startTime } = req.body;

    const newTodoData = {
      title: title,
      description: description,
      startTime: startTime,
      status: "false",
    };

    const newTodo = await TodoModel.create(newTodoData);

    res.status(201).json({
      message: "new todo created",
      todo: newTodo,
    });
  } catch (error) {
    req.status(500).json({
      message: error.message || "internal server error",
    });
  }
});
```

4. Update Todo By Id

```js
const TodoModel = require("./models").Todo;

app.patch("./todos/:todoId", async function (req, res) {
  try {
    const { todoId } = req.params;
    const { title, description, startTime, status } = req.body;

    const updateTodoData = {
      title: title,
      description: description,
      startTime: startTime,
      status: status,
    };

    const updateTodo = await TodoModel.update(updateTodoData, {
      where: {
        id: todoID,
      },
    });
    res.status(200).json({
      message: "update todo success",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "internal server error",
    });
  }
});
```

5. Delete Todo

```js
const TodoModel = require("./models").Todo;

app.delete("./todos/:todoId", async function (req, res) {
  try {
    const { todoId } = req.params;

    await TodoModels.destroy({
      where: {
        id: todoId,
      },
    });

    res.status(200).json({
      message: "delete todo succes",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "internal sever error",
    });
  }
});
```
