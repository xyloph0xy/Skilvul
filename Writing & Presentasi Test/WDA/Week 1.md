# DAY 1: 3 Oktober 2022

# Array
## Apa itu array ?
Array adalah sebuah tipe data list order yang dapat menyimpan banyak data dengan tipe data apapun di dalamnya.
Penulisan array menggunakan kurung kotak `[]`, untuk menampilkan data array dapat menggunakan nomor index yang dimulai dari 0.
Array sendiri memiliki beberapa [property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?retiredLocale=id)
salah satunya adalah 
- `.length` yang digunakan untuk mengetahui jumlah data yang ada pada array, 
- `.push()` digunakan unutk menambah data baru di akhir array, 
- `.pop()`digunakan untuk mengeluarkan element terakhir dari sebuah array,
- `.shift()` digunakan untuk mengeluarkan element pertama dari sebuah array,
- `.unshift()` digunakan untuk menambah element di bagian awal array.
- `.splice()` digunakan untuk menambah, menghapus, dan mengganti element di sebuah array.
- dan masih banyak lagi
contoh:  
```javascript
let array = [true, 'string', 8, 0.8, null]
console.log(array[1]); //output string
array.push('luluk')
console.log(array); //true, string, 8, 0.8, null, luluk
```
## Array loop

1. For
      ```javascript
      let exArray = [true, 'string', 8, 0.8, null]
      for (let i = 0; i< exArray.length; i++){
      console.log(exArray[i])
      // true
      // string
      // 8
      // 0.8
      // null
      }
      ```
      Kenapa harus menggunakan looping untuk menampilkan array?
      Untuk menampilkan array kita menggunakan `array[indexArray]`. Bayangkan apabila index yang dimiliki array adalah 100, maka kita harus mengetikkan program satu-satu untuk menampilkan array tersebut.

2. For of
      ```javascript
      for (let namaVariabel of namaArray ){
        console.log(namaVariabel);
      ```

        contoh menggunakan data array exArray
        ```javascript
        let exArray = [true, 'string', 8, 0.8, null]
        for (let contohArray of exArray){
        console.log(contohArray)
        }
        ```

      `let contohArray` digunakan untuk menampung/mewakilkan data exArray untuk kemudian di looping, contoh mudanya `let contohArray` sama seperti `let i` pada looping for  

3. foreach
      Bentuk dasar dai `forEach` adalah
      ```javascript
      namaArray.forEach( () => {} )
      atau 
      namaArray.forEach(function(){})
      ```
      Di dalam function dapat diberi beberapa parameter seperti `forEach(element)` , `forEach(element, index)`, `forEach(element, index, array)`. Elemen merupakan variabel yang mewakilkan data array `i pada looping for biasa`, index adalah nomer indexnya, dan array adalah array yang ingin di loop
      contoh menggunakan data array exArray
      ```javascript
      let exArray = [true, 'string', 8, 0.8, null]
      exArray.forEach((contohArray)=>{
      console.log(contohArray, index)
      // 0 true
      // 1 string
      // 2 8
      // 3 0.8
      // 4 null
      })
      ```

4. map
      Bentuk dasarnya `map` adalah
      ```javascript
      namaArray.map(()=>{})
      ```
      contoh :
      ```javascript
      let exArray = [true, 'string', 8, 0.8, null]
      exArray.map((contohArray, index)=>{
      if(index%2 == 0){
      return(contohArray, index)}
      // 0 true
      // 1 undefined
      // 2 8
      // 3 undefined
      // 4 null
      })
      ```
      Nilai dalam map akan dikembalikan dalam bentuk array dengan data sama banyaknya dengan data pada array. Bahkan apabila kamu menggunakan seleksi untuk menampilkan sebagian data, maka data yang akan ditampilkan jumlahnya tetap sama dengan data array tetapi akan bernilai *undefined* untuk data yang tidak ingin ditampilkan. 


### Perbedaan for, forEach, dan Map
1. forEach dan Map akan melakukan perulangan dari awal sampai akhir dan tidak bisa dihentikan di tengah jalan, sedangkan for masih dibisa dihentikan menggunakan `break` atau dilompatin menggunakan `continue`. 
2. Kemudian map hampir sama dengan forEach. Bedanya forEach tidak bisa mengembalikan nilai sedangkan map bisa. Apabila kamu ingin mengembalikan nilai, makanya map yang harus digunakan karena forEach tidak bisa diberi return. 

