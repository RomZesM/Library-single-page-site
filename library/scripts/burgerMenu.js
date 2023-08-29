import { hideModalAuthLogged } from "./authorisationMenu.js";
import { hideModalAuthUnlogged } from "./authorisationMenu.js";

export function modalBurgerMenuInit(){
	
const burger = document?.querySelector('.burger_icon'); //get .class from DOM	
const nav_menu = document?.querySelector('.header__navigation');
const nav_items = nav_menu?.querySelectorAll('a'); //take all links from menu list

//when we CLICK on burger show it and hide auth menu
burger.addEventListener('click', (event)=>{
	showModalBurgerMenu();
	hideModalAuthLogged();
	hideModalAuthUnlogged();
} ); 

nav_items.forEach(element => {
	element.addEventListener('click', hideModalBurgerMenu) //after clicking on item
														//remove all temp classes
});
}

export function hideModalBurgerMenu(){
	const burger = document?.querySelector('.burger_icon'); //get .class from DOM
	const nav_menu = document?.querySelector('.header__navigation');
	const body = document?.querySelector('body');

	nav_menu?.classList.remove('navigation--visible'); 
	burger?.classList.remove('burger--active-animate');
	body?.classList.remove('stop-scroll') 

}

export function showModalBurgerMenu(){
	const burger = document?.querySelector('.burger_icon'); //get .class from DOM
	const nav_menu = document?.querySelector('.header__navigation');
	const body = document?.querySelector('body');

	nav_menu?.classList.toggle('navigation--visible'); //add some another class	
	burger?.classList.toggle('burger--active-animate');//in css make navigation-visible display=none	
	body?.classList.toggle('stop-scroll') //add for body to stop scroll while menu is visible

}
