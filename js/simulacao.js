// ===== SIMULAÇÃO PAGE JAVASCRIPT =====
// Funcionalidades específicas da página de simulação

// Estado global da simulação
let simulationState = {
    isRunning: false,
    weatherCondition: 'clear',
    waterLevel: 50,
    alertLevel: 'green',
    evacuatedPeople: 0,
    alerts: [],
    mapZoom: 1
};

// Função para inicializar a simulação
function initSimulation() {
    simulationState.isRunning = true;
    updateSystemStatus();
    startDataSimulation();
    initMapInteraction();
    initFormValidation();
    
    showNotification('Sistema de simulação iniciado com sucesso!', 'success');
}

// Função para atualizar status do sistema
function updateSystemStatus() {
    const systemStatus = document.getElementById('systemStatus');
    const alertLevel = document.getElementById('alertLevel');
    
    if (systemStatus) {
        systemStatus.textContent = simulationState.isRunning ? 'Ativo' : 'Inativo';
        systemStatus.style.color = simulationState.isRunning ? '#10b981' : '#ef4444';
    }
    
    if (alertLevel) {
        const alertInfo = getAlertInfo(simulationState.alertLevel);
        alertLevel.textContent = alertInfo.text;
        alertLevel.style.color = alertInfo.color;
    }
}

// Função para obter informações do alerta
function getAlertInfo(level) {
    const alertTypes = {
        green: { text: 'Verde - Normal', color: '#10b981' },
        yellow: { text: 'Amarelo - Atenção', color: '#f59e0b' },
        orange: { text: 'Laranja - Cuidado', color: '#ea580c' },
        red: { text: 'Vermelho - Perigo', color: '#ef4444' }
    };
    return alertTypes[level] || alertTypes.green;
}

// Função para simular dados em tempo real
function startDataSimulation() {
    updateWeatherData();
    
    // Atualiza dados a cada 3 segundos
    setInterval(() => {
        if (simulationState.isRunning) {
            updateWeatherData();
            checkAlertConditions();
        }
    }, 3000);
}

// Função para atualizar dados meteorológicos
function updateWeatherData() {
    const weatherData = generateWeatherData();
    
    // Ajusta dados baseado na condição meteorológica selecionada
    const condition = simulationState.weatherCondition;
    if (condition === 'heavy-rain') {
        weatherData.precipitation = (30 + Math.random() * 20).toFixed(1);
    } else if (condition === 'storm') {
        weatherData.precipitation = (50 + Math.random() * 30).toFixed(1);
        weatherData.windSpeed = (40 + Math.random() * 20).toFixed(1);
    } else if (condition === 'light-rain') {
        weatherData.precipitation = (5 + Math.random() * 10).toFixed(1);
    }
    
    // Atualiza interface
    updateDataDisplay(weatherData);
    updateCharts(weatherData);
}

// Função para atualizar exibição dos dados
function updateDataDisplay(data) {
    const elements = {
        precipitation: document.getElementById('precipitation'),
        riverLevel: document.getElementById('riverLevel'),
        windSpeed: document.getElementById('windSpeed'),
        evacuated: document.getElementById('evacuated')
    };
    
    if (elements.precipitation) elements.precipitation.textContent = data.precipitation;
    if (elements.riverLevel) elements.riverLevel.textContent = data.riverLevel;
    if (elements.windSpeed) elements.windSpeed.textContent = data.windSpeed;
    if (elements.evacuated) elements.evacuated.textContent = simulationState.evacuatedPeople;
}

// Função para atualizar gráficos simulados
function updateCharts(data) {
    const charts = document.querySelectorAll('.data-chart');
    charts.forEach(chart => {
        const height = Math.min(90, (parseFloat(data.precipitation) / 50) * 100);
        const before = chart.querySelector('::before') || chart;
        if (before.style) {
            before.style.setProperty('--chart-height', `${height}%`);
        }
    });
}

