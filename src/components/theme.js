const main = document.querySelector('.main');
const modalBuy = document.querySelector('.pop-up__body');
export function changeTheme() {
  const darkTheme = document.querySelector('.theme__dark');
  if (darkTheme != undefined) {
    togleLightTheme();
    localStorage.clear();
  } else {
    togleDarkTheme();
    localStorage.setItem('theme', 'dark');
  }
}

export function togleDarkTheme() {
  main.classList.add('theme__dark');
  modalBuy.classList.add('theme__dark');
}

function togleLightTheme() {
  main.classList.remove('theme__dark');
  modalBuy.classList.remove('theme__dark');
}
