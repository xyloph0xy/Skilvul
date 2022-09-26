Sebelum mempelajari ***Unix Command Line*** dan ***Git & Github Dasar*** kita harus menginstall [**git**](https://git-scm.com/download/win) pada perangkat kita. Untuk tutorial installasinya dapat dilihat pada link berikut [**ini**](https://phoenixnap.com/kb/how-to-install-git-windows).

# Unix Command Line

Sebelum mengenal **CLI** lebih lanjut, mari kita pelajari shell terlebih dahulu. **SHELL** adalah program yang menerima perintah untuk diteruskan kepada sistem operasi, dengan kata lain shell adalah sebuah alat komunikasi antara pengguna dengan sistem operasi. nah **shell** sendiri dapat di akses melalui file eksplorer, terminal, cmd, dll.

Pada dasarnya shell memiliki 2 jenis tampilan, yaitu **GUI** dan **CLI**.

### **Nah,, *GUI* itu apasih??**
**GUI** merupakan singkatan dari **G**raphic **U**ser **I**nterace. Sebuah tampilan antarmuka berbentuk grafik yang pengaplikasiannya tinggal klik sana sini doang, contoh kalo kamu pengen buka folder tinggal klik aja udah bisa kebuka.

### **Terus kalo *CLI* itu apa??**
nah, **CLI** sendiri merupakan singkatan dari **C**ommand **L**ine **I**nterface. Sebuah tampilan antarmuka berbentuk tulisan atau teks bahkan pengaplikasiaanya pun juga harus ditulis, contoh untuk membuka sebuah folder kamu harus mengetikkan *cd namaFolder* pada git bash . 

![**Perbedaan ***GUI*** dengan ***CLI*** **](https://techreviewadvisor.com/wp-content/uploads/GUI-vs.-CLI-1024x439.jpg)

Di sini kita akan mempelajari bagaimana mengakses **shell** melalui terminal ***BASH***. **Bash** merupakan singkatan dari **B**ourne **A**gain **S**hell, bash sendiri identik untuk unix.

## Perintah Dasar Pada CLI
Sebelum mempelajari perintah dasar pada CLI, kita harus mengenal apa itu **Filesystem**. Filesystem adalah bentuk struktur dari direktori atau file-file yang ada di komputer kita.

![**Filesystem Windows vs Linux**](https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/06/File-Systems-Linux-vs-Windows-Edureka-768x500.png)

Filesystem pada windows memiliki banyak disk yang dibagi berdasar huruf alfabet, sedangkan pada unix hanya memiliki satu disk dengan banyak cabang.

### Nah, sekarang sudah saatnya kita mempelajari perintah dasar CLI :
* pwd   : *print working directory* digunakan untuk melihat lokasi kita berada.
* ls    : *list* digunakan untuk melihat daftar file maupun folder.
* cd    : *change directory* digunakan untuk berpindah direktori atau folder. Macam-macam perintah cd :
    * cd ..       : digunakan untuk keluar atau kembali ke direktori sebelumnya. 
    * cd namaFile : digunakan untuk membuka sebuah file atau direktori.