// Função para verificar condições de alerta
function checkAlertConditions() {
    const precipitation = parseFloat(document.getElementById('precipitation')?.textContent || 0);
    const riverLevel = parseFloat(document.getElementById('riverLevel')?.textContent || 0);
    const waterLevel = simulationState.waterLevel;
    
    let newAlertLevel = 'green';
    
    if (precipitation > 40 || riverLevel > 3.8 || waterLevel > 250) {
        newAlertLevel = 'red';
    } else if (precipitation > 25 || riverLevel > 3.2 || waterLevel > 180) {
        newAlertLevel = 'orange';
    } else if (precipitation > 10 || riverLevel > 2.9 || waterLevel > 120) {
        newAlertLevel = 'yellow';
    }
    
    if (newAlertLevel !== simulationState.alertLevel) {
        simulationState.alertLevel = newAlertLevel;
        updateSystemStatus();
        addAlert(getAlertMessage(newAlertLevel), newAlertLevel);
        
        if (newAlertLevel === 'red') {
            triggerEvacuation();
        }
    }
}

// Função para obter mensagem de alerta
function getAlertMessage(level) {
    const messages = {
        green: 'Condições normais restabelecidas',
        yellow: 'Atenção: condições meteorológicas em observação',
        orange: 'Cuidado: risco elevado de enchente',
        red: 'PERIGO: evacuação imediata recomendada!'
    };
    return messages[level];
}

// Função para adicionar alerta à lista
function addAlert(message, type = 'info') {
    const alertsContainer = document.getElementById('alertsContainer');
    if (!alertsContainer) return;
    
    const now = new Date();
    const time = now.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    const alertElement = document.createElement('div');
    alertElement.className = `alert-item ${type === 'red' ? 'danger' : type === 'orange' || type === 'yellow' ? 'warning' : 'info'}`;
    alertElement.innerHTML = `
        <span class="alert-time">${time}</span>
        <span class="alert-message">${message}</span>
    `;
    
    // Adiciona no topo da lista
    alertsContainer.insertBefore(alertElement, alertsContainer.firstChild);
    
    // Remove alertas antigos (mantém máximo 10)
    const alerts = alertsContainer.querySelectorAll('.alert-item');
    if (alerts.length > 10) {
        alerts[alerts.length - 1].remove();
    }
    
    // Salva no estado
    simulationState.alerts.unshift({
        time,
        message,
        type,
        timestamp: now.toISOString()
    });
}

// Função para disparar evacuação
function triggerEvacuation() {
    showNotification('🚨 ALERTA VERMELHO: Evacuação em andamento!', 'error', 10000);
    showEvacuationRoutes();
    
    // Simula evacuação de pessoas
    const evacuationTimer = setInterval(() => {
        simulationState.evacuatedPeople += Math.floor(Math.random() * 15) + 5;
        updateDataDisplay({ evacuation: simulationState.evacuatedPeople });
        
        if (simulationState.evacuatedPeople > 200) {
            clearInterval(evacuationTimer);
            addAlert(`Evacuação concluída: ${simulationState.evacuatedPeople} pessoas em segurança`, 'info');
        }
    }, 2000);
}

// Função para mostrar rotas de evacuação
function showEvacuationRoutes() {
    const routes = document.querySelectorAll('.evacuation-route');
    routes.forEach((route, index) => {
        setTimeout(() => {
            route.style.display = 'block';
            route.style.animation = 'routeAppear 1s ease-out';
        }, index * 300);
    });
    
    addAlert('Rotas de evacuação ativadas no mapa', 'warning');
}

// Função para ocultar rotas de evacuação
function hideEvacuationRoutes() {
    const routes = document.querySelectorAll('.evacuation-route');
    routes.forEach(route => {
        route.style.display = 'none';
    });
    
    addAlert('Rotas de evacuação desativadas', 'info');
}

// Função para inicializar interação com o mapa
function initMapInteraction() {
    const map = document.getElementById('interactiveMap');
    const riskAreas = document.querySelectorAll('.risk-area');
    const pois = document.querySelectorAll('.poi');
    
    // Adiciona eventos de clique nas áreas de risco
    riskAreas.forEach(area => {
        area.addEventListener('click', function() {
            const riskLevel = this.getAttribute('data-risk');
            const areaName = this.querySelector('.area-label').textContent;
            
            showNotification(`Área selecionada: ${areaName} (Risco ${riskLevel})`, 'info');
            addAlert(`Usuário consultou informações da área: ${areaName}`, 'info');
            
            // Destaca a área temporariamente
            this.style.transform = 'scale(1.1)';
            this.style.zIndex = '20';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.zIndex = 'auto';
            }, 1500);
        });
    });
    
    // Adiciona tooltips aos pontos de interesse
    pois.forEach(poi => {
        poi.addEventListener('mouseenter', function() {
            const title = this.getAttribute('title');
            showTooltip(this, title);
        });
        
        poi.addEventListener('mouseleave', function() {
            hideTooltip();
        });
    });
    
    // Controles do mapa
    const showRoutesBtn = document.getElementById('showRoutes');
    const hideRoutesBtn = document.getElementById('hideRoutes');
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    
    if (showRoutesBtn) showRoutesBtn.addEventListener('click', showEvacuationRoutes);
    if (hideRoutesBtn) hideRoutesBtn.addEventListener('click', hideEvacuationRoutes);
    if (zoomInBtn) zoomInBtn.addEventListener('click', () => zoomMap(1.2));
    if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => zoomMap(0.8));
}

