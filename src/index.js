import './index.css';
import { activateMenu, scrollToCategoty, goTop, addScrollBtn } from './components/navigate';
import { getItems } from './components/api';
import { renderProductCard } from './components/card';
import { closeModalBuy, addItemInCart } from './components/modalBuy';
import { changeTheme, togleDarkTheme } from './components/theme';

const categories = document.querySelectorAll('.category');
const items = await getItems();
const closedModalBtn = document.getElementById('btnClose');
const buyModalBtn = document.getElementById('btnBuy');
const changeThemeBtn = document.querySelector('.theme');

categories.forEach(category => activateMenu.observe(category));
categories.forEach(category => renderProductCard(items, category));
document.querySelector('.menu__header').addEventListener('click', scrollToCategoty);
document.querySelector('.menu__footer').addEventListener('click', scrollToCategoty);
document.querySelector('.go-top').addEventListener('click', goTop);
changeThemeBtn.addEventListener('click', changeTheme);
window.addEventListener('scroll', addScrollBtn);

closedModalBtn.addEventListener('click', e => closeModalBuy(e));
buyModalBtn.addEventListener('click', e => addItemInCart(e));

if (document.readyState === 'complete') {
  if (localStorage.getItem('theme') != null) {
    togleDarkTheme();
  }
}
