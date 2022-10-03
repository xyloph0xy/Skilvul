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
JavaScript memiliki sifat loosely types sehingga dalam mendeklarasikan variable kita tidak perlu mendeklarasikan tipe datanya. Tipe data akan otomatis dideteksi oleh JavaScript saat variabel tersebut diberikan suatu nilai. Oleh karena itu, pada JavaScript suatu variabel yang sudah dideklarasikan namun belum diberikan nilai memiliki tipe data undefined karena belum didefinisikan/diberikan nilai. Kemudian dalam javascript terdapat 2 type data yaitu primitive dan non-primitive. 

***BEDANYA APA SIH ?***

Tipe data primitif memiliki sifat immutable dan tidak memiliki properties sementara tipe data non-primitif bersifat mutable dan memiliki properties.
Maksud dari immutable itu setelah pertama kali diinisiasi, nilai tersebut tidak bisa diubah lagi dalam memori. Nilai yang tersimpan dalam memori akan tetap sama seperti pertama kali.
**Loh terus script di bawah ini gimana dong ??**
```javascript
var nama = "Luluk";
console.log(nama);

nama = "Luluk Sofiyah";
console.log(nama);
//VM347:2 Luluk
//VM347:5 Luluk Sofiyah
```
Yang terjadi sebetulnya adalah JavaScript membuat sebuah nilai baru kemudian diassign ke variabel yang dituju. Jika variabel sebelumnya memiliki nilai, maka nilai tersebut akan digantikan oleh nilai baru tadi. Variabel akan menunjuk ke nilai baru tersebut. Kemudian tipe data primitf tidak memiliki property. Hanya Object yang memiliki property. Secara sederhana, property merupakan variabel yang yang dimiliki oleh object. 
#### Primitive
1. **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
Digunakan untuk menggambarkan data bertipe teks yang inisialisasinya diapit menggunakan `'...'` atau `"..."`. Setiap elemen dalam String menempati posisi dalam String. Elemen pertama berada pada indeks 0, berikutnya pada indeks 1, dan seterusnya. Panjang dari sebuah String adalah jumlah elemen di dalamnya.
Di dalam string terdapat beberapa method yang dapat digunakan untuk membantu developer, antara lain :
   -`charAt()`, 
   digunakan untuk mengakses karakter pada string
   ```javascript
   var nama="Luluk";
   console.log(nama.charAt(3));
   //u
   ```
   - `includes()`
    Metode includes()ini melakukan pencarian (case-sensitive) untuk menentukan apakah satu string dapat ditemukan di dalam string lain
      ```javascript
      var nama="Luluk Sofiyah";
      console.log(nama.includes("Luluk"));
      VM453:2 true
      ```
   - `split()` digunakan untuk memisahkan string pada kumpulan string
      ```javascript
      var nama = "Luluk sofiyah";
      console.log(nama.split(" "));
      'Luluk', 'sofiyah']
      0: "Luluk"
      1: "sofiyah"
      length: 2
      ```
2. **number**
JavaScript hanya memiliki satu tipe data angka, yaitu number. Tidak ada integer, float, short, long seperti pada bahasa pemrograman lain. **Hanya ada number**. Hal unik lainnya dari tipe data number di JavaScript adalah adanya nilai simbolis. Nilai simbolis ini merepresentasikan nilai yang tidak bisa direpresentasikan oleh angka di JavaScript atau nilai yang mustahil. Nilai simbolis ini ada tiga, yaitu, Infinity, -Infinity, dan NaN.
    - `infinity dan -infinity`
    Nilai Infinity dan -Infinity merepresentasikan nilai yang berada diluar     jangkauan nilai yang dapat direpresentasikan JavaScript. Nilai Infinity     dapat dihasilkan dengan melakukan beberapa operasi berikut:>><img src="https://miro.medium.com/max/1100/1*nSwFN7GghkQunln0Mjp5-Q.png" weight= "500" height="200">
    - `NaN`
    Nilai NaN digunakan untuk merepresentasikan sebuah nilai numerik yang tidak mungkin atau ilegal. Walaupun NaN merupakan singkatan dari Not a Number. Operasi pada JavaScript yang dapat menghasilkan nilai NaN, yaitu misalkan operasi angka dengan string yang bukan angka, kecuali (+) karena dianggap konkatenasi.<img src="https://miro.medium.com/max/1100/1*UskGTMUSBZzm8nyqHGOtJg.png" weight= "400" height="150">
  Operasi aritmatika yang menghasilkan NaN bisa membuat kita repot karena mungkin kita tidak mengekspektasikan hal tersebut terjadi dan mungkin menimbulkan bug. JavaScript menyediakan function isNaN() untuk mendeteksi apakah parameter yang diberikan merupakan NaN atau bukan. Function isNaN() akan mengembalikan true jika parameter yang diberikan bukan angka dan akan mengembalikan false jika parameter yang diberikan merupakan angka.
  

