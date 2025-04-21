document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if(username && password) {
        // Aqui você pode colocar alguma lógica real de autenticação no futuro
        window.location.href = "dashboard.html";
    } else {
        alert('Por favor, preencha todos os campos.');
    }
    
});