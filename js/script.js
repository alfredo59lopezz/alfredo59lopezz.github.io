function changePage(page) {
    contenido = document.getElementById("content-page");
    switch (page) {
        case 'inicio':
            contenido.setAttribute('src', "pages/inicio.html")
            break;
        case 'medicamentos':
            contenido.setAttribute('src', "pages/medicamentos.html")
            break;
        case 'contactame':
            contenido.setAttribute('src', "pages/contactame.html")
            break;
        case 'indice':
            contenido.setAttribute('src', "pages/indice_medicamentos.html")
            break;
        case 'vision':
            contenido.setAttribute('src', "pages/link_3.html")
            break;
        default:
            contenido.setAttribute('src', "pages/inicio.html")
            break;
    }
}


/* function back space */
document.addEventListener('keydown', function (event) {
    if (event.key === "Backspace") {
        if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
            event.preventDefault();
            window.history.back();
        }
    }
});


/*La imagen se muestra con una resolucion especifica*/
window.onload = function () {
    var images = document.getElementsByClassName("myImage");
    for (var i = 0; i < images.length; i++) {
        images[i].onload = function () {
            console.log("La imagen se ha cargado correctamente.");
        };
    }
};

/*tomar nombre de la imagen y automaticamente mostrarlo en el texto del button en letra mayuscula-*/
window.onload = function () {
    var botones = document.querySelectorAll(".boton-medic button");

    botones.forEach(function (boton) {
        var img = boton.parentNode.previousElementSibling.querySelector("img");
        var nombreMedicamento = obtenerNombreMedicamento(img.src);
        boton.innerText = nombreMedicamento;
    });
};

function obtenerNombreMedicamento(urlImagen) {
    var nombreArchivo = urlImagen.substring(urlImagen.lastIndexOf("/") + 1); // Obtener solo el nombre del archivo con la extensión
    var nombreSinExtension = nombreArchivo.substring(0, nombreArchivo.lastIndexOf(".")); // Eliminar la extensión del nombre del archivo
    var nombreMedicamento = nombreSinExtension.toUpperCase(); // Convertir el nombre a mayúsculas si es necesario --- .toLowerCase (minusucla)
    return nombreMedicamento;
}
/* ---- */

function openWhatsApp() {
    var url = "https://api.whatsapp.com/send?phone=56470807";
    window.open(url, "_blank");
}

function openTelegram() {
    var url = "https://t.me/christ_i_a_n";
    window.open(url, "_blank");
}

/*
function openFacebook() {
    var url = "#";
    window.open(url, "_blank");
}
function openTwitter() {
    var url = "#";
    window.open(url, "_blank");
}*/

function descargarDocumento1() {
    var link = document.createElement("a");
    link.href = "../doc/politica_de_privacidad.docx";
    link.download = "politica_de_privacidad.docx";
    link.click();
}

function descargarDocumento2() {
    var link = document.createElement("a");
    link.href = "../doc/objetivo_social.docx";
    link.download = "objetivo_social.docx";
    link.click();
}
function descargarDocumento3() {
    var link = document.createElement("a");
    link.href = "../doc/mision.docx";
    link.download = "mision.docx";
    link.click();
}









