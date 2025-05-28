# IMAGENS NECESSÁRIAS PARA O PROJETO FLOODALERT

## 📁 Estrutura de Imagens Recomendada

### 🏠 Página Inicial (index.html)
- `hero-bg.jpg` (1920x1080) - Imagem de fundo do hero section
- `flood-problem.jpg` (800x600) - Ilustração do problema das enchentes
- `technology-solution.jpg` (800x600) - Tecnologia e inovação
- `community-safety.jpg` (800x600) - Segurança comunitária
- `testimonial-1.jpg` (150x150) - Foto de depoimento 1
- `testimonial-2.jpg` (150x150) - Foto de depoimento 2
- `testimonial-3.jpg` (150x150) - Foto de depoimento 3

### 🗺️ Página de Simulação (simulacao.html)
- `map-background.jpg` (1200x800) - Fundo do mapa da cidade
- `weather-icon-rain.svg` - Ícone de chuva
- `weather-icon-cloud.svg` - Ícone de nuvem
- `weather-icon-sun.svg` - Ícone de sol
- `alert-icon-green.svg` - Ícone de alerta verde
- `alert-icon-yellow.svg` - Ícone de alerta amarelo
- `alert-icon-red.svg` - Ícone de alerta vermelho
- `evacuation-route.svg` - Ícone de rota de evacuação
- `shelter-icon.svg` - Ícone de abrigo
- `hospital-icon.svg` - Ícone de hospital

### ℹ️ Página Sobre (sobre.html)
- `team-photo.jpg` (800x400) - Foto da equipe (opcional)
- `project-timeline.svg` - Ilustração da timeline
- `safety-tips-bg.jpg` (1200x600) - Fundo para dicas de segurança
- `emergency-kit.jpg` (600x400) - Kit de emergência
- `fiap-logo.png` (200x100) - Logo da FIAP

### 🎨 Ícones e Elementos Visuais
- `logo-floodalert.svg` - Logo principal do FloodAlert
- `favicon.ico` - Favicon do site
- `loading-spinner.svg` - Spinner de carregamento
- `success-icon.svg` - Ícone de sucesso
- `warning-icon.svg` - Ícone de aviso
- `error-icon.svg` - Ícone de erro
- `info-icon.svg` - Ícone de informação

## 🖼️ Especificações Técnicas

### Formatos Recomendados
- **Fotos:** JPG (qualidade 80-90%)
- **Ícones/Ilustrações:** SVG (vetor) ou PNG (transparência)
- **Logo:** SVG (escalabilidade)
- **Favicon:** ICO ou PNG (16x16, 32x32, 48x48)

### Otimização
- Comprimir imagens para web
- Usar WebP quando possível para melhor performance
- Implementar lazy loading para imagens grandes
- Versões responsivas (diferentes tamanhos)

### Acessibilidade
- Todas as imagens devem ter texto alternativo descritivo
- Contraste adequado para ícones sobre fundos
- Não transmitir informação apenas por cor

## 🎨 Paleta de Cores Recomendada

### Cores Principais
- **Azul Primário:** #2563eb (alertas, botões)
- **Verde Sucesso:** #059669 (confirmações, segurança)
- **Amarelo Atenção:** #d97706 (alertas moderados)
- **Vermelho Perigo:** #dc2626 (alertas críticos)
- **Cinza Escuro:** #1f2937 (textos, headers)
- **Cinza Claro:** #f3f4f6 (fundos, cards)

### Cores Secundárias
- **Azul Claro:** #dbeafe
- **Verde Claro:** #d1fae5
- **Amarelo Claro:** #fef3c7
- **Vermelho Claro:** #fee2e2

## 📸 Fontes de Imagens Sugeridas

### Gratuitas
- **Unsplash** (unsplash.com) - Fotos de alta qualidade
- **Pexels** (pexels.com) - Fotos gratuitas variadas
- **Pixabay** (pixabay.com) - Fotos e ilustrações
- **Freepik** (freepik.com) - Vetores e ícones (com atribuição)

### Ícones
- **Heroicons** (heroicons.com) - Ícones SVG modernos
- **Feather Icons** (feathericons.com) - Ícones minimalistas
- **Font Awesome** (fontawesome.com) - Biblioteca de ícones
- **Tabler Icons** (tablericons.com) - Ícones consistentes

### Ilustrações
- **unDraw** (undraw.co) - Ilustrações customizáveis
- **Storyset** (storyset.com) - Ilustrações animadas
- **Illustrations** (illustrations.co) - Ilustrações modernas

## 🛠️ Implementação no Código

### HTML - Estrutura Semântica
```html
<img src="images/hero-bg.jpg" alt="Cidade durante enchente com sistema de alerta ativo" loading="lazy">
<picture>
  <source srcset="images/hero-bg.webp" type="image/webp">
  <source srcset="images/hero-bg.jpg" type="image/jpeg">
  <img src="images/hero-bg.jpg" alt="Descrição acessível">
</picture>
```

### CSS - Otimização e Responsividade
```css
.hero-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 768px) {
  .hero-image {
    content: url('images/hero-bg-mobile.jpg');
  }
}
```

### JavaScript - Lazy Loading
```javascript
const images = document.querySelectorAll('img[loading="lazy"]');
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      imageObserver.unobserve(entry.target);
    }
  });
});

images.forEach(img => imageObserver.observe(img));
```

## 📝 Notas Importantes

1. **Direitos Autorais:** Usar apenas imagens com licença apropriada
2. **Performance:** Otimizar tamanho de arquivo sem perder qualidade
3. **SEO:** Nomes de arquivo descritivos (ex: alerta-enchente-sao-paulo.jpg)
4. **Backup:** Manter cópias originais das imagens
5. **Versionamento:** Organizar por versões se houver mudanças

## ✅ Checklist de Implementação

- [ ] Baixar/criar todas as imagens necessárias
- [ ] Otimizar imagens para web
- [ ] Implementar texto alternativo
- [ ] Testar em diferentes dispositivos
- [ ] Verificar performance de carregamento
- [ ] Validar acessibilidade
- [ ] Implementar lazy loading
- [ ] Criar versões WebP quando possível

---

**Observação:** Este arquivo serve como guia para implementação das imagens. As imagens atuais podem ser placeholders ou obtidas das fontes sugeridas respeitando os direitos autorais.
