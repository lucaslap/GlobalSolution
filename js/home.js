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

// Função para criar efeito de ondas na hero section
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
    
    // Adiciona estilos para as ondas
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

// Função para animar estatísticas da seção problema
function animateProblemStats() {
    const problemStats = document.querySelectorAll('.stat-number-problem');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                
                const finalText = entry.target.textContent;
                const target = parseFloat(entry.target.dataset.target || entry.target.textContent.replace(/[^\d]/g, ''));
                const suffix = entry.target.dataset.suffix || '';
                
                if (finalText.includes('M+')) {
                    animateCounter(entry.target, 0, target, 'M+');
                } else if (finalText.includes('min')) {
                    animateCounter(entry.target, 0, target, 'min');
                } else if (finalText.includes('%')) {
                    animateCounter(entry.target, 0, target, '%');
                } else {
                    animateCounter(entry.target, 0, target, suffix, 2000, 1);
                }
            }
        });
    }, { threshold: 0.5 });
    
    problemStats.forEach(stat => observer.observe(stat));
}

function animateCounter(element, start, end, suffix = '', duration = 2000, decimals = 1) {
    let startTime = null;

    function update(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = currentTime - startTime;
        const percent = Math.min(progress / duration, 1);
        const current = start + (end - start) * percent;

        // Formata com casas decimais se necessário
        element.textContent = (suffix === 'Bi' || suffix === 'M+' || suffix === 'min' || suffix === '%')
            ? current.toFixed(decimals) + suffix
            : Math.floor(current) + suffix;

        if (percent < 1) {
            requestAnimationFrame(update);
        } else {
            // Garante o valor final exato
            element.textContent = (suffix === 'Bi' || suffix === 'M+' || suffix === 'min' || suffix === '%')
                ? end.toFixed(decimals) + suffix
                : Math.floor(end) + suffix;
        }
    }

    requestAnimationFrame(update);
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

// Função para mostrar notificações dos cards de problemas
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

// Função para animações da seção solução
function initSolutionAnimations() {
    const solutionCards = document.querySelectorAll('.enhanced-feature');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.3 });
    
    solutionCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Função para interações das features
function initFeatureInteractions() {
    const features = document.querySelectorAll('.enhanced-feature');
    
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon-container i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
            }
        });
        
        feature.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon-container i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
        
        feature.addEventListener('click', function() {
            const featureName = this.querySelector('h4')?.textContent || 'Feature';
            showNotification(`📊 Explorando: ${featureName}`, 'info', 3000);
        });
    });
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
}

// Função para cleanup quando sair da página
window.addEventListener('beforeunload', function() {
    // Limpa timers e observers se necessário
    console.log('Home page cleanup');
});

// Mapa interativo de áreas de risco
let dryPathMap = null;
let riskMarkers = [];
let evacuationRoutes = [];

function toggleMapLegend() {
    const legend = document.getElementById('mapLegend');
    const toggleBtn = document.getElementById('legendToggle');
    const dryPathMap = document.getElementById('drypath-map');

    
    if (legend && toggleBtn) {
        legend.classList.toggle('show');
        
        if (legend.classList.contains('show')) {
            toggleBtn.innerHTML = '<i class="bi bi-x-lg"></i>';
            toggleBtn.title = 'Ocultar Legenda';
        } else {
            toggleBtn.innerHTML = '<i class="bi bi-list-ul"></i>';
            toggleBtn.title = 'Mostrar Legenda';
        }
    }
}

// Função para filtrar marcadores por tipo de risco
function filterMarkersByRisk(riskLevel) {
    if (!dryPathMap) return;
    
    // Remover highlight de todos os itens da legenda
    const legendItems = document.querySelectorAll('.legend-item');
    legendItems.forEach(item => item.classList.remove('active'));
    
    // Destacar item selecionado
    const selectedItem = document.querySelector(`[data-risk="${riskLevel}"]`);
    if (selectedItem) {
        selectedItem.classList.add('active');
    }
}

// Função para atualizar contadores da legenda
function updateLegendCounts() {
    // Simular contagens (em implementação real, viria dos dados)
    const counts = {
        high: 3,
        medium: 2,
        low: 1,
        route: 3,
    };
    
    // Atualizar elementos
    const elements = {
        highRiskCount: document.getElementById('highRiskCount'),
        mediumRiskCount: document.getElementById('mediumRiskCount'),
        lowRiskCount: document.getElementById('lowRiskCount'),
        routeCount: document.getElementById('routeCount')
    };
    
    if (elements.highRiskCount) elements.highRiskCount.textContent = counts.high;
    if (elements.mediumRiskCount) elements.mediumRiskCount.textContent = counts.medium;
    if (elements.lowRiskCount) elements.lowRiskCount.textContent = counts.low;
    if (elements.routeCount) elements.routeCount.textContent = counts.route;
}

