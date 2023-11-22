var formulario = document.getElementsByClassName('cuestionario')[0]; // Asegúrate de seleccionar el primer formulario si hay varios
var botonGuardar = document.getElementById('rgboton');

formulario.addEventListener('submit', function(event){
    // Evitar que el formulario se envíe de manera predeterminada
    event.preventDefault();

    // Obtener los valores dentro del evento clic
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var sexo = document.getElementById('sexo').value;
    var email = document.getElementById('email').value;
    var FDN = document.getElementById('FDN').value;
    var tell = document.getElementById('tell').value;
    var cuidad = document.getElementById('cuidad').value;
    var universidad = document.getElementById('Universidad').value;
    var documento = document.getElementById('documento').value;
    var constancia = document.getElementById('constancia').value;
    var user = document.getElementById('user').value;
    var contrasena = document.getElementById('contraseña').value; // Corregir el nombre de la variable

    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Genero:', sexo);
    console.log('Email:', email); // Corregir el nombre de la variable
    console.log('Fecha de Naciomiento:', FDN);
    console.log('Telefono celular:', tell);
    console.log('Ciudadania:', cuidad);
    console.log('Universidad:', universidad);
    console.log('DNI/pasaporte:', documento);
    console.log('Constancia:', constancia);
    console.log('Usuario:', user);
    console.log('Contraseña:', contraseña);
});