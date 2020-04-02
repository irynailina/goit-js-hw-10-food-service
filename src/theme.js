import storage from './storage';

const themeSwicth = document.querySelector('.js-switch-input');
themeSwicth.addEventListener('change', themeSwitcher);

function themeSwitcher(e) {
  if (e.target.checked === true) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else if (e.target.checked === false) {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
}

const chosenTheme = localStorage.getItem('theme');

if (chosenTheme === 'dark-theme') {
  themeSwicth.checked = true;
  document.body.classList.add(chosenTheme);
} else if (chosenTheme === 'dark-theme') {
  themeSwicth.checked = false;
  document.body.classList.add(chosenTheme);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
