function submitForm() {
  let namaPasien = document.getElementById("na1").value;
  let tempatLahir = document.getElementById("na2").value;
  let alamat = document.getElementById("na5").value;
  let provinsi = document.getElementById("na6").value;
  let kecamatan = document.getElementById("na7").value;
  let kelurahanDesa = document.getElementById("na8").value;
  let nomorTelpon = document.getElementById("na9").value;
  let kodePos = document.getElementById("na10").value;
  let pendidikan = document.getElementById("na12").value;
  let pekerjaan = document.getElementById("na13").value;
  let hubungan = document.getElementById("nb1").value;
  let namaPenanggungJawab = document.getElementById("nb2").value;
  let pendidikanPenanggungJawab = document.getElementById("nb3").value;
  let pekerjaanPenanggungJawab = document.getElementById("nb4").value;
  const letters = /^[A-Za-z]+$/;

  if (
    namaPasien == "" ||
    tempatLahir == "" ||
    alamat == "" ||
    provinsi == "" ||
    kecamatan == "" ||
    kelurahanDesa == "" ||
    nomorTelpon == "" ||
    kodePos == "" ||
    pendidikan == "" ||
    pekerjaan == "" ||
    hubungan == "" ||
    namaPenanggungJawab == "" ||
    pendidikanPenanggungJawab == "" ||
    pekerjaanPenanggungJawab == ""
  ) {
    alert("Terdapat data yang kosong, harap segera diisi!");
    return;
  }
  else if(letters.test(nomorTelpon))
  {
    alert("Data nomor telpon invalid");
    return;
  }

  alert('data berhasil diinput');
}
