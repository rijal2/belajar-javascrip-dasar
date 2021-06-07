
var bykAngkot = 10
var opAngkot = 7
var noAngkot = 1

for(noAngkot; noAngkot <= bykAngkot; noAngkot++){
    if(noAngkot <= opAngkot){
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
    } else if(noAngkot === 8){
        console.log("Angkot No. " + noAngkot + " sedang lembur");
    } else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
    }
}