var nombreUsuario = localStorage.getItem('username');
var botoni = document.getElementById('botoni');
var iactivo = new Boolean(false);
if (nombreUsuario) {
    document.getElementById('inicioSesion').style.display = 'none';
    document.getElementById('sesionIniciada').style.display = 'block';
    document.getElementById('nombreUsuario').textContent = 'Bienvenido, ' + nombreUsuario;
}

function login() {
    var usernamei = document.getElementById('usernamei').value;
    var passwordi = document.getElementById('passwordi').value;

    if (usernamei == localStorage.getItem('user') && passwordi == localStorage.getItem('pass')) {

        localStorage.setItem('user', usernamei);

        document.getElementById('inicioSesion').style.display = 'none';
        document.getElementById('sesionIniciada').style.display = 'block';
        document.getElementById('nombreUsuario').textContent = "Bienvenido, " + usernamei;
        alert("iniciaste secion con: "+localStorage.getItem('user'));
        console.log("iniciaste sesion");
        iactivo = true;
        localStorage.setItem('isesion', iactivo);
    } else {
        alert("Datos Incorrectos. Intenta de nuevo.");
        console.log("AAA");
        iactivo = false;
        localStorage.setItem('isesion', iactivo);
    }
}
botoni.addEventListener('click',login);
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

console.log(localStorage.getItem('usernamei'));

function mostrarLista() {
    var miLista = document.getElementById('miLista');
    miLista.style.display = (miLista.style.display === 'none' || miLista.style.display === '') ? 'block' : 'none';
} 
if(localStorage.getItem('iactivo')=true){
mostrarLista();
}