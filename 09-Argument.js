// Cara penulian argumen

function jml (c, d) {
    return c + d;
}

function dot (c, d) {
    return c * d;
}

var hasil = jml(dot(3, 4), jml(4, 3)) + dot(jml(5, 6), dot(6, 7));

alert(hasil);