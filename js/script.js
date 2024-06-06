function replaceName() {
let nama = prompt("Hello, please input your name" , "");
document.getElementById("nama").innerHTML =nama
}

document.getElementById('tombol').addEventListener("click", function(){
    replaceName()
})


//


// let nameInput = document.getElementById('name-input')
// document.getElementById('kirim').addEventListener("click", function()
// {
//     const namaa = nameInput.value

//     if (nama == "")
//         {
//             document.getElementById("error-name").innerHTML = "Nama harus diisi!"
//         }

//     else
//         {
//             document.getElementById('nama').innerHTML = namaa
//         }
// })  


function validateForm() {
    const namaa = document.forms['message-form']['name-input'].value
    const pesann = document.forms['message-form']['pesan-input'].value

    if (namaa == '' || pesann == '') {
        document.getElementById('error').innerHTML = 'Harus di isi!';
        return false;
    }

    setResult(namaa, pesann)
    // setPesan(pesann);

    return false;
}

function setResult(namaa, pesann) {
    document.getElementById('nama').innerHTML = namaa;
    document.getElementById('nama-result').innerHTML = namaa;
    document.getElementById('pesan-result').innerHTML = pesann;
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