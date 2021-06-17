// 1. Mengisi Array

// var arr = [];

// arr[1] = "Muchamad Rijal";
// arr[2] = "27 Oktober 1993";
// arr[3] = "Laki-laki";
// arr[4] = 27;

// console.log(arr);
// console.log(arr[2])

// 2. Cara menghapus Array
var arr = ["Petani", "Memakai", 4, "Combi", true];


arr[1] = undefined;
console.log(arr);

// 3. Cara menambah isi Array
var ok = ["Petani", "Memakai", 4, "Combi", true];

for(var i=0; i-1 < ok.length; i++){
    console.log("Item ke - " + i + " " + ok[i])
}

// 4. Menggunakan methode join
var join = ["Petani", "Memakai", 4, "Combi", "Untuk", "memanen", "padi"]
console.log(join.join("*"));

// 5. Menggunakan methode splice
var siap = ["Petani", "Memakai", 4, "Combi", "Untuk", "memanen", "padi"]
// splice(indexAwal, indexYg ingindihapus, elemnBaru1, elemenBaru2, ...)
siap.splice(3, 1, "mesin");
siap.push("di sawah")
console.log(siap.join("-"))

//  6. Menggunakan methode slice
var mantap = ["Petani", "Memakai", 4, "Combi", "Untuk", "memanen", "padi"]
// slice(indexAwal, indexAkhir)
var mantap2 = mantap.slice(2,5)
mantap2.push("di sawah")
console.log(mantap)
console.log(mantap2.join("-"))


