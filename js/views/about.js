export const render = () => `
  <section class="page-header">
    <div class="container">
      <img src="Revand logo.png" alt="Revand" class="page-header-logo" />
    </div>
  </section>

  <section class="about-content">
    <div class="container">

      <!-- Ruben bio grid -->
      <div class="about-grid">
        <span class="about-grid-spacer"></span>
        <h2 class="about-heading" data-i18n="about.title">Wie is Revand?</h2>
        <div class="about-photo-wrap">
          <img src="Ruben foto.png" alt="Ruben van Dijk" class="about-photo" />
        </div>
        <div class="about-text">
          <p data-i18n="about.intro.p1"></p>
          <p data-i18n="about.intro.p2"></p>
          <p data-i18n="about.intro.p3"></p>
        </div>
      </div>

      <!-- Wing Chun grid -->
      <div class="about-grid about-grid--wingchun">
        <span class="about-grid-spacer"></span>
        <h3 class="about-wingchun-heading" data-i18n="about.wingchun.title">Wat is Wing Chun / Ving Tsun?</h3>
        <div class="about-photo-wrap">
          <img src="Goksel and I.JPG" alt="Göksel Erdogan en Ruben" class="about-photo about-photo--side" />
        </div>
        <div class="about-text">
          <p data-i18n="about.wingchun.text1"></p>
          <p data-i18n="about.wingchun.text2"></p>
        </div>
      </div>

      <!-- Group photo -->
      <div class="about-group-photo-wrap">
        <img src="Goksel and group.JPG" alt="Göksel Erdogan en groep" class="about-group-photo" />
      </div>

    </div>
  </section>
`;
