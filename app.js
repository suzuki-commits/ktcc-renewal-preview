document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#global-nav');

if (menuButton && navigation) {
  const closeMenu = (returnFocus = false) => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    if (returnFocus) menuButton.focus();
  };

  menuButton.addEventListener('click', () => {
    const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('is-open', willOpen);
    menuButton.setAttribute('aria-expanded', String(willOpen));
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) closeMenu(true);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1080) closeMenu();
  });
}
