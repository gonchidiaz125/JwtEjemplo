$(document).ready(function () {
    $('#login').on('click', async function () {
        const username = $('#username').val();
        const password = $('#password').val();

        try {
            const response = await fetch('https://localhost:7088/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                alert('Login exitoso!');
            } else {
                alert('Error al hacer al login!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during login.');
        }
    });
    
    $('#btnPersona1').on('click', async function () {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('https://localhost:7088/api/Personas/persona1', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                alert(`Datos de la persona: ${JSON.stringify(data)}`);
            } else {
                alert('Error al tratar de acceder a un endpoint que requiere autenticación');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al tratar de acceder a un endpoint que requiere autenticación');
        }
    });
    
    $('#btnPersonaPublica').on('click', async function () {
        try {
            const response = await fetch('https://localhost:7088/api/Personas/personaPublica', {
                method: 'GET'
            });

            if (response.ok) {
                const data = await response.json();                
                alert(`Datos de la persona pública: ${JSON.stringify(data)}`);
            } else {
                alert('Error al acceder al endpoint');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al acceder a los datos.');
        }
    });

    localStorage.setItem('token', '');
});
