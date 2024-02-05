function calcularMedia() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var numero3 = document.getElementById("numero3").value;

    if (
        numero1 < 1 ||
        numero2 < 1 ||
        numero3 < 1 ||
        !Number.isInteger(parseFloat(numero1)) ||
        !Number.isInteger(parseFloat(numero2)) ||
        !Number.isInteger(parseFloat(numero3))
    ) {
        document.getElementById("resultado").innerHTML =
            "Por favor, ingrese números enteros y positivos.";
    } else {
        var media =
            (parseInt(numero1) + parseInt(numero2) + parseInt(numero3)) / 3;
        var mediaRedondeada = (Math.round(media * 100) / 100).toFixed(2);
        if (media === Math.floor(media)) {
            mediaRedondeada = Math.floor(media);
        }
        document.getElementById("resultado").innerHTML =
            "El promedio de los tres números es: " + mediaRedondeada;
    }
}

function resetearFormulario() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("numero3").value = "";
    document.getElementById("resultado").innerHTML = "";
}
