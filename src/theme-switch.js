const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// деструктуризирую свойства обьекта для удобства исп-я в будущем
const { LIGHT, DARK } = Theme;

// выношу класлист body в переменную для удобства
const bodyStyle = document.body.classList;

const themeSwitchBtn = document.querySelector('#theme-switch-toggle');
themeSwitchBtn.addEventListener('change', onSwitchThemeHandler);

const storageTheme = localStorage.getItem('theme');
// storageTheme ?? bodyStyle.add(storageTheme);

// проверяю локальное хранилище на наличие темы - если есть, то устанавливаю. Так же, если тема темная - переключаю чекбокс
if (storageTheme) {
  bodyStyle.add(storageTheme);
  if (bodyStyle.contains(DARK)) {
    themeSwitchBtn.setAttribute('checked', true);
  }
}

if (!bodyStyle.contains(LIGHT) && !bodyStyle.contains(DARK)) {
  // тема по умолчанию светлая
  bodyStyle.add(LIGHT);
}

// функция-переключатель
function onSwitchThemeHandler(evt) {
  if (bodyStyle.contains(LIGHT) || bodyStyle.contains(DARK)) {
    bodyStyle.toggle(DARK);
    bodyStyle.toggle(LIGHT);
    onCheckboxControler();

    bodyStyle.contains(LIGHT)
      ? localStorage.setItem('theme', LIGHT)
      : localStorage.setItem('theme', DARK);
  }
}

function onCheckboxControler() {
  if (bodyStyle.contains(DARK)) {
    themeSwitchBtn.setAttribute('checked', true);
  }
  if (bodyStyle.contains(LIGHT)) {
    themeSwitchBtn.setAttribute('checked', false);
  }
}
onCheckboxControler();
