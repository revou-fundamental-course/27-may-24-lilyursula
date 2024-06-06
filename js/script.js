function replaceName() {
let nama = prompt("Hello, please input your name" , "");
document.getElementById("nama").innerHTML =nama
}

document.getElementById('tombol').addEventListener("click", function(){
    replaceName()
})

//

function validateForm() {
    const namaa = document.forms['message-form']['name-input'].value
    const pesann = document.forms['message-form']['pesan-input'].value
    const datetimelocal = document.forms['message-form']['datetimelocal-input'].value

    if (namaa == '' || pesann == '') {
        document.getElementById('error').innerHTML = 'Harus di isi!';
        return false;
    }

    setResult(namaa, pesann, datetimelocal)

    return false;
}

function setResult(namaa, pesann, datetimelocal) {
    document.getElementById('nama').innerHTML = namaa;
    document.getElementById('nama-result').innerHTML = namaa;
    document.getElementById('pesan-result').innerHTML = pesann;
    // document.getElementById('datetimelocal-result').innerHTML = datetimelocal;
    document.getElementById('error').innerHTML = '';
}


function tampilkanTanggal() {
    const tanggalSekarang = new Date();
    const tanggalFormatted = tanggalSekarang.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('tanggal').textContent = tanggalFormatted;
}