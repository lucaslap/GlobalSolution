// ===== MAIN JAVASCRIPT FILE =====
// Este arquivo contém funcionalidades compartilhadas entre todas as páginas

// Função utilitária para smooth scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Função para atualizar o timestamp
function updateTimestamp() {
    const now = new Date();
    const timestamp = now.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const lastUpdateElement = document.getElementById('lastUpdate');
    if (lastUpdateElement) {
        lastUpdateElement.textContent = timestamp;
    }
}

// Função para mostrar notificações
function showNotification(message, type = 'info', duration = 5000) {
    // Remove notificações existentes
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Cria nova notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Adiciona estilos CSS
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        max-width: 400px;
        animation: slideInNotification 0.3s ease-out;
        font-family: 'Segoe UI', sans-serif;
    `;
    
    // Define cores baseadas no tipo
    const colors = {
        info: { bg: '#3b82f6', text: 'white' },
        success: { bg: '#10b981', text: 'white' },
        warning: { bg: '#f59e0b', text: 'white' },
        error: { bg: '#ef4444', text: 'white' }
    };
    
    const color = colors[type] || colors.info;
    notification.style.backgroundColor = color.bg;
    notification.style.color = color.text;
    
    document.body.appendChild(notification);
    
    // Remove automaticamente após o tempo especificado
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutNotification 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }
    }, duration);
}

// Função para obter ícone da notificação
function getNotificationIcon(type) {
    const icons = {
        info: 'ℹ️',
        success: '✅',
        warning: '⚠️',
        error: '❌'
    };
    return icons[type] || icons.info;
}

// Função para validar e-mail
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função para validar telefone (formato brasileiro)
function validatePhone(phone) {
    const phoneRegex = /^(?:\+55\s?)?\(?[1-9]{2}\)?\s?[0-9]{4,5}-?[0-9]{4}$/;
    return phoneRegex.test(phone);
}

// Função para formatar telefone
function formatPhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
        return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else if (cleaned.length === 11) {
        return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return phone;
}

// Função para gerar ID único
function generateUniqueId() {
    return 'FA' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5).toUpperCase();
}

// Função para salvar dados no localStorage
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Erro ao salvar no localStorage:', error);
        return false;
    }
}

// Função para recuperar dados do localStorage
function getFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Erro ao recuperar do localStorage:', error);
        return null;
    }
}

// Função para simular dados meteorológicos
function generateWeatherData() {
    return {
        precipitation: (Math.random() * 50).toFixed(1),
        riverLevel: (2.5 + Math.random() * 1.5).toFixed(2),
        windSpeed: (Math.random() * 30).toFixed(1),
        temperature: (18 + Math.random() * 12).toFixed(1),
        humidity: (60 + Math.random() * 30).toFixed(0),
        timestamp: new Date().toISOString()
    };
}

// Função para determinar nível de alerta baseado nos dados
function calculateAlertLevel(weatherData) {
    const precipitation = parseFloat(weatherData.precipitation);
    const riverLevel = parseFloat(weatherData.riverLevel);
    
    if (precipitation > 30 || riverLevel > 3.5) {
        return { level: 'red', text: 'Vermelho - Perigo' };
    } else if (precipitation > 15 || riverLevel > 3.0) {
        return { level: 'orange', text: 'Laranja - Cuidado' };
    } else if (precipitation > 5 || riverLevel > 2.8) {
        return { level: 'yellow', text: 'Amarelo - Atenção' };
    } else {
        return { level: 'green', text: 'Verde - Normal' };
    }
}

// Função para controle de navegação mobile
function initMobileNavigation() {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    
    // Adiciona botão hambúrguer se não existir
    if (!document.querySelector('.nav-toggle')) {
        const toggleButton = document.createElement('button');
        toggleButton.className = 'nav-toggle';
        toggleButton.innerHTML = '☰';
        toggleButton.style.cssText = `
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
        `;
        
        navbar.querySelector('.nav-container').appendChild(toggleButton);
        
        // Adiciona funcionalidade do toggle
        toggleButton.addEventListener('click', () => {
            navMenu.classList.toggle('nav-menu-active');
        });
    }
}

// Função para lazy loading de imagens
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Função para adicionar efeitos de scroll
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observa elementos com classe de animação
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
}

// Event Listeners para quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa funcionalidades básicas
    updateTimestamp();
    initMobileNavigation();
    initLazyLoading();
    initScrollEffects();
    initThemeToggle();
    
    // Atualiza timestamp a cada minuto
    setInterval(updateTimestamp, 60000);
    
    // Adiciona efeito de carregamento suave
    document.body.classList.add('loaded');
    
    // Adiciona classe para elementos animados
    const elements = document.querySelectorAll('.card, .problema-card, .tech-card, .stat-card');
    elements.forEach(el => el.classList.add('animate-on-scroll'));
    
    console.log('FloodAlert System Initialized ✅');
});

// Adiciona CSS para animações via JavaScript
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes slideInNotification {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutNotification {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .animate-on-scroll.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: inherit;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: auto;
        opacity: 0.8;
        transition: opacity 0.2s;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
    
    @media (max-width: 768px) {
        .nav-toggle {
            display: block !important;
        }
          .nav-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #0d6efd;
            flex-direction: column;
            padding: 1rem 0;
            display: none;
        }
        
        .nav-menu.nav-menu-active {
            display: flex;
        }
        
        .nav-item {
            width: 100%;
            text-align: center;
        }
        
        .notification {
            left: 10px !important;
            right: 10px !important;
            max-width: none !important;
        }
    }
`;
document.head.appendChild(animationStyles);

// Exporta funções para uso global
window.FloodAlert = {
    scrollToSection,
    showNotification,
    validateEmail,
    validatePhone,
    formatPhone,
    generateUniqueId,
    saveToLocalStorage,
    getFromLocalStorage,
    generateWeatherData,
    calculateAlertLevel
};
