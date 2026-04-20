export const render = () => `
  <section class="hero">
    <div class="container hero-inner">
      <img src="Revand logo.png" alt="Revand Physical Training" class="hero-logo" />
      <h1 data-i18n="home.hero.tagline">Fysiek en mentaal sterker worden</h1>
      <a href="/contact" class="btn btn-primary" data-link data-i18n="home.hero.cta">Neem contact op</a>
    </div>
  </section>

  <section class="intro">
    <div class="container">
      <p class="intro-text" data-i18n="home.intro"></p>
    </div>
  </section>

  <section class="teasers">
    <div class="container teasers-grid">
      <div class="teaser-card">
        <h3 data-i18n="home.youth.title">Jeugdprogramma's</h3>
        <p data-i18n="home.youth.desc"></p>
        <a href="/services" class="btn btn-outline" data-link data-i18n="home.youth.link">Bekijk aanbod</a>
      </div>
      <div class="teaser-card">
        <h3 data-i18n="home.adult.title">Volwassenen & Bedrijven</h3>
        <p data-i18n="home.adult.desc"></p>
        <a href="/services" class="btn btn-outline" data-link data-i18n="home.adult.link">Bekijk aanbod</a>
      </div>
    </div>
  </section>
`;
