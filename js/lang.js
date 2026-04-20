let strings = {};
let currentLang = localStorage.getItem('lang') || 'nl';

export async function loadLang(lang) {
  const res = await fetch(`/lang/${lang}.json`);
  strings = await res.json();
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  updateToggleButton();
}

export function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (strings[key] === undefined) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = strings[key];
    } else {
      el.textContent = strings[key];
    }
  });
}

export function toggleLang() {
  const next = currentLang === 'nl' ? 'en' : 'nl';
  loadLang(next).then(() => {
    applyTranslations();
    import('./app.js').then(({ rerenderCurrent }) => rerenderCurrent());
  });
}

function updateToggleButton() {
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = currentLang === 'nl' ? 'NL | EN' : 'EN | NL';
}

export function getCurrentLang() { return currentLang; }

export async function initLang() {
  await loadLang(currentLang);
}
