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

// Função para criar efeito de ondas no hero
function createWaveEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const waves = document.createElement('div');
    waves.className = 'hero-waves';
    waves.innerHTML = `
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
    `;
    
    hero.appendChild(waves);
    
    // Adiciona estilos para as ondas
    const waveStyles = document.createElement('style');
    waveStyles.textContent = `
        .hero-waves {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100px;
            overflow: hidden;
            z-index: 1;
        }
        
        .wave {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 200%;
            height: 100%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="rgba(255,255,255,0.1)"/></svg>') repeat-x;
            animation: waveMove 15s linear infinite;
        }
        
        .wave1 {
            animation-duration: 15s;
            opacity: 0.4;
        }
        
        .wave2 {
            animation-duration: 10s;
            opacity: 0.3;
            animation-direction: reverse;
        }
        
        .wave3 {
            animation-duration: 20s;
            opacity: 0.2;
        }
        
        @keyframes waveMove {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
    `;
    
    document.head.appendChild(waveStyles);
}

// Função para implementar scroll parallax suave
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        hero.style.transform = `translateY(${rate}px)`;
    });
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

// Event Listeners específicos da home page
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
