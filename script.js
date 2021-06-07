// alert("Selamat Datang di Pembelajaran Javascript Dasar");
// alert("Selamat Belajar")
// alert("Jangan lupa berdoa terlebih dahulu!");
// alert("Terimakasi!");

// var nama = prompt("Siapa Namamu ?");
// alert(nama);

// var pengguna = confirm("Apakah kamu yakin?");
// if( pengguna === true ) {
//     alert("User Menyetujui tindakan tersebut");
// } else{
//     alert("User menolak hal tersebut");
// }

// alert("Selamat Datang di media Belajar Dasar Javascript")
// var coba = true;

// while   (coba === true ) {
//     var isi = prompt("Siapa nama anda??")
//     alert("Halo " + isi)

//     coba = confirm("Apakah anda ingin mengulang lagi?")
// }

// alert("Terimakasih kak!" + isi);

alert("Selamat datang di Sekolah Media Nusantara Online");
var konfirmasi = prompt("silahkan masukkan password anda!");

if(konfirmasi === "Siswa"){
    var kelas = parseInt(prompt("siswa kelas berapakah anda?"));
    if(kelas === 5) {
        alert("Mohon maaf anda bukan siswa kami. Karena kami tidak membuka kelas 5.");
        konfirmasi = false;
    } else {
        alert("Baik! anda adalah salah satu siswa kami, silahkan masuk");
        
        konfirmasi = false;
    }
} else {
    alert("Anda bukan siswa kami.")
}