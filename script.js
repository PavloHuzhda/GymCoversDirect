const menu = document.querySelector('.menu-btn');
const mobile = document.querySelector('.mobile-nav');

if (menu && mobile) {
  menu.addEventListener('click', () => mobile.classList.toggle('open'));
  mobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobile.classList.remove('open'));
  });
}
