const header = document.querySelector('.header');
const menu = header.querySelector('.header__hamburger-menu');
const navItems = header.querySelectorAll('.header__nav-list li a');

menu.addEventListener('click', () => {
	header.classList.toggle('on');
});

navItems.forEach(item => item.addEventListener('click', () => header.classList.remove('on')));