// Função melhorada de inicialização do mapa
function initializeMap() {
    // Verificar se o container do mapa existe
    const mapContainer = document.getElementById('drypath-map');
    if (!mapContainer) {
        console.error('Container do mapa não encontrado');
        return;
    }

    // Remover loading state imediatamente
    const loadingElement = mapContainer.querySelector('.map-loading');
    if (loadingElement) {
        loadingElement.remove();
    }

    try {
        // Coordenadas de São Paulo
        const saoPauloCoords = [-23.5505, -46.6333];
        
        // Inicializar o mapa com altura ajustada
        dryPathMap = L.map('drypath-map', {
            zoomControl: false,
            attributionControl: false,
            scrollWheelZoom: true,
            doubleClickZoom: true,
            touchZoom: true
        }).setView(saoPauloCoords, 12);

        // Adicionar camada do mapa (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            minZoom: 10,
            attribution: ''
        }).addTo(dryPathMap);

        // Forçar redimensionamento do mapa com delay maior para a nova altura
        setTimeout(() => {
            if (dryPathMap) {
                dryPathMap.invalidateSize();
                // Ajustar o zoom para melhor visualização no container maior
                dryPathMap.setZoom(11);
            }
        }, 200);

        // Segundo redimensionamento para garantir
        setTimeout(() => {
            if (dryPathMap) {
                dryPathMap.invalidateSize();
            }
        }, 500);

        // Áreas de risco em São Paulo com mais detalhes
        const riskAreas = [
            {
                coords: [-23.5329, -46.6395], // Vila Madalena
                risk: 'high',
                name: 'Vila Madalena',
                description: 'Alto risco de alagamento',
                details: 'Córrego canalizado com histórico de transbordamento'
            },
            {
                coords: [-23.5475, -46.6361], // Centro
                risk: 'medium', 
                name: 'Centro Histórico',
                description: 'Risco moderado',
                details: 'Drenagem urbana sobrecarregada em chuvas intensas'
            },
            {
                coords: [-23.5641, -46.6527], // Jardins
                risk: 'low',
                name: 'Jardins', 
                description: 'Baixo risco',
                details: 'Área elevada com boa drenagem'
            },
            {
                coords: [-23.5225, -46.6911], // Lapa
                risk: 'high',
                name: 'Lapa',
                description: 'Alto risco - Rio Tietê',
                details: 'Proximidade com Rio Tietê e várzeas'
            },
            {
                coords: [-23.5955, -46.6818], // Brooklin
                risk: 'medium',
                name: 'Brooklin',
                description: 'Risco moderado',
                details: 'Córregos urbanos com potencial de alagamento'
            },
            {
                coords: [-23.5200, -46.5960], // Tatuapé
                risk: 'high',
                name: 'Tatuapé',
                description: 'Alto risco',
                details: 'Várzea do Rio Tietê - área de inundação histórica'
            }
        ];

        // Adicionar marcadores de risco com animação
        riskAreas.forEach((area, index) => {
            setTimeout(() => {
                const color = getRiskColor(area.risk);
                const icon = createCustomIcon(color, area.risk);
                
                const marker = L.marker(area.coords, { icon })
                    .addTo(dryPathMap)
                    .bindPopup(`
                        <div class="risk-popup p-3">
                            <h6 class="fw-bold mb-2 text-center">${area.name}</h6>
                            <div class="risk-level mb-2 text-center">
                                <span class="badge bg-${area.risk === 'high' ? 'danger' : area.risk === 'medium' ? 'warning text-dark' : 'success'} px-3 py-1">
                                    ${area.risk === 'high' ? 'Alto Risco' : area.risk === 'medium' ? 'Médio Risco' : 'Baixo Risco'}
                                </span>
                            </div>
                            <p class="small mb-2 text-muted">${area.description}</p>
                            <p class="small mb-3 text-info">${area.details}</p>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary btn-sm" onclick="showAreaDetails('${area.name}')">
                                    <i class="bi bi-info-circle me-1"></i>Mais Info
                                </button>
                            </div>
                        </div>
                    `, {
                        maxWidth: 280,
                        className: 'custom-popup'
                    });
                
                riskMarkers.push(marker);
                
                // Adicionar círculo de área de influência
                const circle = L.circle(area.coords, {
                    color: color,
                    fillColor: color,
                    fillOpacity: 0.1,
                    radius: area.risk === 'high' ? 1000 : area.risk === 'medium' ? 700 : 500,
                    weight: 2,
                    opacity: 0.6
                }).addTo(dryPathMap);
                
                riskMarkers.push(circle);
            }, index * 200);
        });

        // Adicionar rotas de evacuação
        setTimeout(() => addEvacuationRoutes(), 800);
        
        // Animar marcadores
        animateRiskMarkers();

        // Adicionar controles customizados
        addCustomControls();

        // Adicionar event listeners para a legenda
        setTimeout(() => {
            const legendItems = document.querySelectorAll('.legend-item');
            legendItems.forEach(item => {
                item.addEventListener('click', () => {
                    const riskLevel = item.getAttribute('data-risk');
                    filterMarkersByRisk(riskLevel);
                });
            });
            
            // Atualizar contadores iniciais
            updateLegendCounts();
            
            // Atualizar contadores a cada 30 segundos
            setInterval(updateLegendCounts, 30000);
        }, 1000);

        console.log('Mapa inicializado com sucesso');
    } catch (error) {
        console.error('Erro ao inicializar o mapa:', error);
        showMapError();
    }
}