3. **boolean**
Tipe data boolean merepresentasikan entitas logika. ‘boolean’ dapat merepresentasikan nilai benar atau salah, satu atau nol. Tipe data ‘boolean’ biasanya digunakan untuk merepresentasikan data yang hanya memiliki dua kemungkinan nilai. Tipe data ‘boolean’ sering digunakan oleh beberapa statement seperti if, for, while, switch, dsb untuk menentukan kode mana yang akan dijalankan.

4. **null**
Tipe data ‘null’ merepresentasikan ‘tidak memiliki nilai apapun’. Variabel yang memiliki nilai null menandakan bahwa variabel tersebut tidak menunjuk pada object/nilai apapun. Gunakan null untuk memberikan nilai pada suatu variabel yang belum memiliki nilai tertentu diawal program namun diekspektasikan memi

5. **undefined**
Pada saat pertama kali dideklarasikan variabel akan berisi ‘undefined’ sebelum kemudian digantikan oleh nilai yang diberikan. Kata ‘undefined’ di JavaScript bukan merupakan reserved word. Apa artinya? Kita bisa menggunakan kata ‘undefined’ sebagai nama variabel! Namun kita tidak bisa menggunakannya pada scope global. Kenapa? karena sebenarnya undefined merupakan salah satu property dari global object. Sehingga jika digunakan sebagai nama variabel pada scope global akan tetap bernilai undefined.

6. **bigInt**
bigint artinya bilangan decimal yang besar. Bigint adalah integer presisi yang mampu mewakili bilangan bulat uang lebih besar dari 253 -1. Di bigInt kamu bisa menyimpan dan mengoperasikan bilangan bulat besar bahkan di luar batas bilangan bulat. Jika hanya mengandalkan tipe data number/integer maka maksimal penggunaan 9007199254740992. Apabila jumlahnya melebihi dari 9007199254740992, integer tidak mendukung.

7. **symbol**
Tujuan dari penggunaan fungsi symbol adalah untuk melakukan identifikasi property pada objek dikarenakan tipe data symbol bersifat unik. Symbol memiliki ciri yaitu tidak dapat di konversi dalam sebagai string. Meskipun hampir semua tipe data mendukung secara implisit untuk di konversi sebagai string dengan bantuan fungsi alert() akan tetapi Symbol tidak dapat melakukannya.
##### Type of
Digunakan untuk mengecek sebuah tipe data, misal
```javascript
let = "hewan"
typeof hewan
'string' // hasilnya dalah string
```

#### Non Primitive
Pada JavaScript, jika suatu tipe data bukan termasuk primitif maka dapat dipastikan tipe data tersebut Object. Ya, termasuk Array. Pada JavaScript Array merupakan Object.
1. Object
object adalah tipe data yang kompleks yang memungkinkan kita menyimpan kumpulan nilai dengan tipe data yang berbeda. Objek berisi properti yang didefinisikan sebagai pasangan kunci dan nilai (key dan value). Di JavaScript kita bisa membuat objek dengan beberapa cara, bisa menggunakan new Object(), Object.create(), atau menggunakan notasi literal.
Untuk membuat objek literal properti kunci dan nilai dari suatu objek diapit atau dibungkus dengan kurung kurawal {}, jika memiliki lebih dari satu properti dipisahkan dengan koma.
```javascript
const obj = {
  nama: 'Luluk',
  umur: 20
};

console.log(obj.nama); //Luluk
```
2. Arrays
Array adalah jenis objek yang dapat digunakan untuk menyimpan beberapa nilai, tanpa properti seperti objek.

