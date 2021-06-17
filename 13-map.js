var huruf = ["a", "b", "c", "d", "e", "f"]
var hurufKom = huruf.map(function(e){
    return e + 2;
})
console.log(hurufKom.join(" - "))