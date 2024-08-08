document.addEventListener('DOMContentLoaded', () => {
    const userInfo = document.getElementById('user-info');
    const username = localStorage.getItem('username');
    if (username) {
        userInfo.textContent = `Logged in as: ${username}`;
    } else {
        userInfo.textContent = 'Logged in';
    }
});