function getRiskColor(riskLevel) {
    switch(riskLevel) {
        case 'high': return '#dc3545';
        case 'medium': return '#fd7e14';
        case 'low': return '#198754';
        default: return '#6c757d';
    }
}

function createCustomIcon(color, riskLevel) {
    const pulseClass = riskLevel === 'high' ? 'pulse-high' : riskLevel === 'medium' ? 'pulse-medium' : 'pulse-low';
    
    const iconHtml = `
        <div class="custom-marker ${pulseClass}" style="
            background-color: ${color}; 
            width: 24px; 
            height: 24px; 
            border-radius: 50%; 
            border: 3px solid white;
            box-shadow: 0 3px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        ">
            <i class="bi bi-exclamation-triangle-fill" style="color: white; font-size: 11px;"></i>
            <div class="marker-pulse" style="
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: ${color};
                opacity: 0.4;
                animation: markerPulse 2s infinite;
            "></div>
        </div>
    `;
    
    return L.divIcon({
        html: iconHtml,
        className: 'custom-risk-icon',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });
}

function addEvacuationRoutes() {
    // Rota de evacuação 1 (Centro para Zona Sul)
    const route1 = [
        [-23.5475, -46.6361], // Centro
        [-23.5600, -46.6400], // Ponto intermediário
        [-23.5641, -46.6527], // Jardins
        [-23.5955, -46.6818]  // Brooklin
    ];
    
    // Rota de evacuação 2 (Vila Madalena para Zona Oeste)
    const route2 = [
        [-23.5329, -46.6395], // Vila Madalena
        [-23.5280, -46.6600], // Ponto intermediário
        [-23.5225, -46.6911], // Lapa
        [-23.5180, -46.7200]  // Zona Oeste
    ];

    // Rota de evacuação 3 (Tatuapé para Centro)
    const route3 = [
        [-23.5200, -46.5960], // Tatuapé
        [-23.5350, -46.6100], // Ponto intermediário
        [-23.5475, -46.6361]  // Centro
    ];

    const routeStyle = {
        color: '#007bff',
        weight: 4,
        opacity: 0.8,
        dashArray: '10, 8',
        lineCap: 'round'
    };

    const evacRoute1 = L.polyline(route1, {...routeStyle, color: '#007bff'})
        .addTo(dryPathMap)
        .bindPopup(`
            <div class="route-popup text-center p-2">
                <h6 class="fw-bold mb-2">🚨 Rota de Evacuação 1</h6>
                <p class="small mb-2">Centro → Zona Sul</p>
                <div class="route-info">
                    <span class="badge bg-info me-1">4.2 km</span>
                    <span class="badge bg-success">15 min</span>
                </div>
            </div>
        `);
        
    const evacRoute2 = L.polyline(route2, {...routeStyle, color: '#28a745'})
        .addTo(dryPathMap)
        .bindPopup(`
            <div class="route-popup text-center p-2">
                <h6 class="fw-bold mb-2">🚨 Rota de Evacuação 2</h6>
                <p class="small mb-2">Vila Madalena → Zona Oeste</p>
                <div class="route-info">
                    <span class="badge bg-info me-1">5.8 km</span>
                    <span class="badge bg-success">18 min</span>
                </div>
            </div>
        `);

    const evacRoute3 = L.polyline(route3, {...routeStyle, color: '#ffc107'})
        .addTo(dryPathMap)
        .bindPopup(`
            <div class="route-popup text-center p-2">
                <h6 class="fw-bold mb-2">🚨 Rota de Evacuação 3</h6>
                <p class="small mb-2">Tatuapé → Centro</p>
                <div class="route-info">
                    <span class="badge bg-info me-1">3.1 km</span>
                    <span class="badge bg-success">12 min</span>
                </div>
            </div>
        `);

    evacuationRoutes.push(evacRoute1, evacRoute2, evacRoute3);
}

