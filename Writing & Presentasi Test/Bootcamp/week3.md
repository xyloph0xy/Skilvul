# DAY 5 : 10 November 2022

# Docker

sebuah platform yang digunakan untuk membuat maupun menjalankan aplikasi dengan cara menyatukan berbagai file dalam sebuah container. container digunakan sebagai alternatif agar pengguna tidak perlu menyiapkan sistem operasi secara penuh ketika menggunakan virtualisasi di server, tujuan virtualisasi adalah aplikasi bisa berjalan di berbagai platform dengan konfigurasi hardware yang berbeda-beda. selain itu aplikasi pada docker dijalankan dalam lingkungan yang terisolasi sehingga dapat menjalankan banyak container di waktu yang bersamaan pada host tertentu. Docker akan menyediakan hal-hal yang diperlukan untuk aplikasi mulai dari akses file, koneksi internet, hingga port agar aplikasi dapat berjalan dengan mulus

## Perbedaan docker dengan virtual machine

<img src="https://i0.wp.com/mjaglan.github.io/images/docker-virtualbox/docker-vs-vm.png?w=840&ssl=1" height="400" weight="600">

VM memakan banyak resource dan waktu utk booting karena melakukan virtualisasi pada host hardware-nya. Sedangkan container kebalikannya dari vm, container melakukan virtualisasi pada host OS-nya.

untuk lebih jelasnya dapat dibaca di bawah ini :

- performa, performa pada VM terbatas pada konfigurasi sedangkan pada docker bergantung pada hardware fisik
- virtualisasi, VM terjadi pada level hardware sedangkan docker pada level OS
- waktu start up, VM memmakan waktu dalam hitungan menit sedangkan docker hanya dalam hitungan detik
- isolasi, VM terisolasi penuh pada level hardware sehingga lebih aman sedangkan pada docker isolasi terjadi pada level proses

## Aristektur docker

<img src="https://docs.docker.com/engine/images/architecture.svg" height="400" weight="600">

- container, tempat untuk membungkus dan menjalankan aplikasi yang terdiri dari kode, runtie, system tools, dan pengaturan
- image, sebuah kumpulan file yang digunakan untuk menunjang aplikasi
- client, tempat di mana pengguna dapat mengirimkan perintah seperti Docker build, Docker pull, dan Docker run kepada Docker daemon.
- daemon, Proses pengelolaan Docker images, container, network, dan storage volumes
- host, bertanggung jawab menerima perintah yang diberikan Docker client
- registry, tempat untuk menyimpan docker image

## [installasi docker pada windows](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe)

setelah menginstall Docker Desktop Installer.exe :

1. gunakan wsl 2 pada halaman konfigurasi saat diminta
2. ikuti petunjuk wizard untuk mengotorisasi penginstal
3. klik tutuo setelah penginstallan selesai
4. tambahakn user ke dalam grub docker-users apabila akun admin berbeda dengan akun pengguna

## perintah dasar

- docker pull

`docker pull [OPTIONS] NAME[:TAG|@DIGEST]`

digunakan untuk mendownload image tertentu atau set iamge. semua images mu akan dibuat berdasar base image daro docekr hub registry. docker hub mengandung beberpa pre-built yang dapat kamu pill dan coba tanpa harus mendefine dan mengkonfigurasinya

- docker images

`docker image COMMAND`

digunakan untuk mengatur image

- docker run

`docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`

docker run akan membuat temoat yang dpat ditulis di atas images yang ditentukan, kemudian dimulai menggunakan perintah yang ditentukan . docker run setara dengan API/containers/create/ containers/(id)/start. Kontainer yang dihentikan dapat dimulai ulang dengan semua perubahan menggunakan docker start

- docker ps

`docker ps [OPTIONS]`

melihat container yang berjalan

beberapa shorthand yang dapat digunakan pada docker ps : - `--all/ -a`, menunjukkan semua containers - `--filter/-f` menghasilkan output yang sesuai dengan kondisi - `--last`, menampilkan container yang terakhir dibuat - dll

## docker file

Merupakan sebuah blueprint untuk membuat image, kamu juga bisa membuat custom image menggunakan docker file.

docker file command :

- `ADD`
  Perintah ADD digunakan untuk mengcopy file dari suatu direktori ke direktori tujuan

- `CMD`
  Perintah CMD hampir sama dengan perintah RUN, CMD digunakan untuk mengeksekusi perintah yang lebih spesifik, seperti pada saat proses pembuatan container pada image.

- `ENTRYPOINT`
  ENTRYPOINT adalah argumen untuk mengeset default aplikasi yang digunakan setiap kali sebuah container dibuat menggunakan image.

- `ENV`
  ENV digunakan untuk mengeset environment variables.

- `FROM`
  FROM argument mendefinisikan sebuah base image yang akan digunakan untuk memulai membangun proses pada setiap docker image apakah itu di repositori ataupun di host kita sendiri.

- `WORKDIR`
  WORKDIR direktif digunakan untuk mengatur di mana perintah didefinisikan dengan CMD yang akan dieksekusi.

- `RUN`
  RUN adalah perintah yang digunakan untuk membangun docker images yang terpusat untuk mengeksekusi Dockerfiles.

- `MAINTAINER`
  MAINTAINER adalah perintah yang tidak dijalankan tetapi di deklarasikan sebagai author field dari images.

- `USER`
  USER direktif digunakan untuk mengatur UID (atau nama pengguna) yang menjalankan sebuah container berdasarkan dari image yang sedang dibangun.

- `VOLUME`
  Perintah VOLUME digunakan untuk mengaktifkan akses dari kontainer kita ke direktori pada mesin host.

- `EXPOSE`
  Perintah EXPOSE digunakan untuk menghubungkan port tertentu untuk mengaktifkan network antara proses yang berjalan di dalam container dan mesin host.

## docker compose

merupakan cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung.

cara membuat docker compose :

- Buat file NAMA_FILE.yaml di dalam project yang kamu buat, di dalamnya terdapat konfigurasi-konfigurasi terhadap service aplikasi yang akan dijalankan
- Tulis beberapa perintah ke dalam sana
- Jalankan menggunakan perintah
  docker-compose NAMA_FILE.yaml up

Gambaran sederhananya seperti menyatukan semua Dockerfile dari setiap service aplikasi ke dalam sebuah file yaml (docker-compose file), dan selanjutnya dengan sebuah command, kita bisa meng-create dan men-start semua service yang telah didefinisikan pada file yml tersebut.
