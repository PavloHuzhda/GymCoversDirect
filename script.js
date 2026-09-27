const menu = document.querySelector('.menu-btn');
const mobile = document.querySelector('.mobile-nav');
if (menu && mobile) {
  menu.addEventListener('click', () => {
    const open = mobile.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobile.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }));
}
