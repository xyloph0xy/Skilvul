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