## Array Multidimensi
Merupakan sebuah array di dalam array
```javascript
let arrayMulti=[
["nama", "Luluk"]
["umur", "20"]
]
 //cara aksesnya
 console.log(arrayMulti[0][1]);
 //output luluk 
 //[0] merupakan nomor baris, [1] merupakan nomor kolom
 ```
 
 # DAY 2 : 4 Oktober 2022
 # Object javascript
Object adalah tipe data non-primitive yang bisa memiliki properti dan fungsi atau key dan value . Properti adalah data lengkap dari sebuah object. Sedangkan method adalah action dari sebuah object. Apa saja yang dapat dilakukan dari suatu object.

## Create object
```javascript
let nama_obj = {
key1 = "value1",
key2 = "value2",
}
```
contoh 
```javascript
let siswa = {
nama: "luluk",
umur: 20,
"nomer handphone": 08947549823
}
```

key `"nomer handphone: ` digunakan untuk menuliskan key yang memiliki spasi, pada dasarnya  js tidak bisa menerima key yang memiliki atau variabel yang memiliki spasi.

## Access object
```javascript
let siswa = {
nama: "luluk",
umur: 20,
"nomer handphone": 08947549823
}
```
untuk mengakses object digunakan nama value atau propertinya. Tidak seperti array, object tidak memiliki indeks
1. dot notation
      ```javascript
      console.log(siswa.nama);// luluk
      console.log(siswa.nomer handphone)// output error
      ```
2. bracket
      ```javascript
      console.log(siswa['nama'])// luluk
      console.log(siswa['nomer handphone'])// 08947549823 
      ```
      pemanggilan nama properti yang memiliki spasi tidak dapat menggunakan dot notation, alternatifnya adalah menggunakan bracket

3. variabel
      ```javascript
      let properti = "umur";
      console.log(siswa[properti]);
      //20
      ```
      
## Create key
```javascript
let siswa = {
nama: "luluk",
umur: 20,
"nomer handphone": 08947549823
}
```
penambahan properti dapat dilakukan dengan berbagai cara seperti contoh di bawah ini
```javascript
siswa.asal = "Klaten";
siswa["hobi"]= "makan"
```
penambahan properti menggunakan bracket wajib diberi tanda string `".."` supaya tidak error
## Assign object
```javascript
let siswa = {
nama: "luluk",
umur: 20,
"nomer handphone": 08947549823
}
```
cara mengganti value properti pada sebuah object
```javascript
siswa.nama = "sofi"
siswa["umur"]=21
```
value pada nama akan berubah menjadi sofi dan umur menjadi 21. perubahan pada variabel ***const*** juga masih dapat dilakukan selama tidak mengganti seluruh isi yang ada di dalamnya.
## Delete object
```javascript
let siswa = {
nama: "luluk",
umur: 20,
"nomer handphone": 08947549823
}
```
untuk menghapus properti dapat menggunakan `delete`, contoh
```javascript
delete siswa.nama;
```
## Method object
method adalah sebuah properti yang valuenya function.
contoh
```javascript
const greeting = {
pagi: function (){
return "selamat pagi"
},
sore: function(){
return "selamat sore";
},
};
//cara panggilnya
console.log(greeting.pagi());
//output selamat pagi
```
penulisan `()` pada `greeting.pagi()` dimaksudkan kita memanggil semua proses yang ada di dalam function pagi.

Object juga memiliki beberapa built in method, contohnya
```javascript
let siswa = {
nama: "luluk",
umur: 20,
}
console.log(Object.keys(siswa));
//outputnya ["nama","umur"]
```
`object.keys()` digunakan untuk mengubah object menjadi array, sedangkan untuk mengubah nilai atau value dapat menggunakan `object.value()`
## Nested object
Sebuah object yang menyimpan object di dalamnya.
contoh
```javascript
let siswa = {
      nama: "luluk",
      umur: 20,
      karya: {
            buku1: {
                  judul: "dongeng",
                  tahun: 2022
            },
            buku2: {
                  judul: "fiksi",
                  tahun: 2021
            }
      }
}
```
cara mengakses propertinya adalah diambil dari object yang terluar, contoh
```javascript
consoloe.log("siswa.karya.buku1.judul");
//output dongeng
```
## Loop object
loop yang digunakan untuk object adalah `for in`, loop ini dapat berfungsi untuk memanggil properti yang berada di dalam object tanpa harus kita panggil satu-satu.
contoh
```javascript
let siswa = {
nama: "luluk",
umur: 20,
}
for(let u in siswa){
console.log(siswa[u]);
}
//luluk
//20
```
`let u` mengacu properti pada object, sedangkan `siswa[key]` mengacu pada value yang berada pada object siswa.

