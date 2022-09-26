Sebelum mempelajari **_Unix Command Line_** dan **_Git & Github Dasar_** kita harus menginstall [**git**](https://git-scm.com/download/win) pada perangkat kita. Untuk tutorial installasinya dapat dilihat pada link berikut [**ini**](https://phoenixnap.com/kb/how-to-install-git-windows).

# Unix Command Line

Sebelum mengenal **CLI** lebih lanjut, mari kita pelajari shell terlebih dahulu. **SHELL** adalah program yang menerima perintah untuk diteruskan kepada sistem operasi, dengan kata lain shell adalah sebuah alat komunikasi antara pengguna dengan sistem operasi. nah **shell** sendiri dapat di akses melalui file eksplorer, terminal, cmd, dll.

Pada dasarnya shell memiliki 2 jenis tampilan, yaitu **GUI** dan **CLI**.

### **Nah,, _GUI_ itu apasih??**

**GUI** merupakan singkatan dari **G**raphic **U**ser **I**nterace. Sebuah tampilan antarmuka berbentuk grafik yang pengaplikasiannya tinggal klik sana sini doang, contoh kalo kamu pengen buka folder tinggal klik aja udah bisa kebuka.

### **Terus kalo _CLI_ itu apa??**

nah, **CLI** sendiri merupakan singkatan dari **C**ommand **L**ine **I**nterface. Sebuah tampilan antarmuka berbentuk tulisan atau teks bahkan pengaplikasiaanya pun juga harus ditulis, contoh untuk membuka sebuah folder kamu harus mengetikkan _cd namaFolder_ pada git bash .

![**Perbedaan ***GUI*** dengan ***CLI*** **](https://techreviewadvisor.com/wp-content/uploads/GUI-vs.-CLI-1024x439.jpg)

Di sini kita akan mempelajari bagaimana mengakses **shell** melalui terminal **_BASH_**. **Bash** merupakan singkatan dari **B**ourne **A**gain **S**hell, bash sendiri identik untuk unix.

## Perintah Dasar Pada CLI

Sebelum mempelajari perintah dasar pada CLI, kita harus mengenal apa itu **Filesystem**. Filesystem adalah bentuk struktur dari direktori atau file-file yang ada di komputer kita.

![**Filesystem Windows vs Linux**](https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/06/File-Systems-Linux-vs-Windows-Edureka-768x500.png)

Filesystem pada windows memiliki banyak disk yang dibagi berdasar huruf alfabet, sedangkan pada unix hanya memiliki satu disk dengan banyak cabang.

### Nah, sekarang sudah saatnya kita mempelajari perintah dasar CLI :

- pwd : _print working directory_ digunakan untuk melihat lokasi kita berada.
- ls : _list_ digunakan untuk melihat daftar file maupun folder. Ada perintah ls lainnya, yaitu `ls -a` yang digunakan untuk menampilkan folder yang di hidden. syntaxnya `ls namaFile`
- cd : _change directory_ digunakan untuk berpindah direktori atau folder, syntaxnya `cd namaFile`. Untuk memanggil file yang penamaannya memiliki spasi maka dapat menggunakan "..". Macam-macam perintah cd :
  - cd .. : digunakan untuk keluar atau kembali ke direktori sebelumnya.
  - cd namaFile : digunakan untuk membuka sebuah file atau direktori.
- mkdir : *make directory* digunakan untuk membuat folder baru, syntaxnya `mkdir namaFolder`.
- touch : digunakan untuk membuat file baru pada folder, syntaxnya `touch namaFile`.
- nano : digunakan untuk mengedit file yang telah dibuat, syntaxnya `nano namaFile`.
- cat : digunakan untuk menampilkan seluruh isi sebuah file.
- head : digunakan untuk melihat isi awal sebuah file.
- tail : digunakan untuk melihat isi akhiran sebuah file.
- cp : **copy** digunakan untuk mengcopy file atau folder, syntaxnya `cp namaYangInginDiCopy namaBaru` atau apabila ingin menyalin file ke folder yang berbeda, maka yntaxnya `cp namaFile /namaDirectory/namaFileBaru`
- mv : **move** digunakan untuk memindahkan atau me-rename sebuah file maupun folder. syntaxnya untuk memindahkan  `mv namaFile /namaDirektori/namaFile`, syntax untuk rename **mv namaFile namaFileBaru**.
- rm : **remove** digunakan untuk menghapus sebuah file, syntaxnya `rm namaFile`. untuk menghapus directory syntaxnya `rm -R namaFile` atau `rm -d namaFile`. Nah ada lagi sebuah syntax yang digunakan untuk menghapus sebuah folder dengan paksa, yaitu `rm -rf namaFolder`.

# **GIT & GITHUB**
Simpelnya **GIT** adalah software, sedangkan **GITHUB** adalah tempat untuk mengupload codingan.

### Kenapa sih harus belajar **GIT** & **GITHUB**
Di **GIT** kamu dapat melakukan kolaborasi bersama teman tanpa repot harus copy paste folder aplikasi yang terupdate seperti yang kamu lakukan ketika mengerjakan skripsi.

Kamu juga dapat mengerjakan bagianmu terlebih dahulu tanpa menunggu teman, kamu dapat membuat file di dalam project yang sama kemudian disatukan ketikasudah selesai.

## Mengenal **GIT** lebih lanjut
**GIT** adalah sebuah TOOLS yang digunakan programmer untuk membantu membuat *Version Control System*, mudahnya **GIT** digunakan untuk melacak semua perubahan data yang sudah kita lakukan, termasuk siapa yang mengubahnya. Untuk mendapat gambaran lebih lanjut, hal tersebut juga terdapat pada google docs 
<img src="https://apsachieveonline.org/in/wp-content/uploads/2019/09/Cara-Menggunakan-Lacak-Perubahan-di-Google-Documents.jpg" width="900" height="350">

Langkah awal untuk menjalankan git adalah melakukan setup awal `git config --global user.name "username"` setelah di enter setup emailnya `git config --global user.email "email"`. Pastikan setup awal berhasil dilakukan `git config --list`.

### Repository **GIT**
- Langkah pertama adalah melakukan `git init`. **Fungsi `git init` apasih ?** `git init` akan melakukan inisialisasi pada directory  kemudian akan membuat direktori ***.git*** dalam proyek kita yang dapat digunakan untuk menyimpan perubahan yang kita lakukan. Simpelnya `git init` itu kaya kita lagi masang memory card pada  hp yang hanya bisa dipasang satu memory card. `git init` hanya bisa dijalankan satu kali saja.  Nah ketika kita sudah melakukan `git init`, tandanya kita sudah memasang *git* pada project kita.

- Untuk melihat perubahan yang terjadi dapat dengan melakukan perintah `git status`. Ketika melakukan `git status` maka akan muncul peringatan `nothing added to commit but untracked files present (use "git add" to track)` itu artinya perubahan yang kita lakukan belum terlacak atau belum ditandain. Untuk melacak perubahan yang kita lakukan maka dapat menggunakan perintah `git add .`

- `git add .` Titik `.` pada `git add .` artinya lokasi saat ini, itu tandanya git akan melacak semua perubahan yang terdapat pada lokasi saat ini tersebut. Untuk melacak perubahan pada satu file secara spesifik maka dapat melakukan perintah `git add namaFile`. Setelah melakukan `git add .` maka perubahan yang kita lakukan sudah di lacak atau di tandain. Nah perubahan tersebut harus kita namain dong biar ga bingung. Misal kita membuat perubahan pada sebuah file dengan menambahkan biodata lengkap penulis dari A-Z, perubahan tersebut kita kasih nama *tambah biodata penulis* untuk memudahkan kita mengetahui perubahan apa yang udah dilakukan. 

- Untuk memberikan nama pada perubahan tersebut dapat melakukan perintah `git commit -m "blablabla"`, setelah melakukan `git commit -m "blablabla"` maka akan muncul  pada tampilan git. 

>>`$ git commit -m "add biodata"`

>>`[master fbc3c12] add biodata`

>> `1 file changed, 2 insertions(+)`

- 

