//  Menggunakan this.
// This adalah object global / window

// Cara Peratam - Menggunakan Object Literals

var obj = {};
obj.halo = function(){
    console.log(this);
    console.log("halo")
}
// Cara memanggilnya
obj.halo();
// 

// Cara Kedua -Menggunakan function declaration

function cek (){
    console.log(this);
    console.log("Halo")
}
// Cara memanggilnya
this.cek();
// this ini mengembalikan object global

