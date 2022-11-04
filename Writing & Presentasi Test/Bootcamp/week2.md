# Day 3: 2 November 2022

# Authentication & Authorization in Express

## Authentication vs Authorization vs Encryption

### Authentication

Authentication adalah suatu proses yang bertujuan untuk membuktikan identitas pengguna ketika ingin mengakses suatu sistem, mudahnya autentikasi akan memastikan bahwa itu benar-benar kamu atau bukan.

Autentikasi dapat dilakukan melalui 3 faktor utama, yaitu :

1. Knowledge, mengenai sesuatu yang kamu ketahui, misal username dan password
2. Possession, mengenai sesuatu yang kamu punya, misal kartu keamanan
3. Inherence, mengenai sesuatu tentang anda, biasanya berupa data biomtrik seperti fingerprint

Autentikasi yang hanya bergantung pada satu faktor disebut single-factor authentication, karena hanya bergantung pada satu faktor saja maka autentikasi tersebut menjadi semakin tidak aman.

### Authorization

Otorisasi adalah proses verifikasi yang menentukan hal yang boleh kamu lakukan. Contoh beberapa fungsi otorisasi pada keamanan web adalah

1. Mencegah pengguna memodifikasi akun satu sama lain
2. Melindungi data dari penyerang
3. Memberi batas akses pada layanan eksternal

### Encryption

Enkripsi adalah proses mengubah data menjadi format yang tidak dapat dibaca, data tersebut hanya akan dapat dibaca apabila kamu mempunyai kunci yang benar untuk mengartikannya.

Enkripsi sendiri terbagi menjadi 2 jenis:

1. Enkripsi simetris, hanya menggunakan satu kunci yang sama untuk penguncian dan pembukaan datanya
2. Enkripsi asimetris, memiliki 2 kunci, yaitu kunci publik dan pribadi. Kunci publik dapat diakses oleh publik, sedangkan kunci pribadi hanya dapat diakses oleh pemilik kunci untuk menjaga privasi. Jenis enkripsi ini lebih kompleks namun keamanannya lebih kuat

<img src="https://dwblog-ecdf.kxcdn.com/wp-content/uploads/2022/03/Cara-Kerja-Enkripsi.jpg" weidth="600" height="250">

## Session VS Cookie VS LocalStorage

### Session
