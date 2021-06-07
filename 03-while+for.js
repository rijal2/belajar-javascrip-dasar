var bykAngkot = 10
var opAngkot = 9
var noAngkot = 1

// Membuat pengkondisian angkot no 1-6 beroperasi dan angkot no 7-10 sedang tidak beroperasi.
while( noAngkot <= opAngkot) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
    noAngkot++;
}

for(noAngkot = opAngkot+1 ; noAngkot <= bykAngkot; noAngkot++) {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi")
}