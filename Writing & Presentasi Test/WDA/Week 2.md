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
Pembuatan async await hampir sama dengan async function, bedanya pada  async await terdapat kata kunci `async` di depan function `async function asyncNonton() {}` . Untuk menangkap promise menggunakan async await maka ditambahkan kata kunci `await` ketika memanggil promise, kemudian setelah dipanggil maka disimpan ke dalam sebuah variabel `let result = *await* nonton("jalan")` . Kemudian terdapat sebuah metode error handler `try{}catch(){}` yang digunakan untuk menangkap promise dengan hasil reject. Cara kerja `try{}catch(){}` adalah promise yang sudah dibuat tadi akan di coba di `try{}`, apabila nilai promise yang ditangkap adalah reject, maka akan ditangkap oleh `catch(){}`

## Asynchronous-fetch


# DAY 2 : 11 November 2022
## Git dan Github

# DAY 3 : 12 November 2022
## Responsive web design
## Bootstrap 5
