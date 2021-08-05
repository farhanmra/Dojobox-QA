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

// var angka=0;

// while(angka<=5){
//     document.write('angka '+angka +'<br>')
//     angka+=1;
// }

// var angka=1
// for(angka;angka<=10;angka++){
//     for (angka;angka<=5;angka++) {
//     document.write('siswa dengan no induk '+angka+' TA Vista'+'<br>')}
//     for (angka;angka<=10;angka++){
//         document.write('siswa dengan no induk '+angka+' TA Intan'+'<br>')
//     }
// }

// var angka=1
// while(angka<=5){
//     document.write('siswa dengan no induk '+angka+' TA Vista'+'<br>')
//     angka+=1;
// }


// for (angka=6;angka<=10;angka++){
//     document.write('siswa dengan no induk '+angka+' TA Intan'+'<br>')
// }

// buah=['apel','pisang','belimbing']
// document.writeln(typeof(buah))
// document.write('<br>')
// document.writeln(buah.length)
// document.write('<br>')
// document.writeln(buah[1])
// document.write('<br>')

// inifungsi=function(){}
// array=['teks',1234,true,inifungsi,[2,3,5]]
// document.write('<br>')
// document.write(array[4][2]) 

// array2=[]
// array2[0]='senin';
// array2[1]='selasa';
// array2[3]='kamis';

// buah=['apel','pisang','belimbing','salak','anggur']
//1.join
// document.write(buah.join('<br>'))
// 2.push
// push menambahkan element di akhir
// buah.push('duren')
// document.write(buah.join('<br>'))
// 3.pop 
// menghapus elment
// buah.pop()
// document.write(buah.join('<br>'))
//4.unshift
//digunakan untuk menambahkan array di awal element
// buah.unshift('jambu')
// document.write(buah.join('<br>'))
//5.shift
//menghilangkan element diawal array
// buah.shift()
// document.write(buah.join('<br>'))
//6.splice
//splice menambahkan dan menghapus di tengah array
//splice (index awal,jmlHapus,elementBaru1,...,elementBaruN)
// buah.splice(2,2,'kelapa','melon')
// document.write(buah.join('<br>'))

//7. Slice
// newBuah=buah.slice(2,4)
// document.write('<br>')
// document.write('<br>')
// document.write(newBuah.join('<br>')) 

//8. for each
// buah.foreach(function(e,i)){
//     document.write(i+' = ' +e+'<br>')
// }

// buah.foreach(function(e,i)){
//     document.write((i+1) +' = ' +e+'<br>')
// }

// //9. map
// // mengembalikan array
// var buahBaru=buah.map(function(e,i){
//     return  e + ' enak dimakan'
// })
// document.write('<br>')
// document.write('<br>')






