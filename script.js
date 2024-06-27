document.getElementById('simpleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtener valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    // Validación básica
    if (username === '') {
        alert('Por favor, ingresa tu nombre de usuario.');
        return;
    }

    if (password === '') {
        alert('Por favor, ingresa tu contraseña.');
        return;
    }

    if (email === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        return;
    }

    // Validación de formato de correo electrónico
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Si todo está correcto, mostrar un mensaje de éxito
    alert('Formulario enviado con éxito.');
});