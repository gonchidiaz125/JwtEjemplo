document.getElementById('login').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

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
});

document.getElementById('getData').addEventListener('click', async () => {
    const token = localStorage.getItem('token');

    const response = await fetch('https://localhost:7088/api/Secure', {
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
});

document.getElementById('btnPersona1').addEventListener('click', async () => {
    const token = localStorage.getItem('token');

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
});

document.getElementById('btnPersona2').addEventListener('click', async () => {
    const token = localStorage.getItem('token');

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
});

document.getElementById('btnPersonaPublica').addEventListener('click', async () => {
    

    const response = await fetch('https://localhost:7088/api/Personas/personaPublica', {
        method: 'GET',        
    });

    if (response.ok) {
        const data = await response.json();
        alert(`Secure data: ${data.message}`);
    } else {
        alert('Failed to fetch secure data!');
    }
});


localStorage.setItem('token', '');