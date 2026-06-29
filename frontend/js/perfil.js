document.addEventListener("DOMContentLoaded", () => {
    // Carregar dados do localStorage
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    
    // Preencher campos
    document.getElementById("nomeCompleto").value = userData.nome || "João Victor da Cunha Rosa";
    document.getElementById("email").value = userData.email || "joao@gmail.com";
    document.getElementById("telefone").value = userData.telefone || "(51) 99999-9999";
    document.getElementById("bio").value = userData.bio || "Apaixonado por conectar pessoas, boas conversas e um bom chá";
    
    if (userData.dataNascimento) {
        document.getElementById("dataNascimento").value = userData.dataNascimento;
    }
    
    // Atualizar avatar
    function atualizarAvatar() {
        const nome = document.getElementById("nomeCompleto").value;
        const iniciais = nome.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
        const avatarGrande = document.getElementById("avatarGrande");
        const navAvatar = document.getElementById("navAvatar");
        
        if (avatarGrande) avatarGrande.innerText = iniciais;
        if (navAvatar) navAvatar.innerText = iniciais;
    }
    atualizarAvatar();
    
    // Monitorar mudanças no nome para atualizar avatar em tempo real
    document.getElementById("nomeCompleto")?.addEventListener("input", atualizarAvatar);
    
    // Salvar formulário
    document.getElementById("perfilForm")?.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const userData = {
            nome: document.getElementById("nomeCompleto").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value,
            dataNascimento: document.getElementById("dataNascimento").value,
            bio: document.getElementById("bio").value
        };
        
        localStorage.setItem("userData", JSON.stringify(userData));
        
        // Atualizar avatar no navbar (caso exista em outras páginas)
        const iniciais = userData.nome.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
        document.getElementById("avatarGrande").innerText = iniciais;
        
        // Atualizar também o avatar do navbar se existir
        const navAvatar = document.getElementById("navAvatar");
        if (navAvatar) navAvatar.innerText = iniciais;
        
        alert("✅ Perfil atualizado com sucesso!");
    });
    
    // Alterar avatar (simulação - futuramente upload de imagem)
    document.getElementById("alterarAvatar")?.addEventListener("click", () => {
        alert("📸 Função de upload de imagem em breve!\n\nPor enquanto, o avatar usa as iniciais do seu nome.");
    });
    
    // Menu Ferramentas (se existir na sidebar)
    document.getElementById("ferramentasMenu")?.addEventListener("click", () => {
        alert("🛠️ Ferramentas em desenvolvimento!\n\nEm breve: calendário, lembretes, métricas e muito mais.");
    });
});