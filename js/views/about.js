export const render = () => `
  <section class="page-header">
    <div class="container">
      <h2 data-i18n="about.title">Wie is Revand?</h2>
    </div>
  </section>

  <section class="about-content">
    <div class="container about-grid">
      <div class="about-logo-wrap">
        <img src="Revand logo.png" alt="Revand" class="about-logo" />
      </div>
      <div class="about-text">
        <p data-i18n="about.intro.p1"></p>
        <p data-i18n="about.intro.p2"></p>
        <p data-i18n="about.intro.p3"></p>

        <h3 data-i18n="about.wingchun.title">Wat is Wing Chun Kung Fu?</h3>
        <p data-i18n="about.wingchun.text1"></p>
        <p data-i18n="about.wingchun.text2"></p>

        <h3 data-i18n="about.experience.title">Leservaring</h3>
        <ul class="timeline">
          <li><span class="timeline-period" data-i18n="about.exp.1.period"></span><span data-i18n="about.exp.1.role"></span></li>
          <li><span class="timeline-period" data-i18n="about.exp.2.period"></span><span data-i18n="about.exp.2.role"></span></li>
          <li><span class="timeline-period" data-i18n="about.exp.3.period"></span><span data-i18n="about.exp.3.role"></span></li>
          <li><span class="timeline-period" data-i18n="about.exp.4.period"></span><span data-i18n="about.exp.4.role"></span></li>
          <li><span class="timeline-period" data-i18n="about.exp.5.period"></span><span data-i18n="about.exp.5.role"></span></li>
        </ul>
      </div>
    </div>
  </section>
`;
