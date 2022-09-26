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
- ls : _list_ digunakan untuk melihat daftar file maupun folder. Ada perintah ls lainnya, yaitu **ls -a** yang digunakan untuk menampilkan folder yang di hidden. syntaxnya **ls namaFile**
- cd : _change directory_ digunakan untuk berpindah direktori atau folder, syntaxnya **cd namaFile**. Untuk memanggil file yang penamaannya memiliki spasi maka dapat menggunakan "..". Macam-macam perintah cd :
  - cd .. : digunakan untuk keluar atau kembali ke direktori sebelumnya.
  - cd namaFile : digunakan untuk membuka sebuah file atau direktori.
- mkdir : *make directory* digunakan untuk membuat folder baru, syntaxnya **mkdir namaFolder**.
- touch : digunakan untuk membuat file baru pada folder.
