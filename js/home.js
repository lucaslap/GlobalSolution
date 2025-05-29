// ===== HOME PAGE JAVASCRIPT =====
// Funcionalidades específicas da página inicial

// Contador animado para estatísticas
function animateStatNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Formata o número baseado no tipo
            if (stat.textContent.includes('%')) {
                stat.textContent = Math.floor(current) + '%';
            } else if (stat.textContent.includes('+')) {
                stat.textContent = Math.floor(current) + '+';
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 50);
    });
}

// Observer para iniciar animação quando entrar na tela
function initStatObserver() {
    const statsSection = document.querySelector('.estatisticas');
    if (!statsSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                setTimeout(animateStatNumbers, 300);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
}

// Função para simular alertas em tempo real na home
function simulateRealTimeAlerts() {
    const alertMessages = [
        { message: "Sistema de monitoramento ativo", type: "info" },
        { message: "Condições meteorológicas normais", type: "success" },
        { message: "Sensores funcionando corretamente", type: "info" },
        { message: "Última verificação: dados atualizados", type: "success" }
    ];
    
    let currentIndex = 0;
    
    setInterval(() => {
        const alert = alertMessages[currentIndex];
        
        // Atualiza o dashboard preview se existir
        const alertBox = document.querySelector('.alert-box p');
        if (alertBox) {
            alertBox.textContent = alert.message;
        }
        
        currentIndex = (currentIndex + 1) % alertMessages.length;
    }, 8000);
}

// Função para adicionar efeitos de hover nos cards de problema
function initProblemCardEffects() {
    const problemCards = document.querySelectorAll('.problema-card');
    
    problemCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        });
    });
}

// Função para animar as features da solução
function initFeatureAnimations() {
    const features = document.querySelectorAll('.feature');
    
    features.forEach((feature, index) => {
        feature.style.animationDelay = `${index * 0.2}s`;
        
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(12px) scale(1.02)';
            this.style.backgroundColor = '#e0f2fe';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
            this.style.backgroundColor = '#f9fafb';
        });
    });
}

