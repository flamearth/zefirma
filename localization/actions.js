// Место: /Users/home/Documents/public/localization/actions.js



const lang = localStorage.getItem('lang');
const country = localStorage.getItem('country');

// Если нет языка или страны — направление на /index.html
if (!lang ||!country) {
  const back = location.pathname + location.search;
  location.replace('/index.html?redirect=' + encodeURIComponent(back));
}

// Ставим в DOM
document.documentElement.lang = lang;
document.body.dataset.country = country;

// Грузим связку ключей из /localization/languages/${lang}.json
const xhr = new XMLHttpRequest();
xhr.open('GET', `/localization/languages/${lang}.json`, false);
xhr.send();
window.i18n = JSON.parse(xhr.responseText);

// Перевод с учётом вложенных ключей через точку
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n; // "east.name" или "entrance.notify"
    const value = key.split('.').reduce((obj, k) => obj && obj[k], window.i18n);
    el.innerText = value || key;
  });
});
