// var namaVar='1234';
// document.write(typeof(namaVar)+'<br>');
// var namaVar=1234;
// document.write(typeof(namaVar)+'<br>');
// var namaVar=true;
// document.write(typeof(namaVar)+'<br>');

// var pengunjung= prompt("Masukan Nama anda: ");
// document.write('hai ' +pengunjung+ " selamat datang di dojobox" +"<br>");

// var konfirmasi=confirm("Mau tetap disini ga?");
// var hasil = (konfirmasi==true)? "Iya dong":"gak deh.."
// document.write(hasil +"<br>");

// var nama =prompt('Masukan Nama :', 'isi nama');
// if (nama=='Farhan'){
//     document.write('Seorang QA')
// }else{
//     document.write('siapa itu')
// }

// var nilai= prompt('masukan angka: ')
// if(nilai %2==0){
//     document.write(nilai +' Merupakan bilangan genap')
// }else if(nilai %2==1){
//     document.write(nilai +' merupakan bilangan ganjil')
// }else{
//     document.write(nilai +' bukan bilangan ini woy')
// }

var angka=parseInt(prompt('masukan angka ','0-2'))
switch(true){
    case (angka>=90):
        document.write('grade A')
        break
    case (angka>=80):
        document.write(' grade B')
        break
    case (angka>=70):
        document.write('grade C')
        break
    default:
        document.write('Grade D')
}