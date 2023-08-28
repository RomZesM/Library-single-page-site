import { getOffset } from "./utils.js";
import { changeCSSproperty } from "./utils.js";

export function authorisationMenuInit(){
//Init mini menu while press user icon
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

//--------------------------------------------


//call Login windows from mini menu and from library card menu

const loginRef = document.querySelectorAll('.login-ref');
const loginFormOverlay = document.querySelector('.login_form-overlay');

for (let index = 0; index < loginRef.length; index++) {
	loginRef[index].addEventListener('click', (event) =>{
		loginFormOverlay.classList.add('login_form-overlay-visible');
	});	
}


//call reg windows from mini menu and from library card menu

const registerRef = document.querySelectorAll('.register-ref');//button
const regFormOverlay = document.querySelector('.register_form-overlay');

for (let index = 0; index < registerRef.length; index++) {
	registerRef[index].addEventListener('click', (event) =>{
		regFormOverlay.classList.add('register_form-overlay-visible');
	});
	
}


}