// Função para criar efeito de ondas no hero melhorada
function createWaveEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Cria container para as ondas
    const waves = document.createElement('div');
    waves.className = 'hero-waves';
    waves.innerHTML = `
        <div class="wave-layer wave-back">
            <div class="wave"></div>
        </div>
        <div class="wave-layer wave-mid">
            <div class="wave"></div>
        </div>
        <div class="wave-layer wave-front">
            <div class="wave"></div>
        </div>
        <div class="floating-elements">
            <div class="bubble bubble-1"></div>
            <div class="bubble bubble-2"></div>
            <div class="bubble bubble-3"></div>
            <div class="bubble bubble-4"></div>
            <div class="bubble bubble-5"></div>
        </div>
    `;
    
    hero.style.position = 'relative';
    hero.style.overflow = 'hidden';
    hero.appendChild(waves);
    
    // Adiciona estilos avançados para as ondas
    const waveStyles = document.createElement('style');
    waveStyles.textContent = `
        .hero-waves {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 150px;
            overflow: hidden;
            z-index: 1;
            pointer-events: none;
        }
        
        .wave-layer {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        
        .wave {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 200%;
            height: 100%;
            background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2) 100%);
            border-radius: 50% 50% 0 0;
            transform-origin: bottom center;
        }
        
        .wave-back .wave {
            animation: waveMotion 20s ease-in-out infinite;
            opacity: 0.3;
            height: 60%;
            background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%);
        }
        
        .wave-mid .wave {
            animation: waveMotion 15s ease-in-out infinite reverse;
            opacity: 0.5;
            height: 80%;
            animation-delay: -5s;
            background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.15) 100%);
        }
        
        .wave-front .wave {
            animation: waveMotion 12s ease-in-out infinite;
            opacity: 0.7;
            height: 100%;
            animation-delay: -2s;
            background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2) 100%);
        }
        
        @keyframes waveMotion {
            0%, 100% {
                transform: translateX(0) scaleY(1) skewX(0deg);
            }
            25% {
                transform: translateX(-25%) scaleY(1.1) skewX(2deg);
            }
            50% {
                transform: translateX(-50%) scaleY(0.9) skewX(0deg);
            }
            75% {
                transform: translateX(-75%) scaleY(1.05) skewX(-2deg);
            }
        }
        
        .floating-elements {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
        
        .bubble {
            position: absolute;
            background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 70%, transparent 100%);
            border-radius: 50%;
            animation: bubbleFloat 8s ease-in-out infinite;
            opacity: 0.6;
        }
        
        .bubble-1 {
            width: 20px;
            height: 20px;
            left: 10%;
            bottom: 20%;
            animation-delay: 0s;
            animation-duration: 12s;
        }
        
        .bubble-2 {
            width: 15px;
            height: 15px;
            left: 70%;
            bottom: 40%;
            animation-delay: -3s;
            animation-duration: 10s;
        }
        
        .bubble-3 {
            width: 25px;
            height: 25px;
            left: 30%;
            bottom: 60%;
            animation-delay: -6s;
            animation-duration: 14s;
        }
        
        .bubble-4 {
            width: 12px;
            height: 12px;
            left: 85%;
            bottom: 15%;
            animation-delay: -2s;
            animation-duration: 9s;
        }
        
        .bubble-5 {
            width: 18px;
            height: 18px;
            left: 50%;
            bottom: 70%;
            animation-delay: -8s;
            animation-duration: 11s;
        }
        
        @keyframes bubbleFloat {
            0%, 100% {
                transform: translateY(0) scale(1) rotate(0deg);
                opacity: 0.6;
            }
            25% {
                transform: translateY(-30px) scale(1.1) rotate(90deg);
                opacity: 0.8;
            }
            50% {
                transform: translateY(-20px) scale(0.9) rotate(180deg);
                opacity: 0.4;
            }
            75% {
                transform: translateY(-40px) scale(1.05) rotate(270deg);
                opacity: 0.7;
            }
        }
        
        /* Efeitos responsivos */
        @media (max-width: 768px) {
            .hero-waves {
                height: 100px;
            }
            
            .bubble {
                display: none;
            }
            
            .wave {
                width: 300%;
            }
        }
        
        /* Efeito de interação com scroll */
        .hero-waves.scrolled {
            transform: translateY(20px);
            opacity: 0.7;
        }
        
        /* Efeito hover para dispositivos desktop */
        @media (hover: hover) {
            .hero:hover .wave-front .wave {
                animation-duration: 8s;
            }
            
            .hero:hover .wave-mid .wave {
                animation-duration: 10s;
            }
            
            .hero:hover .wave-back .wave {
                animation-duration: 15s;
            }
            
            .hero:hover .bubble {
                animation-duration: 6s;
            }
        }
        
        /* Modo de movimento reduzido para acessibilidade */
        @media (prefers-reduced-motion: reduce) {
            .wave {
                animation: none !important;
            }
            
            .bubble {
                animation: none !important;
                opacity: 0.3;
            }
        }
    `;
    
    document.head.appendChild(waveStyles);
    
    // Adiciona efeito de scroll às ondas
    let ticking = false;
    
    function updateWaves() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (scrolled > 100) {
            waves.classList.add('scrolled');
        } else {
            waves.classList.remove('scrolled');
        }
        
        // Parallax suave nas ondas
        waves.style.transform = `translateY(${rate * 0.3}px)`;
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateWaves);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Cleanup function
    waves.cleanup = () => {
        window.removeEventListener('scroll', requestTick);
        waves.remove();
        waveStyles.remove();
    };
    
    return waves;
}

// Função para mostrar preview do mapa na solução
function initMapPreview() {
    const mapPlaceholder = document.querySelector('.map-placeholder');
    if (!mapPlaceholder) return;
    
    // Adiciona pontos simulados no mapa
    const points = [
        { x: '20%', y: '30%', type: 'safe' },
        { x: '60%', y: '20%', type: 'warning' },
        { x: '40%', y: '70%', type: 'danger' },
        { x: '80%', y: '50%', type: 'safe' }
    ];
    
    points.forEach((point, index) => {
        setTimeout(() => {
            const dot = document.createElement('div');
            dot.style.cssText = `
                position: absolute;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                left: ${point.x};
                top: ${point.y};
                background-color: ${getPointColor(point.type)};
                animation: pointPulse 2s infinite;
                box-shadow: 0 0 10px rgba(0,0,0,0.3);
            `;
            
            mapPlaceholder.appendChild(dot);
        }, index * 500);
    });
    
    // Adiciona estilo para animação dos pontos
    if (!document.getElementById('mapPreviewStyles')) {
        const styles = document.createElement('style');
        styles.id = 'mapPreviewStyles';
        styles.textContent = `
            @keyframes pointPulse {
                0%, 100% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.5); opacity: 0.7; }
            }
        `;
        document.head.appendChild(styles);
    }
}

// Função auxiliar para cores dos pontos
function getPointColor(type) {
    const colors = {
        safe: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444'
    };
    return colors[type] || colors.safe;
}