kemudian apabila kita ingin melakukan perulangan pada nested object, maka cara ini dapat digunakan
```javascript
let siswa = {
      nama: "luluk",
      umur: 20,
      karya: {
            buku1: {
                  judul: "dongeng",
                  tahun: 2022
            },
            buku2: {
                  judul: "fiksi",
                  tahun: 2021
            }
      }
}
for(let n in siswa.karya.buku1){
console.log(siswa.karya.buku1[u])
}
//dongeng
//2022
```
## Array of object
Sebuah array yang menyimpan object sebagai nilai indeksnya.
```javascript
let penulis = [
{
      nama : "luluk",
      umur : 20
},
{
      nama : "sofi",
      umur : 20
}
];

let data = penulis.map(u)=> {
      console.log(u.nama)
      //luluk
      //sofi
      //u merupakan nama variabel, jadi bebas mau dinamain apa
}
```
contoh di atas menggunakan looping map, selain map looping array of object dapat menggunakan `forEach` atau `For in`.

# DAY 3: 5 Oktober 2022
# JavaScript Modules
JavaScript modules memungkinkan kita untuk memisahkan atau memecahkan kode menjadi file yang berbeda supaya lebih mudah dikelola. File yang dipecah dapat dihubungkan ke file utama. Untuk menngunakan modules pada javascript dibutuhkan atribut tambahan pada tag script HTML, yaitu `type="modules"`
```html
<script src="./namaFile.js"> type="module"></script>
```
nama file yang dicantumkan pada file html di atas hanya bisa melakukan import dari berbagai file lainnya saja

## Export dan import
Terdapat dua buah file js
#### File jepang.js
```javascript
export let motor = ["suzuki", "yamaha", "honda", "kawasaki"]
export default entertainment= ["anime", "manga", "sushi"]

//cara lain
let motor = ["suzuki", "yamaha", "honda", "kawasaki"]
let entertainment= ["anime", "manga", "sushi"]
export{motor}
export default entertainment
```
`export` perlu ditambahkan untuk mengekspor data atau code dari sebuah file, code yang diekspor bisa dalam bentuk variable maupun function. Kemudian ada perintah `export default` yang diletakkan di depan variabel/ function yang digunakan untuk mengekespor variabel atau function utama, export default hanya dapat mengekespor satu data utama saja.
#### File indonesia.js
```javascript
import entertain,{motor} from "./jepang.js"
```
`import {...} from "...."` digunakan untuk menerima sebuah data yang diekspor. Kurung kurawal `{...}` berfungsi untuk menangkap data yang di import atau diterima. Penangkapan/penerimaan data export default tidak perlu menggunakan kurung kurawal. 

Penggantian nama variabel/function dari ekspor default dapat dilakukan secara langsung tanpa adanya error sedangkan untuk mengubah nama yang diekspor (bukan ekspor default) dapat menggunakan perintah `as` seperti contoh di bawah ini
```javascript
import {motor as motorJepang} from "./jepang.js"
```
Data yang diimport atau diterima juga dapat di manipulasi seperti variabel pada umumnya. Selain itu kita juga dapat mengimport data lebih dari satu menggunakan koma `,` :

```javascript
import {namaData1,namaData2} from "./namaFileImport"
```
## Rekursif
Rekursif adalah sebuah algoritma function yang dapat memanggil dirinya sendiri di dalam function tersebut seperti halnya looping. Rekursif dapat digunakan untuk menghitung rumus matematika yang cukup rumit. Untuk mempermudah pemahaman, bayangkan saja terdapat sebuah masalah yang besar untuk menyelesaikan masalah tersebut pecah masalah besar menjadi ke yang paling kecil kemudian selesaikan masalah yang paling kecil tersebut maka masalah yang lebih besar di atasnya akan mengikuti hingga masalah yang paling besar pun ikut mengikuti,  itulah yang dinamakan rekursif