// Função para controlar zoom do mapa
function zoomMap(factor) {
    simulationState.mapZoom *= factor;
    simulationState.mapZoom = Math.max(0.5, Math.min(3, simulationState.mapZoom));
    
    const map = document.getElementById('interactiveMap');
    if (map) {
        map.style.transform = `scale(${simulationState.mapZoom})`;
        map.style.transformOrigin = 'center center';
    }
    
    addAlert(`Zoom do mapa: ${Math.round(simulationState.mapZoom * 100)}%`, 'info');
}

// Função para mostrar tooltip
function showTooltip(element, text) {
    hideTooltip(); // Remove tooltip existente
    
    const tooltip = document.createElement('div');
    tooltip.className = 'map-tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 1000;
        pointer-events: none;
        white-space: nowrap;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 5) + 'px';
}

// Função para ocultar tooltip
function hideTooltip() {
    const tooltip = document.querySelector('.map-tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// Função para validação do formulário
function initFormValidation() {
    const form = document.getElementById('alertForm');
    if (!form) return;
    
    const fields = {
        userName: { required: true, minLength: 2 },
        userEmail: { required: true, email: true },
        userPhone: { required: true, phone: true },
        userAddress: { required: true, minLength: 5 },
        alertType: { required: true },
        riskLevel: { required: true },
        dataConsent: { required: true, checkbox: true }
    };
    
    // Adiciona validação em tempo real
    Object.keys(fields).forEach(fieldName => {
        const field = document.getElementById(fieldName);
        const errorElement = document.getElementById(fieldName + 'Error');
        
        if (field && errorElement) {
            field.addEventListener('blur', () => validateField(field, fields[fieldName], errorElement));
            field.addEventListener('input', () => clearFieldError(errorElement));
        }
    });
    
    // Formatação automática do telefone
    const phoneField = document.getElementById('userPhone');
    if (phoneField) {
        phoneField.addEventListener('input', function() {
            this.value = formatPhone(this.value);
        });
    }
    
    // Submissão do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm(fields)) {
            processFormSubmission();
        }
    });
}

// Função para validar campo individual
function validateField(field, rules, errorElement) {
    const value = field.value.trim();
    let error = '';
    
    if (rules.required && !value) {
        error = 'Este campo é obrigatório';
    } else if (rules.checkbox && !field.checked) {
        error = 'Você deve aceitar este termo';
    } else if (rules.minLength && value.length < rules.minLength) {
        error = `Mínimo de ${rules.minLength} caracteres`;
    } else if (rules.email && !validateEmail(value)) {
        error = 'E-mail inválido';
    } else if (rules.phone && !validatePhone(value)) {
        error = 'Telefone inválido';
    }
    
    errorElement.textContent = error;
    field.classList.toggle('error', !!error);
    
    return !error;
}

// Função para limpar erro do campo
function clearFieldError(errorElement) {
    errorElement.textContent = '';
}

