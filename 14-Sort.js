var ongko = [1, 3, 5, 2, 7, 4, 9, 8, 6];
console.log("Belum di urutkan: " + ongko.join(" > "));

ongko.sort(function(a, b){
    return a-b;
})

console.log("Hasil Sudah urut: " + ongko.join(" > "))