var nombreUsuario = localStorage.getItem('username');

if (nombreUsuario) {
    document.getElementById('inicioSesion').style.display = 'none';
    document.getElementById('sesionIniciada').style.display = 'block';
    document.getElementById('nombreUsuario').textContent = 'Bienvenido, ' + nombreUsuario;
}

function login(userType) {
    var usernamei = document.getElementById(userType + 'usernamei').value;
    var passwordi = document.getElementById(userType + 'passwordi').value;

    if (usernamei == localStorage.getItem('user') && passwordi == localStorage.getItem('pass')) {

        localStorage.setItem('user', usernamei);

        document.getElementById('inicioSesion').style.display = 'none';
        document.getElementById('sesionIniciada').style.display = 'block';
        document.getElementById('nombreUsuario').textContent = "Bienvenido, " + usernamei;
        alert("iniciaste secion con:"+localStorage.getItem('user'));
        console.log("iniciaste sesion");
    } else {
        alert("Datos Incorrectos. Intenta de nuevo.");
        console.log("AAA");
    }
}

function cerrarSesion() {
    localStorage.removeItem('user');

    document.getElementById('inicioSesion').style.display = 'block';
    document.getElementById('sesionIniciada').style.display = 'none';

    document.getElementById('nombreUsuario').textContent = '';

    // Ocultar la lista si está visible
    var miLista = document.getElementById('miLista');
    if (miLista.style.display === 'block') {
        miLista.style.display = 'none';
    }
}

/*
function mostrarLista() {
    var miLista = document.getElementById('miLista');
    miLista.style.display = (miLista.style.display === 'none' || miLista.style.display === '') ? 'block' : 'none';
} 
*/
console.log(localStorage.getItem);