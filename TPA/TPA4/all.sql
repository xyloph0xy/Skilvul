create database TPA5;
use TPA5;

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

insert into pembeli (username,password,nama,email,nomor_hp,alamat) values
("luluk01","12344566","Luluk","luluk@gmail.com","081123123123","Jl. Ki Penjawi No.17, Prenggan, Kec. Kotagede, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55172"),
("sofi01","123445122d","Sofi","sofi@gmail.com","081123162898","Marangan, Bokoharjo, Kec. Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55572"),
("agam.ust","1hjvqvwku","agam","agam@gmail.com","085722779829","Jl. Raya Solo - Yogyakarta No.19, Tegalbarong, Kemudo, Kec. Prambanan, Kabupaten Klaten, Jawa Tengah 57454"),
("husenchan","xbhxbwuw12","husein","husein@gmail.com","086738218092","Jl. Klaten - Solo No.KM. 2, Peraksangkal, Jonggrangan, Kec. Klaten Utara, Kabupaten Klaten, Jawa Tengah 57435"),
("muthmadew","asuqw21ibs","dewimuth","dewdew@gmail.com","086738212344","jln. Sendang Sriningsih Km. 1, Tambongan, Ngringin, Muruh, Kec. Gantiwarno, Kabupaten Klaten, Jawa Tengah 57455"),
("dwisus","qisnqk29","dwi susanto","widwi@gmail.com","085927893892","Jl. Jend. Urip Sumoharjo, Jebres, Kec. Jebres, Kota Surakarta, Jawa Tengah 57128"),
("febrilasca","189321","febrila sucia","sucia@gmail.com","085097267182","Jl. Kapas No.10, Semaki, Kec. Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55166"),
("chandrasyah","wsin2932d","chandra wibawa syahputra","chandra@gmail.com","085123145983","Jalan Jend Ahmad Yani, Kayangan, Sumberejo, Kec. Klaten Sel., Kabupaten Klaten, Jawa Tengah 57426"),
("thobieee","783901u3","raihan thobie","thobie@gmail.com","085123456123","Jl. Raya Solo - Yogyakarta, Sidodadi, Tlogo, Kec. Prambanan, Kabupaten Klaten, Jawa Tengah 57454"),
("zakyrmd","asdfsswq89","zaky","zaky@gmail.com","081123162789","Jl. Adi Sucipto No.8, Blukukan, Blulukan, Kec. Colomadu, Kabupaten Karanganyar, Jawa Tengah 57174");

select * from pembeli;

-- table kategori

create table kategori(
id int primary key auto_increment,
nama varchar (30)
);

insert into kategori (nama) values
("sabun"), ("makanan"), ("perkakas"), ("obat");

select * from kategori;

-- table produk

create table produk (
id int primary key auto_increment,
nama varchar (30),
harga int,
expired date,
id_kategori int,
foreign key (id_kategori) references kategori(id)
);

insert into produk (nama,harga,expired,id_kategori) values
("Wafer nabati keju",5000,"2023-12-23",2),
("Wafer nabati vanilla",5000,"2025-11-23",2),
("Wafer nabati bubblegum",5000,"2024-08-20",2),
("oreo strawberry",12000,"2025-10-24",2),
("nuvo lemon", 15000,"2025-11-16",1),
("detol biru", 20000,"2023-10-22",1),
("gelas", 7000,"00-00-0000",3),
("sendok",12000,"00-00-0000",3),
("promaag",8000,"2025-02-13",4),
("intunal",3500,"2024-08-24",4);

select * from produk;



-- table metode pembayaran

create table metode_pembayaran (
id int primary key auto_increment,
nama varchar (20)
);

insert into metode_pembayaran (nama) values 
("COD"),("transfer bank"),("transfer e-wallet");
select * from metode_pembayaran;

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

insert into transaksi (id_pembeli,waktu,keterangan,total,id_mtdBayar) values
(1,now(),"packing yang aman",63000,1),
(2,now(),"packing yang aman",62000,1),
(3,now(),"packing yang aman",6000,2),
(4,"2021-07-20 11:20:11","tambah bubblewrap",18500,3),
(5,"2021-07-20 11:20:11","tambah bubblewrap",10000,2),
(6,"2022-10-23 10:20:01","tidak ada",58000,3),
(7,"2022-10-23 10:20:01","tidak ada",30000,2),
(8,"2022-09-19 09:21:21","cepat kirim",24000,1),
(9,"2022-09-19 09:21:21","cepat kirim",3500,1),
(10,"2022-09-19 09:21:21","cepat kirim",8000,1)
;

select * from transaksi;

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

insert into detail_transaksi (id_transaksi, id_produk,jumlah,total) values
(1,1,3,15000),
(1,5,2,30000),
(1,10,4,18000),
(2,2,1,5000),
(2,3,1,5000),
(2,6,2,40000),
(2,8,1,12000),
(3,6,3,60000),
(4,9,1,3500),
(4,1,3,15000),
(5,1,2,10000),
(6,1,2,10000),
(6,4,4,48000),
(7,3,4,20000),
(7,2,2,10000),
(8,8,2,24000),
(9,10,1,3500),
(10,9,1,8000);

select * from detail_transaksi;

-- kasus

-- Melihat 3 produk yang paling sering dibeli oleh pelanggan.

-- berapa kali
select count(id_produk) as terjual, id_produk
from detail_transaksi
group by id_produk
order by terjual desc
limit 3;

-- jumlah terjual setiap produk
select sum(jumlah) as terjual, id_produk
from detail_transaksi
group by id_produk
order by terjual desc
limit 3;

-- Melihat Kategori barang yang paling banyak barangnya.
select count(id_kategori) as jumlah_produk, id_kategori
from produk
group by id_kategori 
order by jumlah_produk desc
limit 1;

-- Nominal rata-rata transaksi yang dilakukan oleh pelanggan dalam 1 bulan terakhir.
select avg(total) as rata2_transaksi
from transaksi
where waktu > DATE(NOW() - INTERVAL 1 MONTH);

select * from transaksi;

