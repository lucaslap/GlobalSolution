// sobre.js - Funcionalidades da página Sobre
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar funcionalidades da página;
    initScrollAnimations();
    initRoadmapInteractions();
});

function animateMetricCounters() {
    const metrics = document.querySelectorAll('.metric-item h3');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent.replace(/[^0-9]/g, ''));
                animateCounter(target, finalValue);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    metrics.forEach(metric => observer.observe(metric));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 60; // 60 frames para 1 segundo
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Formatação especial para números grandes
        let displayValue = Math.floor(current);
        if (target >= 1000) {
            displayValue = displayValue.toLocaleString() + '+';
        }
        
        element.textContent = displayValue;
    }, 16); // ~60fps
}

function initMilestoneTooltips() {
    const milestones = document.querySelectorAll('.card');
    
    milestones.forEach(milestone => {
        milestone.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        milestone.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Animações de scroll
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animation = entry.target.dataset.animate;
                entry.target.classList.add('animate-' + animation);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Funcionalidades interativas do roadmap
function initRoadmapInteractions() {
    // Animar contadores das métricas
    animateMetricCounters();
    
    // Adicionar tooltips aos marcos
    initMilestoneTooltips();
    
    // Animar barras de progresso dos marcos
    animateMilestoneProgress();
}

// Animar barras de progresso dos marcos
function animateMilestoneProgress() {
    const progressBars = document.querySelectorAll('.milestone-progress .progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.style.width;
                
                // Reset e animar
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 500);
                
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => observer.observe(bar));
}