# DAY 1 : 10 November 2022
Semua data pada website tersimpan di database, untuk mengakses database harus melewati server untuk diolah, nah data yang sudah diolah tersebut akan ditampilkan atau disampaikan ke website front end melalui perantara API. 
## Asynchronous-async await
Async await digunakan untuk menangani promises agar code yang digunakan lebih mudah dan nyaman. 
```javascript
let nonton = (kondisi) => {
  return new Promise((resolve, reject) => {
    if (kondisi == "jalan") {
      resolve("nonton terpenuhi")
    }
    reject("batal nonton")
  })
}

//============ promise then catch=========
nonton("jalan")
.then(result => {
  console.log(result);
}).catch(err => {
  console.log(err)
})

//=================async await==========
async function asyncNonton() {
  try {
    let result = await nonton("jalan")
    console.log(result);
  } catch (error) {
    console.log(error)
  }
}
asyncNonton()
//output nonton terpenuhi
//namun jika "jalan" pada await di hapus maka outputnya error
```
Pembuatan async await hampir sama dengan async function, bedanya pada  async await terdapat kata kunci `async` di depan function (`async function asyncNonton() {}`) . Untuk menangkap promise menggunakan async await maka ditambahkan kata kunci `await` ketika memanggil promise, kemudian setelah dipanggil maka disimpan ke dalam sebuah variabel (`let result = await nonton("jalan")`) . Kemudian terdapat sebuah metode error handler `try{}catch(){}` yang digunakan untuk menangkap promise dengan hasil reject. Cara kerja `try{}catch(){}` adalah promise yang sudah dibuat tadi akan di coba di `try{}`, apabila nilai promise yang ditangkap adalah reject, maka nilai reject tersebut akan ditangkap oleh `catch(){}`

## Asynchronous-fetch
fetch merupakan objek promise yang sudah disediakan oleh javascript, sama-sama objek promise bedanya objek promise seperti yang di atas (pada contoh async await) adalah objek promise yang kita buat sendiri. Penangkapan objek promise fetch dapat dilakukan seperti pada objek promise pada umumnya, yaitu `.then catch` atau `async await`. 

Dibawah ini proses penangkapan fetch menggunakan proses promise biasa
```javascript
// medapatkan data digimon melalui API

fetch("https://digimon-api.vercel.app/api/digimon")
//fetch untuk mengambil data dari API
.then(result => result.json()) //proses unboxing
.then(result => { //paket selesai dibuka dan bisa ditampilkan
  console.log(result)
})
```
Sedangkan proses di bawah ini menggunakan proses async await
```javascript
let getDataDigimon= async() =>{
  let response = await fertch("https://digimon-api.vercel.app/api/digimon")
  //proses nunggu paket datang
  let result = await response.json()
  //proses nunggu paket diunboxing
  console.log(result)
}
getDataDigimon()
```
# DAY 2 : 11 November 2022
## Git dan Github collaboration
Langkah untuk melakukan collaboration pada github menggunakan repository
1. Buat repository
2. Setting akses pada repository tersebut agar bisa di akses anggota lain

Langkah untuk membuat organization pada github
1. buat new organization pada icon plus kanan atas
2. isi email dan data organisasi
3. invite anggota lain supaya bisa melakukan kolaborasi pada github
4. buat repository baru di organisasi yang sudah kamu buat tadi
5. di dalam repo tadi, buat sebuah branch

### Kolaborasi pada github
1. setiap anggota tim wajib melakukan clone pada repository yang tadi sudah dibuat saat membuat organisasi tadi
2. setelah cloning, masing-masing anggota melakukan pembagian tugas
3. setiap anggota tim membuat branch dari branch yang sudah dibuat saat pembuatan organisasi tadi dengan perintah `git branch namaBranch` atau `git checkout namaBranch`
4. masuk atau pindah ke branch dengan perintah `git switch namaBranch` pada git bash
5. untuk setiap perubahan yang terjadi, semua anggota wajib melakukan tracking menggunakan `git add . dan git commit`
6. kemudian lakukan `git push` 
7. lakukan pull request untuk meminta penggabungan antara branch yang kita buat dengan branch yang lain (yang dibuat saat pembuatan organisasi tadi)
8. Setelah itu ketua tim melakukan merge pull request dan bisa memberi label
9. karena setiap anggota melakukan pull request masing-masing, maka file yang ada di repo akan berbeda dengan di lokal
10. untuk mengatasi masalah tersebut, lakukan `git pull` pada git bash masing-masing

### Git conflict
Pada saat kolaborasi, mungkin akan terjadi git conflict karena ada beberapa anggota yang melakukan pull request pada file yang sama namun dengan script atau isi yang berbeda. Github akan bingung memilih file mana yang akan di merge. cara mengatasinya yaitu :
1. Saat terjadi conflict, anggota bisa memberi pesan atau komentar pada anggota yang lain melalui github
2. kemudian anggota tersebut harus memanggil data terbaru dengan `git merge`
3. kemudian diskusikan antara anggota mau pake code yang mana
4. setelah ditentukan, maka lakukan perubahan kemudian push code tersbut ke repo
5. kemudian cek kembali apakah masih terjadi conflict atau tidak
6. jika tidak, maka lakukan merge pull request pada repo
# DAY 3 : 12 November 2022
## Responsive web design
## Bootstrap 5
