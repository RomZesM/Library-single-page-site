import { getOffset } from "./utils.js";
import { changeCSSproperty } from "./utils.js";

export function miniMenuInit(){
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
const loginFormOverlay = document.querySelector('.login_form-overlay');
const loginFormCloseButton = document.querySelector('.login_form-close_button');

loginRef.addEventListener('click', (event) =>{
	loginFormOverlay.classList.add('login_form-overlay-visible');
});
//close-button for login menu
loginFormCloseButton.addEventListener('click', (event) =>{
	loginFormOverlay.classList.remove('login_form-overlay-visible');
});

//call register windows from mini menu
const registerRef = document.querySelector('.register-ref__small-menu');//button
const regFormOverlay = document.querySelector('.register_form-overlay');
const regFormCloseButton = document.querySelector('.register_form-close_button');

registerRef.addEventListener('click', (event) =>{
	regFormOverlay.classList.add('register_form-overlay-visible');
});
//close-button for reg menu
regFormCloseButton.addEventListener('click', (event) =>{
	regFormOverlay.classList.remove('register_form-overlay-visible');
});

}