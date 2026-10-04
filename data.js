const toolsData = [
    {
        id: 1,
        name: "ChatGPT",
        category: "Chatbot",
        logo: "img/logos/chatgpt.png",
        description: "Modelo de linguagem avançado da OpenAI capaz de gerar textos, códigos e muito mais.",
        link: "https://chat.openai.com",
        sponsored: false,
        featured: false
    },
    {
        id: 2,
        name: "Midjourney",
        category: "Imagem",
        logo: "img/logos/midjourney.png",
        description: "Gerador de arte e imagens realistas através de prompts de texto no Discord.",
        link: "https://www.midjourney.com",
        sponsored: false,
        featured: true
    },
    {
        id: 3,
        name: "Jasper AI",
        category: "Copywriting",
        logo: "img/logos/jasperai.png", 
        description: "Assistente de escrita para criar conteúdo de marketing, blogs e e-mails.",
        link: "https://www.jasper.ai",
        sponsored: false,
        featured: false
    },
    {
        id: 4,
        name: "Synthesia",
        category: "Vídeo",
        logo: "img/logos/synthesia.png",
        description: "Cria vídeos com avatares de IA a partir de texto em minutos.",
        link: "https://www.synthesia.io",
        sponsored: false,
        featured: false
    },
    {
        id: 5,
        name: "ElevenLabs",
        category: "Áudio",
        logo: "img/logos/elevenlabs.png",
        description: "Transforma texto em fala e vice-versa, criando áudios realistas.",
        link: "https://elevenlabs.io/",
        sponsored: false,
        featured: false
    },
    {
        id: 6,
        name: "Base44",
        category: "Programação",
        logo: "img/logos/base44.png",
        description: "Use linguagem natural e transforme em aplicativos web totalmente funcionais.",
        link: "https://base44.com/",
        sponsored: false,
        featured: false
    },
    // --- CHATBOTS & ASSISTENTES ---
    {
        id: 7, name: "Claude 3", category: "Chatbot",
        logo: "img/logos/claude.png",
        description: "IA da Anthropic, famosa por ser segura e processar livros inteiros.",
        link: "https://claude.ai", sponsored: false, featured: true
    },
    {
        id: 8, name: "Perplexity", category: "Chatbot",
        logo: "img/logos/perplexity.png",
        description: "Um mecanismo de busca conversacional que cita as fontes.",
        link: "https://www.perplexity.ai", sponsored: false, featured: true
    },
    {
        id: 9, name: "Gemini", category: "Chatbot",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
        description: "A IA mais avançada do Google, integrada ao ecossistema Workspace.",
        link: "https://gemini.google.com", sponsored: false, featured: false
    },
    {
        id: 10, name: "Microsoft Copilot", category: "Chatbot",
        logo: "img/logos/copilot.png",
        description: "Integrado ao Bing e Windows, usa GPT-4 gratuitamente.",
        link: "https://copilot.microsoft.com", sponsored: false, featured: false
    },
    {
        id: 11, name: "Character.ai", category: "Chatbot",
        logo: "img/logos/character.png",
        description: "Converse com personalidades simuladas e personagens.",
        link: "https://character.ai", sponsored: false, featured: false
    },
    {
        id: 12, name: "Grok", category: "Chatbot",
        logo: "img/logos/grok.png",
        description: "A IA do X (Twitter), com acesso a dados em tempo real e humor ácido.",
        link: "https://grok.x.ai", sponsored: false, featured: false
    },

    // --- VÍDEO (ATUALIZADO) ---
    {
        id: 13, name: "Runway ML", category: "Vídeo",
        logo: "img/logos/runwayml.png",
        description: "Edição de vídeo profissional e geração text-to-video (Gen-2).",
        link: "https://runwayml.com", sponsored: false, featured: true
    },
    {
        id: 14, name: "Pika Labs", category: "Vídeo",
        logo: "img/logos/pika.png", 
        description: "Plataforma popular para gerar animações curtas e vídeos.",
        link: "https://pika.art", sponsored: false, featured: false
    },
    {
        id: 15, name: "HeyGen", category: "Vídeo",
        logo: "img/logos/heygen.png",
        description: "Tradução de vídeos mantendo o movimento dos lábios (Lip Sync).",
        link: "https://www.heygen.com", sponsored: false, featured: true
    },
    {
        id: 16, name: "Luma AI", category: "Vídeo",
        logo: "img/logos/lumalabs.png",
        description: "Especialista em 3D e o incrível modelo 'Dream Machine' para vídeos.",
        link: "https://lumalabs.ai", sponsored: false, featured: false
    },
    {
        id: 17, name: "Sora", category: "Vídeo",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png",
        description: "O modelo revolucionário da OpenAI para vídeos hiper-realistas.",
        link: "https://openai.com/sora", sponsored: false, featured: true
    },
    {
        id: 18, name: "Kaiber", category: "Vídeo",
        logo: "https://kaiber.ai/favicon.ico", 
        description: "Crie vídeos musicais estilizados e animações abstratas.",
        link: "https://kaiber.ai", sponsored: false, featured: false
    },

    // --- PROGRAMAÇÃO (ATUALIZADO) ---
    {
        id: 19, name: "GitHub Copilot", category: "Programação",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
        description: "O par programador mais usado do mundo.",
        link: "https://github.com/features/copilot", sponsored: false, featured: true
    },
    {
        id: 20, name: "Hugging Face", category: "Programação",
        logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
        description: "O maior repositório de modelos de IA open-source.",
        link: "https://huggingface.co", sponsored: false, featured: false
    },
    {
        id: 21, name: "Cursor AI", category: "Programação",
        logo: "https://www.cursor.com/favicon.ico",
        description: "Um editor de código (IDE) construído totalmente focado em IA.",
        link: "https://cursor.sh", sponsored: false, featured: true
    },
    {
        id: 22, name: "Speechify", category: "Áudio",
        logo: "img/logos/speechify.png",
        description: "Transforma textos em áudio, permitindo que você os ouça em vez de ler, usando vozes de IA.",
        link: "https://speechify.com/", sponsored: false, featured: false
    },
    {
        id: 23, name: "Qodo", category: "Programação",
        logo: "img/logos/qodo.png",
        description: "Plataforma de IA que ajuda desenvolvedores a criar software de alta qualidade.",
        link: "https://www.codium.ai/qodo/", sponsored: false, featured: false
    },
    {
        id: 24, name: "Tabnine", category: "Programação",
        logo: "img/logos/tabnine.png",
        description: "Autocompletar de código focado em privacidade e empresas.",
        link: "https://www.tabnine.com", sponsored: false, featured: false
    },
    {
        id: 25, name: "Emergent.sh", category: "Programação",
        logo: "img/logos/emergent.png",
        description: "Recursos e ferramentas para entender capacidades de modelos LLM.",
        link: "https://emergent.sh", sponsored: false, featured: false
    },

    // --- IMAGEM & DESIGN ---
    {
        id: 26, name: "Leonardo.ai", category: "Imagem",
        logo: "img/logos/leonardo.png",
        description: "Focado em assets para jogos e design com controle fino.",
        link: "https://leonardo.ai", sponsored: false, featured: true
    },
    {
        id: 27, name: "Canva Magic", category: "Imagem",
        logo: "img/logos/canva.png",
        description: "Suíte de IA integrada ao Canva para designers.",
        link: "https://www.canva.com", sponsored: false, featured: false
    },
    {
        id: 28, name: "Stable Diffusion", category: "Imagem",
        logo: "img/logos/stability.png",
        description: "Modelo open-source que roda no seu PC. Liberdade total.",
        link: "https://stability.ai", sponsored: false, featured: false
    },
    {
        id: 29, name: "DALL·E 3", category: "Imagem",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png",
        description: "O gerador de imagens da OpenAI, integrado ao ChatGPT.",
        link: "https://openai.com/dall-e-3", sponsored: false, featured: false
    },
    {
        id: 30, name: "Adobe Firefly", category: "Imagem",
        logo: "img/logos/firefly.png",
        description: "IA generativa da Adobe, segura para uso comercial.",
        link: "https://firefly.adobe.com", sponsored: false, featured: true
    },
    {
        id: 31, name: "Vectorizer.AI", category: "Imagem",
        logo: "img/logos/vectorizer.png",
        description: "Transforma imagens JPG/PNG em vetores (SVG) infinitos.",
        link: "https://vectorizer.ai", sponsored: false, featured: false
    },
    {
        id: 32, name: "Coloringbook.ai", category: "Imagem",
        logo: "img/logos/coloringbook.png",
        description: "Gera páginas de livros de colorir personalizadas.",
        link: "https://coloringbook.ai", sponsored: false, featured: false
    },

    // --- PRODUTIVIDADE ---
    {
        id: 33, name: "Notion AI", category: "Produtividade",
        logo: "img/logos/notion.png",
        description: "Resumos, correção e geração de texto dentro do Notion.",
        link: "https://www.notion.so/product/ai", sponsored: false, featured: false
    },
    {
        id: 34, name: "Gamma", category: "Produtividade",
        logo: "img/logos/gamma.png",
        description: "Crie apresentações de slides bonitas em segundos.",
        link: "https://gamma.app", sponsored: false, featured: true
    },
    {
        id: 35, name: "Zapier", category: "Produtividade",
        logo: "img/logos/zapier.png",
        description: "Rei da automação, conecta suas IAs a 5000+ apps.",
        link: "https://zapier.com", sponsored: false, featured: false
    },
    {
        id: 36, name: "Otter.ai", category: "Produtividade",
        logo: "img/logos/otter.png",
        description: "Transcreve e resume reuniões do Zoom/Meet automaticamente.",
        link: "https://otter.ai", sponsored: false, featured: false
    },
    {
        id: 37, name: "Dreamina", category: "Produtividade",
        logo: "img/logos/dreamina.png",
        description: "Ferramenta criativa da ByteDance para arte e produtividade.",
        link: "https://dreamina.capcut.com/ai-tool/home/", sponsored: false, featured: false
    },
    {
        id: 38, name: "AIforWork.co", category: "Produtividade",
        logo: "img/logos/aiforwork.png",
        description: "Biblioteca gigante de prompts avançados para trabalho.",
        link: "https://aiforwork.co", sponsored: false, featured: false
    },

    // --- AUDIO & MÚSICA ---
    {
        id: 39, name: "Suno AI", category: "Áudio",
        logo: "img/logos/suno.png",
        description: "Cria músicas completas com voz e letra incríveis.",
        link: "https://suno.com", sponsored: false, featured: true
    },
    {
        id: 40, name: "Play.AI", category: "Áudio",
        logo: "img/logos/play.png",
        description: "Gerador de voz ultra-realista para podcasts e vídeos.",
        link: "https://play.ai/", sponsored: false, featured: false
    },
    {
        id: 41, name: "Descript", category: "Áudio",
        logo: "img/logos/descript.png",
        description: "Edite áudio e vídeo como se estivesse editando um texto.",
        link: "https://www.descript.com", sponsored: false, featured: false
    },
    {
        id: 42, name: "Whisper", category: "Áudio",
        logo: "https://placehold.co/40x40/10b981/white?text=Wh",
        description: "Modelo open-source da OpenAI para transcrição precisa.",
        link: "https://openai.com/research/whisper", sponsored: false, featured: false
    },
    {
        id: 43, name: "Soundraw", category: "Áudio",
        logo: "img/logos/soundraw.png",
        description: "Gere músicas de fundo livres de royalties para seus vídeos.",
        link: "https://soundraw.io", sponsored: false, featured: false
    },

    // --- COPYWRITING & SEO ---
    {
        id: 44, name: "Copy.ai", category: "Copywriting",
        logo: "img/logos/copy.png",
        description: "Gere posts de blog, e-mails e legendas rapidamente.",
        link: "https://www.copy.ai", sponsored: false, featured: false
    },
    {
        id: 45, name: "Writesonic", category: "Copywriting",
        logo: "img/logos/writesonic.png",
        description: "Ótimo para escrever artigos longos otimizados para SEO.",
        link: "https://writesonic.com", sponsored: false, featured: false
    },
    {
        id: 46, name: "Surfer SEO", category: "SEO",
        logo: "img/logos/surferseo.png",
        description: "Analisa e otimiza seu conteúdo para rankear no Google.",
        link: "https://surferseo.com", sponsored: false, featured: true
    },
    {
        id: 47, name: "Semrush AI", category: "SEO",
        logo: "img/logos/semrush.png",
        description: "Ferramentas de IA para escrita e pesquisa de palavras-chave.",
        link: "https://www.semrush.com/ai-seo/brand-performance/", sponsored: false, featured: false
    },
    {
        id: 48, name: "QuillBot", category: "Copywriting",
        logo: "img/logos/quillbot.png",
        description: "A melhor ferramenta para reescrever e parafrasear textos.",
        link: "https://quillbot.com", sponsored: false, featured: false
    },

    // --- DADOS (ANALYTICS) ---
    {
        id: 49, name: "Power BI Copilot", category: "Dados",
        logo: "img/logos/microsoft.png",
        description: "Crie relatórios de dados complexos usando apenas chat.",
        link: "https://powerbi.microsoft.com", sponsored: false, featured: false
    },
    {
        id: 50, name: "Tableau GPT", category: "Dados",
        logo: "img/logos/tableau.png",
        description: "Visualização de dados assistida por inteligência artificial.",
        link: "https://www.tableau.com/products/artificial-intelligence", sponsored: false, featured: false
    },
    {
        id: 51, name: "Medallia", category: "Dados",
        logo: "img/logos/medallia.png",
        description: "Use Ai para transformar dados de diversas fontes em ações claras para as equipes.",
        link: "https://www.medallia.com/", sponsored: false, featured: false
    },

    // --- AUTOMAÇÃO ---
    {
        id: 52, name: "Make", category: "Automação",
        logo: "img/logos/make.png",
        description: "Antigo Integromat. Crie fluxos visuais complexos.",
        link: "https://www.make.com", sponsored: false, featured: true
    },
    {
        id: 53, name: "AutoGPT", category: "Automação",
        logo: "img/logos/agpt.png",
        description: "Assistente virtual para tarefas como vendas, agendamento, suporte ao cliente ou até criação de conteúdo.",
        link: "https://agpt.co/", sponsored: false, featured: false
    },
    {
        id: 54, name: "UiPath", category: "Automação",
        logo: "img/logos/uipath.png",
        description: "Automação de processos robóticos (RPA) para empresas.",
        link: "https://www.uipath.com", sponsored: false, featured: false
    },

    // --- MARKETING & YOUTUBE ---
    {
        id: 55, name: "HubSpot AI", category: "Marketing",
        logo: "img/logos/hubspot.png",
        description: "CRM com ferramentas de IA para marketing, vendas, atendimento ao cliente, conteúdo e operações.",
        link: "https://www.hubspot.com", sponsored: false, featured: false
    },
    {
        id: 56, name: "AdCreative.ai", category: "Marketing",
        logo: "img/logos/adcreative.png",
        description: "Gera banners de anúncios focados em conversão.",
        link: "https://www.adcreative.ai", sponsored: false, featured: true
    },
    {
        id: 57, name: "VidIQ", category: "YouTube",
        logo: "img/logos/vidiq.png",
        description: "Consultor de IA para crescer seu canal no YouTube.",
        link: "https://vidiq.com", sponsored: false, featured: false
    },
    {
        id: 58, name: "Pikzels", category: "YouTube",
        logo: "img/logos/pikzels.png",
        description: "Geração de thumbnails atrativas para vídeos.",
        link: "https://www.pikzels.com", sponsored: false, featured: false
    },

    // --- EDUCAÇÃO & SAÚDE ---
    {
        id: 59, name: "Khanmigo", category: "Educação",
        logo: "img/logos/khanmigo.png",
        description: "Ensino e tutor virtual baseado em inteligência artificial (IA).",
        link: "https://khanmigo.ai/", sponsored: false, featured: false
    },
    {
        id: 60, name: "Duolingo Max", category: "Educação",
        logo: "img/logos/duolingo.png",
        description: "Aprenda idiomas conversando com a IA (Roleplay).",
        link: "https://www.duolingo.com", sponsored: false, featured: false
    },
    {
        id: 61, name: "IBM Watsonx AI", category: "Automação",
        logo: "img/logos/ibm.png",
        description: "Focada em empresas que desejam aplicar IA de forma estratégica, segura e escalável.",
        link: "https://www.ibm.com/br-pt/products/watsonx-ai", sponsored: false, featured: false
    },

    // --- JOGOS ---
    {
        id: 62, name: "Unity AI", category: "Jogos",
        logo: "img/logos/unity.png",
        description: "ferramentas de IA de assistência contextual, automatiza tarefas, gera recursos e reduz as barreiras de entrada.",
        link: "https://unity.com/features/ai", sponsored: false, featured: false
    },
    {
        id: 63, name: "Inworld AI", category: "Jogos",
        logo: "img/logos/inworld.png",
        description: "Crie NPCs com personalidades e diálogos infinitos.",
        link: "https://inworld.ai", sponsored: false, featured: true
    },
    {
        id: 64, name: "Scenario", category: "Jogos",
        logo: "img/logos/scenario.png",
        description: "Gere texturas e assets de jogos no seu próprio estilo.",
        link: "https://www.scenario.com", sponsored: false, featured: false
    },

    // --- SEGURANÇA ---
    {
        id: 65, name: "Darktrace", category: "Segurança",
        logo: "img/logos/darktrace.png",
        description: "IA que aprende o 'normal' da empresa para achar ameaças.",
        link: "https://darktrace.com", sponsored: false, featured: false
    },
    {
        id: 66, name: "CrowdStrike", category: "Segurança",
        logo: "img/logos/crowdstrike.png",
        description: "Proteção de endpoint baseada em nuvem e IA.",
        link: "https://www.crowdstrike.com", sponsored: false, featured: false
    },
    {
        id: 67, name: "Sudowrite", category: "Copywriting",
        logo: "img/logos/sudowrite.png",
        description: "A melhor IA para escritores de ficção e roteiristas.",
        link: "https://www.sudowrite.com", sponsored: false, featured: false
    },
    {
        id: 68, name: "Rytr", category: "Copywriting",
        logo: "img/logos/rytr.png",
        description: "Assistente de escrita simples e acessível para e-mails e blogs.",
        link: "https://rytr.me", sponsored: false, featured: false
    },

    // Marketing & YouTube
    {
        id: 69, name: "Subscribr AI", category: "YouTube",
        logo: "img/logos/subscribr.png",
        description: "Cria roteiros, títulos e ideias virais para canais do YouTube.",
        link: "https://subscribr.ai", sponsored: false, featured: false
    },
    {
        id: 70, name: "Omneky", category: "Marketing",
        logo: "img/logos/omneky.png",
        description: "Gera e otimiza anúncios visuais usando dados de performance.",
        link: "https://www.omneky.com", sponsored: false, featured: false
    },

    // Áudio
    {
        id: 71, name: "Resemble AI", category: "Áudio",
        logo: "img/logos/resemble.png",
        description: "Clonagem de voz focada em emoções e segurança.",
        link: "https://www.resemble.ai", sponsored: false, featured: false
    },

    // Educação
    {
        id: 72, name: "Gradescope", category: "Educação",
        logo: "img/logos/gradescope.png",
        description: "IA que ajuda professores a corrigir provas e tarefas mais rápido.",
        link: "https://www.gradescope.com", sponsored: false, featured: false
    },
    {
        id: 73, name: "Socrat.ai", category: "Educação",
        logo: "img/logos/socrat.png",
        description: "Plataforma IA educacional que usa o método socrático de ensino, através de perguntas e diálogos.",
        link: "https://socrat.ai/", sponsored: false, featured: false
    },
    {
        id: 74, name: "Trae AI", category: "Programação",
        logo: "img/logos/trae.png",
        description: "IDE baseada em AI colaborativo, capaz de entender, criar e refatorar código de forma autônoma.",
        link: "https://www.trae.ai/", sponsored: false, featured: false
    },
    {
        id: 75, name: "Quizlet AI", category: "Educação",
        logo: "img/logos/quizlet.png",
        description: "Transforma anotações em flashcards e testes automaticamente.",
        link: "https://quizlet.com", sponsored: false, featured: false
    },

    // Saúde (Healthtech)
    {
        id: 76, name: "Aidoc", category: "Saúde",
        logo: "img/logos/aidoc.png",
        description: "Analisa exames de imagem para priorizar casos urgentes.",
        link: "https://www.aidoc.com", sponsored: false, featured: false
    },
    {
        id: 77, name: "Tempus", category: "Saúde",
        logo: "img/logos/tempus.png",
        description: "Usa IA e dados genômicos para personalizar tratamentos de câncer.",
        link: "https://www.tempus.com", sponsored: false, featured: false
    },
    {
        id: 78, name: "PathAI", category: "Saúde",
        logo: "img/logos/pathai.png",
        description: "Melhora o diagnóstico de patologias usando aprendizado de máquina.",
        link: "https://www.pathai.com", sponsored: false, featured: false
    },
    {
        id: 79, name: "Butterfly Network", category: "Saúde",
        logo: "img/logos/butterflynetwork.png",
        description: "Ultrassom portátil conectado ao celular e guiado por IA.",
        link: "https://www.butterflynetwork.com", sponsored: false, featured: false
    },

    // Jogos & Entretenimento
    {
        id: 80, name: "Charisma.ai", category: "Jogos",
        logo: "img/logos/charisma.png",
        description: "Dê vida a personagens virtuais com histórias interativas.",
        link: "https://charisma.ai", sponsored: false, featured: false
    },
    {
        id: 81, name: "Modl.ai", category: "Jogos",
        logo: "img/logos/modl.png",
        description: "Bots de teste que jogam seu game para achar bugs.",
        link: "https://modl.ai", sponsored: false, featured: false
    },

    // Segurança & Fraude
    {
        id: 82, name: "Replit", category: "Programação",
        logo: "img/logos/replit.png",
        description: "IA para criar aplicativos a partir de linguagem natural, transformando ideias em software.",
        link: "https://replit.com/", sponsored: false, featured: false
    },
    {
        id: 83, name: "Feedzai", category: "Segurança",
        logo: "img/logos/feedzai.png",
        description: "Combate crimes financeiros usando Big Data e IA.",
        link: "https://feedzai.com", sponsored: false, featured: false
    },
    {
        id: 84, name: "Riskified", category: "Segurança",
        logo: "img/logos/riskified.png",
        description: "Aprova pedidos de e-commerce e garante contra fraudes.",
        link: "https://www.riskified.com", sponsored: false, featured: false
    },
    {
        id: 85, name: "Vectra AI", category: "Segurança",
        logo: "img/logos/vectra.png",
        description: "Detecta e responde a ataques cibernéticos na rede.",
        link: "https://www.vectra.ai", sponsored: false, featured: false
    },
    {
        id: 86, name: "LM Studio", category: "LLM Local",
        logo: "img/logos/lmstudio.png",
        description: "Executa modelos de linguagem de inteligência artificial (LLMs) localmente no seu próprio computador.",
        link: "https://lmstudio.ai/", sponsored: false, featured: false
    },
    {
        id: 87, name: "Ollama", category: "LLM Local",
        logo: "img/logos/ollama.png",
        description: "Permite executar modelos de linguagem grandes (LLMs) localmente em seu próprio computador.",
        link: "https://ollama.com/", sponsored: false, featured: false
    },
    {
        id: 88, name: "Jan", category: "LLM Local",
        logo: "img/logos/jan.png",
        description: "Aplicativo de desktop focado em privacidade que permite rodar LLMs localmente com uma interface personalizável.",
        link: "https://www.jan.ai/", sponsored: false, featured: false
    },
    {
        id: 89, name: "AnythingLLM", category: "LLM Local",
        logo: "img/logos/anythingllm.png",
        description: "Permiti que você configure uma interface amigável para fazer upload de documentos e processá-los com modelos locais.",
        link: "https://anythingllm.com/", sponsored: false, featured: false
    },
    {
        id: 90, name: "AlphaSense", category: "Business",
        logo: "img/logos/alpha-sense.png",
        description: "Inteligência de mercado e pesquisa empresarial, que ajudar profissionais a tomar decisões de negócios.",
        link: "https://www.alpha-sense.com/", sponsored: false, featured: false
    },
    {
        id: 91, name: "WarrenAI", category: "Finanças",
        logo: "img/logos/warrenai.png",
        description: "Análise técnica automática, leitura de sentimento de mercado e filtragem de ações baseada em IA.",
        link: "https://br.investing.com/warrenai", sponsored: false, featured: false
    },
    {
        id: 92, name: "JurídicoAI", category: "Jurídico",
        logo: "img/logos/juridico.png",
        description: "Auxilia na elaboração de petições personalizadas, contestações e recursos, além de realizar buscas inteligentes de jurisprudência.",
        link: "https://juridico.ai/", sponsored: false, featured: false
    },
    {
        id: 93, name: "JusAI", category: "Jurídico",
        logo: "img/logos/jusbrasil.png",
        description: "Encontre teses vencedoras com muito mais rapidez, conectando doutrina e jurisprudência de forma fluida.",
        link: "https://ia.jusbrasil.com.br/", sponsored: false, featured: false
    },
    {
        id: 94, name: "AdvogaIA", category: "Jurídico",
        logo: "https://placehold.co/40x40/64748b/white?text=Ad",
        description: "Monitoramento processual, cálculos jurídicos complexos e um algoritmo autoral para análise de casos.",
        link: "https://www.advogaia.com.br/", sponsored: false, featured: false
    },
    {
        id: 95, name: "N8N", category: "Automação",
        logo: "img/logos/n8n.png",
        description: "Automatiza fluxos de trabalho conectando diversos aplicativos e serviços.",
        link: "https://n8n.io/", sponsored: false, featured: false
    },
    {
        id: 96, name: "Artlist", category: "Vídeo",
        logo: "img/logos/artlist.png",
        description: "Produções de vídeo de alta qualidade, conteúdo, videomaker e cineasta.",
        link: "https://artlist.io/", sponsored: false, featured: false
    },
    {
        id: 97, name: "Pollo.ai", category: "Imagem",
        logo: "img/logos/pollo.png",
        description: "Criação e edição de conteúdo visual, especialmente vídeos e imagens.",
        link: "https://pollo.ai/", sponsored: false, featured: false
    },
    {
        id: 98, name: "Pixlr", category: "Imagem",
        logo: "img/logos/pixlr.png",
        description: "AI para facilitar a edição e criação de imagens.",
        link: "https://pixlr.com/", sponsored: false, featured: false
    },
    {
        id: 99, name: "Lovart", category: "Imagem",
        logo: "img/logos/lovart.png",
        description: "AI que automatiza a criação de identidades visuais completas, vídeos e materiais de marketing.",
        link: "https://www.lovart.ai/", sponsored: false, featured: false
    },
    {
        id: 100, name: "Meta AI", category: "Chatbot",
        logo: "img/logos/meta.png",
        description: "AI generativa integrada aos aplicativos da Meta (WhatsApp, Instagram e Facebook).",
        link: "https://www.meta.ai/", sponsored: false, featured: false
    },
    {
        id: 101, name: "Deepseek", category: "Chatbot",
        logo: "img/logos/deepseek.png",
        description: "Chatbot que gera textos, responde perguntas, auxiliar em programação, tradução e análise de dados.",
        link: "https://www.deepseek.com/", sponsored: false, featured: false
    },
    {
        id: 102, name: "Anthropic", category: "Chatbot",
        logo: "img/logos/anthropic.png",
        description: "A Anthropic é uma empresa de interesse público dedicada a garantir seus benefícios e mitigar seus riscos.",
        link: "https://www.anthropic.com/", sponsored: false, featured: false
    },
    {
        id: 103, name: "DeepLearning.AI", category: "Educação",
        logo: "img/logos/deeplearning.png",
        description: "Ensina habilidades técnicas e estratégias de negócios em IA, machine learning.",
        link: "https://www.deeplearning.ai/", sponsored: false, featured: false
    },
    {
        id: 104, name: "Kimi", category: "Chatbot",
        logo: "img/logos/kimi.png",
        description: "AI Conversacional avançada, focada em processamento de textos longos.",
        link: "https://www.kimi.com/", sponsored: false, featured: false
    },
    {
        id: 105, name: "Krea AI", category: "Imagem",
        logo: "img/logos/krea.png",
        description: "AI de criação, edição e aprimoramento de imagens e vídeos.",
        link: "https://www.krea.ai/", sponsored: false, featured: false
    },
    {
        id: 106, name: "Ralv.ai", category: "Jogos",
        logo: "img/logos/ralv.png",
        description: "Gerenciar agentes de IA é como jogar Starcraft.",
        link: "https://ralv.ai/", sponsored: false, featured: false
    },
    {
        id: 107, name: "Calai.app", category: "Saúde",
        logo: "img/logos/calai.png",
        description: "AI app para facilitar o controle de calorias.",
        link: "https://www.calai.app/", sponsored: false, featured: false
    },
    {
        id: 108, name: "Vibemotion", category: "Vídeo",
        logo: "img/logos/vibemotion.png",
        description: "Criação automatizada de vídeos de motion graphics.",
        link: "https://vibemotion.ai/", sponsored: false, featured: false
    },
    {
        id: 109, name: "Moltbook", category: "Rede Social",
        logo: "img/logos/moltbook-icon.png",
        description: "A Primeira Plataforma Social de Agentes Autônomos de IA.",
        link: "https://www.moltbook.com/", sponsored: false, featured: false
    },
    {
        id: 110, name: "Kittl", category: "Imagem",
        logo: "img/logos/kittl.png",
        description: "Usa AI ara facilitar a criação de estampas, logotipos, cartazes e artes para redes sociais.",
        link: "https://www.kittl.com/", sponsored: false, featured: false
    },
    {
        id: 111, name: "Recraft.ai", category: "Imagem",
        logo: "img/logos/recraft.ai.png",
        description: "AI focada especificamente na criação e edição de elementos gráficos vetoriais, ícones, ilustrações 3D.",
        link: "https://www.recraft.ai/", sponsored: false, featured: false
    },
    {
        id: 112, name: "Photoroom", category: "Imagem",
        logo: "img/logos/photoroom.png",
        description: "Cria imagens com qualidade de estúdio de forma rápida e automática.",
        link: "https://www.photoroom.com/pt-br", sponsored: false, featured: false
    },
    {
        id: 113, name: "Flair.ai", category: "Imagem",
        logo: "img/logos/flair.ai.png",
        description: "Criação de fotos de produtos de alta qualidade para e-commerce e marketing.",
        link: "https://flair.ai/", sponsored: false, featured: false
    },
    {
        id: 114, name: "Flux", category: "Imagem",
        logo: "img/logos/Flux.png",
        description: "Cria imagens de alta qualidade com detalhes minuciosos, texturas ricas e iluminação precisa",
        link: "https://bfl.ai/models/flux-2", sponsored: false, featured: false
    },
    {
        id: 115, name: "Udio", category: "Áudio",
        logo: "img/logos/udio.png",
        description: "Criar músicas completas (letra, melodia, voz e instrumental) a partir de instruções de texto",
        link: "https://www.udio.com/", sponsored: false, featured: false
    },
    {
        id: 116, name: "NotebookLM", category: "Áudio",
        logo: "img/logos/notebooklm.png",
        description: "IA cria um Podcast incrivelmente realista",
        link: "https://notebooklm.google/", sponsored: false, featured: false
    },
    {
        id: 117, name: "Kling AI", category: "Vídeo",
        logo: "img/logos/klingai.png",
        description: "Criação de vídeos e imagens realistas de alta qualidade",
        link: "https://klingai.com/global/", sponsored: false, featured: false
    },
    {
        id: 118, name: "v0", category: "Programação",
        logo: "img/logos/v0.png",
        description: "Criar interfaces de usuário (UI) e aplicações web completas",
        link: "https://v0.app/", sponsored: false, featured: false
    },
    {
        id: 119, name: "Groq", category: "Programação",
        logo: "img/logos/groq.png",
        description: "Torna a inferência de IAs, extremamente rápida e eficiente",
        link: "https://groq.com/", sponsored: false, featured: false
    },
    {
        id: 120, name: "Poe", category: "Chatbot",
        logo: "img/logos/poe.png",
        description: "Agregador e assistente de chatbots de Inteligência Artificial (IA)",
        link: "https://poe.com/", sponsored: false, featured: false
    },
    {
        id: 121, name: "Manus AI", category: "Chatbot",
        logo: "img/logos/manus.png",
        description: "AI autónomo projetado para executar tarefas complexas de ponta a ponta",
        link: "https://manus.im/app", sponsored: false, featured: false
    }
]; 