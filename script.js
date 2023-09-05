/*Explicacion
/Primero se obtienen las referencias a los elementos del formulario y se almacenan en constantes.
/Luego se crea un objeto JSON llamado data que contiene los valores de los campos del formulario (nombre, apellido y fecha de nacimiento).
/Se utiliza fetch para enviar una solicitud POST al servidor con la URL especificada y los datos del formulario en formato JSON.
/Y por ultimo se maneja la respuesta del servidor en las funciones .then() y se muestra en la consola.
*/
const form = document.getElementById('form-regis');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const fechaNacimientoInput = document.getElementById('fechaNacimiento');

const data = {
    nombre: nombreInput.value,
    apellido: apellidoInput.value,
    fechaNacimiento: fechaNacimientoInput.value
};

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));