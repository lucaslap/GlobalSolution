// sobre.js - Funcionalidades da página Sobre
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar funcionalidades da página
    initEmergencyContacts();
    initSafetyTips();
    initKitChecklists();
    initProjectTimeline();
    initContactForm();
    initScrollAnimations();
});

// Sistema de contatos de emergência
function initEmergencyContacts() {
    const emergencyButtons = document.querySelectorAll('.emergency-btn');
    
    emergencyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const service = this.dataset.service;
            const phone = this.dataset.phone;
            
            // Mostrar modal de confirmação
            showEmergencyModal(service, phone);
        });
    });
}

function showEmergencyModal(service, phone) {
    const modal = document.createElement('div');
    modal.className = 'emergency-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Contatar ${service}</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>Você está prestes a contatar:</p>
                <div class="contact-info">
                    <strong>${service}</strong><br>
                    <span class="phone-number">${phone}</span>
                </div>
                <p class="warning">Use apenas em situações de emergência real.</p>
            </div>
            <div class="modal-actions">
                <button class="btn-primary" onclick="window.open('tel:${phone}')">Ligar Agora</button>
                <button class="btn-secondary modal-close">Cancelar</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Fechar modal
    modal.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    });
    
    // Fechar ao clicar fora
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Sistema de dicas de segurança expansíveis
function initSafetyTips() {
    const tipCards = document.querySelectorAll('.tip-card');
    
    tipCards.forEach(card => {
        const header = card.querySelector('.tip-header');
        const content = card.querySelector('.tip-content');
        const icon = card.querySelector('.tip-icon');
        
        if (header && content) {
            header.addEventListener('click', () => {
                const isExpanded = card.classList.contains('expanded');
                
                // Fechar todos os outros cards
                tipCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.classList.remove('expanded');
                    }
                });
                
                // Toggle do card atual
                card.classList.toggle('expanded');
                
                // Animação do ícone
                if (icon) {
                    icon.style.transform = card.classList.contains('expanded') ? 
                        'rotate(180deg)' : 'rotate(0deg)';
                }
                
                // Scroll suave para o card expandido
                if (card.classList.contains('expanded')) {
                    setTimeout(() => {
                        card.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'nearest' 
                        });
                    }, 300);
                }
            });
        }
    });
}

// Sistema de checklist do kit de emergência
function initKitChecklists() {
    const checklistItems = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const progressBars = document.querySelectorAll('.progress-fill');
    
    checklistItems.forEach(checkbox => {
        // Carregar estado salvo
        const savedState = localStorage.getItem(`checklist_${checkbox.id}`);
        if (savedState === 'true') {
            checkbox.checked = true;
            checkbox.parentElement.classList.add('completed');
        }
        
        checkbox.addEventListener('change', function() {
            // Salvar estado
            localStorage.setItem(`checklist_${this.id}`, this.checked);
            
            // Atualizar visual
            if (this.checked) {
                this.parentElement.classList.add('completed');
                showChecklistFeedback('Item adicionado ao seu kit!', 'success');
            } else {
                this.parentElement.classList.remove('completed');
                showChecklistFeedback('Item removido do kit', 'info');
            }
            
            // Atualizar progresso
            updateChecklistProgress();
        });
    });
    
    // Atualizar progresso inicial
    updateChecklistProgress();
}

function updateChecklistProgress() {
    const checklists = document.querySelectorAll('.emergency-kit');
    
    checklists.forEach(checklist => {
        const items = checklist.querySelectorAll('.checklist-item input[type="checkbox"]');
        const checkedItems = checklist.querySelectorAll('.checklist-item input[type="checkbox"]:checked');
        const progressFill = checklist.querySelector('.progress-fill');
        const progressText = checklist.querySelector('.progress-text');
        
        if (items.length > 0 && progressFill) {
            const percentage = (checkedItems.length / items.length) * 100;
            progressFill.style.width = percentage + '%';
            
            if (progressText) {
                progressText.textContent = `${checkedItems.length}/${items.length} itens`;
            }
            
            // Feedback visual baseado no progresso
            progressFill.className = 'progress-fill';
            if (percentage === 100) {
                progressFill.classList.add('complete');
                if (checkedItems.length === items.length) {
                    showChecklistFeedback('🎉 Kit completo! Você está preparado!', 'success');
                }
            } else if (percentage >= 75) {
                progressFill.classList.add('good');
            } else if (percentage >= 50) {
                progressFill.classList.add('moderate');
            }
        }
    });
}

function showChecklistFeedback(message, type = 'info') {
    const feedback = document.createElement('div');
    feedback.className = `checklist-feedback ${type}`;
    feedback.textContent = message;
    
    document.body.appendChild(feedback);
    
    // Mostrar com animação
    setTimeout(() => feedback.classList.add('show'), 100);
    
    // Remover após alguns segundos
    setTimeout(() => {
        feedback.classList.remove('show');
        setTimeout(() => document.body.removeChild(feedback), 300);
    }, 3000);
}

