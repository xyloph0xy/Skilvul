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
```
## Asynchronous-fetch


# DAY 2 : 11 November 2022
## Git dan Github

# DAY 3 : 12 November 2022
## Responsive web design
## Bootstrap 5
