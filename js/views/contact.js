export const render = () => `
  <section class="page-header">
    <div class="container">
      <h2 data-i18n="contact.title">Contact</h2>
      <p data-i18n="contact.subtitle"></p>
    </div>
  </section>

  <section class="contact-section">
    <div class="container contact-grid">
      <form id="contact-form" class="contact-form">
        <div class="form-group">
          <label for="name" data-i18n="contact.name">Naam</label>
          <input type="text" id="name" name="name" required data-i18n-placeholder="contact.name" />
        </div>
        <div class="form-group">
          <label for="email" data-i18n="contact.email">E-mailadres</label>
          <input type="email" id="email" name="email" required data-i18n-placeholder="contact.email" />
        </div>
        <div class="form-group">
          <label for="message" data-i18n="contact.message">Bericht</label>
          <textarea id="message" name="message" rows="5" required data-i18n-placeholder="contact.message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" data-i18n="contact.submit">Verstuur</button>
        <p id="form-feedback" class="form-feedback" aria-live="polite"></p>
      </form>

      <div class="contact-info">
        <div class="contact-info-item">
          <span class="contact-info-label" data-i18n="contact.phone.label">Telefoon</span>
          <a href="tel:+31612345678">+31 6 12 34 56 78</a>
        </div>
        <div class="contact-info-item">
          <span class="contact-info-label" data-i18n="contact.location.label">Locatie</span>
          <span data-i18n="contact.location.value">Haarlem Noord</span>
        </div>
      </div>
    </div>
  </section>
`;

export const init = () => {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;

    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        form.reset();
        feedback.className = 'form-feedback success';
        feedback.textContent = document.querySelector('[data-i18n="contact.success"]')?.textContent
          || 'Bedankt voor je bericht!';
      } else {
        throw new Error('submit failed');
      }
    } catch {
      feedback.className = 'form-feedback error';
      feedback.textContent = document.querySelector('[data-i18n="contact.error"]')?.textContent
        || 'Er ging iets mis.';
    } finally {
      btn.disabled = false;
    }
  });
};
