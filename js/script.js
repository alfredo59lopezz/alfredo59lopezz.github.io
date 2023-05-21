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
        case 'mision':
            contenido.setAttribute('src', "pages/link_2.html")
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


// Smooth Scroll  no se si esta funcionando
const links = document.querySelectorAll('a[href^="#"]');

for (const link of links) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href');
  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}



/* test*/
const fadeElements = document.querySelectorAll('.div-contacto-mediano');

function fadeInElements() {
  for (const element of fadeElements) {
    const elementPosition = element.getBoundingClientRect().top;
    if (elementPosition < window.innerHeight - 100) {
      element.classList.add('active');
    }
  }
}

window.addEventListener('scroll', fadeInElements);
window.addEventListener('load', fadeInElements);















