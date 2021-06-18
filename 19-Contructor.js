// Membuat object pada fucntion constructor
// 1. Nama Function disarankan menggunakan huruf besar diawalnya, hal ini untuk membedakan bahwa function yang sedang di buata menggunakan cunstroctor. Meskipun menggunakan huruf kecil tidak masalah.
// 2. Gunakan this untuk membuat objectnya
// 3. Gunakan new untuk memanggil function nya

function Siswa(nama, kelas, asalSekolah, noAbsen){

    this.nama = nama;
    this.kelas = kelas;
    this.asalSekolah = asalSekolah;
    this.noAbsen = noAbsen;
}

var siswa1 = new Siswa ("Sinta", 3, "SDN Mlayubanter", 30)


// Bedanya dengan function declaration adalah pada scope functionya, didalamnya terdapat deskripsi var dan return. Sedangkan pada constructor tidak ada.