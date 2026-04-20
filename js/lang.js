let strings = {};
let currentLang = localStorage.getItem('lang') || 'nl';
let loading = false;

export async function loadLang(lang) {
  if (loading) return;
  loading = true;
  try {
    const res = await fetch(`/lang/${lang}.json`);
    if (!res.ok) throw new Error(`Failed to load language: ${lang}`);
    strings = await res.json();
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    updateToggleButton();
  } catch (err) {
    console.error('Language load error:', err);
  } finally {
    loading = false;
  }
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
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (strings[key] !== undefined) {
      el.placeholder = strings[key];
    }
  });
}

export function toggleLang() {
  const next = currentLang === 'nl' ? 'en' : 'nl';
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.disabled = true;
  loadLang(next)
    .then(() => {
      applyTranslations();
      return import('./app.js').then(({ rerenderCurrent }) => rerenderCurrent());
    })
    .catch(err => console.error('Language toggle failed:', err))
    .finally(() => { if (btn) btn.disabled = false; });
}

function updateToggleButton() {
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = currentLang === 'nl' ? 'NL | EN' : 'EN | NL';
}

export function getCurrentLang() { return currentLang; }
export function getString(key) { return strings[key] || key; }

export async function initLang() {
  await loadLang(currentLang);
}
