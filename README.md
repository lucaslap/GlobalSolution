# 🌊 FloodAlert - Sistema Interativo de Alerta e Evacuação para Enchentes

<div align="center">
  <img src="images/logo-floodalert.svg" alt="FloodAlert Logo" width="300">
  
  **Global Solution FIAP 2025**
  
  *Proteção Inteligente Contra Enchentes*
  
  [![Projeto](https://img.shields.io/badge/Projeto-Global%20Solution-blue)](https://www.fiap.com.br)
  [![Tecnologia](https://img.shields.io/badge/Tecnologia-HTML%2BCSS%2BJS-green)](#tecnologias)
  [![Status](https://img.shields.io/badge/Status-Completo-brightgreen)](#)
</div>

---

## 📋 Sobre o Projeto

O **FloodAlert** é um sistema web interativo desenvolvido para o Global Solution da FIAP, focado em alertas e coordenação de evacuação em casos de enchentes. O projeto visa reduzir o impacto de desastres naturais em comunidades vulneráveis através de tecnologia acessível e eficiente.

### 🎯 Objetivos

- **Monitoramento em Tempo Real:** Simulação de dados meteorológicos e níveis de água
- **Sistema de Alertas Inteligente:** Notificações automáticas baseadas em níveis de risco
- **Coordenação de Evacuação:** Rotas seguras e localização de abrigos
- **Educação Preventiva:** Informações sobre segurança e preparação para emergências

---

## 🖥️ Demo Online

🌐 **[Acesse o Projeto Online](http://localhost:8000)** *(quando o servidor estiver rodando)*

### 📱 Páginas Disponíveis

- **[Página Inicial](index.html)** - Visão geral do sistema e problemas das enchentes
- **[Simulação Interativa](simulacao.html)** - Mapa em tempo real com dados e alertas
- **[Sobre o Projeto](sobre.html)** - Informações, dicas de segurança e kit de emergência

---

## ✨ Funcionalidades

### 🏠 Página Inicial
- ✅ Hero section responsivo com call-to-action
- ✅ Estatísticas animadas sobre enchentes
- ✅ Seções informativas com animações parallax
- ✅ Depoimentos de usuários
- ✅ Design mobile-first

### 🗺️ Simulação Interativa
- ✅ Mapa interativo com áreas de risco
- ✅ Monitoramento de dados em tempo real
- ✅ Sistema de alertas por níveis (Verde/Amarelo/Vermelho)
- ✅ Formulário de cadastro com validação brasileira
- ✅ Visualização de rotas de evacuação
- ✅ Localização de pontos de interesse (abrigos, hospitais)

### ℹ️ Página Sobre
- ✅ Informações detalhadas do projeto
- ✅ Dicas de segurança expansíveis
- ✅ Checklists interativos de kit de emergência
- ✅ Contatos de emergência com modal
- ✅ Timeline do desenvolvimento
- ✅ Formulário de contato funcional

### 🔧 Funcionalidades Técnicas
- ✅ Design responsivo (mobile-first)
- ✅ Sistema de notificações toast
- ✅ Validação de formulários em tempo real
- ✅ Persistência de dados (localStorage)
- ✅ Animações CSS e JavaScript
- ✅ Tema claro/escuro (toggle)
- ✅ Acessibilidade (ARIA)
- ✅ Performance otimizada

---

## 🛠️ Tecnologias

<div align="center">

| Frontend | Funcionalidade | Outros |
|----------|---------------|---------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | ![Local Storage](https://img.shields.io/badge/LocalStorage-FF6B6B?style=flat&logo=html5&logoColor=white) | ![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white) |

</div>

### 🏗️ Arquitetura

```
📁 FloodAlert/
├── 📄 index.html              # Página inicial
├── 📄 simulacao.html          # Simulação interativa
├── 📄 sobre.html              # Informações do projeto
├── 📄 README.md               # Documentação principal
├── 📄 PARTICIPANTES.md        # Info da equipe
├── 📁 css/
│   ├── styles.css             # Estilos globais + CSS variables
│   ├── home.css               # Estilos da página inicial
│   ├── simulacao.css          # Estilos da simulação
│   └── sobre.css              # Estilos da página sobre
├── 📁 js/
│   ├── main.js                # Utilitários e funções globais
│   ├── home.js                # Funcionalidades da home
│   ├── simulacao.js           # Engine de simulação
│   └── sobre.js               # Funcionalidades da página sobre
├── 📁 images/
│   ├── logo-floodalert.svg    # Logo principal
│   ├── hero-bg.svg            # Imagem hero
│   ├── favicon.svg            # Ícone do site
│   └── README.md              # Guia de imagens
└── 📁 assets/                 # Recursos adicionais
```

---

## 🚀 Como Executar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Python 3.x (para servidor local) ou qualquer servidor HTTP

### Instalação e Execução

1. **Clone/baixe o projeto:**
   ```bash
   # Se usando Git
   git clone [URL_DO_REPOSITORIO]
   cd FloodAlert
   
   # Ou extraia o arquivo ZIP
   ```

2. **Inicie um servidor local:**
   ```bash
   # Usando Python
   python -m http.server 8000
   
   # Ou usando Node.js
   npx serve
   
   # Ou usando PHP
   php -S localhost:8000
   ```

3. **Acesse no navegador:**
   ```
   http://localhost:8000
   ```

### 🌐 Uso Online
- Abra diretamente os arquivos HTML no navegador
- Algumas funcionalidades podem ter limitações sem servidor

---

## 📊 Demonstração de Funcionalidades

### 🎮 Funcionalidades Interativas

| Funcionalidade | Descrição | Como Testar |
|---------------|-----------|-------------|
| **Mapa Interativo** | Clique nas áreas para ver informações | Página Simulação → Clique no mapa |
| **Alertas em Tempo Real** | Dados simulados atualizados constantemente | Aguarde as atualizações automáticas |
| **Formulário Validado** | Validação brasileira de telefone/email | Preencha com dados inválidos |
| **Checklists Persistentes** | Progresso salvo no navegador | Marque itens e recarregue a página |
| **Tema Escuro/Claro** | Toggle entre temas | Tecla de atalho ou botão |
| **Notificações** | Sistema de feedback visual | Realize ações no site |
| **Easter Egg** | Código Konami completa checklists | ↑↑↓↓←→←→BA |

### 📱 Responsividade

O projeto é totalmente responsivo e foi testado em:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

---

## 🎨 Design System

### 🎨 Paleta de Cores

```css
/* Cores Principais */
--primary-blue: #2563eb;     /* Botões e links */
--success-green: #059669;    /* Confirmações */
--warning-yellow: #d97706;   /* Alertas moderados */
--danger-red: #dc2626;       /* Alertas críticos */

/* Cores Neutras */
--gray-900: #1f2937;         /* Textos principais */
--gray-600: #4b5563;         /* Textos secundários */
--gray-100: #f3f4f6;         /* Fundos claros */
--white: #ffffff;            /* Fundo principal */
```

### 📐 Tipografia

```css
/* Família de fontes */
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Tamanhos */
--font-xs: 0.75rem;    /* 12px */
--font-sm: 0.875rem;   /* 14px */
--font-base: 1rem;     /* 16px */
--font-lg: 1.125rem;   /* 18px */
--font-xl: 1.25rem;    /* 20px */
--font-2xl: 1.5rem;    /* 24px */
--font-3xl: 1.875rem;  /* 30px */
--font-4xl: 2.25rem;   /* 36px */
```

---

## 🧪 Testes e Validação

### ✅ Checklist de Testes

- [x] **Navegação:** Links funcionais entre páginas
- [x] **Responsividade:** Layout adapta em todos os tamanhos
- [x] **Formulários:** Validação e feedback adequados
- [x] **JavaScript:** Todas as funcionalidades operacionais
- [x] **Performance:** Carregamento rápido e suave
- [x] **Acessibilidade:** ARIA labels e navegação por teclado
- [x] **Cross-browser:** Compatibilidade com principais navegadores

### 🐛 Problemas Conhecidos

Nenhum problema crítico identificado. Funcionalidades opcionais:
- Geolocalização real (simulada por questões de segurança)
- APIs externas (dados simulados localmente)
- Notificações push (limitação de ambiente local)

---

## 📈 Métricas do Projeto

### 📊 Estatísticas de Código

```
📄 Arquivos HTML: 3         🎨 Arquivos CSS: 4
📜 Arquivos JS: 4          🖼️ Imagens: 3 (SVG)
📝 Linhas de código: ~2000  💾 Tamanho: ~500KB
```

### ⚡ Performance

- **First Contentful Paint:** < 1s
- **Largest Contentful Paint:** < 2s
- **Cumulative Layout Shift:** < 0.1
- **First Input Delay:** < 100ms

---

## 👥 Equipe de Desenvolvimento

> **Nota:** Edite o arquivo `PARTICIPANTES.md` com as informações reais da equipe

### Participantes
- **[Nome 1]** - RM: [RM1] - [Responsabilidades]
- **[Nome 2]** - RM: [RM2] - [Responsabilidades]  
- **[Nome 3]** - RM: [RM3] - [Responsabilidades]

### Contribuições
- **Frontend Development:** HTML5, CSS3, Design Responsivo
- **JavaScript Development:** Interatividade, Validações, Simulações
- **UX/UI Design:** Interface intuitiva, Acessibilidade
- **Documentation:** README, Comentários, Estrutura

---

## 📚 Recursos e Referências

### 📖 Documentação Técnica
- [MDN Web Docs](https://developer.mozilla.org/) - Referência web
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [JavaScript ES6+](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### 🎨 Design e Inspiração
- [Material Design](https://material.io/) - Princípios de design
- [Unsplash](https://unsplash.com/) - Imagens de alta qualidade
- [Heroicons](https://heroicons.com/) - Ícones SVG

### 🌐 Dados sobre Enchentes
- [CEMADEN](https://www.cemaden.gov.br/) - Centro Nacional de Monitoramento
- [ANA](https://www.ana.gov.br/) - Agência Nacional de Águas
- [Defesa Civil](https://www.defesacivil.gov.br/) - Proteção e Defesa Civil

---

## 🏆 Resultados Esperados

### 🎯 Impacto Social
- **Educação:** Maior conscientização sobre riscos de enchente
- **Preparação:** Comunidades mais preparadas para emergências
- **Resposta Rápida:** Redução do tempo de evacuação
- **Vidas Salvas:** Prevenção de fatalidades por enchentes

### 💡 Valor Educacional
- **Tecnologia Web:** Aplicação prática de HTML, CSS e JavaScript
- **UX/UI Design:** Experiência em design centrado no usuário
- **Responsividade:** Desenvolvimento mobile-first
- **Acessibilidade:** Inclusão digital e conformidade com padrões

---

## 🔮 Próximos Passos

### 🚀 Melhorias Futuras

1. **Backend Integration**
   - API para dados meteorológicos reais
   - Sistema de usuários e autenticação
   - Base de dados para histórico

2. **Funcionalidades Avançadas**
   - Push notifications
   - Geolocalização precisa
   - Integração com redes sociais
   - Modo offline (PWA)

3. **Mobile App**
   - Aplicativo nativo iOS/Android
   - Notificações push nativas
   - GPS para localização em tempo real

4. **Integração Governamental**
   - APIs da Defesa Civil
   - Dados do CEMADEN/ANA
   - Sistema de emergência oficial

---

## 📞 Contato e Suporte

### 🎓 Instituição
**FIAP - Faculdade de Informática e Administração Paulista**
- **Site:** [fiap.com.br](https://www.fiap.com.br)
- **Global Solution:** Programa de projetos inovadores

### 👨‍💻 Desenvolvedores
- **GitHub:** [Link dos repositórios]
- **Email:** [Emails da equipe]
- **LinkedIn:** [Perfis profissionais]

### 🐛 Reportar Problemas
- Abra uma issue no repositório
- Descreva o problema detalhadamente
- Inclua prints e passos para reproduzir

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do Global Solution da FIAP.

**© 2025 FloodAlert Team - FIAP. Todos os direitos reservados.**

---

<div align="center">
  
  **🌊 Protegendo vidas através da tecnologia 🌊**
  
  [![FIAP](https://img.shields.io/badge/FIAP-Global%20Solution-red)](https://www.fiap.com.br)
  [![Tecnologia](https://img.shields.io/badge/Feito%20com-❤️%20e%20código-blue)](#)
  
  *Desenvolvido com dedicação pela equipe FloodAlert*

</div>
