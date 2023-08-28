import { checkIfKeyExistInLocalStorage, getCurrentUserLogin, getOffset,
		 getSimpleValueFromLocalStorage, getUserValueFromLocalStorage, isSomeoneLogIn } from "./utils.js";
import { changeCSSproperty } from "./utils.js";

export function authorisationMenuInit(){
//Init mini menu while press user icon
const ico_profile = document.querySelector('.ico-profile');
const user_login_menu = document.querySelector('.user_login_menu_small');
const user_in_menu = document.querySelector('.user_in_menu_small')
const logInMenuTitle = document.querySelector('.user_in_menu_small_title')
	
ico_profile.addEventListener('click', (event) =>{
	if(isSomeoneLogIn()){ //choose what windows to show if someone is log in or not
		//getUserCardNumber();
		const userLogin = getCurrentUserLogin();
		const userCard = getUserValueFromLocalStorage(userLogin, 'cardNumber');
		//insert card number into modal window
		logInMenuTitle.innerHTML = userCard;
		//
		user_in_menu.classList.toggle('user_login_menu-visible'); 
		}
	else
		user_login_menu.classList.toggle('user_login_menu-visible');

	// var x = getOffset(ico_profile); //get coordinate of user icon
	// //correction for menu coordinate
	// let top = x.top + 28 + '';
	// let left = x.left - 50 + '';	
	// changeCSSproperty('.user_login_menu_small', 'left', `${left}px`);
	// changeCSSproperty('.user_login_menu_small', 'top', `${top}px`);
});

//remove menu while scrolling
addEventListener('scroll', (event) => {
	user_login_menu.classList.remove('user_login_menu-visible');
	user_in_menu.classList.remove('user_login_menu-visible');
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
//have name of registered user
ico_profile.addEventListener('mouseover', (event) =>{
	if(getSimpleValueFromLocalStorage('loggedInUser') != ''){ //check if someone is login
		
		let name = getUserValueFromLocalStorage(getSimpleValueFromLocalStorage('loggedInUser'), 'firstName').concat(' ',
		getUserValueFromLocalStorage(getSimpleValueFromLocalStorage('loggedInUser'), 'secondName'));
		
		ico_profile.setAttribute('title', name); 
	}
	else
		ico_profile.setAttribute('title', 'unregistered');

});



}
