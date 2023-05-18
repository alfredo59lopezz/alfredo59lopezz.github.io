function changePage(page) {
    contenido = document.getElementById("content-page");
    switch (page) {
        case 'inicio':
            contenido.setAttribute('src', "pages/inicio.html")
            break;
        case 'medicamentos':
            contenido.setAttribute('src', "pages/medicamentos.html")
            break;
        case 'link 1':
            contenido.setAttribute('src', "pages/link_1.html")
            break;
        case 'link 2':
            contenido.setAttribute('src', "pages/link_2.html")
            break;
        case 'link 3':
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






function validatedForm() {
    var form = document.getElementById("form-contact");

    var labelErrorName = document.getElementById("name-label-error");
    var labelErrorEmail = document.getElementById("email-label-error");
    var labelErrorMensaje = document.getElementById("mensaje-label-error");

    var valid = true;


    /*  me funciona para validar que el campo no este vacio
        var regex = /^[a-z A-Z]+$/;
        if (!regex.test(form.nombre.value)) {
            labelErrorName.style.display = 'block';
            valid = false;
        } else {
            labelErrorName.style.display = 'none';
        }*/


    if (form.nombre.value.lenght == 0) {
        labelErrorName.style.display = 'block'; //lanzar el error
        valid = false;
    } else {
        labelErrorName.style.display = 'none';
    }



    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!validEmail.test(form.email.value)) {
        labelErrorEmail.style.display = 'block';
        valid = false;
    } else {
        labelErrorEmail.style.display = 'none'
    }
    if (form.mensaje.value.lenght == 0) {
        labelErrorMensaje.style.display = 'block'
        valid = false;
    } else {
        labelErrorMensaje.style.display = 'none';
    }
    valid ? alert("Formulario enviado con exito") : false;

}