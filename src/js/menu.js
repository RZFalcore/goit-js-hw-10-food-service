import menu from '../menu.json';
import menuItemTemp from '../templates/menu-item.hbs';

const refs = {
  menu: document.querySelector('.js-menu'),
};

function buildMenu(list) {
  const markup = list.map(item => menuItemTemp(item)).join('');
  refs.menu.insertAdjacentHTML('beforeend', markup);
}

buildMenu(menu);
