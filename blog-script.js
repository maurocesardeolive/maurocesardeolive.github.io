document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if (path.includes('blog.html')) {
        renderBlogList();
    } else if (path.includes('article.html')) {
        loadArticle();
    }
});

function renderBlogList() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;

    blogPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="height: 150px; background: #e2e8f0; overflow: hidden; border-radius: 5px 5px 0 0;">
                <img src="${post.image}" style="width:100%; height:100%; object-fit: cover;">
            </div>
            <div style="padding: 1.5rem;">
                <div class="card-header">
                    <span class="badge">Artigo</span>
                    <span style="font-size: 0.8rem; color: #999;">${post.date}</span>
                </div>
                <h3 class="card-title" style="margin-bottom: 10px;">${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="article.html?id=${post.id}" class="btn-visit">Ler Mais</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function loadArticle() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const post = blogPosts.find(p => p.id === id);

    if (post) {
        document.getElementById('postTitle').innerText = post.title;
        document.getElementById('postDate').innerText = post.date;
        document.getElementById('postAuthor').innerText = post.author;
        document.getElementById('postImage').src = post.image;
        document.getElementById('postBody').innerHTML = post.content;
        
        // MUDANÇA AQUI: Atualiza o título da aba com o novo nome
        document.title = `${post.title} - TheAIStackies`; 
    } else {
        document.querySelector('.article-content').innerHTML = "<h1>Artigo não encontrado.</h1><a href='blog.html'>Voltar</a>";
    }
}