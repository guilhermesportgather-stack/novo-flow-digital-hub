<?php
/**
 * Fallback template — redirects to front-page.php for the landing page.
 */
get_header();
?>

<main>
  <div class="nf-container" style="padding:8rem 0;text-align:center;">
    <h1>Página não encontrada</h1>
    <p style="margin-top:1rem;color:var(--nf-muted-fg);">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" style="color:var(--nf-primary);">Voltar ao início</a>
    </p>
  </div>
</main>

<?php get_footer(); ?>
