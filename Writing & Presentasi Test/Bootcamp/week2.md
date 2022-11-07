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
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
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
  const TodoModel = require('./models').Todo;

  app.get('/todos/:todoId', async function(req,res){
    try{
      const {todoId} = req.params;
      const todo = await TodoModel.findOne({id : Number(todoId)});

      res.status(200).json(todo);
    }catch(error){
      res.status(500).json({
        message: error.message || 'internal server error',
      });
    }
  })
  ```
3. Create New Todo
  ```js
  const TodoModel = require('./models').Todo;

  app.post('./todos', async function(req,res){
    try{
      const { title, description, startTime} = req.body;

      const newTodoData = {
        title: title,
        description: description,
        startTime: startTime,
        status:'false',
      };

      const newTodo = await TodoModel.create(newTodoData);

      res.status(201).json({
        message : 'new todo created',
        todo : newTodo,
      });
    }catch(error){
      req.status(500).json({
        message: error.message || 'internal server error',
      });
    }
  });
  ```
4. Update Todo By Id
  ```js
  const TodoModel = require('./models').Todo;

  app.patch('./todos/:todoId', async function(req,res){
    try{
      const {todoId} = req.params;
      const {title, description, startTime, status} = req.body;

      const updateTodoData = {
        title : title,
        description : description,
        startTime: startTime,
        status: status,
      };

      const updateTodo = await TodoModel.update(updateTodoData,{
        where: {
          id : todoID,
        }
      });
      res.status(200).json({
        message : 'update todo success',
      });
    }catch (error){
      res.status(500).json({
        message: error.message || 'internal server error',
      });
    }
  })
  ```
5. Delete Todo
```js
const TodoModel = require('./models').Todo;

app.delete('./todos/:todoId', async function (req,res){
  try{
    const { todoId }= req.params;

    await TodoModels.destroy({
      where: {
        id: todoId,
      },
    });

    res.status(200).json({
      message: 'delete todo succes',
    });
  }catch(error){
    res.status(500).json({
      message: error.message || 'internal sever error',
    });
  }
});
```