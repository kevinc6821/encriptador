
var textArea = document.querySelector(".text1");
var mensaje = document.querySelector(".text3");




function encriptar(stringEncriptada) {

    var textarea = document.querySelector(".text1");
    var texto = /[!@#$%^&*(),.?":{}|<>]/;

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();


    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
        
    }
    if ((textArea.value === "")){
        alert("Ingresa un texto")
    } else if (!isNaN(textArea.value)){
        alert("!Error¡ Los numeros no estan permitidos")
    } else if (texto.test(textarea.value)) {
        alert("Se ha ingresado un caracter especial.");
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

    let matrizCodigo = [["p", "pe"], ["j", "jota"], ["f", "efe"], ["k", "ka"], ["y", "ye"], ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
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

