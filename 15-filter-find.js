
// methode filter
var sebuah = [1, 3, 5, 2, 7, 4, 9, 8, 6];
var sesuatu = sebuah.filter(function(a){
    return a == 2;
})
console.log(sesuatu)

// methode find
var sepanjang = [1, 3, 5, 2, 7, 4, 9, 8, 6];
var sependek = sepanjang.filter(function(c){
    return c > 5;
})
console.log(sependek)