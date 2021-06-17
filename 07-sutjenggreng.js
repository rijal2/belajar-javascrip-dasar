var lagi = true;
while( lagi ){

    var input =  prompt("Kamu mau pilih apa? Gajah, Semut, atau Orang?");

    var komputer = Math.random();

    if(komputer <= 0.35){
        komputer = "Gajah"
    } else if(komputer > 0.35 && komputer < 0.7){
        komputer = "Semut"
    } else{
        komputer = "Orang"
    }

    var hasil = "";

    if(input == komputer){
        hasil = "SERI"
    } else if(input == "Gajah"){
        if(komputer == "Orang"){
            hasil = "Anda Menang"
        } else{
            hasil = "Anda Kalah"
        }
    } else if(input == "Semut"){
        if(komputer == "Gajah"){
            hasil = "Anda Menang"
        } else{
            hasil = "Anda Kalah"
        }
    } else if(input == "Orang"){
        if(komputer == "Gajah"){
            hasil = "Anda Menang"
        } else{
            hasil = "Anda Kalah"
        }
    } else{
        hasil = "tidak bisa ditentukan, karena Anda memasukkan inputan yang salah"
    }

    var lagi = confirm("Anda Pilih :" + input + " dan komputer pilih: " + komputer + "\n" + "maka hasil pertandingan ini " + hasil + "\n" + "\n" + "Apakah anda ingin mengulangi lagi?");
    
}

alert("Terimakasih sudah bermain dengan saya!")