function setLang(lang) {
  if (!i18n[lang]) return;
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes("'" + lang + "'"));
  });
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = key === 'h1' ? t[key].replace('\n', '<br>') : t[key];
    }
  });
}

setLang('tr');
