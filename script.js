document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if(username && password) {
        window.location.href = "dashboard.html";
    } else {
        alert('Por favor, preencha todos os campos.');
    }
    
});