// Função para adicionar easter egg interativo
function initEasterEgg() {
    let clickCount = 0;
    const floodAnimation = document.querySelector('.flood-animation');
    
    if (floodAnimation) {
        floodAnimation.addEventListener('click', () => {
            clickCount++;
            
            if (clickCount === 5) {
                showNotification('🎉 Você descobriu um easter egg! Sistema FloodAlert ativado!', 'success');
                floodAnimation.style.animation = 'float 1s ease-in-out infinite, spin 2s linear infinite';
                
                setTimeout(() => {
                    floodAnimation.style.animation = 'float 3s ease-in-out infinite';
                    clickCount = 0;
                }, 3000);
            }
        });
    }
}

// Função para carousel de depoimentos (se implementado)
function initTestimonialCarousel() {
    const testimonials = [
        {
            text: "O FloodAlert salvou nossa comunidade com alertas precisos.",
            author: "Maria Silva, Residente"
        },
        {
            text: "Sistema eficiente que realmente funciona em emergências.",
            author: "João Santos, Defesa Civil"
        },
        {
            text: "Interface intuitiva e notificações em tempo real.",
            author: "Ana Costa, Coordenadora"
        }
    ];
    
    // Implementação do carousel seria adicionada aqui se necessário
}

// Função para efeito de digitação no hero
function initTypingEffect() {
    const typingElement = document.getElementById('typingText');
    if (!typingElement) return;
    
    const words = ['Inteligente', 'Inovador', 'Eficiente', 'Confiável', 'Avançado'];
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentWord = words[currentWordIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }
        
        let timeout = isDeleting ? 100 : 150;
        
        if (!isDeleting && currentCharIndex === currentWord.length) {
            timeout = 2000;
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
        }
        
        setTimeout(type, timeout);
    }
    
    type();
}

// Função para animar estatísticas do hero
function animateHeroStats() {
    const statNumbers = document.querySelectorAll('.hero-stats .stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                
                const finalText = entry.target.textContent;
                const isPercentage = finalText.includes('%');
                const hasUnit = finalText.includes('h') || finalText.includes('/');
                
                if (isPercentage) {
                    const number = parseInt(finalText);
                    animateNumber(entry.target, 0, number, '%');
                } else if (hasUnit) {
                    // Para textos como "24/7" ou "6h", não animar
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.6s ease';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 200);
                }
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateNumber(element, start, end, suffix = '') {
    const duration = 1500;
    const startTime = Date.now();
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (end - start) * easeOut);
        
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    update();
}

// Função para parallax scroll no hero
function initHeroParallax() {
    const hero = document.querySelector('.hero');
    const floodAnimation = document.querySelector('.flood-animation');
    const floatingCards = document.querySelectorAll('.floating-card');
    
    if (!hero) return;
    
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const heroHeight = hero.offsetHeight;
        
        if (scrolled < heroHeight) {
            // Parallax no background
            hero.style.transform = `translateY(${rate * 0.3}px)`;
            
            // Parallax na animação de enchente
            if (floodAnimation) {
                floodAnimation.style.transform = `translateY(${rate * 0.2}px) rotate(${scrolled * 0.1}deg)`;
            }
            
            // Parallax nos cards flutuantes
            floatingCards.forEach((card, index) => {
                const cardRate = rate * (0.1 + index * 0.05);
                card.style.transform = `translateY(${cardRate}px) translateX(${cardRate * 0.5}px)`;
            });
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

// Função para animar estatísticas da seção problema
function animateProblemStats() {
    const problemStats = document.querySelectorAll('.stat-number-problem');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                
                const finalText = entry.target.textContent;
                const target = parseInt(entry.target.getAttribute('data-target'));
                
                if (finalText.includes('M+')) {
                    animateCounter(entry.target, 0, target, 'M+');
                } else if (finalText.includes('min')) {
                    animateCounter(entry.target, 0, target, 'min');
                } else if (finalText.includes('%')) {
                    animateCounter(entry.target, 0, target, '%');
                }
            }
        });
    }, { threshold: 0.5 });
    
    problemStats.forEach(stat => observer.observe(stat));
}

function animateCounter(element, start, end, suffix) {
    const duration = 2000;
    const startTime = Date.now();
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (end - start) * easeOut);
        
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    update();
}

// Função para animar barras de progresso
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-animated');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                
                const targetWidth = entry.target.getAttribute('data-width');
                entry.target.style.setProperty('--target-width', targetWidth + '%');
                
                setTimeout(() => {
                    entry.target.style.width = targetWidth + '%';
                }, 500);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => observer.observe(bar));
}

