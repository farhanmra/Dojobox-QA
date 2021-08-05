// var angka1=parseInt(prompt("masukan sisi 1 :"));
// var angka2=parseInt(prompt("masukan sisi 2 :"));

// function kubus1(angka1){
//     jumlah=angka1 *angka1 *angka1
//     return jumlah
// }
// function kubus2(angka2){
//     jumlah=angka1 *angka1 *angka1
//     return jumlah
// }

// function tambah(a,b){
//     return a+b;
// }
// document.write(tambah(5,3)+'<br>')
// document.write(tambah(6,3)+'<br>')

// var penjumlahan=function(angka1,angka2){
//     var hasil
//     hasil=angka1+angka2
//     return hasil
// }
// document.write(penjumlahan(7,8))

// function cetak(bill1,bill2){
//     document.write('tagihan pertama :'+bill1+'<br>')
//     document.write('tagihan Kedua :'+bill2+'<br>')
// }

// cetak('200.000','5000')

//object
//literal decalaration
// var akademia ={
//     //property
//     nama    :'Farhan',
//     NIK     :'13114958',
//     email   :'farhan@gmail.com',

//     //method
//     getName:function(){
//         console.log('Nama Saya adalah '+ this.nama+'<br>')
//     },
//     getEmail:function(){
//         console.log('Email saya adalah :'+ this.email+'<br>')
//     },
//     getNIK:function(){
//         console.log('NIK saya adalah '+this.NIK+'<br>')
//     }
// }

//constructor
function akademia(nama,NIK,email){
    this.nama=nama;
    this.email=email;
    this.NIK=NIK;
}
//tambah