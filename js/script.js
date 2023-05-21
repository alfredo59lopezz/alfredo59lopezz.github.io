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
        case 'aviso':
            contenido.setAttribute('src', "pages/politica_de_privacidad.html")
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

















