//variable para poder obtener el contenido predeterminado (la imagen, y el mensaje).
let textoError = document.getElementById("txtresultado").innerHTML;
//variable para poder obtener el contenido que se ingrese en el textarea. 
let texTarea = document.getElementById("txtusuario").value;

//se declara la variable global para poder usarla fuera de la funcion.
let textoCifrado;

//funcion para encriptar el texto simpre que contenga alguna vocal.
function encriptar() {
    //para poder traer el texto dentro del textarea.
    let textoUsuario = document.getElementById("txtusuario").value;
    //Remplaza cada vocal de una frase por el texto entre comillas.
    textoCifrado = textoUsuario
        .replace(/a/gi, "var")
        .replace(/e/gi, "per")
        .replace(/i/gi, "tni")
        .replace(/o/gi, "gols")
        .replace(/u/gi, "zuz");
    

    if (textoUsuario != 0) {
        //este DOM deshabilita el mensaje de no encontrar texto.
        document.getElementById("txtresultado").value = txtresultado.style.display = "none"
        //remplaza el texto cifrado por el contenido al costado derecho
        txtresultadofinal.textContent = textoCifrado; 
        //limpia el textarea
        document.getElementById("txtusuario").value = ""; 
        //este DOM habilita el boton copiar.
        document.getElementById("txtfinal").value = txtfinal.style.display = "inline";
       
    } else {
        alert("ERROR! Debes a lo menos usar una plabra");
        
    } 
    
}

function copiar() {
    //este DOM hace desaparecer el resultado de encriptar o desencritar junto al boton.
    document.getElementById("txtfinal").value = txtfinal.style.display = "none";
    //este DOM devuleve el texto anterir dentro del HTM (el por defecto).
    document.getElementById("txtresultado").value = txtresultado.style.display = "inline";
    //se copia el texto encriptado o desencriptado y se remplaza dentro del textarea.
    document.getElementById("txtusuario").value = document.getElementById("txtresultadofinal").innerText;

    let textCopiado = document.getElementById("txtresultadofinal").innerHTML;
    navigator.clipboard.writeText(textCopiado)
    .then(() => {
        console.log("contenido copiado con exito");
        alert("Texto copiado en el portapapeles y remplazado con exito")
    },() => {
        console.log("Error al copiar");
        alert("Error al copiar el contenido")
    });

}

function desencriptar() {

    let textoUsuario = document.getElementById("txtusuario").value;
    //en esta parte se remplaza el cifrado con la identificacion de cada vocal.
    textoDescriptado = textoUsuario
        .replace(/var/gi, "a")
        .replace(/per/gi, "e")
        .replace(/tni/gi, "i")
        .replace(/gols/gi, "o")
        .replace(/zuz/gi, "u");

    if (textoCifrado != 0) {
        //este DOM deshabilita el mensaje de no encontrar texto.
        document.getElementById("txtresultado").value = txtresultado.style.display = "none";
        //remplaza el texto desencriptado por el contenido al costado derecho en <p>.
        txtresultadofinal.textContent = textoDescriptado; 
        //limpia el textarea
        document.getElementById("txtusuario").value = ""; 
        //este DOM habilita el boton copiar.
        document.getElementById("txtfinal").value = txtfinal.style.display = "inline";
    } else {
        alert("ERROR! Debes a lo menos usar una plabra");
            
            
    }
}