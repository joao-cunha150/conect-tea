// Dados do usuário (simulado)
const userEmail = localStorage.getItem("userEmail") || "joao@gmail.com";
const userName = localStorage.getItem("userName") || "João Victor";

// Atualizar informações do usuário no chat
document.addEventListener("DOMContentLoaded", () => {
  const userDetailsDiv = document.querySelector(".user-details");
  if (userDetailsDiv) {
    userDetailsDiv.innerHTML = `
      <strong>${userName}</strong>
      <small>${userEmail}</small>
    `;
  }
});

// Novo chat
document.getElementById("novoChatBtn")?.addEventListener("click", () => {
  const chatMessages = document.getElementById("chatMessages");
  if (chatMessages) {
    chatMessages.innerHTML = `
      <div class="message assistant-message">
        <div class="message-content">
          Olá! Sou o assistente CONECT TEA. Como posso ajudar você hoje?
        </div>
        <span class="message-time">Agora</span>
      </div>
    `;
  }
});

// Enviar mensagem
function enviarMensagem() {
  const input = document.getElementById("mensagemInput");
  const mensagem = input.value.trim();
  
  if (!mensagem) return;
  
  const chatMessages = document.getElementById("chatMessages");
  
  // Adicionar mensagem do usuário
  const userMsgDiv = document.createElement("div");
  userMsgDiv.className = "message user-message";
  userMsgDiv.innerHTML = `
    <div class="message-content">${mensagem}</div>
    <span class="message-time">Agora</span>
  `;
  chatMessages.appendChild(userMsgDiv);
  
  input.value = "";
  
  // Simular resposta do assistente
  setTimeout(() => {
    const respostas = [
      "Entendo sua preocupação. Você gostaria de mais informações sobre esse tema?",
      "Obrigado por compartilhar. Como posso te ajudar melhor?",
      "Esse é um assunto importante. Tenho alguns recursos na biblioteca sobre isso.",
      "Vou buscar informações atualizadas para te ajudar."
    ];
    const respostaAleatoria = respostas[Math.floor(Math.random() * respostas.length)];
    
    const assistantMsgDiv = document.createElement("div");
    assistantMsgDiv.className = "message assistant-message";
    assistantMsgDiv.innerHTML = `
      <div class="message-content">${respostaAleatoria}</div>
      <span class="message-time">Agora</span>
    `;
    chatMessages.appendChild(assistantMsgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 500);
  
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

document.getElementById("enviarMsgBtn")?.addEventListener("click", enviarMensagem);
document.getElementById("mensagemInput")?.addEventListener("keypress", (e) => {
  if (e.key === "Enter") enviarMensagem();
});

// Clique em tópicos sugeridos
document.querySelectorAll(".topico").forEach(topico => {
  topico.addEventListener("click", () => {
    document.getElementById("mensagemInput").value = `Me fale sobre ${topico.getAttribute("data-topico") || topico.innerText}`;
    enviarMensagem();
  });
});

// Clique em chats recentes
document.querySelectorAll("#chatsList li").forEach(chat => {
  chat.addEventListener("click", () => {
    document.getElementById("mensagemInput").value = chat.innerText;
    enviarMensagem();
  });
});