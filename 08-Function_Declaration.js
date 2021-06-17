// Jumlah volume dua kubus menggunakan function declaration

function jmlVol(a,b){
    var volume1, volume2;

    volume1 = a * a * a
    volume2 = b * b * b
    total = volume1 + volume2

    return total
}

console.log(jmlVol(3,4));