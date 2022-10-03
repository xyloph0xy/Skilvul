# DAY 6: 26 September 2022
## **Javascript Scope**
**SCOPE** adalah konsep yang digunakan untuk membatasi pengaksesan suatu variabel. Scope di JavaScript biasanya kita buat batasannya menggunakan simbol curly brackets `{}`. Scope pada javascript dibagi menjadi dua, yaitu local scope dan global scope.

Global scope adalah scope yang paling luar di JavaScript, contoh
```javascript
// ini adalah global scope secara default
var kelereng = 'merah';
```

Sedangkan local scope adalah variabel yang dideklarasikan di dalam fungsi pada JavaScript. Variabel lokal hanya dapat diakses dari dalam fungsi tersebut, contoh
```javascript
var kelereng = 'merah';

function mainKelereng() {
  // ini adalah local scope,
  // dapat mendeklarasikan variable kelereng secara local
  var kelereng = 'hijau';
  console.log(kelereng); // 'hijau'
}
```
**Masih bingung ? Aku kasih rangkumannya deh**
1. Fungsi dan objek adalah variabel dalam JavaScript.
2. Cakupan variabel JavaScript menentukan visibilitas atau aksesibilitas sebuah variabel.
3. Variabel global JavaScript dapat diakses di seluruh dokumen web.
4. Variabel lokal saat ini hanya tersedia di fungsi.
5. variabel lokal hanya tersedia dalam fungsi yang telah dideklarasikan.

### Karna sudah ada gambaran mengenai local scope, kita akan lanjut membahas **BLOCK SCOPE**
## Apa itu Block Scope ?
**BLOCK SCOPE** adalah area yang dicakup oleh scope yang ada di dalam statement condition atau looping, atau bisa juga kita sebut dengan block statement. Jadi **BLOCK SCOPE ITU UNTUK CONDITION ATAU LOOPING** sedangkan **LOCAL SCOPE ITU UNTUK FUNCTION**
```javascript
// ini adalah global scope secara default
var kelereng = 'merah';

function mainKelereng() {
  // ini adalah local scope di dalam function
  var kelereng = 'hijau';
  console.log(kelereng); // 'hijau'
  
  if(true) {
    // kelereng di dalam block statement if merupakan variable di dalam block scope 
    // yang berbeda dengan variable kelereng di function mainKelereng
    let kelereng = 'biru';
    console.log(kelereng); // 'biru'
  }
  
  // variable kelereng di local scope 
  console.log(kelereng); // 'hijau'
}

mainKelereng();

console.log(kelereng); // 'merah'
```
Variabel pada **local scope dan block scope HANYA DAPAT diakses didalam scope `{}`** itu makanya hasil dari `console.log(kelereng);` yang terakhir adalah merah karena variabel kelereng pada scope global bernilai merah.

## Function Javascript
Function adalah sebuah blok kode dalam sebuah grup untuk menyelesaikan 1 task/1 fitur. Saat kita membutuhkan fitur tersebut nantinya, kita bisa kembali menggunakannya. Misal kalo kamu disuruh untuk menghitung luas segitiga sebanyak 100 kali, kamu ga mungkin dong bikin scriptnya sampai 100 kali juga. Nah disini lah fungsi dari `function()`, kamu cukup membuat rumus segitiga satu kali menggunakan function, kemudian kamu tinggal memanggil function sebanyak 100 kali.

**Cara mendeklarasikan function**
```javascript
// Fungsi yang berdiri sendiri
function namaFungsi(){
  // Kode yang akan dijalankan
}

// Fungsi yang disimpan di dalam variabel
let namaVariabelFungsi = function(){
  // Kode yang akan dijalankan
}
```
Fungsi dapat dipanggil cukup dengan menambahkan tanda kurung `()` setelah nama fungsi tersebut.
```javascript
namaFungsi();

namaVariabelFungsi();
```
Contoh script sederhana dari function
```javascript
// Fungsi yang berdiri sendiri
function sapa() {
  return "Selamat Pagi!";
}

console.log(sapa()); // Output: Selamat Pagi!

// Fungsi disimpan di dalam variabel

let berkenalan = function() {
  return "Hallo, nama saya Sarah.";
};
console.log(berkenalan()); // Output: Hallo, nama saya Sarah.
```
**Bedakan `console.log()` dengan `return` yaaa**
console.log() hanya menampilkan informasi ke dalam tab console JavaScript, 
sedangkan return akan mengembalikan sebuah nilai ke tempat di mana fungsi itu dipanggil.

### Di dalam javascript ada sebuah ***argument dan parameter***, apalagi tuh ??
***ARGUMENT*** adalah nilai yang diteruskan ke dalam sebuah fungsi ketika fungsi itu dipanggil, sedangkan ***PARAMETER*** adalah variabel yang terdaftar menjadi bagian dari definisi fungsi
```javascript
function testArgument(parameter1, parameter2, parameter3){
 console.log(parameter1 + parameter2 + parameter3);
}
 
// testArgument dengan argument tambahan
testArgument(1,2,3); //output : 6
//argumentnya adalah 1,2,3
```
#### Default parameter
Dalam javascript, sebuah parameter memiliki nilai default undefined. Jadi ketika kita tidak meneruskan argument ke dalam sebuah fungsi, maka parameter yang dimiliki oleh fungsi tersebut akan bernilai undefined.
```javascript
function talk (message){
    console.log(message);
}
talk();
//VM212:2 undefined
```
Jika kita ingin mengubah nilai default dari sebuah parameter, kita bisa menggunakan operator penugasan (=) lalu diikuti dengan nilai default dari parameter tersebut. 
```javascript
function talk (message="hai"){
    console.log(message);
}
talk();
//VM247:2 hai
```
#### Rest Parameter
Pada update ES6 terdapat jenis parameter baru yang bernama rest parameter yang memiliki tanda tiga titik (…) sebagai prefix. Rest parameter memungkinkan kita untuk mewakili jumlah argument yang tidak terhingga sebagai array.
``` javascript
function restParam(angka1, ...angkaSetelahnya){
 console.log('angka 1: ',angka1);
 console.log('angkaSetelahnya: ', angkaSetelahnya)
}
 
restParam(1,2,3,4,5,6);
//VM592:2 angka 1:  1
//VM592:3 angkaSetelahnya:  (5) [2, 3, 4, 5, 6]
```

# DAY 7: 27 September 2022
## Data Type Built in Prototype & Method
***DINAMIC AND WEAK LANGUAGE***
**Dinamic** disini berarti bahasa pemrograman java tidak memiliki peraturan yang ketat dalam penulisannya, mungkin di awal variabel foo bernilai "42", kemudian variabel a valuenya diganti menjadi "bar", maka tidak akan ada masalah dengan itu
```javascript
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean
```
Hal di atas bisa di atasi dengan typescript.
Kemudian bagaimana dengan **Weak** ? mari kita lihat contoh di bawah ini. 
``` javascript
const foo = 42; // foo is a number
const result = foo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421
```
Output dari program di atas bukan error, melainkan akan dialihkan menjadi String.
### Data Type
#### Primitive
1. `String`
Digunakan untuk menggambarkan data bertipe teks. Setiap elemen dalam String menempati posisi dalam String. Elemen pertama berada pada indeks 0, berikutnya pada indeks 1, dan seterusnya. Panjang dari sebuah String adalah jumlah elemen di dalamnya.
2. 
#### Non-Primitive
##### Type of
Digunakan untuk mengecek sebuah tipe data, misal
```javascript
let = "hewan"
typeof hewan
'string' // hasilnya dalah string
```

#### Non Primitive
