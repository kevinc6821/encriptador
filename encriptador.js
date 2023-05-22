
var textArea = document.querySelector(".text1");
var mensaje = document.querySelector(".text3");




function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    if (textArea.value === "") {
        alert("Debes ingresar una palabra")
    }
    return stringEncriptada

    
} 



function btnEncriptar() {

    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    var texto = document.querySelector(".text4");
    texto.style.display = "none";
    var texto = document.querySelector(".text5");
    texto.style.display = "none";



}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }


    }
    return stringDesencriptada
}
function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    var texto = document.querySelector(".text4");
    texto.style.display = "none";
    var texto = document.querySelector(".text5");
    texto.style.display = "none";



}

function btncopiar() {
    var texto = document.querySelector(".text3");
    texto.select();
    document.execCommand("copy");
    alert("¡Texto en portapeles!");
}



function limpiar() {
    var textarea = document.querySelector(".text3");
        textarea.value = "";
}

