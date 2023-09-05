/*Explicacion
/Primero se obtienen las referencias a los elementos del formulario y se almacenan en constantes.
/Luego se crea un objeto JSON llamado data que contiene los valores de los campos del formulario (nombre, apellido y fecha de nacimiento).
/Se utiliza fetch para enviar una solicitud POST al servidor con la URL especificada y los datos del formulario en formato JSON.
/Y por ultimo se maneja la respuesta del servidor en las funciones .then() y se muestra en la consola.
*/
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-regis');
  
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita la recarga de la página
  
        // Se obtiene la referencia de lo que ingresa el usuario en los input
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  
        // Objeto JSON con los valores de los input
        const data = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento
        };
  
        // Realiza la solicitud HTTP POST con la siguiente URL
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            // Con un console manejamos la respuesta del servidor para mostrar la persona ingresada
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
  });