// Função para efeito tilt nos cards
function initTiltEffect() {
    const tiltCards = document.querySelectorAll('[data-tilt]');
    
    tiltCards.forEach(card => {
        let isHovering = false;
        
        card.addEventListener('mouseenter', () => {
            isHovering = true;
        });
        
        card.addEventListener('mouseleave', () => {
            isHovering = false;
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
        
        card.addEventListener('mousemove', (e) => {
            if (!isHovering) return;
            
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;
            
            const rotateX = (deltaY / rect.height) * -10;
            const rotateY = (deltaX / rect.width) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
        });
    });
}

// Função para efeitos de hover nos cards de problemas
function initProblemCardEffects() {
    const problemCards = document.querySelectorAll('.enhanced-problem-card');
    
    problemCards.forEach((card, index) => {
        // Adiciona delay para animação inicial
        card.style.animationDelay = `${index * 0.2}s`;
        
        // Efeito de hover com pulso na métrica
        card.addEventListener('mouseenter', function() {
            const metrics = this.querySelectorAll('.metric-value');
            metrics.forEach(metric => {
                metric.style.animation = 'metricPulse 0.6s ease-in-out';
            });
            
            // Reset animation
            setTimeout(() => {
                metrics.forEach(metric => {
                    metric.style.animation = '';
                });
            }, 600);
        });
        
        // Efeito de click para mostrar mais informações
        card.addEventListener('click', function() {
            const overlay = this.querySelector('.card-overlay');
            overlay.style.animation = 'overlayGlow 1s ease-in-out';
            
            // Simula abertura de modal ou expansão
            showProblemDetails(index);
        });
    });
}

function showProblemDetails(index) {
    const problemData = [
        {
            title: "Impacto Global das Enchentes",
            details: "As enchentes são responsáveis por 40% dos desastres naturais mundiais, afetando desproporcionalmente comunidades vulneráveis.",
            solutions: ["Sistemas de alerta antecipado", "Infraestrutura resiliente", "Planejamento urbano sustentável"]
        },
        {
            title: "Deficiência em Sistemas de Alerta",
            details: "Apenas 20% das comunidades em risco possuem sistemas adequados de alerta antecipado para enchentes.",
            solutions: ["Tecnologia IoT", "Integração com meteorologia", "Aplicativos móveis"]
        },
        {
            title: "Problemas na Evacuação",
            details: "Rotas de evacuação inadequadas aumentam em 200% o tempo necessário para sair de áreas de risco.",
            solutions: ["Mapeamento inteligente", "Rotas otimizadas", "Coordenação centralizada"]
        }
    ];
    
    // Simula exibição de informações detalhadas
    showNotification(`💡 ${problemData[index].title}: ${problemData[index].details}`, 'info', 5000);
}

// Função para criar efeito de partículas de chuva
function createRainEffect() {
    const problemSection = document.getElementById('problema');
    if (!problemSection) return;
    
    const rainContainer = document.createElement('div');
    rainContainer.className = 'rain-effect position-absolute w-100 h-100';
    rainContainer.style.cssText = `
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    
    // Criar gotas de chuva
    for (let i = 0; i < 20; i++) {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.style.cssText = `
            position: absolute;
            width: 2px;
            height: 10px;
            background: linear-gradient(to bottom, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.1));
            border-radius: 1px;
            left: ${Math.random() * 100}%;
            animation: rainFall ${3 + Math.random() * 2}s linear infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        rainContainer.appendChild(drop);
    }
    
    problemSection.appendChild(rainContainer);
    
    // Adicionar keyframes para animação da chuva
    if (!document.getElementById('rainStyles')) {
        const rainStyles = document.createElement('style');
        rainStyles.id = 'rainStyles';
        rainStyles.textContent = `
            @keyframes rainFall {
                0% {
                    transform: translateY(-100vh);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh);
                    opacity: 0;
                }
            }
            
            @keyframes metricPulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); color: #0d6efd; }
            }
        `;
        document.head.appendChild(rainStyles);
    }
}

// Função para demonstração tecnológica
function showTechDemo() {
    const demoModal = createTechDemoModal();
    document.body.appendChild(demoModal);
    
    // Show modal with animation
    setTimeout(() => {
        demoModal.classList.add('show');
    }, 100);
}

