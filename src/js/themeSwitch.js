const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  themeSwitch: document.querySelector('.js-switch-input'),
};

if (localStorage.getItem('theme') === null) {
  refs.body.className = Theme.LIGHT;
  localStorage.setItem('theme', Theme.LIGHT);
} else {
  const currentTheme = localStorage.getItem('theme');
  refs.body.className = currentTheme;
  if (currentTheme === Theme.DARK) {
    refs.themeSwitch.setAttribute('checked', true);
  }
}

refs.themeSwitch.addEventListener('change', e => handleThemeSwitch(e));

function handleThemeSwitch(e) {
  if (e.target.checked === true) {
    refs.body.className = Theme.DARK;
    localStorage.setItem('theme', Theme.DARK);
  }
  if (e.target.checked === false) {
    refs.body.className = Theme.LIGHT;
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
