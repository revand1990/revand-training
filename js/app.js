import { initLang, applyTranslations } from './lang.js';
import { render as renderHome } from './views/home.js';
import { render as renderAbout } from './views/about.js';
import { render as renderServices } from './views/services.js';
import { render as renderContact, init as initContact } from './views/contact.js';

const routes = {
  '/': { render: renderHome },
  '/about': { render: renderAbout },
  '/services': { render: renderServices },
  '/contact': { render: renderContact, init: initContact },
};

const app = document.getElementById('app');
let currentPath = location.pathname;

async function navigate(path) {
  const route = routes[path] || routes['/'];
  currentPath = path;

  app.classList.add('fade-out');
  await new Promise(r => setTimeout(r, 150));

  app.innerHTML = route.render();
  applyTranslations();
  if (route.init) route.init();

  app.classList.remove('fade-out');
  setActiveLink(path);
  window.scrollTo(0, 0);
}

export function rerenderCurrent() {
  const route = routes[currentPath] || routes['/'];
  app.innerHTML = route.render();
  applyTranslations();
  if (route.init) route.init();
}

function setActiveLink(path) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === path);
  });
}

function handleClick(e) {
  const link = e.target.closest('[data-link]');
  if (!link) return;
  e.preventDefault();
  try {
    const path = new URL(link.href).pathname;
    if (path === currentPath) return;
    history.pushState(null, '', path);
    navigate(path);
  } catch (err) {
    console.error('Navigation error:', err);
  }
}

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => navMenu.classList.toggle('open'));
  navMenu.addEventListener('click', () => navMenu.classList.remove('open'));
}

document.getElementById('lang-toggle')?.addEventListener('click', () => {
  import('./lang.js').then(({ toggleLang }) => toggleLang());
});

document.addEventListener('click', handleClick);
window.addEventListener('popstate', () => navigate(location.pathname));

try {
  await initLang();
  navigate(location.pathname);
} catch (err) {
  console.error('App initialization failed:', err);
  document.getElementById('app').innerHTML = '<p style="color:#aaa;padding:2rem">Something went wrong. Please reload.</p>';
}
