-- Melihat 3 produk yang paling sering dibeli oleh pelanggan.

-- untuk melihat berapa kali sebuah produk dibeli oleh pelanggan
select count(id_produk) as terjual, id_produk
from detail_transaksi
group by id_produk
order by terjual desc
limit 3;

-- digunakan untuk melihat berapa jumlah produk yang terjual
select sum(jumlah) as terjual, id_produk
from detail_transaksi
group by id_produk
order by terjual desc
limit 3;

use tpa5;