// Cara penulian argumen
// 1 . Dengan menuliskan parameter yang berada di dalam tanda kurung ().
function jml (c, d) {
    return c + d;
}

function dot (c, d) {
    return c * d;
}

var hasil = jml(dot(3, 4), jml(4, 3)) + dot(jml(5, 6), dot(6, 7));

alert(hasil);

// 2. Tidak menuliskan parameter sama sekali

function colek () {
    var hasil = 0;
    for(var i=0; i < arguments.length; i++) {
        hasil += arguments[i]
    }
    return hasil;
}

alert(colek(1,2,3,8));