// Função para validar formulário completo
function validateForm(fields) {
    let isValid = true;
    
    Object.keys(fields).forEach(fieldName => {
        const field = document.getElementById(fieldName);
        const errorElement = document.getElementById(fieldName + 'Error');
        
        if (field && errorElement) {
            if (!validateField(field, fields[fieldName], errorElement)) {
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// Função para processar submissão do formulário
function processFormSubmission() {
    const formData = new FormData(document.getElementById('alertForm'));
    const userData = Object.fromEntries(formData);
    
    // Gera ID único para o cadastro
    const cadastroId = generateUniqueId();
    userData.id = cadastroId;
    userData.timestamp = new Date().toISOString();
    
    // Salva dados no localStorage
    const savedAlerts = getFromLocalStorage('userAlerts') || [];
    savedAlerts.push(userData);
    saveToLocalStorage('userAlerts', savedAlerts);
    
    // Mostra mensagem de sucesso
    showSuccessMessage(cadastroId);
    
    // Adiciona alerta ao sistema
    addAlert(`Novo cadastro realizado: ${userData.userName}`, 'success');
    
    // Limpa formulário
    document.getElementById('alertForm').reset();
}

// Função para mostrar mensagem de sucesso
function showSuccessMessage(cadastroId) {
    const form = document.getElementById('alertForm');
    const successDiv = document.getElementById('formSuccess');
    const cadastroIdSpan = document.getElementById('cadastroId');
    
    if (form && successDiv && cadastroIdSpan) {
        form.style.display = 'none';
        successDiv.style.display = 'block';
        cadastroIdSpan.textContent = cadastroId;
        
        // Volta ao formulário após 10 segundos
        setTimeout(() => {
            form.style.display = 'block';
            successDiv.style.display = 'none';
        }, 10000);
    }
    
    showNotification('Cadastro realizado com sucesso!', 'success');
}

// Event Listeners específicos da simulação
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa simulação
    initSimulation();
    
    // Controles da simulação
    const weatherSelect = document.getElementById('weatherCondition');
    const waterLevelRange = document.getElementById('waterLevel');
    const waterLevelValue = document.getElementById('waterLevelValue');
    const triggerAlertBtn = document.getElementById('triggerAlert');
    const resetSimulationBtn = document.getElementById('resetSimulation');
    
    // Event listeners para controles
    if (weatherSelect) {
        weatherSelect.addEventListener('change', function() {
            simulationState.weatherCondition = this.value;
            addAlert(`Condição meteorológica alterada para: ${this.options[this.selectedIndex].text}`, 'info');
        });
    }
    
    if (waterLevelRange && waterLevelValue) {
        waterLevelRange.addEventListener('input', function() {
            simulationState.waterLevel = parseInt(this.value);
            waterLevelValue.textContent = `${this.value} cm`;
            
            // Verifica se precisa de alerta
            if (simulationState.waterLevel > 200) {
                addAlert(`Nível da água crítico: ${this.value} cm`, 'warning');
            }
        });
    }
    
    if (triggerAlertBtn) {
        triggerAlertBtn.addEventListener('click', function() {
            simulationState.alertLevel = 'red';
            updateSystemStatus();
            addAlert('ALERTA DE EMERGÊNCIA ATIVADO MANUALMENTE!', 'red');
            triggerEvacuation();
        });
    }
    
    if (resetSimulationBtn) {
        resetSimulationBtn.addEventListener('click', function() {
            resetSimulation();
        });
    }
    
    console.log('Simulation page initialized ✅');
});

// Função para resetar simulação
function resetSimulation() {
    simulationState = {
        isRunning: true,
        weatherCondition: 'clear',
        waterLevel: 50,
        alertLevel: 'green',
        evacuatedPeople: 0,
        alerts: [],
        mapZoom: 1
    };
    
    // Reset UI elements
    const weatherSelect = document.getElementById('weatherCondition');
    const waterLevelRange = document.getElementById('waterLevel');
    const waterLevelValue = document.getElementById('waterLevelValue');
    const alertsContainer = document.getElementById('alertsContainer');
    
    if (weatherSelect) weatherSelect.value = 'clear';
    if (waterLevelRange) waterLevelRange.value = '50';
    if (waterLevelValue) waterLevelValue.textContent = '50 cm';
    if (alertsContainer) alertsContainer.innerHTML = '<div class="alert-item info"><span class="alert-time">--:--</span><span class="alert-message">Sistema reiniciado</span></div>';
    
    hideEvacuationRoutes();
    updateSystemStatus();
    
    showNotification('Simulação reiniciada com sucesso!', 'success');
}

// CSS adicional para estilos específicos da simulação
const simulationStyles = document.createElement('style');
simulationStyles.textContent = `
    .error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
    }
    
    @keyframes routeAppear {
        from {
            opacity: 0;
            transform: scaleX(0);
        }
        to {
            opacity: 1;
            transform: scaleX(1);
        }
    }
    
    .data-chart::before {
        height: var(--chart-height, 30%);
        transition: height 0.5s ease-in-out;
    }
`;
document.head.appendChild(simulationStyles);
