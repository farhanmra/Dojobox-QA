var barang=['komputer','mouse','laptop','monitor','headset']
var namaBarang=prompt('Masukan Nama barang :','komputer,mouse ,laptop, monitor , headset')
var jmlBarang=parseInt(prompt('Masukan jumlah barang:'))
var hrgbarang=parseInt(prompt('Masukan Harga barang'))
var diskon=parseInt(prompt('Masukan Diskon :'))

if(barang.includes(namaBarang)==true){
    document.write('Nama barang :'+namaBarang+'<br>')
    document.write('harga : Rp '+hrgbarang+'<br>')
    document.write('Jumlah : '+jmlBarang+'<br>')
    jmlDiskon=hrgbarang*diskon/100
    document.write('Diskon '+diskon+' % :'+jmlDiskon+'<br>')
    totalHarga=(hrgbarang*jmlBarang)-jmlDiskon
    document.write('Total :'+totalHarga+'<br>')
    }
else{
    document.write('Maaf barang yang anda cari tidak ada')
}
