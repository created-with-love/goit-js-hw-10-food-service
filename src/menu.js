import menuItems from './menu.json';
import menuItemsTemplate from './templates/menu-item.hbs';

const galleryRef = document.querySelector('.js-menu');
const markup = menuItemsTemplate(menuItems);

galleryRef.insertAdjacentHTML('beforeend', markup);
