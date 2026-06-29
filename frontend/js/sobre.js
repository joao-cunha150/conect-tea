document.addEventListener("DOMContentLoaded", () => {
    // Carregar dados do usuário para o avatar
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    const nome = userData.nome || "João Victor";
    const iniciais = nome.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
    const avatarSmall = document.getElementById("navAvatar");
    if (avatarSmall) avatarSmall.innerText = iniciais;
    
    // Botão Avaliar
    document.getElementById("avaliarBtn")?.addEventListener("click", () => {
        alert("⭐ Obrigado por avaliar o CONECT TEA!\n\nSua opinião é muito importante para nós.");
    });
    
    // Botão Contato
    document.getElementById("contatoBtn")?.addEventListener("click", () => {
        alert("📧 Contato: suporte@conecttea.com\n\nWhatsApp: (51) 99999-9999");
    });

    // Botão Redes Sociais
    document.getElementById("redesBtn")?.addEventListener("click", () => {
        alert("🌐 Siga o CONECT TEA:\n\n📷 Instagram: @conecttea\n📘 Facebook: /conecttea\n🐦 Twitter: @conecttea");
    });
});