
function showInput() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let nik = document.getElementById("nik").value;
    let phone = document.getElementById("phone").value;
    let street = document.getElementById("street").value;
    let city = document.getElementById("city").value;
    let province = document.getElementById("province").value;
    let postCode = document.getElementById("postCode").value;
    let education = document.getElementById("education").value;
    let major = document.getElementById("major").value;
    let position1 = document.getElementById("position1").checked;
    let position2 = document.getElementById("position2").checked;
    let position3 = document.getElementById("position3").checked;
    let position4 = document.getElementById("position4").checked;
    let message = document.getElementById("message").value;

    let position = "";
    if (position1) {
        position += "HRGA dan "
    }
    if (position2) {
        position += "Finance dan "
    }
    if (position3) {
        position += "Business dan "
    }
    if (position4) {
        position += "IT dan "
    }

    let trimmedPosition = position.slice(0, -5)

    alert("Nama Anda " + name + " dengan email: " + email + ", NIK: " + nik + ", no. ponsel " + phone + ". Anda tinggal di " + street + ", Kab/Kota " + city + ", Prov. " + province + " - " + postCode + ". Anda memiliki pendidikan terakhir " + education + " di jurusan " + major + ". Anda berminat melamar di posisi " + trimmedPosition + " karena '" + message + ".' Tekan 'Oke' jika yakin data Anda benar." )
}


 function showPrompt() {
     let usia = prompt('Berapakah usia Anda?')

     alert('Umur Anda ' + usia + ' tahun. Terima kasih! Data Anda telah dikirim.')
 }