function createTechDemoModal() {
    const modal = document.createElement('div');
    modal.className = 'tech-demo-modal';
    modal.innerHTML = `
        <div class="modal-backdrop"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">
                    <i class="bi bi-gear-fill me-2"></i>
                    Demonstração Tecnológica - DryPath
                </h3>
                <button class="btn-close" onclick="closeTechDemo(this)">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="demo-tabs">
                    <button class="demo-tab active" onclick="showDemoTab('architecture', this)">
                        <i class="bi bi-diagram-3 me-2"></i>Arquitetura
                    </button>
                    <button class="demo-tab" onclick="showDemoTab('workflow', this)">
                        <i class="bi bi-arrow-repeat me-2"></i>Fluxo de Trabalho
                    </button>
                    <button class="demo-tab" onclick="showDemoTab('features', this)">
                        <i class="bi bi-list-check me-2"></i>Funcionalidades
                    </button>
                </div>
                
                <div class="demo-content">
                    <div id="demo-architecture" class="demo-panel active">
                        <h4>Arquitetura do Sistema</h4>
                        <div class="architecture-diagram">
                            <div class="arch-layer frontend">
                                <div class="layer-title">Frontend</div>
                                <div class="layer-items">
                                    <span class="tech-item">React/Vue.js</span>
                                    <span class="tech-item">Bootstrap</span>
                                    <span class="tech-item">PWA</span>
                                </div>
                            </div>
                            <div class="arch-layer backend">
                                <div class="layer-title">Backend</div>
                                <div class="layer-items">
                                    <span class="tech-item">Node.js</span>
                                    <span class="tech-item">Python</span>
                                    <span class="tech-item">APIs REST</span>
                                </div>
                            </div>
                            <div class="arch-layer data">
                                <div class="layer-title">Dados</div>
                                <div class="layer-items">
                                    <span class="tech-item">PostgreSQL</span>
                                    <span class="tech-item">Redis</span>
                                    <span class="tech-item">MongoDB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div id="demo-workflow" class="demo-panel">
                        <h4>Fluxo de Trabalho</h4>
                        <div class="workflow-steps">
                            <div class="workflow-step">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <h5>Coleta de Dados</h5>
                                    <p>Sensores IoT e APIs meteorológicas</p>
                                </div>
                            </div>
                            <div class="workflow-step">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <h5>Processamento IA</h5>
                                    <p>Análise preditiva e machine learning</p>
                                </div>
                            </div>
                            <div class="workflow-step">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <h5>Geração de Alertas</h5>
                                    <p>Classificação de riscos automática</p>
                                </div>
                            </div>
                            <div class="workflow-step">
                                <div class="step-number">4</div>
                                <div class="step-content">
                                    <h5>Notificação</h5>
                                    <p>Envio para usuários e autoridades</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div id="demo-features" class="demo-panel">
                        <h4>Funcionalidades Principais</h4>
                        <div class="features-grid">
                            <div class="feature-demo">
                                <i class="bi bi-broadcast"></i>
                                <h5>Alertas Inteligentes</h5>
                                <p>Sistema de notificações em tempo real com múltiplos canais</p>
                            </div>
                            <div class="feature-demo">
                                <i class="bi bi-map"></i>
                                <h5>Mapeamento Dinâmico</h5>
                                <p>Visualização interativa de riscos e rotas de evacuação</p>
                            </div>
                            <div class="feature-demo">
                                <i class="bi bi-graph-up"></i>
                                <h5>Analytics Avançado</h5>
                                <p>Dashboards com métricas e relatórios detalhados</p>
                            </div>
                            <div class="feature-demo">
                                <i class="bi bi-shield-check"></i>
                                <h5>Gestão de Emergências</h5>
                                <p>Coordenação entre equipes de resposta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add styles
    if (!document.getElementById('techDemoStyles')) {
        const styles = document.createElement('style');
        styles.id = 'techDemoStyles';
        styles.textContent = `
            .tech-demo-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9999;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .tech-demo-modal.show {
                opacity: 1;
                visibility: visible;
            }
            
            .modal-backdrop {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                backdrop-filter: blur(5px);
            }
            
            .modal-content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 90%;
                max-width: 800px;
                max-height: 80vh;
                background: white;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
            }
            
            .modal-header {
                background: linear-gradient(135deg, #2563eb, #1d4ed8);
                color: white;
                padding: 1.5rem;
                display: flex;
                justify-content: between;
                align-items: center;
            }
            
            .modal-title {
                margin: 0;
                flex: 1;
            }
            
            .btn-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 50%;
                transition: all 0.3s ease;
            }
            
            .btn-close:hover {
                background: rgba(255, 255, 255, 0.2);
            }
            
            .modal-body {
                padding: 0;
                max-height: 60vh;
                overflow-y: auto;
            }
            
            .demo-tabs {
                display: flex;
                background: #f8f9fa;
                border-bottom: 1px solid #dee2e6;
            }
            
            .demo-tab {
                flex: 1;
                padding: 1rem;
                background: none;
                border: none;
                cursor: pointer;
                transition: all 0.3s ease;
                font-weight: 500;
            }
            
            .demo-tab.active {
                background: white;
                color: #2563eb;
                border-bottom: 3px solid #2563eb;
            }
            
            .demo-content {
                padding: 2rem;
            }
            
            .demo-panel {
                display: none;
            }
            
            .demo-panel.active {
                display: block;
            }
            
            .architecture-diagram {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                margin-top: 1rem;
            }
            
            .arch-layer {
                padding: 1rem;
                border-radius: 10px;
                text-align: center;
            }
            
            .arch-layer.frontend {
                background: linear-gradient(135deg, #3b82f6, #2563eb);
                color: white;
            }
            
            .arch-layer.backend {
                background: linear-gradient(135deg, #10b981, #059669);
                color: white;
            }
            
            .arch-layer.data {
                background: linear-gradient(135deg, #f59e0b, #d97706);
                color: white;
            }
            
            .layer-title {
                font-weight: 600;
                margin-bottom: 0.5rem;
            }
            
            .layer-items {
                display: flex;
                gap: 0.5rem;
                justify-content: center;
                flex-wrap: wrap;
            }
            
            .tech-item {
                background: rgba(255, 255, 255, 0.2);
                padding: 0.25rem 0.75rem;
                border-radius: 15px;
                font-size: 0.875rem;
            }
            
            .workflow-steps {
                display: grid;
                gap: 1rem;
                margin-top: 1rem;
            }
            
            .workflow-step {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1rem;
                background: #f8f9fa;
                border-radius: 10px;
            }
            
            .step-number {
                width: 40px;
                height: 40px;
                background: #2563eb;
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 600;
                flex-shrink: 0;
            }
            
            .step-content h5 {
                margin: 0 0 0.5rem 0;
                color: #2563eb;
            }
            
            .step-content p {
                margin: 0;
                color: #6b7280;
            }
            
            .features-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
            }
            
            .feature-demo {
                text-align: center;
                padding: 1rem;
                background: #f8f9fa;
                border-radius: 10px;
            }
            
            .feature-demo i {
                font-size: 2rem;
                color: #2563eb;
                margin-bottom: 0.5rem;
            }
            
            .feature-demo h5 {
                margin: 0.5rem 0;
                color: #2563eb;
            }
            
            .feature-demo p {
                margin: 0;
                color: #6b7280;
                font-size: 0.875rem;
            }
        `;
        document.head.appendChild(styles);
    }
    
    return modal;
}

function showDemoTab(tabId, button) {
    // Remove active from all tabs and panels
    document.querySelectorAll('.demo-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.demo-panel').forEach(panel => panel.classList.remove('active'));
    
    // Add active to clicked tab and corresponding panel
    button.classList.add('active');
    document.getElementById(`demo-${tabId}`).classList.add('active');
}

function closeTechDemo(button) {
    const modal = button.closest('.tech-demo-modal');
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.remove();
    }, 300);
}

// Função para mostrar vídeo de demonstração
function showDemoVideo() {
    const videoModal = createVideoModal();
    document.body.appendChild(videoModal);
    
    setTimeout(() => {
        videoModal.classList.add('show');
    }, 100);
}

function createVideoModal() {
    const modal = document.createElement('div');
    modal.className = 'video-demo-modal';
    modal.innerHTML = `
        <div class="modal-backdrop"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">
                    <i class="bi bi-camera-video-fill me-2"></i>
                    Demonstração do DryPath
                </h3>
                <button class="btn-close" onclick="closeVideoDemo(this)">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="video-container">
                    <div class="video-placeholder">
                        <div class="video-icon">
                            <i class="bi bi-play-circle-fill"></i>
                        </div>
                        <h4>Vídeo Demonstrativo</h4>
                        <p class="text-muted">Conheça as principais funcionalidades do sistema DryPath</p>
                        <div class="video-features">
                            <div class="feature-item">
                                <i class="bi bi-check-circle text-success me-2"></i>
                                Interface intuitiva e responsiva
                            </div>
                            <div class="feature-item">
                                <i class="bi bi-check-circle text-success me-2"></i>
                                Sistema de alertas em tempo real
                            </div>
                            <div class="feature-item">
                                <i class="bi bi-check-circle text-success me-2"></i>
                                Mapas interativos e rotas otimizadas
                            </div>
                            <div class="feature-item">
                                <i class="bi bi-check-circle text-success me-2"></i>
                                Dashboard com métricas avançadas
                            </div>
                        </div>
                        <button class="btn btn-primary mt-3" onclick="playVideoDemo()">
                            <i class="bi bi-play-fill me-2"></i>Assistir Demonstração
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add styles for video modal
    if (!document.getElementById('videoDemoStyles')) {
        const styles = document.createElement('style');
        styles.id = 'videoDemoStyles';
        styles.textContent = `
            .video-demo-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9999;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .video-demo-modal.show {
                opacity: 1;
                visibility: visible;
            }
            
            .video-container {
                max-width: 800px;
                margin: 0 auto;
            }
            
            .video-placeholder {
                background: linear-gradient(135deg, #f8f9fa, #e9ecef);
                border-radius: 15px;
                padding: 3rem 2rem;
                text-align: center;
                border: 2px dashed #dee2e6;
            }
            
            .video-icon i {
                font-size: 4rem;
                color: #2563eb;
                margin-bottom: 1rem;
            }
            
            .video-features {
                text-align: left;
                max-width: 400px;
                margin: 2rem auto;
            }
            
            .feature-item {
                padding: 0.5rem 0;
                border-bottom: 1px solid rgba(0,0,0,0.1);
            }
            
            .feature-item:last-child {
                border-bottom: none;
            }
        `;
        document.head.appendChild(styles);
    }
    
    return modal;
}

function playVideoDemo() {
    // Simula o carregamento e reprodução do vídeo
    showNotification('🎬 Vídeo de demonstração iniciado! (Funcionalidade simulada)', 'success', 4000);
}

function closeVideoDemo(button) {
    const modal = button.closest('.video-demo-modal');
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.remove();
    }, 300);
}

