let filtroAtual = "todos";
let buscaAtual = "";

function renderizarCards() {
  const container = document.getElementById("cardsGrid");
  if (!container) return;

  const filtrados = artigosData.filter(artigo => {
    const matchFiltro = filtroAtual === "todos" || artigo.tags.includes(filtroAtual);
    const matchBusca = buscaAtual === "" || 
                        artigo.titulo.toLowerCase().includes(buscaAtual.toLowerCase()) ||
                        artigo.desc.toLowerCase().includes(buscaAtual.toLowerCase());
    return matchFiltro && matchBusca;
  });

  if (filtrados.length === 0) {
    container.innerHTML = `<div class="no-results">Nenhum artigo encontrado 🔍</div>`;
    return;
  }

  container.innerHTML = filtrados.map(artigo => `
    <div class="card">
      <h3>${artigo.titulo}</h3>
      <div class="card-desc">${artigo.desc}</div>
      <div class="card-tempo">⏱️ ${artigo.tempo}</div>
      <button class="btn-ler" data-titulo="${artigo.titulo}">Ler mais</button>
    </div>
  `).join("");

  document.querySelectorAll(".btn-ler").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const titulo = btn.getAttribute("data-titulo");
      alert(`📖 "${titulo}"\n\nConteúdo completo em breve.`);
    });
  });
}

function initFiltros() {
  const filtros = document.querySelectorAll(".filter-btn");
  filtros.forEach(btn => {
    btn.addEventListener("click", () => {
      filtros.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filtroAtual = btn.getAttribute("data-filter");
      renderizarCards();
    });
  });
}

function initBusca() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      buscaAtual = e.target.value;
      renderizarCards();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initFiltros();
  initBusca();
  renderizarCards();
});