-- Nominal rata-rata transaksi yang dilakukan oleh pelanggan dalam 1 bulan terakhir.
select avg(total) as rata2_transaksi
from transaksi
where waktu > DATE(NOW() - INTERVAL 1 MONTH);