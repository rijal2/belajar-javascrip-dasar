// Menyederhanakan function.
// Sebagai contoh kita ambil function yang telah di tulis pada file 08-Function_Declaration.js

// function jmlVol(a,b){
//     var volume1, volume2;
//     volume1 = a * a * a
//     volume2 = b * b * b
//     total = volume1 + volume2

//     return total
// }

// alert("Hasil penjumlahan volume dua kubus adalah " + jmlVol(3,4));

function jmlVol(a,b){
    return a*a*a+b*b*b;
}

alert("Hasil penjumlahan volume dua kubus adalah " + jmlVol(3,4));