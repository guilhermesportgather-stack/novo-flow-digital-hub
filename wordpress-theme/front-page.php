<?php get_header(); ?>

<main>

  <!-- HERO -->
  <section class="nf-hero" id="inicio">
    <div class="nf-hero-glow"></div>
    <div class="nf-container nf-hero-grid">
      <div>
        <h1>
          Seu negócio já percebeu que precisa do digital.
          <span class="text-gradient">Mas ainda não sabe por onde começar.</span>
        </h1>
        <p>A Novo Flow cria estratégias digitais personalizadas para aumentar seu faturamento com previsibilidade.</p>
        <div class="nf-hero-buttons">
          <a href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer" class="nf-btn-primary">Falar com especialista</a>
          <a href="#processo" class="nf-btn-secondary border-gradient">Agendar diagnóstico</a>
        </div>
      </div>
      <div class="nf-hero-image">
        <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/img/hero-dashboard.png' ); ?>" alt="Dashboard digital futurista com gráficos e métricas de marketing">
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="nf-section" id="sobre">
    <div class="nf-container">
      <div class="nf-about-text">
        <span class="nf-section-label">Sobre nós</span>
        <h2 class="nf-section-title">Transformamos negócios através do <span class="text-gradient">digital</span></h2>
        <p>A Novo Flow nasceu com o propósito de ajudar empresas a entrarem em uma nova fase no digital. Oferecemos estratégias personalizadas, combinando tecnologia avançada com atendimento humano, para que cada cliente alcance resultados reais e previsíveis. De Curitiba para todo o Brasil.</p>
      </div>
      <div class="nf-highlights">
        <div class="nf-highlight-card border-gradient">
          <div class="nf-icon-box">🎯</div>
          <span style="font-family:'Montserrat',sans-serif;font-size:0.875rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Estratégia sob medida</span>
        </div>
        <div class="nf-highlight-card border-gradient">
          <div class="nf-icon-box">👥</div>
          <span style="font-family:'Montserrat',sans-serif;font-size:0.875rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Atendimento humanizado</span>
        </div>
        <div class="nf-highlight-card border-gradient">
          <div class="nf-icon-box">📈</div>
          <span style="font-family:'Montserrat',sans-serif;font-size:0.875rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Resultados mensuráveis</span>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="nf-section" id="servicos">
    <div class="nf-container">
      <div style="text-align:center;">
        <span class="nf-section-label">Serviços</span>
        <h2 class="nf-section-title">Soluções completas para o <span class="text-gradient">seu crescimento</span></h2>
      </div>
      <div class="nf-services-grid">
        <?php
        $services = array(
          array( 'icon' => '📊', 'title' => 'Consultoria Comercial', 'desc' => 'Diagnóstico completo e planejamento estratégico para escalar suas vendas.' ),
          array( 'icon' => '📣', 'title' => 'Tráfego Pago', 'desc' => 'Campanhas otimizadas no Google e Meta para gerar leads qualificados.' ),
          array( 'icon' => '🗄️', 'title' => 'CRM', 'desc' => 'Organização e automação do seu funil de vendas com ferramentas inteligentes.' ),
          array( 'icon' => '🌐', 'title' => 'Landing Pages', 'desc' => 'Páginas de alta conversão com design profissional e copywriting estratégico.' ),
          array( 'icon' => '📍', 'title' => 'Google Meu Negócio', 'desc' => 'Otimização da sua presença local para atrair clientes na sua região.' ),
          array( 'icon' => '🎨', 'title' => 'Design', 'desc' => 'Identidade visual e materiais gráficos que transmitem autoridade e profissionalismo.' ),
        );
        foreach ( $services as $s ) : ?>
          <div class="nf-service-card border-gradient">
            <div class="nf-icon-box"><?php echo $s['icon']; ?></div>
            <h3><?php echo esc_html( $s['title'] ); ?></h3>
            <p><?php echo esc_html( $s['desc'] ); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- TARGET CLIENTS -->
  <section class="nf-section-alt" id="publico">
    <div class="nf-container">
      <div style="text-align:center;">
        <span class="nf-section-label">Para quem é</span>
        <h2 class="nf-section-title">Atendemos quem quer <span class="text-gradient">crescer de verdade</span></h2>
      </div>
      <div class="nf-targets-grid">
        <?php
        $targets = array(
          array( 'icon' => '👤', 'title' => 'Autônomos', 'desc' => 'Profissionais que querem construir autoridade e atrair clientes online.' ),
          array( 'icon' => '🏪', 'title' => 'Lojistas', 'desc' => 'Lojas físicas e online que precisam de visibilidade e vendas constantes.' ),
          array( 'icon' => '🔧', 'title' => 'Prestadores de Serviço', 'desc' => 'Profissionais que dependem de indicação e querem escalar.' ),
          array( 'icon' => '🏢', 'title' => 'Empresas', 'desc' => 'Negócios que buscam estruturar sua presença digital com profissionalismo.' ),
        );
        foreach ( $targets as $t ) : ?>
          <div class="nf-target-card">
            <div class="nf-icon-box nf-icon-box-lg"><?php echo $t['icon']; ?></div>
            <h3><?php echo esc_html( $t['title'] ); ?></h3>
            <p><?php echo esc_html( $t['desc'] ); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- DIFFERENTIALS -->
  <section class="nf-section" id="diferenciais">
    <div class="nf-container">
      <div style="text-align:center;">
        <span class="nf-section-label">Diferenciais</span>
        <h2 class="nf-section-title">Por que escolher a <span class="text-gradient">Novo Flow?</span></h2>
      </div>
      <div class="nf-diffs-grid">
        <?php
        $diffs = array(
          array( 'icon' => '🔐', 'title' => 'Estratégia personalizada', 'desc' => 'Cada negócio é único. Criamos planos sob medida para seus objetivos.' ),
          array( 'icon' => '🤝', 'title' => 'Atendimento humano', 'desc' => 'Você fala com pessoas reais que entendem o seu negócio.' ),
          array( 'icon' => '⚙️', 'title' => 'Tecnologia avançada', 'desc' => 'Ferramentas de ponta para automação, análise e otimização.' ),
          array( 'icon' => '📋', 'title' => 'Contrato e entrega garantida', 'desc' => 'Transparência total com prazos e entregas bem definidos.' ),
          array( 'icon' => '🧪', 'title' => 'Metodologia comprovada', 'desc' => 'Processo validado que já ajudou mais de 100 negócios a crescer.' ),
        );
        foreach ( $diffs as $d ) : ?>
          <div class="nf-diff-item">
            <div class="nf-icon-box" style="flex-shrink:0;"><?php echo $d['icon']; ?></div>
            <div>
              <h3><?php echo esc_html( $d['title'] ); ?></h3>
              <p><?php echo esc_html( $d['desc'] ); ?></p>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- RESULTS -->
  <section class="nf-section-alt" id="resultados">
    <div class="nf-container">
      <div style="text-align:center;">
        <span class="nf-section-label">Resultados</span>
        <h2 class="nf-section-title">Números que <span class="text-gradient">falam por nós</span></h2>
      </div>
      <div class="nf-stats-grid">
        <div class="nf-stat">
          <span class="nf-stat-value text-gradient glow-text">+100</span>
          <span class="nf-stat-label">Sites criados</span>
        </div>
        <div class="nf-stat">
          <span class="nf-stat-value text-gradient glow-text">+100</span>
          <span class="nf-stat-label">Negócios otimizados</span>
        </div>
        <div class="nf-stat">
          <span class="nf-stat-value text-gradient glow-text">+50K</span>
          <span class="nf-stat-label">Visualizações no Google</span>
        </div>
      </div>
    </div>
  </section>

  <!-- OBJECTION BREAKER -->
  <section class="nf-section">
    <div class="nf-container">
      <div style="text-align:center;">
        <span class="nf-section-label">Sem preocupações</span>
        <h2 class="nf-section-title">Respondemos suas <span class="text-gradient">maiores dúvidas</span></h2>
      </div>
      <div class="nf-objections-grid">
        <?php
        $objections = array(
          array( 'icon' => '🛡️', 'q' => '"E se for golpe?"', 'a' => 'Trabalhamos com contrato, CNPJ ativo e entregas documentadas. Transparência é a base de tudo.' ),
          array( 'icon' => '💰', 'q' => '"Será que vale o investimento?"', 'a' => 'Cada real investido é rastreado. Mostramos métricas reais para você acompanhar o retorno.' ),
          array( 'icon' => '❓', 'q' => '"Não entendo nada de digital."', 'a' => 'Você não precisa entender. A gente cuida de tudo e explica cada passo de forma simples.' ),
        );
        foreach ( $objections as $o ) : ?>
          <div class="nf-card nf-objection-card border-gradient">
            <div class="nf-icon-box"><?php echo $o['icon']; ?></div>
            <h3><?php echo esc_html( $o['q'] ); ?></h3>
            <p><?php echo esc_html( $o['a'] ); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- PROCESS -->
  <section class="nf-section-alt" id="processo">
    <div class="nf-container">
      <div style="text-align:center;">
        <span class="nf-section-label">Processo</span>
        <h2 class="nf-section-title">Como <span class="text-gradient">funciona</span></h2>
      </div>
      <div class="nf-process-steps">
        <?php
        $steps = array(
          array( 'title' => 'Diagnóstico', 'desc' => 'Analisamos seu negócio, mercado e concorrência.' ),
          array( 'title' => 'Estratégia', 'desc' => 'Criamos um plano personalizado com metas claras.' ),
          array( 'title' => 'Execução', 'desc' => 'Implementamos tudo com agilidade e qualidade.' ),
          array( 'title' => 'Monitoramento', 'desc' => 'Acompanhamos métricas em tempo real.' ),
          array( 'title' => 'Otimização', 'desc' => 'Ajustamos continuamente para maximizar resultados.' ),
        );
        foreach ( $steps as $i => $s ) : ?>
          <div class="nf-step">
            <div class="nf-step-number"><?php echo $i + 1; ?></div>
            <h3><?php echo esc_html( $s['title'] ); ?></h3>
            <p><?php echo esc_html( $s['desc'] ); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="nf-section">
    <div class="nf-container">
      <div style="text-align:center;">
        <span class="nf-section-label">Depoimentos</span>
        <h2 class="nf-section-title">O que nossos clientes <span class="text-gradient">dizem</span></h2>
      </div>
      <div class="nf-testimonials-grid">
        <?php
        $testimonials = array(
          array( 'name' => 'Maria S.', 'role' => 'Lojista', 'text' => 'A Novo Flow transformou minha loja. Hoje tenho clientes novos toda semana!' ),
          array( 'name' => 'Carlos R.', 'role' => 'Autônomo', 'text' => 'Finalmente entendi o digital. Profissionais incríveis e resultados reais.' ),
          array( 'name' => 'Ana P.', 'role' => 'Empresária', 'text' => 'Atendimento humano e tecnologia de ponta. Recomendo para qualquer negócio.' ),
        );
        foreach ( $testimonials as $t ) : ?>
          <div class="nf-testimonial-card border-gradient">
            <div class="nf-stars">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <blockquote>"<?php echo esc_html( $t['text'] ); ?>"</blockquote>
            <div class="nf-author">
              <strong><?php echo esc_html( $t['name'] ); ?></strong>
              <span><?php echo esc_html( $t['role'] ); ?></span>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="nf-section">
    <div class="nf-container">
      <div class="nf-final-cta">
        <div class="nf-final-cta-glow"></div>
        <h2>Entre em uma nova fase no digital <span class="text-gradient">com a Novo Flow.</span></h2>
        <p>Solicite um diagnóstico gratuito e descubra como podemos transformar o seu negócio.</p>
        <div class="nf-final-cta-buttons">
          <a href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer" class="nf-btn-primary">Falar com especialista</a>
          <a href="https://wa.me/5541999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20diagn%C3%B3stico." target="_blank" rel="noopener noreferrer" class="nf-btn-secondary border-gradient">Agendar diagnóstico</a>
        </div>
      </div>
    </div>
  </section>

</main>

<?php get_footer(); ?>
