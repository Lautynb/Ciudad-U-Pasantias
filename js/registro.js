
var formulario = document.getElementsByClassName('cuestionario');
var botonGuardar = document.getElementById('rgboton');
var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var sexo = document.getElementById('sexo');
var email = document.getElementById('email');
var FDN = document.getElementById('FDN');
var tell = document.getElementById('tell');
var cuidad = document.getElementById('ciudad');
var universidad = document.getElementById('Universidad');
var documento = document.getElementById('documento');
var constancia = document.getElementById('constancia');
var user = document.getElementById('user');
var contraeña = document.getElementById('contraseña');

botonGuardar.addEventListener('click', function() {

    console.log('Nombre:', nombre.value);
    console.log('Apellido:', apellido.value);
    console.log('Genero:', sexo.value);
    console.log('email:', email.value);
    console.log('Fecha de Naciomiento:', FDN.value);
    console.log('Telefono celular:', tell.value);
    console.log('Ciudadania:', ciudad.value);
    console.log('Universidad:', universidad.value);
    console.log('DNI/pasaporte:', documento.value);
    console.log('Constancia:', constancia.value);
    console.log('Usuario:', user.value);
    console.log('Contraseña:', contraeña.value);
});