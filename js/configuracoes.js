document.addEventListener("DOMContentLoaded", () => {
    // Carregar avatar do usuário
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    const nome = userData.nome || "João Victor";
    const iniciais = nome.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
    const navAvatar = document.getElementById("navAvatar");
    if (navAvatar) navAvatar.innerText = iniciais;
    
    // Carregar preferências salvas
    const savedTheme = localStorage.getItem("theme") || "light";
    const savedLanguage = localStorage.getItem("language") || "pt";
    
    // Carregar notificações salvas
    const notificacoes = JSON.parse(localStorage.getItem("notifications") || "{}");
    document.getElementById("notifArtigos").checked = notificacoes.artigos !== false;
    document.getElementById("notifChat").checked = notificacoes.chat !== false;
    document.getElementById("notifRotina").checked = notificacoes.rotina === true;
    document.getElementById("notifNewsletter").checked = notificacoes.newsletter !== false;
    
    // Configurar botões de tema
    const temaBtns = document.querySelectorAll(".tema-btn");
    temaBtns.forEach(btn => {
        if (btn.getAttribute("data-tema") === savedTheme) btn.classList.add("active");
        
        btn.addEventListener("click", () => {
            temaBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
    
    // Configurar botões de idioma
    const idiomaBtns = document.querySelectorAll(".idioma-btn");
    idiomaBtns.forEach(btn => {
        if (btn.getAttribute("data-idioma") === savedLanguage) btn.classList.add("active");
        
        btn.addEventListener("click", () => {
            idiomaBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
    
    // Salvar configurações
    document.getElementById("salvarConfigBtn")?.addEventListener("click", () => {
        const temaAtivo = document.querySelector(".tema-btn.active").getAttribute("data-tema");
        const idiomaAtivo = document.querySelector(".idioma-btn.active").getAttribute("data-idioma");
        
        localStorage.setItem("theme", temaAtivo);
        localStorage.setItem("language", idiomaAtivo);
        
        // Salvar notificações
        const notificacoesState = {
            artigos: document.getElementById("notifArtigos").checked,
            chat: document.getElementById("notifChat").checked,
            rotina: document.getElementById("notifRotina").checked,
            newsletter: document.getElementById("notifNewsletter").checked
        };
        localStorage.setItem("notifications", JSON.stringify(notificacoesState));
        
        // Aplicar tema
        if (temaAtivo === "dark") {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
        
        alert("✅ Configurações salvas com sucesso!");
    });
    
    // Menu Ferramentas
    document.getElementById("ferramentasMenu")?.addEventListener("click", () => {
        alert("🛠️ Ferramentas em desenvolvimento!\n\nEm breve: calendário, lembretes, métricas e muito mais.");
    });
});