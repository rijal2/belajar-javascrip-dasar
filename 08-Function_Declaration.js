// Jumlah volume dua kubus menggunakan function declaration

function jmlVol(a,b){
    var volume1, volume2;
    volume1 = a * a * a
    volume2 = b * b * b
    total = volume1 + volume2

    return total
}

alert("Hasil penjumlahan volume dua kubus adalah " + jmlVol(3,4));