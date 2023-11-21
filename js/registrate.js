var formulario = document.getElementsByClassName('cuestionario')
var boton = document.getElementById('rgboton')

boton.addEventListener('click', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var sexo = document.getElementById('sexo').value;
    var mail = document.getElementById('mail').value;
    var fechanac = document.getElementById('fechanac').value;
    var telefono = document.getElementById('telefono').value;
    var ciudad = document.getElementById('ciudad').value;
    var uni = document.getElementById ('ciudad').value;
    var dni = document.getElementById('dni').value;
    var constancia = document.getElementById('constancia').value;
    var usuario = document.getElementById('usuario').value;
    var contraseña = document.getElementById('contraseña').value;

    console.log('nombre:', nombre);
    console.log('apellido', apellido);
    console.log ('sexo', sexo);
    console.log ('mail', mail);
    console.log ('fechanac', fechanac);
    console.log ('telefono', telefono);
    console.log ('ciudad', ciudad);
    console.log ('uni', uni);
    console.log ('dni', dni);
    console.log ('constancia', constancia);
    console.log ('usuario', usuario);
    console.log ('contraseña', contraseña);
    
});