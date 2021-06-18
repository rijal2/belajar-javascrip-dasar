var kamar = [];

var tambahTamu = function(namaTamu, kamar){
   // Jika kamar kosong
    if( kamar.length == 0 ){
        // Tambah tamu di awal array
        kamar.push(namaTamu);
        // kembalikan isi array & keluar dari function
        return kamar;
    } else {
        // Telusuri seluruh kamar dari awal
        for (var i = 0; i < kamar.length; i++){
            // Jika ada kamar kosong
            if(kamar[i] == undefined){
                // Tambahkan tamu dikursi tersebut
                kamar[i] = namaTamu;
                // Kembalikan isi array dan keluar dari function
                return kamar;
            }
            // Jika sudah ada nama yang sama
            else if(kamar[i] == namaTamu){  
                // Tampilkan pesan kesalahannya
                console.log("Mohon maaf kamar kos disini mensyaratkan tidak boleh ada nama yang sama. Nama " + namaTamu + " sudah ada yang menempati. Anda bisa mencari kamar ditemapat saudara saya.")
                // Kembalikan isi array dan keluar dari function
                return kamar;
            }
            // Jika seluruh kamar sudah terisi penuh
            else if (i == kamar.length-1 ){
                // Tambah tamu di kamar terakhir
                kamar.push(namaTamu);
                // Kembalikan isi array dan keluar dari function
                return kamar;
            }
        }
    }
}

var tamuKeluar = function (namaTamu, kamar){
    if( kamar.length == 0){
        console.log("Sejak kemarin semua kamar kos kosong!");
        return kamar;
    } else {
            for (var i = 0; i < kamar.length; i++ ){
            if(kamar[i] == namaTamu){
                kamar[i] = undefined;
                return kamar;
            } else if( i == kamar.length-1 ){
                console.log("Nama " + namaTamu + " tidak ada pada list penghuni kamar kos ini!");
                return kamar;
            }
        }
    }
}