Array memiliki indeks yang dimulai dari nol dengan kata lain elemen atau nilai pertama di dalam array memiliki indeks 0, elemen berikutnya memiliki indeks 1 dan seterusnya. kita bisa menggunakan indeks untuk memanipulasi nilainya.

Sama seperti objek, array juga dapat dibuat menggunakan new Array() atau array literal [].

Nilai pada array literal harus diapit dengan kurung siku [], jika memiliki lebih dari satu nilai dipisahkan dengan koma. Kita bisa memasukkan tipe data apa pun ke dalam array, termasuk array dan objek.

#### Perbedaan type data primitive dengan non-primitive
1. Tipe data primitif hanya dapat menyimpan satu nilai pada satu waktu dan tidak dapat diubah menggunakan cara yang sama seperti tipe data non-primitif. Tipe data Primitif akan dianggap sama jika nilainya sama. Sedangkan tipe data non-primitif dapat menyimpan lebih dari satu nilai pada satu waktu dan dapat diubah. Tipe data non-primitif akan dianggap berbeda meskipun nilainya sama dan dalam urutan yang sama.
2. Jumlah nilai yang dapat disimpan oleh primitif hanya satu nilai, sedangkan Non-primitif bisa lebih dari satu nilai
```javascript
const nama = 'luluk'; //primitif
const bio = ['luluk', 20, true, null, undefined];//non-primitif
```
4. Perubahan nilai pada primitif tidak dapat diubah, sedangkan pada non-primitif bisa diubah
#### [**Math**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math?retiredLocale=id) pada javascript
Objek Math adalah objek yang berisi fungsi-fungsi matematika dan beberapa konstanta untuk melakukan perhitungan matematika seperti sin, cos, tan, eksponen, akar kuadrat, dll.
1. Fungsi trigonometri (sin,cos,tan)
```javascript
Math.sin(10);
-0.5440211108893698
```
3. Fungsi pembulatan
- `floor()` membulatkan ke bawah;
- `round()` membulatkan ke yang terdekat, bisa ke bawah dan ke atas;
- `ceil()` membulatkan ke atas.
```javascript
Math.floor(2.7)
//2
```
5. Fungsi logaritma, pangkat, dan eksponensial
- `log()` untuk menghitung logaritma
- `pow()` untuk menghitung pemangkatan
- `exp()` untuk menghitung eksponen
```javascript
Math.pow(2,3)
//8
```
7. Fungsi akar `sqrt()`
```javascript
Math.sqrt(225)
//15
```
9. Fungsi min dan max
```javascript
Math.min(1,8,2,9)
//1
```
11. Konatanta
```javascript
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E 
```
# DAY 3-5: 27-29 September 2022
## [**DOM Manipulation**](https://www.javascripttutorial.net/javascript-dom/)
***Document Object Model*** adalah jembatan supaya bahasa pemrograman dapat berinteraksi dengan dokumen HTML. Dengan DOM, javascript dapat mengubah struktur HTML. Pada model DOM ini juga, setiap elemen html dipandang sebagai sebuah object. Setiap object bisa terdiri dari object-object lain, sama halnya dengan dokumen html yang terdiri dari elemen root (elemen <html>), elemen root terdiri dari elemen <head> dan elemen <body>, elemen <body> boleh jadi terdiri dari elemen <a>, <h1>, <p>, dst. Elemen-elemen pada dokumen html membentuk sebuah object document yang merupakan object dari dokumen html itu sendiri.
#### Di DOM bisa apa aja sih ?
- Javascript dapat merubah setiap elemen HTML pada halaman web.
- Javascript dapat merubah setiap atribut HTML pada halaman web.
- Javascript dapat merubah setiap style CSS pada halaman web.
- Javascript dapat menghilangkan elemen dan atribut HTML yang ada.
- Javascript dapat menambahkan elemen dan atribut HTML baru.
- Javascript dapat bereaksi pada setiap event yang ada pada halaman web.
- Javascript dapat membuat event baru pada halaman web.
  
