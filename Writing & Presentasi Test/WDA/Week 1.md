# DAY 1: 3 Oktober 2022

# Array
## Apa itu array ?
Array adalah sebuah tipe data list order yang dapat menyimpan banyak data dengan tipe data apapun di dalamnya.
Penulisan array menggunakan kurung kotak `[]`, untuk menampilkan data array dapat menggunakan nomor index yang dimulai dari 0.
Array sendiri memiliki beberapa [property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?retiredLocale=id)
salah satunya adalah 
- `.length` yang digunakan untuk mengetahui jumlah data yang ada pada array, 
- `.push()` digunakan unutk menambah data baru di akhir array, 
- `pop()`digunakan untuk mengeluarkan element terakhir dari sebuah array,
- `shift()` digunakan untuk mengeluarkan element pertama dari sebuah array,
- `unshift()` digunakan untuk menambah element di bagian awal array.
- dan masih banyak lagi
contoh 
```javascript
let array = [true, 'string', 8, 0.8, null]
console.log(array); //output true, string, 8, 0.8, null
console.log(array[1]); //output string
array.push('luluk')
console.log(array); //true, string, 8, 0.8, null, luluk
```