function addCustomControls() {
    // Controle de zoom customizado
    const zoomControl = L.control.zoom({
        position: 'topright'
    }).addTo(dryPathMap);

    // Adicionar botão de reset view
    const resetButton = L.control({position: 'topright'});
    resetButton.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
        div.innerHTML = '<button title="Reset View" style="background: white; border: none; width: 30px; height: 30px; cursor: pointer;"><i class="bi bi-house"></i></button>';
        div.onclick = function(){
            map.setView([-23.5505, -46.6333], 12);
        }
        return div;
    };
    resetButton.addTo(dryPathMap);
}

function animateRiskMarkers() {
    // Adicionar CSS para animações melhoradas
    if (!document.getElementById('map-animations')) {
        const style = document.createElement('style');
        style.id = 'map-animations';
        style.textContent = `
            @keyframes markerPulse {
                0% { transform: scale(1); opacity: 0.4; }
                50% { transform: scale(1.5); opacity: 0.1; }
                100% { transform: scale(2); opacity: 0; }
            }
            
            .pulse-high {
                animation: pulseHigh 1.5s infinite;
            }
            
            .pulse-medium {
                animation: pulseMedium 2s infinite;
            }
            
            .pulse-low {
                animation: pulseLow 3s infinite;
            }
            
            @keyframes pulseHigh {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.2); }
            }
            
            @keyframes pulseMedium {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
            
            @keyframes pulseLow {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
        `;
        document.head.appendChild(style);
    }
}

function showMapError() {
    const mapContainer = document.getElementById('drypath-map');
    if (mapContainer) {
        mapContainer.innerHTML = `
            <div class="d-flex align-items-center justify-content-center h-100 text-center p-4">
                <div>
                    <i class="bi bi-exclamation-triangle text-warning fs-1 mb-3"></i>
                    <h6 class="text-dark mb-2">Erro ao carregar o mapa</h6>
                    <p class="text-muted small mb-3">Verifique sua conexão com a internet</p>
                    <button class="btn btn-primary btn-sm" onclick="initializeMap()">
                        <i class="bi bi-arrow-clockwise me-1"></i>Tentar Novamente
                    </button>
                </div>
            </div>
        `;
    }
}

// Funções de controle do mapa
function zoomIn() {
    if (dryPathMap) {
        dryPathMap.zoomIn();
    }
}

function toggleLayers() {
    evacuationRoutes.forEach(route => {
        if (dryPathMap.hasLayer(route)) {
            dryPathMap.removeLayer(route);
        } else {
            dryPathMap.addLayer(route);
        }
    });
}

function showAreaDetails(areaName) {
    alert(`Informações detalhadas sobre ${areaName} estarão disponíveis na versão completa do sistema.`);
}

// Inicializar o mapa quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, inicializando componentes...');
    
    // Verificar se o Leaflet está disponível e inicializar imediatamente
    if (typeof L !== 'undefined') {
        const mapContainer = document.getElementById('drypath-map');
        if (mapContainer) {
            console.log('Container do mapa encontrado, inicializando...');
            initializeMap();
        } else {
            console.log('Container do mapa não encontrado');
        }
    } else {
        console.error('Leaflet não foi carregado');
        // Tentar carregar novamente após um delay
        setTimeout(() => {
            if (typeof L !== 'undefined') {
                const mapContainer = document.getElementById('drypath-map');
                if (mapContainer) {
                    initializeMap();
                }
            } else {
                showMapError();
            }
        }, 2000);
    }

    // Inicializa todas as funcionalidades da home
    initProblemCardEffects();
    createWaveEffect();
    initMapPreview();
    initTypingEffect();
    animateProblemStats();
    animateProgressBars();
    initSolutionAnimations();
    initFeatureInteractions();
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

// Verificar quando o Leaflet carrega
window.addEventListener('load', function() {
    if (typeof L === 'undefined') {
        console.error('Leaflet não foi carregado corretamente');
        showMapError();
    } else {
        console.log('Leaflet carregado com sucesso');
        
        // Se o mapa ainda não foi inicializado, tentar agora
        if (!dryPathMap) {
            const mapContainer = document.getElementById('drypath-map');
            if (mapContainer && !mapContainer.querySelector('.leaflet-container')) {
                initializeMap();
            }
        }
    }
});