

let textoentrada = document.getElementById("textoentrada");
let textoSalida = document.getElementById("textoSalida");
let container3 = document.getElementById("container3");
let container2 = document.getElementById("container2");


let btnencriptar = document.getElementById("btnencriptar");
let btndesencriptar = document.getElementById("btndesencriptar");
let btnlimpiar = document.getElementById("btnborrar");
let btncopiar = document.getElementById("btncopiar");


///proceso de encriptacion 
function encriptacion(texto)
{
    let result = "";
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            result += "ai";
        }
        else if (texto[i] == "e") {
            result += "enter";
        }
        else if (texto[i] == "i") {
            result += "imes";
        }
        else if (texto[i] == "o") {
            result += "ober";
        }
        else if (texto[i] == "u") {
            result += "ufat";
        }
        else {
            result += texto[i]
        }
    }

    return result;
}

function esTextoValido(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function actionEncriptar() {
    
    if (textoentrada && textoSalida) { // Verificar si ambos elementos existen

        let texto = textoentrada.value;

        if(!texto) {
            alert("No hay texto para encriptar");

        }else{
            if (!esTextoValido(texto)) {
                alert("El texto solo puede contener letras y espacios");
            }else{
                
            let result = encriptacion(texto);
            textoSalida.innerText = result;
            actualizarVisibilidad();

            } 
        }
    }
}
btnencriptar.addEventListener("click", actionEncriptar);

//proceso de desencriptacion

function desencriptacion(texto) {
    let result = texto;
    result = result.replace(/ai/g, "a");
    result = result.replace(/enter/g, "e");
    result = result.replace(/imes/g, "i");
    result = result.replace(/ober/g, "o");
    result = result.replace(/ufat/g, "u");
    return result;
}

function actionDesencriptar() {
    let texto = textoentrada.value;

    if (!texto) {
        alert("No hay texto para desencriptar");
    } else {
        if (!esTextoValido(texto)) {
            alert("El texto solo puede contener letras y espacios");
        } else {
            let result = desencriptacion(texto);
            textoSalida.innerText = result;
            actualizarVisibilidad();
        }
    }
}

btndesencriptar.addEventListener("click", actionDesencriptar);

//proceso de limpieza o borrado de texto con btn 
function actionLimpiar() {
    let texto = textoentrada.value;

    if(!texto) {
        alert("No hay texto para encriptar");

    }else{
    textoentrada.value = "";
    textoSalida.innerText = "";
    actualizarVisibilidad();
    }
}

btnlimpiar.addEventListener("click", actionLimpiar);

//logica de boton  copiar

function actionCopiar() {
    navigator.clipboard.writeText(textoSalida.innerText)
        .then(() => {
            alert("Texto copiado al portapapeles");
            textoentrada.value = textoSalida.innerText;
            textoSalida.innerText = "";
            actualizarVisibilidad();
            
        })
        .catch(err => {
            alert("Hubo un error al copiar el texto: ", err);
        });
}
btncopiar.addEventListener("click", actionCopiar);

//visualizacion de la imagen
function actualizarVisibilidad() {
    // Verifica si hay texto en textoSalida
    if (textoSalida.innerText.trim() === "") {
        // Si no hay texto, muestra container3 y oculta container2
        container3.style.display = "block";
        container2.style.display = "none";
    } else {
        // Si hay texto, oculta container3 y muestra container2
        container3.style.display = "none";
        container2.style.display = "block";
    }
}

actualizarVisibilidad();
