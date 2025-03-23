document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Aquí se puede agregar la lógica de validación y autenticación
        // Por ahora, solo redirigimos a index.html
        window.location.href = 'index.html';
    });
});