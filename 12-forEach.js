// menyederhanakan looping for menggunakan function defaukt dari javascript,
// Sebelumnya kita belajar membuat loopng dengan menggunakan for seperti berikut:
// for (var j = 0; j < i; j++){
     
//     x = x + "+";
       
// }
// Sekarang kita sudah bisa memakai yang lebih simple yaitu dengan memanfaatkan forEach.

var mobil = ["Daihatsu", "Avanzaz", "Terrios", "Mobillio"]

mobil.forEach(function(e, i){
    console.log("Mobil ke - "+ (i+1) + "." + mobil[i])
})