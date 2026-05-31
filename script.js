document.addEventListener("DOMContentLoaded", function () {

    const selectKopi = document.getElementById("pilih-kopi");
    const inputJumlah = document.getElementById("jumlah-kemasan");
    const displayTotal = document.getElementById("total-biaya");

    function hitungTransaksi() {
        const hargaPerPack = parseInt(selectKopi.value) || 0;
    }
})