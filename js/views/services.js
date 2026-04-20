export const render = () => `
  <section class="page-header">
    <div class="container">
      <h2 data-i18n="services.title">Wat biedt Revand?</h2>
      <p data-i18n="services.intro"></p>
    </div>
  </section>

  <section class="services-section">
    <div class="container">
      <div class="service-cards">
        <div class="service-card">
          <h4 data-i18n="services.resilience.title">Weerbaarheid</h4>
          <p data-i18n="services.resilience.desc"></p>
        </div>
        <div class="service-card">
          <h4 data-i18n="services.selfdef.title">Zelfverdediging</h4>
          <p data-i18n="services.selfdef.desc"></p>
        </div>
        <div class="service-card">
          <h4 data-i18n="services.wingchun.title">Wing Chun Kung Fu</h4>
          <p data-i18n="services.wingchun.desc"></p>
        </div>
      </div>
    </div>
  </section>

  <section class="services-section services-section--alt">
    <div class="container">
      <h3 class="services-group-title" data-i18n="services.formats.title">Vormen</h3>
      <ul class="formats-list">
        <li data-i18n="services.formats.item1"></li>
        <li data-i18n="services.formats.item2"></li>
        <li data-i18n="services.formats.item3"></li>
      </ul>
    </div>
  </section>

  <section class="services-section">
    <div class="container">
      <h3 class="services-group-title" data-i18n="services.forwhom.title">Voor wie?</h3>
      <p class="services-group-desc" data-i18n="services.forwhom.desc"></p>
    </div>
  </section>

  <section class="services-section services-section--alt">
    <div class="container wudae-block">
      <h3 class="services-group-title" data-i18n="services.wudae.title">Wu Dae Sportcentrum</h3>
      <p class="services-group-desc" data-i18n="services.wudae.desc"></p>
      <a href="https://www.wudae.nl" target="_blank" rel="noopener noreferrer" class="btn btn-outline" data-i18n="services.wudae.link">Ga naar wudae.nl</a>
    </div>
  </section>
`;
