// Carregar dados iniciais
document.addEventListener('DOMContentLoaded', () => {
    if (typeof toolsData !== 'undefined' && document.getElementById('toolsGrid')) {
        renderCategories();
        sortTools();
    }
});

// Renderizar lista de ferramentas
function renderTools(tools) {
    const grid = document.getElementById('toolsGrid');
    if (!grid) return; 

    // Limpa o grid atual
    grid.innerHTML = '';

    // Verifica se a lista está vazia (Nenhum resultado)
    if (tools.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #94a3b8;">
                <h3 style="margin-bottom: 10px; font-size: 1.5rem;">😕 Nada encontrado</h3>
                <p>Tente buscar por outro termo ou categoria.</p>
            </div>
        `;
        return; // Para a execução aqui
    }

    // Ordenação (Destaques primeiro)
    const order = document.getElementById('sortOrder')?.value || 'newest';
    const orderedTools = [...tools].sort((a, b) => {
        if (order === 'featured') {
            return Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || b.id - a.id;
        }
        return b.id - a.id;
    });

    orderedTools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const sponsoredHtml = tool.sponsored ? '<span class="sponsored-tag">Patrocinado</span>' : '';

        card.innerHTML = `
            ${sponsoredHtml}
            <div class="card-header">
                <div class="tool-identity">
                    <img src="${tool.logo}" alt="Logo ${tool.name}" class="tool-logo">
                    <span class="card-title">${tool.name}</span>
                </div>
                <span class="badge">${tool.category}</span>
            </div>
            <p>${tool.description}</p>
            <a href="${tool.link}" target="_blank" class="btn-visit">Visitar Site</a>
        `;
        grid.appendChild(card);
    });
}

// Renderizar botões de categorias
function renderCategories() {
    // Verifica se toolsData existe antes de tentar mapear
    if (typeof toolsData === 'undefined') {
        console.error("Erro: O arquivo data.js não foi carregado corretamente.");
        return;
    }

    const categories = ['Todas', ...new Set(toolsData.map(item => item.category))];
    const container = document.getElementById('categoriesContainer');
    
    if (!container) return;

    categories.forEach(cat => {
        const btn = document.createElement('div');
        btn.className = 'chip';
        btn.innerText = cat;
        btn.onclick = (event) => filterByCategory(cat, event);
        container.appendChild(btn);
    });
}

// Mantém os filtros sincronizados com a ordenação.
let selectedCategory = 'Todas';

function filterByCategory(category, event) {
    selectedCategory = category;
    document.querySelectorAll('.chip').forEach(chip => chip.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    sortTools();
}

function filterTools() {
    sortTools();
}

function sortTools() {
    if (typeof toolsData === 'undefined') return;
    const searchInput = document.getElementById('searchInput');
    const query = (searchInput?.value || '').trim().toLocaleLowerCase('pt-BR');
    const filtered = toolsData.filter(tool => {
        const matchesCategory = selectedCategory === 'Todas' || tool.category === selectedCategory;
        const matchesSearch = !query ||
            tool.name.toLocaleLowerCase('pt-BR').includes(query) ||
            tool.description.toLocaleLowerCase('pt-BR').includes(query);
        return matchesCategory && matchesSearch;
    });
    renderTools(filtered);
}
/* --- MODO ESCURO --- */
const themeBtn = document.getElementById('themeToggle');
const body = document.body;

// 1. Verifica se o usuário já tinha escolhido o tema antes
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    if (themeBtn) themeBtn.innerText = '☀️'; // Muda ícone para Sol
}

// 2. Função de Troca ao Clicar
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            themeBtn.innerText = '☀️';
            localStorage.setItem('theme', 'dark'); // Salva na memória
        } else {
            themeBtn.innerText = '🌙';
            localStorage.setItem('theme', 'light'); // Salva na memória
        }
    });
}
/* --- Google Translate Config --- */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'pt',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

/* Carrega o script do Google dinamicamente */
(function() {
    var googleScript = document.createElement('script');
    googleScript.type = 'text/javascript';
    googleScript.async = true;
    googleScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(googleScript);
})();