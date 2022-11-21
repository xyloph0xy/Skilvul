-- table pembeli
create table pembeli (
id int primary key auto_increment,
username varchar (20),
password varchar (15),
nama varchar (50),
email varchar (20),
nomor_hp varchar (20),
alamat text
);

-- table kategori
create table kategori(
id int primary key auto_increment,
nama varchar (30)
);

-- table produk
create table produk (
id int primary key auto_increment,
nama varchar (30),
harga int,
expired date,
id_kategori int,
foreign key (id_kategori) references kategori(id)
);

-- table metode pembayaran
create table metode_pembayaran (
id int primary key auto_increment,
nama varchar (20)
);

-- table transaksi
create table transaksi (
id int primary key auto_increment,
id_pembeli int,
waktu datetime,
keterangan text,
total int,
id_mtdBayar int,
foreign key (id_mtdBayar) references metode_pembayaran(id),
foreign key (id_pembeli) references pembeli(id)
);

-- table detail transaksi
create table detail_transaksi (
id int primary key auto_increment,
id_transaksi int,
id_produk int,
jumlah int,
total int,
foreign key (id_transaksi) references transaksi(id),
foreign key (id_produk) references produk(id)
);