// Timeline do projeto interativa
function initProjectTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Adicionar animação de entrada sequencial
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 200);
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
        
        // Adicionar interatividade ao hover
        item.addEventListener('mouseenter', function() {
            this.classList.add('highlighted');
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('highlighted');
        });
    });
}

// Formulário de contato
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validação
            if (validateContactForm(data)) {
                // Simular envio
                showFormFeedback('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
                this.reset();
            }
        });
        
        // Validação em tempo real
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

function validateContactForm(data) {
    let isValid = true;
    
    // Nome
    if (!data.name || data.name.length < 2) {
        showFieldError('name', 'Nome deve ter pelo menos 2 caracteres');
        isValid = false;
    }
    
    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        showFieldError('email', 'Email inválido');
        isValid = false;
    }
    
    // Assunto
    if (!data.subject || data.subject.length < 3) {
        showFieldError('subject', 'Assunto deve ter pelo menos 3 caracteres');
        isValid = false;
    }
    
    // Mensagem
    if (!data.message || data.message.length < 10) {
        showFieldError('message', 'Mensagem deve ter pelo menos 10 caracteres');
        isValid = false;
    }
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const name = field.name;
    
    clearFieldError(field);
    
    switch (name) {
        case 'name':
            if (value.length < 2) {
                showFieldError(name, 'Nome muito curto');
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value && !emailRegex.test(value)) {
                showFieldError(name, 'Email inválido');
            }
            break;
        case 'subject':
            if (value.length < 3) {
                showFieldError(name, 'Assunto muito curto');
            }
            break;
        case 'message':
            if (value.length < 10) {
                showFieldError(name, 'Mensagem muito curta');
            }
            break;
    }
}

function showFieldError(fieldName, message) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    if (field) {
        field.classList.add('error');
        
        let errorElement = field.parentElement.querySelector('.field-error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            field.parentElement.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }
}

function clearFieldError(field) {
    field.classList.remove('error');
    const errorElement = field.parentElement.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

function showFormFeedback(message, type) {
    const feedback = document.createElement('div');
    feedback.className = `form-feedback ${type}`;
    feedback.innerHTML = `
        <div class="feedback-content">
            <span class="feedback-icon">${type === 'success' ? '✓' : '!'}</span>
            <span class="feedback-message">${message}</span>
        </div>
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => feedback.classList.add('show'), 100);
    
    setTimeout(() => {
        feedback.classList.remove('show');
        setTimeout(() => document.body.removeChild(feedback), 300);
    }, 5000);
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

// Função para resetar todos os checklists
function resetAllChecklists() {
    if (confirm('Tem certeza que deseja resetar todos os checklists? Esta ação não pode ser desfeita.')) {
        const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
        
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            checkbox.parentElement.classList.remove('completed');
            localStorage.removeItem(`checklist_${checkbox.id}`);
        });
        
        updateChecklistProgress();
        showChecklistFeedback('Todos os checklists foram resetados', 'info');
    }
}

// Função para exportar progresso dos checklists
function exportChecklistProgress() {
    const data = {
        date: new Date().toISOString(),
        progress: {}
    };
    
    const checklists = document.querySelectorAll('.emergency-kit');
    checklists.forEach((checklist, index) => {
        const title = checklist.querySelector('h3').textContent;
        const items = checklist.querySelectorAll('.checklist-item');
        
        data.progress[title] = [];
        items.forEach(item => {
            const checkbox = item.querySelector('input[type="checkbox"]');
            const label = item.querySelector('label').textContent;
            data.progress[title].push({
                item: label,
                completed: checkbox.checked
            });
        });
    });
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'floodalert-checklist-progress.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showChecklistFeedback('Progresso exportado com sucesso!', 'success');
}

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.length === konamiSequence.length) {
        if (konamiCode.every((code, index) => code === konamiSequence[index])) {
            activateEasterEgg();
            konamiCode = [];
        }
    }
});

function activateEasterEgg() {
    // Completar automaticamente todos os checklists
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]:not(:checked)');
    
    let delay = 0;
    checkboxes.forEach((checkbox, index) => {
        setTimeout(() => {
            checkbox.checked = true;
            checkbox.parentElement.classList.add('completed');
            localStorage.setItem(`checklist_${checkbox.id}`, 'true');
            
            if (index === checkboxes.length - 1) {
                updateChecklistProgress();
                showChecklistFeedback('🎮 Código Konami ativado! Todos os kits foram completados!', 'success');
            }
        }, delay);
        delay += 100;
    });
}
