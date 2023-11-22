var formulario = document.getElementsByClassName('cuestionario');
var botonGuardar = document.getElementById('rgboton');
var nombre = document.getElementById('nombre').value;
var apellido = document.getElementById('apellido').value;
var sexo = document.getElementById('sexo').value;
var email = document.getElementById('mail').value;
var FDN = document.getElementById('FDN').value;
var tell = document.getElementById('tell').value;
var cuidad = document.getElementById('cuidad').value;
var universidad = document.getElementById('Universidad').value;
var documento = document.getElementById('documento').value;
var constancia = document.getElementById('constancia').value;
var user = document.getElementById('user').value;
var contraeña = document.getElementById('contraseña').value;

botonGuardar.addEventListener('click', function() {

    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Genero:', sexo);
    console.log('email:', mail);
    console.log('Fecha de Naciomiento:', FDN);
    console.log('Telefono celular:', tell);
    console.log('Ciudadania:', cuidad);
    console.log('Universidad:', universidad);
    console.log('DNI/pasaporte:', documento);
    console.log('Constancia:', constancia);
    console.log('Usuario:', user);
    console.log('Contraseña:', contraeña);
});