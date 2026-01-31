<script>
  const links = ['courses', 'AI Track', 'IT Track', 'Contact'];
</script>

<footer class="footer">
  <div class="footer-top">
    <div class="brand">Taleem.Help</div>
    <nav class="nav-links">
      {#each links as link}
        <a href="https://taleem.help" class="footer-link">{link}</a>
      {/each}
    </nav>
  </div>

  <div class="footer-bottom">
    <p>© 2025 Taleem.Help — Education for Every Pakistani</p>
    <p class="credits">Built with ❤️ in Islamabad</p>
  </div>
</footer>
<style>
  .footer {
    /* Tint the footer so it stands apart from page/panels */
    background: color-mix(in oklab, var(--primaryColor) 30%, var(--surfaceColor));
    color: var(--primaryText);
    padding: 2rem;
    font-size: 0.9rem;
  }

  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    /* Subtle, tinted divider */
    border-bottom: 1px solid color-mix(in oklab, var(--primaryColor) 55%, var(--borderColor));
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  .brand {
    font-weight: bold;
    font-size: 1.25rem;
    /* Pop against the tinted bg using the brand/accent token */
    color: var(--accentColor);
  }

  .nav-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .footer-link {
    color: var(--primaryText);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .footer-link:hover {
    color: var(--accentColor);
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 0.85rem;
    opacity: 0.95;
  }

  .credits {
    font-style: italic;
    color: var(--secondaryText);
  }
</style>
