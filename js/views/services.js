export const render = () => `
  <section class="page-header">
    <div class="container">
      <h2 data-i18n="services.title">Trainingsaanbod</h2>
    </div>
  </section>

  <section class="services-section">
    <div class="container">
      <h3 class="services-group-title" data-i18n="services.youth.title">Jeugd</h3>
      <p class="services-group-desc" data-i18n="services.youth.desc"></p>
      <ul class="age-list">
        <li data-i18n="services.youth.age1"></li>
        <li data-i18n="services.youth.age2"></li>
        <li data-i18n="services.youth.age3"></li>
      </ul>
    </div>
  </section>

  <section class="services-section services-section--alt">
    <div class="container">
      <h3 class="services-group-title" data-i18n="services.adult.title">Volwassenen</h3>
      <div class="service-cards">
        <div class="service-card">
          <h4 data-i18n="services.selfdef.title">Zelfverdediging</h4>
          <p data-i18n="services.selfdef.desc"></p>
        </div>
        <div class="service-card">
          <h4 data-i18n="services.wingchun.title">Wing Chun Kung Fu</h4>
          <p data-i18n="services.wingchun.desc"></p>
        </div>
        <div class="service-card">
          <h4 data-i18n="services.pt.title">Personal Training</h4>
          <p data-i18n="services.pt.desc"></p>
        </div>
        <div class="service-card">
          <h4 data-i18n="services.workshop.title">Workshops & Teamuitjes</h4>
          <p data-i18n="services.workshop.desc"></p>
        </div>
      </div>
    </div>
  </section>
`;
