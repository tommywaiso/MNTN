const navBtn = document.querySelector('.nav__button');
const mobileNav = document.querySelector('.mobile__nav');
const div = document.querySelector('header')
const scrollDownBtn = document.querySelector('.hero')
const body = document.body;
div.scrollTo (0, 100)
scrollDownBtn.addEventListener('click', function (){
	window.scrollTo ({
		top: 1350,
		left: 0,
		behavior: 'smooth'
	})
})

navBtn.addEventListener('click', function (event){
	event.stopPropagation();
	mobileNav.classList.toggle('mobile__nav-active');
	navBtn.classList.toggle('nav__button-close');
	body.classList.toggle('menu');
})

window.addEventListener('click', function(){
	if (body.classList.contains('menu')) {
		body.classList.toggle('menu');
		navBtn.classList.toggle('nav__button-close');
		mobileNav.classList.toggle('mobile__nav-active');
	}
})

mobileNav.addEventListener('click', function(event) {
	event.stopPropagation();
})