let show = true;
const header = document.querySelector('.header');
const menu = header.querySelector('.header__hamburger-menu');

menu.addEventListener('click', () => {
	header.classList.toggle('on', show);
	show = !show;
});