-- Melihat Kategori barang yang paling banyak barangnya.
select count(id_kategori) as jumlah_produk, id_kategori
from produk
group by id_kategori 
order by jumlah_produk desc
limit 1;