// Função para compartilhar projeto
function shareProject() {
    if (navigator.share) {
        navigator.share({
            title: 'DryPath - Sistema de Alerta para Enchentes',
            text: 'Conheça o DryPath, um sistema revolucionário para alertas e evacuação durante enchentes!',
            url: window.location.href,
        }).then(() => {
            showNotification('✅ Projeto compartilhado com sucesso!', 'success', 3000);
        }).catch((error) => {
            console.log('Erro ao compartilhar:', error);
            fallbackShare();
        });
    } else {
        fallbackShare();
    }
}

function fallbackShare() {
    const shareModal = createShareModal();
    document.body.appendChild(shareModal);
    
    setTimeout(() => {
        shareModal.classList.add('show');
    }, 100);
}

function createShareModal() {
    const modal = document.createElement('div');
    modal.className = 'share-modal';
    modal.innerHTML = `
        <div class="modal-backdrop"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">
                    <i class="bi bi-share-fill me-2"></i>
                    Compartilhar DryPath
                </h3>
                <button class="btn-close" onclick="closeShareModal(this)">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>
            <div class="modal-body">
                <p class="text-muted mb-3">Compartilhe o DryPath e ajude a salvar vidas!</p>
                
                <div class="share-options">
                    <button class="share-option" onclick="shareToSocial('facebook')">
                        <i class="bi bi-facebook text-primary"></i>
                        <span>Facebook</span>
                    </button>
                    <button class="share-option" onclick="shareToSocial('twitter')">
                        <i class="bi bi-twitter text-info"></i>
                        <span>Twitter</span>
                    </button>
                    <button class="share-option" onclick="shareToSocial('linkedin')">
                        <i class="bi bi-linkedin text-primary"></i>
                        <span>LinkedIn</span>
                    </button>
                    <button class="share-option" onclick="shareToSocial('whatsapp')">
                        <i class="bi bi-whatsapp text-success"></i>
                        <span>WhatsApp</span>
                    </button>
                </div>
                
                <div class="share-link mt-4">
                    <label class="form-label">Link para compartilhar:</label>
                    <div class="input-group">
                        <input type="text" class="form-control" value="${window.location.href}" readonly id="shareLink">
                        <button class="btn btn-outline-primary" onclick="copyShareLink()">
                            <i class="bi bi-clipboard"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add styles for share modal
    if (!document.getElementById('shareModalStyles')) {
        const styles = document.createElement('style');
        styles.id = 'shareModalStyles';
        styles.textContent = `
            .share-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9999;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .share-modal.show {
                opacity: 1;
                visibility: visible;
            }
            
            .share-options {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                gap: 1rem;
                margin: 1rem 0;
            }
            
            .share-option {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                padding: 1rem;
                border: 1px solid #dee2e6;
                border-radius: 10px;
                background: white;
                transition: all 0.3s ease;
                cursor: pointer;
            }
            
            .share-option:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                border-color: #2563eb;
            }
            
            .share-option i {
                font-size: 1.5rem;
            }
        `;
        document.head.appendChild(styles);
    }
    
    return modal;
}

function shareToSocial(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Conheça o DryPath - Sistema revolucionário de alertas para enchentes!');
    
    const urls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        whatsapp: `https://wa.me/?text=${text} ${url}`
    };
    
    if (urls[platform]) {
        window.open(urls[platform], '_blank', 'width=600,height=400');
        showNotification(`📱 Compartilhando no ${platform}!`, 'info', 3000);
    }
}

