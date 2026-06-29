document.getElementById("cadastroForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmSenha = document.getElementById("confirmSenha").value;
    
    if (!nome) {
        alert("Por favor, insira seu nome completo.");
        return;
    }
    
    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, insira um email válido.");
        return;
    }
    
    if (senha.length < 4) {
        alert("A senha deve ter pelo menos 4 caracteres.");
        return;
    }
    
    if (senha !== confirmSenha) {
        alert("As senhas não coincidem.");
        return;
    }
    
    localStorage.setItem("userData", JSON.stringify({
        nome: nome,
        email: email,
        telefone: "",
        dataNascimento: "",
        bio: ""
    }));
    
    alert("✅ Cadastro realizado com sucesso!\n\nBem-vindo(a) ao CONECT TEA!");
    window.location.href = "biblioteca.html";
});

document.querySelectorAll(".btn-social").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Login social em desenvolvimento.\nUse o cadastro por email.");
    });
});