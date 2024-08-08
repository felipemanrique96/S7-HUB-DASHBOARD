document.addEventListener('DOMContentLoaded', () => {
    const userInfo = document.getElementById('user-info');
    const username = localStorage.getItem('username');
    if (username) {
        userInfo.textContent = `Logged in as: ${username}`;
    } else {
        userInfo.textContent = 'Logged in';
    }

    const workflowBox = document.getElementById('workflow-box');
    const projectsDatabaseBox = document.getElementById('projects-database-box');

    workflowBox.addEventListener('click', () => {
        window.open('https://felipemanrique96.github.io/S7-HUB-Workflow/', '_blank');
    });

    projectsDatabaseBox.addEventListener('click', () => {
        window.open('https://felipemanrique96.github.io/S7-HUB-Elenco-Progetti/', '_blank');
    });
});
