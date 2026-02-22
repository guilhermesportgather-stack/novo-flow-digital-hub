<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Novo Flow – Estratégias digitais personalizadas para aumentar seu faturamento com previsibilidade. De Curitiba para todo o Brasil.">
  <meta property="og:title" content="Novo Flow – Estratégias Digitais">
  <meta property="og:description" content="Estratégias digitais para uma nova fase no digital.">
  <meta property="og:type" content="website">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Navbar -->
<nav class="nf-navbar">
  <div class="nf-container nf-navbar-inner">
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="nf-logo">
      NOVO <span class="text-gradient">FLOW</span>
    </a>

    <ul class="nf-nav-links">
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#servicos">Serviços</a></li>
      <li><a href="#diferenciais">Diferenciais</a></li>
      <li><a href="#resultados">Resultados</a></li>
      <li><a href="#processo">Processo</a></li>
      <li>
        <a href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer" class="nf-nav-cta">
          Falar com especialista
        </a>
      </li>
    </ul>

    <button class="nf-mobile-toggle" id="nf-mobile-toggle" aria-label="Abrir menu">
      ☰
    </button>
  </div>

  <div class="nf-mobile-menu" id="nf-mobile-menu">
    <a href="#sobre">Sobre</a>
    <a href="#servicos">Serviços</a>
    <a href="#diferenciais">Diferenciais</a>
    <a href="#resultados">Resultados</a>
    <a href="#processo">Processo</a>
    <a href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer" class="nf-btn-primary" style="text-align:center;margin-top:0.5rem;">
      Falar com especialista
    </a>
  </div>
</nav>