function copyShareLink() {
    const linkInput = document.getElementById('shareLink');
    linkInput.select();
    linkInput.setSelectionRange(0, 99999);
    
    try {
        document.execCommand('copy');
        showNotification('📋 Link copiado para a área de transferência!', 'success', 3000);
    } catch (err) {
        showNotification('❌ Erro ao copiar link', 'error', 3000);
    }
}

function closeShareModal(button) {
    const modal = button.closest('.share-modal');
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.remove();
    }, 300);
}

// Função para scroll suave até o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Animação dos contadores na seção CTA
function animateCTACounters() {
    const counters = document.querySelectorAll('#cta-final .counter-value');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Formatação dos números
            let displayValue = Math.floor(current);
            
            if (counter.textContent.includes('%')) {
                counter.textContent = displayValue + '%';
            } else if (counter.textContent.includes('+')) {
                counter.textContent = displayValue + '+';
            } else if (counter.textContent.includes('s')) {
                counter.textContent = displayValue + 's';
            } else {
                counter.textContent = displayValue;
            }
        }, 16);
    });
}

// Função para animar elementos da CTA quando entram na viewport
function initCTAAnimations() {
    const ctaSection = document.getElementById('cta-final');
    if (!ctaSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animar contadores
                setTimeout(() => {
                    animateCTACounters();
                }, 500);
                
                // Animar elementos floating
                const floatingElements = document.querySelectorAll('.floating-element');
                floatingElements.forEach((element, index) => {
                    setTimeout(() => {
                        element.style.opacity = '0.7';
                        element.style.animation = `floatElement 8s ease-in-out infinite`;
                        element.style.animationDelay = `${-index * 1.5}s`;
                    }, index * 200);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(ctaSection);
}

// Função para adicionar efeitos de hover personalizados
function initCTAInteractions() {
    // Efeito hover nos preview cards
    const previewCards = document.querySelectorAll('.preview-card');
    previewCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#2563eb';
            this.style.borderWidth = '2px';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            this.style.borderWidth = '1px';
        });
    });
    
    // Efeito parallax nos elementos floating
    document.addEventListener('mousemove', function(e) {
        const floatingElements = document.querySelectorAll('.floating-element');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            element.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    });
    
    // Efeito de digitação no texto de urgência
    const urgencyElement = document.querySelector('.urgency-message strong');
    if (urgencyElement) {
        setInterval(() => {
            urgencyElement.style.color = urgencyElement.style.color === 'rgb(239, 68, 68)' ? '#f59e0b' : '#ef4444';
        }, 2000);
    }
}

// Event Listeners específicos da home
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa todas as funcionalidades da home
    initStatObserver();
    simulateRealTimeAlerts();
    initProblemCardEffects();
    initFeatureAnimations();
    createWaveEffect();
    initParallaxEffect();
    initMapPreview();
    initEasterEgg();
    
    // Inicializa novas funcionalidades
    initTypingEffect();
    animateHeroStats();
    initHeroParallax();
    animateProblemStats();
    animateProgressBars();
    initTiltEffect();
    createRainEffect();
    
    // Inicializa funcionalidades da seção solução
    initSolutionAnimations();
    simulateRealTimeData();
    initFeatureInteractions();
    
    // Inicializa funcionalidades da seção CTA
    initCTAAnimations();
    initCTAInteractions();
    
    // Adiciona evento ao botão CTA principal
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
            if (targetId) {
                scrollToSection(targetId);
            }
        });
    }
    
    // Adiciona smooth scroll para todos os links internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    console.log('Home page initialized ✅');
});

// Função para cleanup quando sair da página
window.addEventListener('beforeunload', function() {
    // Limpa timers e observers se necessário
    console.log('Home page cleanup');
});
