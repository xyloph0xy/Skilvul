# **DAY 1: 19 September 2022**

Sebelum mempelajari **_Unix Command Line_** dan **_Git & Github Dasar_** kita harus menginstall [**git**](https://git-scm.com/download/win) pada perangkat kita. Untuk tutorial installasinya dapat dilihat pada link berikut [**ini**](https://phoenixnap.com/kb/how-to-install-git-windows).

# Unix Command Line

Sebelum mengenal **CLI** lebih lanjut, mari kita pelajari shell terlebih dahulu. **SHELL** adalah program yang menerima perintah untuk diteruskan kepada sistem operasi, dengan kata lain shell adalah sebuah alat komunikasi antara pengguna dengan sistem operasi. nah **shell** sendiri dapat di akses melalui file eksplorer, terminal, cmd, dll.

Pada dasarnya shell memiliki 2 jenis tampilan, yaitu **GUI** dan **CLI**.

### **Nah,, _GUI_ itu apasih??**

**GUI** merupakan singkatan dari **G**raphic **U**ser **I**nterace. Sebuah tampilan antarmuka berbentuk grafik yang pengaplikasiannya tinggal klik sana sini doang, contoh kalo kamu pengen buka folder tinggal klik aja udah bisa kebuka.

### **Terus kalo _CLI_ itu apa??**

nah, **CLI** sendiri merupakan singkatan dari **C**ommand **L**ine **I**nterface. Sebuah tampilan antarmuka berbentuk tulisan atau teks bahkan pengaplikasiaanya pun juga harus ditulis, contoh untuk membuka sebuah folder kamu harus mengetikkan _cd namaFolder_ pada git bash .

<img src="https://techreviewadvisor.com/wp-content/uploads/GUI-vs.-CLI-1024x439.jpg" weidth="500" height="200">

Di sini kita akan mempelajari bagaimana mengakses **shell** melalui terminal **_BASH_**. **Bash** merupakan singkatan dari **B**ourne **A**gain **S**hell, bash sendiri identik untuk unix.

## Perintah Dasar Pada CLI

Sebelum mempelajari perintah dasar pada CLI, kita harus mengenal apa itu **Filesystem**. Filesystem adalah bentuk struktur dari direktori atau file-file yang ada di komputer kita.

<img src="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/06/File-Systems-Linux-vs-Windows-Edureka-768x500.png" width= "500" height="200">

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
- cp : **copy** digunakan untuk mengcopy file atau folder, syntaxnya `cp namaYangInginDiCopy namaBaru` atau apabila ingin menyalin file ke folder yang berbeda, maka yntaxnya `cp namaFile namaDirectory namaFileBaru`
- mv : **move** digunakan untuk memindahkan atau me-rename sebuah file maupun folder. syntaxnya untuk memindahkan  `mv namaFile namaDirektori`, syntax untuk rename **mv namaFile namaFileBaru**.
- rm : **remove** digunakan untuk menghapus sebuah file, syntaxnya `rm namaFile`. untuk menghapus directory syntaxnya `rm -R namaFile` atau `rm -d namaFile`. Nah ada lagi sebuah syntax yang digunakan untuk menghapus sebuah folder dengan paksa, yaitu `rm -rf namaFolder`.

# **GIT & GITHUB**
Simpelnya **GIT** adalah software, sedangkan **GITHUB** adalah tempat untuk mengupload codingan.

### Kenapa sih harus belajar **GIT** & **GITHUB**
Di **GIT** kamu dapat melakukan kolaborasi bersama teman tanpa repot harus copy paste folder aplikasi yang terupdate seperti yang kamu lakukan ketika mengerjakan skripsi.

Kamu juga dapat mengerjakan bagianmu terlebih dahulu tanpa menunggu teman, kamu dapat membuat file di dalam project yang sama kemudian disatukan ketikasudah selesai.

## Mengenal **GIT** lebih lanjut
**GIT** adalah sebuah TOOLS yang digunakan programmer untuk membantu membuat *Version Control System*, mudahnya **GIT** digunakan untuk melacak semua perubahan data yang sudah kita lakukan, termasuk siapa yang mengubahnya. Untuk mendapat gambaran lebih lanjut, hal tersebut juga terdapat pada google docs.

<img src="https://apsachieveonline.org/in/wp-content/uploads/2019/09/Cara-Menggunakan-Lacak-Perubahan-di-Google-Documents.jpg" width="400" height="220">

Langkah awal untuk menjalankan git adalah melakukan setup awal `git config --global user.name "username"` setelah di enter setup emailnya `git config --global user.email "email"`. Pastikan setup awal berhasil dilakukan `git config --list`.

### Repository **GIT**
- Langkah pertama adalah melakukan `git init`. **Fungsi `git init` apasih ?** `git init` akan melakukan inisialisasi pada directory  kemudian akan membuat direktori ***.git*** dalam proyek kita yang dapat digunakan untuk menyimpan perubahan yang kita lakukan. Simpelnya `git init` itu kaya kita lagi masang memory card pada  hp yang hanya bisa dipasang satu memory card. `git init` hanya bisa dijalankan satu kali saja.  Nah ketika kita sudah melakukan `git init`, tandanya kita sudah memasang *git* pada project kita.

- Untuk melihat perubahan yang terjadi dapat dengan melakukan perintah `git status`. Ketika melakukan `git status` maka akan muncul peringatan `nothing added to commit but untracked files present (use "git add" to track)` itu artinya perubahan yang kita lakukan belum terlacak atau belum ditandain. Untuk melacak perubahan yang kita lakukan maka dapat menggunakan perintah `git add .`

- `git add .` Titik `.` pada `git add .` artinya lokasi saat ini, itu tandanya git akan melacak semua perubahan yang terdapat pada lokasi saat ini tersebut. Untuk melacak perubahan pada satu file secara spesifik maka dapat melakukan perintah `git add namaFile`. Setelah melakukan `git add .` maka perubahan yang kita lakukan sudah di lacak atau di tandain. `git add` sendiri akan masuk ke **STAGING AREA**, duh Staging Area itu apa sih?? anggap saja staging area adalah sebuah file yang menyimpan informasi secara sementara mengenai data yang akan dimasukkan ke dalam `git commit` nantinya. Nah perubahan tersebut harus kita namain dong biar ga bingung. Misal kita membuat perubahan pada sebuah file dengan menambahkan biodata lengkap penulis dari A-Z, perubahan tersebut kita kasih nama *tambah biodata penulis* untuk memudahkan kita mengetahui perubahan apa yang udah dilakukan. 

- Untuk memberikan nama pada perubahan tersebut secara permanen dapat melakukan perintah `git commit -m "blablabla"`, setelah melakukan `git commit -m "blablabla"` maka akan muncul  pada tampilan git. 

>>`$ git commit -m "add biodata"`

>>`[master fbc3c12] add biodata`

>> `1 file changed, 2 insertions(+)`

- Untuk melihat hasil commit yang tersimpan dapat melakukan perintah `git log`. Karena hasil commit yang akan ditampilkan akan panjang, kita dapat mempersingkat tampilannya dengan perintah `git log --oneline`. Untuk keluar dari tampilan `git log` lakukan perintah `:q`.

- Untuk kembali ke hasil commit sebelumnya maka dapat melakukan perintah `git checkout alamatCommit`, alamat commit sebelumnya dapat dilihat ketika melakukan perintah `git log --oneline`. Ketika file yang telah di checkout di buka, maka data dari file tersebut akan kembali ke data commit lama sesuai dengan yang diminta tadi. **Aduhh kalo pengen balik ke commit terakhir gimana nihh??** Jangan panik, kamu dapat melakukan perintah git checkout main(menyesuaikan dengan akun githubmu). Maka ketika file dibuka, data yang ditampilkan adalah data sesuai dengan commit terbaru.

- `git reset` berbeda dengan `git checkout`. `git reset` akan menghapus file terbaru yang kamu lewati ketika kamu kembali ke file sebelumnya, sedangkan `git checkout` hanya berpindah dan tidak menghapus file yang dilewati. Untuk lebih jelasnya bayangkan saja kamu membuat commit *lama banget*, *lama*, *baru*, *baru banget*. Saat ini kamu sedang berada di *baru banget* dan ingin kembali ke *lama banget* menggunakan perintah `git checkout` maka commit *baru banget*, *baru* dan *lama* tidak akan terhapus. Namun apabila kamu menggunakan perintah `git reset` untuk kembali ke commit *lama banget* maka  commit *baru banget*, *baru* dan *lama* akan terhapus dan kamu tidak akan bisa kembali ke commit *baru banget*, *baru* dan *lama*

## **GIT**
#### Kalo mau upload commit ke internet gimana dong??
1. Kamu harus mempunyai akun [github](https://github.com/login) terlebih dahulu.
2. Buat [Repository](https://www.niagahoster.co.id/blog/git-tutorial-dasar/#3_Buat_Repository) pada akun githubmu
3. Hubungkan folder lokal dengan repository github menggunakan `git remote add origin https://github.com/namaAkunmu/`
4. Setelah dihubungkan maka kamu harus mengupload file dengan menggunakan `git push -u origin main(mengkuti akun githubmu)`
5. Setelah di push, kamu dapat mengeceknya di akun githubmu

#### Aku pengen [cloning](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) repository githubku ke local nih, caranya gimana ya??
1. Buka halaman utama repository yang ingin kamu clone pada github
2. Copy url repositorymu menggunakan HTTPS
>><img src="https://docs.github.com/assets/cb-33207/images/help/repository/https-url-clone-cli.png" weight="300" height="250">
3. Buka *Git Bash*mu, kemudian pindah ke lokasi directory yang inginkan
4. Ketik perintah `git clone *URLyangSudahKamuCopy`
5. Selesai deh, yeyy kamu berhasil!!

### Apa itu **BRANCH** ??
**Branch** adalah cabang dari timeline yang kita buat, nah cabang tersebut dapat kita buat

# DAY 2: 20 September 2022

## **HTML**

### **HTML** itu apa sih ?
**HTML** merupakan singkatan dari Hypertext Markup Language yang berfungsi untuk menampilkan konten pada browser, konten di sini dapat berupa text, image, video, link, dan masih banyak lagi. **HTML bersifat STATIS bukan DINAMIS**, apa sih artinya ? HTML hanya bisa menampilkan konten yang diminta oleh developer. Karena HTML tidak bisa **DINAMIS** mengolah data, maka HTML **BUKAN** merupakan bahasa pemrograman.

### Tools apa aja sih yang dibutuhkan ?
1. **Browser**, browser akan menerjemahkan kode html supaya dapat ditampilkan sesuai dengan yang dirancang oleh developer. Mudahnya, browser pada HTML mempunyai fungsi yang sama sebagai *compiler dan  intepreter* pada bahasa pemrogaman yang lain.
2. **Code Editor**, berfungsi untuk menuliskan kode HTML yang akan ditampilkan pada browser. Code editor yang akan kita pakai adalah [VSCode](https://code.visualstudio.com/download), **Kenapa harus pake VSCode, kan ada code editor yang lain?** Tidak hanya mendukung HTML, VSCode juga mendukung semua bahasa pemrograman. Selain itu kamu dapat menggunakan [**extension**](https://scotch.io/bar-talk/22-best-visual-studio-code-extensions-for-web-development) untuk mempermudah codinganmu. VSCode juga dapat digunakan di system operasi windows, linux dan macbook.

### Yuk buat website dengan HTML
1. Buka VSCode mu
2. Buat sebuah file melalui VSCode dengan format .html
3. Ketik struktur dasar HTML, cara mudahnya kamu cukup ketik `!` maka akan muncul kode seperti di bawah ini
>> <img src="https://storage.googleapis.com/kotakode-prod-public/images/3712fa54-eb41-45e8-94a2-cae09b0bbbce-image.png" weight="600" height="200">
4. Beri konten di antara tag `<body>*contoh konten*</body>`
5. Untuk memudahkan kamu melihat kode HTML yang telah dibuat pada browser, kamu dapat menginstall extension [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) pada VSCode. **Cara pakainya gimana tuh ?** Caranya gampang kok, kamu cukup ketik `ctrl+Shift+P` kemudian cari `Live Server: Open with live server`. Setelah berhasil maka akan terbuka halaman browser baru yang berisi konten yang sudah kamu buat sebelumnya.
6. Untuk membuat konten pada website terlihat lebih menarik, kamu dapat menggunakan [tag HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) dibawah ini :
- `<h1>` : digunakan untuk membuat heading pada sebuah teks. tag heading tersebut tersedia dari `<h1> sampai <h6>`, semakin banyak angkanya maka akan semakin kecil ukuran teksnya.
- `<p>` : digunakan untuk membuat paragraf.
- `<a>` : digunakan untuk membuat link pada web, di dalam tag `<a>` terdapat sebuah atribut `href=""` yang berguna untuk menyimpan link website yang dituju.
- `<ul>` : digunakan untuk membuat unordered list.
- `<ol>` : digunakan untuk membuat ordered list.
- `<img>`: digunakan untuk menampilkan gambar, di dalam tag `<a>` terdapat atribut `src=""` yang berfungsi untuk menampung sumber foto yang akan ditampilkan. Terdapat juga tag `<video> <audio>` yang fungsinya  hampir sama dengan tag `<img>`.
- `<iframe>`: digunakan untuk menampilkan halaman website lainnya ke dalam website yang kita buat.
- `<table>` : digunakan untuk membuat tabel sebagai elemen utama. Di dalam tag `<table>` terdapat tag `<tr>` yang digunakan untuk membuat baris baru pada tabel, sedangkan tag `<td>` digunakan sebagai container dari data yang mau kita isi.
- `<form>` : digunakan untuk mengawali pembuatan formulir, di dalam tag `<form>` terdapat beberapa tag yang dapat digunakan, antara lain :
   - `<input>` : digunakan untuk membuat kotak input dimana user akan mengisi data.
   - `<select> <option>` : digunakan untuk membuat dropdown.
   - `<fieldset>` : digunakan untuk memberi garis tepi pada element HTML yang ingin kita kelompokkan
   - `<legend>` : digunakan untuk memberi keterangan pada fieldset yang kita buat
   - `<textarea>` : digunakan untuk membuat kolom komentar.
   - `<button>` : digunakan untuk membuat tombol yang dapat di klik.
7. Kamu juga dapat menggunakan element semantic pada HTML. **Elemen Semantic itu apa sih ?** Elemen semantik adalah elemen yang memiliki makna dan tujuan tersendiri, contoh :
-  `<header>` : digunakan untuk membuat header pada web.
- `<footer>` : digunakan untuk membuat footer pada  web.
- `<nav>` : digunakan untuk membuat navigasi pada web.
- `<article>` : digunakan untuk membuat artikel.
- `<aside>` : digunakan untuk membuat elemen bagian samping.
- `<main>` : digunakan untuk membuat elemen utama
- `<summary>` : digunakan untuk membuat ringkasan artikel

Salah satu keuntungan menggunakan elemen semantik adalah dokumen HTML kita akan mudah dibaca, baik itu oleh manusia maupun mesin.

### [Mendeploy](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) website menggunakan Github di **Netlify**
1. Push codinganmu ke dalam repository github
2. Buka akun [netlifymu](https://www.netlify.com/)
3. Klik add new site dan pilih *Import an existing project*

>> <img src="https://miro.medium.com/max/640/1*o0Ls6cjYQSiqo0MyojjVvg.png">
4. Pilih github
5. Pilih repository yang ingin kamu deploy ke netlify, pastikan dalam repository tersebut terdapat file index.html
6. Klik deploy site
7. Tunggu hingga proses deploy selesai ^^


# **DAY 3 : 21 September 2022**
## **CSS**
### CSS itu apa sih ?
**CSS** adalah singkatan dari **C**ascading **S**tyle **S**heets yang berfungsi untuk mendesain halaman website. Di CSS ini kamu dapat memberi style pada html berupa warna, font, layout, grid, dan lainnya. Ada 3 
cara penggunaan css, yaitu :
1. *Inline style* menyisipkan css pada elemen HTML
2. *Internal style* menggunakan tag `<style> ` untuk menuliskan css, tag tersebut masih berada pada satu file dengan HTML
3. *Eksternal* dengan cara membuat file baru di luar file HTML kemudian dihubungkan dengan element `<link>` yang terdapat di dalam tag `<head>`

### CSS Syntax itu buat apa ?
Syntax yang digunakan untuk menunjuk atau memilih HTML element mana yang ingin diberi style. Nah CSS syntax sendiri ada tiga macam :
>><img src="https://curriculum-content.s3.amazonaws.com/fewds/css-syntax.png" weight="500" height="100">
1. *Selector*, bagian mana yang ingin kamu buat (aku pengen ngasih style ***PARAGRAF***nya nih).
2. *Property*, kamu pengen apain sih bagian itu (paragrafnya pengen aku kasih ***WARNA***).
3. *value*, spesifiknya pengen kamu kasih apa (aku kasih warna ***MERAH*** aja deh).

### Cara pakai [CSS Selector](https://www.w3schools.com/cssref/css_selectors.asp) itu gimana ?
1. Selector ID `#namaID{...}` digunakan untuk memberi style berdasar ID
2. Selector tag `Tag{...}` digunakan untuk memberi style berdasar tag
3. Selector class `.namaClass{...}` digunakan untuk memberi style berdasar kelas
5. Selector atribut `Tag[Atribut]{...}` digunakan untuk memberi style berdasar atribut yang ada di dalam tag
6. Selector universal`*{...}` digunakan untuk memberi style semua element
7. Pseudo Selektor digunakan untuk mengakses bagian tertentu dalam HTML yang tidak 'terlihat' (tidak tertulis di dalam HTML) atau bagian dari HTML yang tidak bisa diakses dengan selector sederhana lain. Pseudo selector ada dua macam :
    - Pseudo-class `selector:pseudo-class:{...}`
    - pseudo-element `selector::pseudo-element{...}`

### Di CSS bisa ngapain aja sih ?
Ada banyak yang bisa kamu lakukan dengan CSS, salah satunya :
1. [**BOX MODEL**](https://skilvul.com/courses/css-dasar/lessons/css-box-model/topics/definisi-box-model)
Jadi, semua HTML element itu dianggap sebagai sebuah kotak (box). Karena hal inilah istilah box model muncul.
Box model sendiri bisa kalian anggap sebagai kotak yang membungkus setiap HTML element. Contoh mengatur box model pada sebuah paragraf :
```css
p{
margin : 0px;
border : 20px 10px;
padding: 10px;
```
>><img src="https://hendky.com/wp-content/uploads/2019/09/box-model.png">

3. [**DISPLAY**](https://skilvul.com/courses/css-dasar/lessons/css-display/topics/display:-none-vs-visibility:-hidden)
Dengan properti display, kita bisa mengatur bagaimana box tersebut ditampilkan: apa box tersebut ditampilkan sebaris dengan box lain? atau satu box menempati satu baris penuh? bahkan kita juga bisa mengatur apakah box tersebut ditampilkan atau disembunyikan. Property display ada 3 nilai :
   - **Display Blok**, Element yang memiliki properti `display: block;` akan menempati satu baris penuh (atau bahkan beberapa baris) meskipun kontennya tidak sebesar itu.
   - **Display Inline**, sebuah element akan membuat ukuran box dari element tersebut tidak lagi sebaris penuh seperti dalam kasus `display: block`, melainkan hanya sebesar konten di dalamnya saja.
   - **Display Inline-Blok**, Berbeda dengan element yang memiliki properti display: inline di mana lebar dan tinggi element tidak dapat kita atur, element dengan `display: inline-block` bisa kita atur lebar dan tingginya. Berbeda juga dengan element dengan properti  `display: block` yang selalu mengambil penuh ruang dalam satu baris, element dengan `display: inline-block` secara default hanya akan mengambil ruang sebesar konten di dalamnya. Dengan adanya sisa ruang di sebelah kiri atau kanannya, element dengan `display: inline-block` bisa ditempatkan bersebelahan dengan yang lainnya.
Contoh apabila kita ingin mengatur display pada tag img
```css
img{
display :inline;
}
```
5. [**POSITION**](https://skilvul.com/courses/css-dasar/lessons/css-position/topics/position:-static), Secara default seluruh properti position dari HTML element memiliki nilai static. Element dengan properti tersebut tidak akan terpengaruh oleh properti top, bottom, left, dan right. Namun kita dapat mengaturnya dengan :
    - `position: relative`, Element dengan posisi relative akan diposisikan relatif dari posisi normalnya. Kita bisa memberikan properti top, right, bottom, dan left pada element dengan posisi relative. Element lain di sekitar element dengan posisi relative tidak akan disesuaikan dengan ruang yang ditinggalkan oleh element.
    - `position: absolute`, Element dengan posisi absolute akan diposisikan relative dengan posisi ancestor terdekat yang posisinya bukan static. Ancestor dari sebuah element merupakan semua element yang berada di tingkat atasnya.
    - `position: fixed`, Element dengan posisi fixed akan diposisikan relatif terhadap viewport browser, di mana akan selalu berada di tempat yang sama jika walaupun halaman website di-scroll.
    - `position: sticky`, Element dengan posisi sticky akan diposisikan berdasarkan scroll halaman dari user. `position:sticky` pada dasarnya adalah seperti gabungan dari `position:relative` dan `position: fixed`. Untuk melihat hasil dari `position:sticky`, kita setidaknya butuh mengatur salah satu nilai dari properti `top, right, bottom, left`.

7. Sebenarnya masih banyak lagi, kamu bisa lihat styling CSS yang lebih lengkap [*disini*](https://www.w3schools.com/css/default.asp)

### Membuat Website [Responsive](https://skilvul.com/courses/css-dasar/lessons/desain-website-responsif/topics/mengatur-viewport)
#### Mengatur viewport
Viewport dalam website adalah daerah yang menampilkan halaman web yang sedang kita akses. Perlu kita ketahui ukuran viewport tidak selalu sama dengan resolusi layar perangkat. Untuk membuat halaman website menjadi responsif, maka kita perlu menambahkan meta data `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` ini di dalam element `<head>` di file HTML. Nah kita bisa menggunakan persentase untuk menentukan lebar suatu element agar sama dengan lebar parent element-nya, contoh `width: 60%;` perintah tersebut dilakukan supaya lebar elemen selalu 60% dibanding lebar parentsnya. Kamu juga bisa menggunakan properti max-width: 100% untuk menentukan lebar maksimal dari suatu element. 
### Flexbox
Flexbox adalah sebuah pengaturan elemen pada website beserta item di dalamnya  untuk beradaptasi dengan Parent/Container-nya. 

#### **Container dan Item itu apa sih?**
container adalah element yang membungkus dan mengatur tampilan dari element di dalamnya, sedangkan item adalah element dalam container yang diatur tampilannya.

<img src="https://sharkcoder.com/files/article/flex1.png" weight="600" height="200">

### Properti yang ada pada flexbox
#### *flex-direction*
Digunakan untuk menentukan ke arah mana kontainer akan menumpukkan item-item fleksibelnya, nah value-nya dapat berupa:
1. column (top ke bottom secara vertikal) 
2. column-reverse (bottom ke top secara vertikal)
3. row (left ke right secara horizontal)
4. row-reverse (right ke left secara horizontal)

#### *flex-wrap*
Digunakan untuk menentukan apakah item-item flex perlu dibungkus atau tidak, nah value-nya sebagai berikut :
1. wrap (membungkus item-item fleksibel) 
2. nowrap (tanpa membungkus item-item fleksibel) 
3. wrap-reverse (membungkus itemitem fleksibel secara terbalik)

#### *flex-flow*
Digunakan untuk meringkas / menggabungkan nilai dari properti flex-direction dan flex-wrap, contohnya `flex-flow: row wrap;`

#### *justify-content*
Digunakan untuk meratakan item-item flexibel, contoh value-nya:
1. center (meratakan item fleksibel ke tengah) 
2. flex-start (meratakan item-item fleksibel di awal wadah) 
3. flex-end (meratakan item-item fleksibel di akhir wadah)
4. space-around (membuat item-item fleksibel dengan spasi sebelum, di antara, dan setelah baris sama rata) 
5. space-between (menampilkan item-item fleksibel dengan ruang / space di antara garis).
# DAY 4: 22 September 2022
## **ALGORITMA DAN STRUKTUR DATA**
**Algoritma** merupakan langkah logis dan sistematis yang digunakan untuk menyelesaikan tujuan, sedangkan **struktur data** merupakan metode atau cara dalam menyusun, mengatur serta menyimpan berbagai data program yang terdapat dalam suatu penyimpanan dalam sistem komputer
### **Apa sih pentingnya belajar Algoritma ?**
1. Programming itu adalah algoritma dan struktur data
2. Data struktur digunakan untuk mengelola/manajemen sebuah data
3. Dan Algoritma yang akan menyelesaikan suatu permasalahan menggunakan data tersebut.

### **Terus kalo belajar Struktur Data itu buat apa ?**
1. Memberikan kemudahan dalam proses pemrograman dan pengelompokk
2. Efisiensi atau minimalkan memori yang dipakai
3. Memudahkan dalam pengaturan data

### Algoritma memiliki beberapa ciri-ciri :
1. input : memiliki masukan 
2. output : memiliki keluaran
3. definiteness : tidak ambigu
4. finiteness : memiliki titik henti
5. effectivenss : tepat sasaran dan efisien

### Nah kalo jenis Algoritma ada empat, yaitu :
1. ***sequence***, dilakukan berurutan
2. ***Selection***, dilakukan jika kondisi terpenuhi
3. ***iteration***, dilakukan secara berulangkali hingga kondisi terpenuhi
4. ***concurrent***, dilakukan secara bersamaan
### Cara penulisan algoritma
1. Deskriptif, penulisan algoritma menggunakan bahasa sehari-hari
2. Pseudocode, penulisan algoritma menggunakan campuran bahasa sehari-hari dengan bahasa pemrograman
><img src="https://aderoni.com/wp-content/uploads/2021/03/Struktur-Penulisan-Pseudocode.jpg" weight="300" height="150">
4. Flowchart, penulisan algoritma menggunakan diagram alir
><img src="https://www.99.co/blog/indonesia/wp-content/uploads/2022/01/Contoh-Bagan-Alur-Surga-dan-Neraka.jpg" weight="100" height="300">

Mari kita membuat contoh algoritma membuat fungsi untuk menghitung luas persegi
1. Deklarasikan fungsi menggunakan parameter s
2. Kembalikan hasil dengan `s*s`
3. Tampilkan hasil ke console dengan memanggil fungsi yang memiliki value parameter di dalamnya

Kemudian kita akan coba buat scriptnya menggunakan javascript
```javascript
function luasPersegi(s){
    return s*s;
}
console.log(luasPersegi(5));
```
Pada console akan muncul angka 5


Nah struktur data pada javascript sendiri terdapat pada method array 
```javascript
let array = [1, 2, 3, "halo", false, true];

  array.pop();

  console.log(array); // Output: [1, 2, 3, "halo", false]
  ```
