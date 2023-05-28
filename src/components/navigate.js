const categories = document.querySelectorAll('.category');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const goTopBtn = document.querySelector('.go-top');

header.prepend(createNavMenu('menu__header'));
footer.prepend(createNavMenu('menu__footer'));

export const activateMenu = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const title = entry.target.querySelector('.title');
      const a = document.querySelector(
        `.header a[href='#${title.textContent.trim().toLowerCase()}']`
      );

      entry.isIntersecting
        ? a.classList.add('menu_li_active')
        : a.classList.remove('menu_li_active');
    });
  },
  { threshold: 0.4 }
);

export const scrollToCategoty = e => {
  if (e.target.classList.contains('menu_li')) {
    e.preventDefault();
    const category = e.target.textContent.trim().toLowerCase();

    window.scrollTo({
      top: document.getElementById(category).offsetTop - 80,
      behavior: 'smooth'
    });
  }
};

export const goTop = () => {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -75);
    setTimeout(goTop, 0);
  }
};

export const addScrollBtn = () => {
  const offset = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  offset > coords
    ? goTopBtn.classList.add('go-top_show')
    : goTopBtn.classList.remove('go-top_show');
};

function createNavMenu(selector) {
  const menu = document.querySelector(`.${selector}`);
  categories.forEach(category => {
    const title = category.querySelector('.title');
    const li = document.createElement('li');
    const link = document.createElement('a');

    category.id = title.textContent.trim().toLowerCase();
    link.href = '#' + category.id.trim().toLowerCase();
    link.textContent = title.textContent;
    li.append(link);
    menu.append(li);

    link.className = 'menu_li';
  });
  return menu;
}
