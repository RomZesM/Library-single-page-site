"strict mode"

import { sayHello } from "./1.js";
import { createCarousel } from "./about-carousel.js";
import { createFavBooksSlider } from "./favouriteBookSlider.js";
import { authorisationMenuInit } from "./authorisationMenu.js";
import { registerMenuInit } from "./registerMenu.js";
import { checkIfKeyExistInLocalStorage } from "./utils.js";


 console.log("HHHHHH");
 sayHello('bub');

//burger menu functional
const burger = document?.querySelector('.burger_icon'); //get .class from DOM
const nav_menu = document?.querySelector('.header__navigation');
const body = document?.querySelector('body');
const nav_items = nav_menu?.querySelectorAll('a'); //take all links from menu list

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





createCarousel();
createFavBooksSlider();
//
//login form
//loginFormLogic(); //todo

//auth menu
authorisationMenuInit();

//regMenu
registerMenuInit();

//start global variable inition
if(!checkIfKeyExistInLocalStorage('loggedInUser')){
	localStorage.setItem('loggedInUser', '')
}

//save the last scroll position after reload
document.addEventListener("DOMContentLoaded", function(event) { 
	var scrollpos = localStorage.getItem('scrollpos');
	if (scrollpos) {
		window.scrollTo(0, scrollpos);
		//localStorage.setItem('scrollpos', 0);
	}
});
addEventListener('scroll', (event) => {
	localStorage.setItem('scrollpos', window.scrollY);
});

