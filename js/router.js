// Router simples para navegação entre páginas
// Mantém o usuário logado e controla o acesso

// Verificar se usuário está logado
function isUserLoggedIn() {
    const userData = localStorage.getItem("userData");
    return userData !== null;
}

// Redirecionar para login se não estiver logado
function requireAuth() {
    const publicPages = ["criar-conta.html", "index.html"];
    const currentPage = window.location.pathname.split("/").pop();
    
    if (!publicPages.includes(currentPage) && !isUserLoggedIn()) {
        window.location.href = "criar-conta.html";
        return false;
    }
    return true;
}

// Carregar avatar do usuário em todas as páginas
function loadUserAvatar() {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    const nome = userData.nome || "João Victor";
    const iniciais = nome.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
    
    const avatarElements = document.querySelectorAll("#navAvatar, .user-avatar-small");
    avatarElements.forEach(el => {
        if (el) el.innerText = iniciais;
    });
}

// Sair da conta
function logout() {
    localStorage.removeItem("userData");
    localStorage.removeItem("theme");
    localStorage.removeItem("language");
    localStorage.removeItem("notifications");
    window.location.href = "index.html";
}

// Executar quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    requireAuth();
    loadUserAvatar();
});