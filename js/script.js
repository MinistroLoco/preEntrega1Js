// Programa que pide un usuario y contraseña 


// Valida usuario y contraseña
function validacionPassword() {
    do {
        let usuario = prompt('Ingresa el usuario');
        let pass = prompt('Ingresa la contraseña');
        acertar = false

        if (usuario == 'Isaac' && pass == '12345678') {
            alert('Bienvenido ' + usuario);
            acertar = true;
            break;
        } else {
            alert('Usuario y contraseña incorrecto');
            acertar = false;
        }

    } while (acertar = true)

}


alert('Hola, bienvenido')
validacionPassword();



