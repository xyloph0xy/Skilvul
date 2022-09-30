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
    // kelereng di dalam block statement if merupakan variable di dalam
    // block scope yang berbeda dengan variable kelereng di function mainKelereng
    let kelereng = 'biru';
    console.log(kelereng); // 'biru'
  }
  
  // variable kelereng di local scope 
  console.log(kelereng); // 'hijau'
}

mainKelereng();

console.log(kelereng); // 'merah'
```

