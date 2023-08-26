"strict mode"

import { sayHello } from "./1.js";
import { getOffset } from "./utils.js";
import { changeCSSproperty } from "./utils.js";

 console.log("HHHHHH");
 sayHello('bub');

//burger menu functional
const burger = document?.querySelector('.burger_icon'); //get .class from DOM
const nav_menu = document?.querySelector('.header__navigation');
const body = document?.querySelector('body');
const nav_items = nav_menu?.querySelectorAll('a'); //taka all links from menu list

burger.addEventListener('click', () => { //when we CLICK on burger
	nav_menu?.classList.toggle('navigation--visible'); //add some another class
													//in css make navigation-visible display=none	
	burger?.classList.toggle('burger--active-animate');

	body?.classList.toggle('stop-scroll') //add for body to stop scroll while menu is visible
});

nav_items.forEach(element => {
	element.addEventListener('click', removeTempClasses) //after clicking on item
														//remove all temp classes
	function removeTempClasses(){
		nav_menu?.classList.remove('navigation--visible'); 
		burger?.classList.remove('burger--active-animate');
		body?.classList.remove('stop-scroll') 
	}
});
//--------------------------------------//


//mini menu while press user icon
const ico_profile = document.querySelector('.ico-profile');
const user_login_menu = document.querySelector('.user_login_menu_small');

	
ico_profile.addEventListener('click', (event) =>{
	user_login_menu.classList.toggle('user_login_menu-visible');

	var x = getOffset(ico_profile); //get coordinate of user icon
	//correction for menu coordinate
	let top = x.top + 28 + '';
	let left = x.left - 50 + '';	
	changeCSSproperty('.user_login_menu_small', 'left', `${left}px`);
	changeCSSproperty('.user_login_menu_small', 'top', `${top}px`);
});

//remove menu while scrolling
addEventListener('scroll', (event) => {
	user_login_menu.classList.remove('user_login_menu-visible');
});

//call Login windows from mini menu
const loginRef = document.querySelector('.login-ref__small-menu');
const loginForm = document.querySelector('.login_form');
const loginFormCloseButton = document.querySelector('.login_form-close_button');

loginRef.addEventListener('click', (event) =>{
	loginForm.classList.add('login_form-visible');
});
//close-button for login menu
loginFormCloseButton.addEventListener('click', (event) =>{
	loginForm.classList.remove('login_form-visible');
});

//call register windows from mini menu
const registerRef = document.querySelector('.register-ref__small-menu');
const regForm = document.querySelector('.register_form');
const regFormCloseButton = document.querySelector('.register_form-close_button');

registerRef.addEventListener('click', (event) =>{
	regForm.classList.add('register_form-visible');
});
//close-button for reg menu
regFormCloseButton.addEventListener('click', (event) =>{
	regForm.classList.remove('register_form-visible');
});



///carousel
function createCarousel(){
	let position = 0; //start position
	let gapBetweenPic = 25;
	const slidesToShow = 3;
	const slidesToScroll = 1;
//
	
//
	const container = document.querySelector('.about-images_container');
	const track = document.querySelector('.about__images');
	const itemsPictures = document.querySelectorAll('.about__images-item');
	const button01 = document.querySelector('.carousel-b1');
	const button02 = document.querySelector('.carousel-b2');
	const buttonCenter03 = document.querySelector('.carousel-b3');
	const button04 = document.querySelector('.carousel-b4');
	const button05 = document.querySelector('.carousel-b5');
	const itemCount = itemsPictures.length; //get a quantity of pictures 
	const itemWidth = (container.clientWidth - 50) / slidesToShow; //calculate image size (cotainer - gap)

	console.log("Calc size of pic: " + itemWidth);
	console.log("Size of one picture" + document.querySelector('.about__images-item').clientWidth);

	button01.addEventListener('click', (event) =>{
		position = (450 * 2) + gapBetweenPic * 2;
		track.style.transform = `translateX(${position}px)`;
		console.log("bPrev0" + "position: " + position);
	});

	button02.addEventListener('click', (event) =>{
		position = (450) + gapBetweenPic;
		track.style.transform = `translateX(${position}px)`;
		console.log("bPrev" + "position: " + position);
	});

	buttonCenter03.addEventListener('click', (event) =>{
		position = 0;
		track.style.transform = `translateX(${position}px)`;
		console.log("bCntr" + "position: " + position);
	});

	button04.addEventListener('click', (event) =>{
		position = -(450 + gapBetweenPic);
		track.style.transform = `translateX(${position}px)`;
		console.log("bNext" + "position: " + position);
	});

	button05.addEventListener('click', (event) =>{
		position = -(450 * 2 + gapBetweenPic * 2);
		track.style.transform = `translateX(${position}px)`;
		console.log("bNext0" + "position: " + position);
	});

	
		window.addEventListener('resize', () => {
			if(screen.width < 770){
				position = 950;
				track.style.transform = `translateX(${position}px)`;
			}
			if(screen.width > 770){
				position = 0;
				track.style.transform = `translateX(${position}px)`;
			}
			
		});
}

createCarousel();
