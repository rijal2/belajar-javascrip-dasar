// Membuat Object pada Function declaration

function bikinObjectSiswa (nama, kelas, asalSekolah, noAbsen){
    var siswa1 = {};
    siswa1.nama = nama;
    siswa1.kelas = kelas;
    siswa1.asalSekolah = asalSekolah;
    siswa1.noAbsen = noAbsen;
    return siswa1;
}

var siswa1 = bikinObjectSiswa("Galih", 3, "SDN 3 Kali Urip", 4)

var siswa2 = bikinObjectSiswa("Robi", 5, "SDN MAdungan", 6, )