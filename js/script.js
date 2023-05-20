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

/* function back space*/
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 8) { // Código de tecla para Backspace
        event.preventDefault(); // Evitar el comportamiento predeterminado de la tecla Backspace (ir hacia atrás en el historial)
        history.back(); // Retroceder en el historial del navegador
    }
});





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

/*
function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}
<div>
    <h2>JavaScript Validation</h2>

    <p>Please input a number between 1 and 10:</p>

    <input id="numb">

        <button type="button" onclick="myFunction()">Submit</button>

        <p id="demo"></p>
</div>*/



/* funciona mosttrar mas imagenes*/
/*function showMoreImages() {
    const hiddenImages = document.querySelectorAll('.gallery-img.hide');

    for (let i = 0; i < hiddenImages.length; i++) {
        hiddenImages[i].classList.remove('hide');
    }

    document.querySelector('.show-more').style.display = 'none';
}*/



