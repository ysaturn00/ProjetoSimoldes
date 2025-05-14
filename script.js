// === Login logic (login.html) ===
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        window.location.href = "dashboard.html";
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// === Modal logic (dashboard.html) ===
document.addEventListener("DOMContentLoaded", function () {
    const abrirModalBtn = document.getElementById("btnNovosDados"); // ou "abrir-modal"
    const modal = document.getElementById("modal");
    const fecharModalBtn = document.getElementById("closeModal");

    if (abrirModalBtn && modal && fecharModalBtn) {
        abrirModalBtn.addEventListener("click", function (e) {
            e.preventDefault();
            modal.classList.remove("hidden");
        });

        fecharModalBtn.addEventListener("click", function () {
            modal.classList.add("hidden");
        });

        window.addEventListener("click", function (e) {
            if (e.target === modal) {
                modal.classList.add("hidden");
            }
        });
    }
});