Terdapat 2 item apabila kita ingin mengakses DOM
1. element, contoh element `<h1>Hallo</h1>`
2. node, merupakan bagian-bagian terkecil dari HTML 
<img src="https://www.tutorialstonight.com/assets/articles/node-structure-in-dom.webp" weight="500" height="300">

### Selecting elements
1. `getElementById`
     Digunakan untuk mengakses element berdasar id. Cara mengaksesnya yaitu buat variabel untuk menampung DOM terlebih dahulu, contoh
     ```javascript
     let title1= document.getElementById("title");
     console.log(title1);
     ```
     apabila element tidak ada maka return nya null. Jika dokumen HTML memiliki beberapa elemen dengan id yang sama, document.getElementById()metode mengembalikan elemen pertama yang ditemuinya.
2. `getElementByName`
semua element padaa HTML document bisa memiliki atribut name, contoh
```javascript
<input type="radio" name="language" value="JavaScript">
```
Tidak seperti id, beberapa atribut name bisa memiliki value yang sama
4. `getElementByClassName`
     ```javascript
      let list = document.getElementsByClassName("list")
      console.log(list)
      ```
   getElementsByClassName akan mereturn dalam bentuk collection element berdasar nama kelasnya (hampir sama seperti array), maka pemanggilannya bisa menggunkaan index `console.log(list[1])`
 3. `getElementsByTagName`
       ```javascript
        let  paragraf= document.getElementsByTagName("p")
        console.log(paragraf)
       ```
  5. `querySelector`
     querySelector() adalah selector yang digunakan untuk memilih sebuah elemen. Pemilihan elemen bisa berdasarkan id, class, name, atau property lainnya.
      ```javascript
      var tag_p = document.querySelector("p");// berdasar tag
      var id_a = document.querySelector("#a");// berdasar id
      var class_a = document.querySelector(".a");//berdasar class
      var name_a = document.querySelector("[name='a']");//berdasar nameClass
      var onclick_contoh = document.querySelector("[onclick='contoh()']");//berdasar properti onclick
     ```
    

### Traversing DOM
1. traversing ke parent element
   
3. traversing ke child elements
`children`
   Digunakan untuk mendapatkan element children, contoh
   ```HTML
    <ul class="list">
      <li class="item">satu</li> <--children-->
      <li class="item">dua</li> <--children-->
      <li class="item">tiga</li> <--children-->
    </ul>
   ```
   ```javascript
   //javascript untuk memanggil children
   //sebelumnya gunakna getElementsByClassName untuk memanggil parents
   let list = document.getElementsByClassName("list")
   console.log(list[0])
   
   //kemudian panggil children
   console.log(list[0].children)
   ```
   - paramentElement
   - closest()
5. traversing ke sibling element
   - nextElemenSibling
   - previousElementSibling

### Praktik DOM Manipulation
1. Bagaimana mengubah konten dari elemen HTML
   contoh
   ```javascript
      document.getElementById("demo").innerHTML = "Hello World!";
   ```
   innerHTML adalah sebuah atribut di dalam (objek) elemen HTML yang berisi string HTML.
   Dengan innerHTML, kita dapat menampilkan output ke elemen yang lebih spesifik.
2. Bagaimana cara mengubah style CSS dari elemen HTML
   scriptnya `element.style.color=""`
   contoh:
   ```javascript
      <script>
      var paragraf = document.getElementsByClassName("paragraf");
      setInterval(function () {
        paragraf[0].style.color = "red";
        paragraf[1].style.color = "green";
        paragraf[2].style.color = "blue";

            setTimeout(function () {
            paragraf[0].style.color = "black";
            paragraf[1].style.color = "black";
            paragraf[2].style.color = "black";
            }, 500)
        }, 1000);
      </script>
      ```
     Kita memanfaatkan fungsi setInterval() dan fungsi setTimeOut() untuk menentukan waktu animasinya.

Pada kode diatas, rentang waktu (interval) kita berikan 1000 milidetik atau 1 detik.

Sedangkan untuk merubah warnanya menjadi hitam, kita berikan waktu 500 milidetik atau 0.5 detik.
      
3. Bagaimana menganggapi event
4. Bagaimana menambah atau menghilangkan element
