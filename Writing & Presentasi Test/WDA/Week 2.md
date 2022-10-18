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
## Git dan Github

# DAY 3 : 12 November 2022
## Responsive web design
## Bootstrap 5