contoh :
```javascript
function namaFunc(){
namaFunc();
}
```
Dalam rekursif terdapat dua kunci, yaitu :
1. `basecase`, titik paling kecil (berhenti)
2. `recursive case`, titk pemanggilan functionnya sendiri

contoh program rekursif untuk menampilkan angka 1-5

```javascript
function deretAngka(){
if (n==1){
//if adalah basecase
console.log(n)
}else{
//else nya adalah recursive case
deretAngka(n-1)
console.log(n)
}
}
deretAngka(3);
//1 2 3 
```
**Penjelasan**

1. if akan mengecek apakah 3 sama dengan 1
2. apabila benar maka console akan menampilkan 1
3. apabila bukan kondisi else akan dijalankan yaitu deretAngka(n-1) `masuk ke function yang kedua`
4. pada function deretAngka(n-1), kemudian akan di cek kembali apakah n= 3-1 `baca 2` sama dengan 1
5. jika bukan maka kondisi else dijalankan yaitu deretAngka (n-1) `masuk ke function yang ketiga`
6. pada function deretAngka(n-1), akan dicek lagi apakah n= 2-1 `baca 1` sama dengan satu
7. apabila iya maka akan menampilkan 1
8. kemudian kembali kondisi `function yang ketiga` else yang console.log (n) akan menampilkan n = 2
9. kemudian kembali kondisi `function yang kedua` else yang console.log (n) akan menampilkan n = 3

# DAY 4: 6 Oktober 2022
# Asynchoronus
Javascript merupakan bahasa pemrograman yang memiliki fitur single-thread, non-blocking, dan asynchronous
### Apa itu single-thread
Simpelnya single-thread adalah satu jalur yang harus saling menunggu untuk mengeksekusi proses selanjutnya secara berurutan dan satu persatu. Berbeda dengan lawannya yaitu multi-thread, pengeksekusian proses pada multi-thread dapat dilakukan secara bersamaan dalam satu waktu karena jalur yang dimiliki banyak
### Apa itu non-blocking
Sebuah sistem yang mengizinkan proses yang lama mendahulukan proses yang lebih cepat
### apa itu asynchronous
Sedangkan asynchronous adalah sistem yang mengizinkan proses lain dikerjakan sembari menunggu proses (panjang atau lama) yang masih berlangsung

Terdapat 3 kunci utama yang digunakan untuk menghandle asynchronous 
## callback
   Pada setiap browser yang berbeda memiliki 2 bagian, yaitu heap dan stack(tumpukan). Stack pada browser memiliki sifat first in last out, jadi setiap kode javascript yang ditulis dieksekusi pada stack sesuai tumpukan. Kemudian pada kebanyakan web API memiliki sifat asynchronous yang membutuhkan waktu untuk menjalankannya. Karena membutuhkan waktu, maka asynchronous akan masuk ke callback queue ketika dijalankan. Mudahnya callback queue adalah sebuah ruang tunggu yang dipakai untuk menunggu proses asynchronous dijalankan, dan ketika ruang yang ada di stack tidak memiliki tumpukan atau antrian maka asynchronous yang berada di ruang tunggu (callback queue) akan di panggil.
   
   **Nah callback sendiri itu apa sih?** callback adalah sebuah function yang dijadikan sebuah argumen
   contoh : 
   ```javascript
   console.log("A")

      // butuh proses yg memakan waktu
      // callback -> function yg dijadikan sbg argumen
      setTimeout(() => {
        console.log("B")
      }, 1000)

      console.log("C")
      //output A C B
   ```
## promise
Promise mewakili sebuah operasi yang belum selesai, tetapi diharapkan di masa mendatang.
Sama halnya sebuah janji, promise memiliki 3 kemungkinan state :
- pendind
- fulfilled
- rejected
cara menggunakan promise
```javascript
let namaVar = new Promise((resolve, reject) => {
    // Isi dari promise yang akan dibuat
});
```
Resolve menyatakan promise sudah dijalankan, sedangkan reject kebalikannya. Untuk menangkap resolve dapat menggunakan `.then`, sedangkan reject menggunakan `.catch`
```javascript
let nontonPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("nonton terpenuhi") // berhasil
  } 
  reject("gagal"); // gagal
});
nontonPromise
  .then( })
  .catch((err) => {
    console.log(err);
  });
  (result) => {
    console.log(result);
    })
  .catch((err) => {
    console.log(err);
  });
  //output nonton berhasil
```
