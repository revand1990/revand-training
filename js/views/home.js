export const render = () => `
  <div class="wip-banner">
    <p data-i18n="home.wip">🚧 Website in opbouw — meer informatie volgt snel.</p>
  </div>

  <section class="hero">
    <div class="container hero-inner">
      <img src="Revand logo.png" alt="Revand Physical Training" class="hero-logo" />
      <h1 data-i18n="home.hero.tagline">Vind de Vonk in jezelf</h1>
      <p class="hero-subtitle" data-i18n="home.hero.subtitle"></p>
      <div class="hero-ctas">
        <a href="/services" class="btn btn-primary" data-link data-i18n="home.hero.cta1">Bekijk het aanbod</a>
        <a href="/contact" class="btn btn-outline" data-link data-i18n="home.hero.cta2">Neem contact op</a>
      </div>
    </div>
  </section>

  <section class="usps">
    <div class="container usps-grid">
      <div class="usp-card">
        <h3 data-i18n="home.usp1.title"></h3>
        <p data-i18n="home.usp1.desc"></p>
      </div>
      <div class="usp-card">
        <h3 data-i18n="home.usp2.title"></h3>
        <p data-i18n="home.usp2.desc"></p>
      </div>
      <div class="usp-card">
        <h3 data-i18n="home.usp3.title"></h3>
        <p data-i18n="home.usp3.desc"></p>
      </div>
    </div>
  </section>
`;

export const init = () => {};
