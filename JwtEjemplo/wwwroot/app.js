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
                alert('Login successful!');
            } else {
                alert('Login failed!');
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
                alert(`Secure data: ${data.message}`);
            } else {
                alert('Failed to fetch secure data!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while fetching persona1 data.');
        }
    });

    $('#btnPersona2').on('click', async function () {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('https://localhost:7088/api/Personas/persona2', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                alert(`Secure data: ${data.message}`);
            } else {
                alert('Failed to fetch secure data!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while fetching persona2 data.');
        }
    });

    $('#btnPersonaPublica').on('click', async function () {
        try {
            const response = await fetch('https://localhost:7088/api/Personas/personaPublica', {
                method: 'GET'
            });

            if (response.ok) {
                const data = await response.json();
                alert(`Secure data: ${data.message}`);
            } else {
                alert('Failed to fetch secure data!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while fetching public data.');
        }
    });

    localStorage.setItem('token', '');
});
