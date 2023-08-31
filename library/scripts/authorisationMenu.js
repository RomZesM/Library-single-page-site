import { checkIfKeyExistInLocalStorage, getCurrentUserLogin, getOffset,
		 getSimpleValueFromLocalStorage, getUserValueFromLocalStorage, isSomeoneLogIn } from "./utils.js";
import { changeCSSproperty } from "./utils.js";
import { hideModalBurgerMenu } from "./burgerMenu.js";
import { showModalRegister } from "./registerMenu.js";
import { showModalProfile } from "./modalProfile.js";
import { showModalLogin } from "./modalLogin.js";


export function authorisationMenuInit(){
//Init mini menu while press user icon
const ico_profile = document.querySelector('.ico-profile');
const user_login_menu = document.querySelector('.user_login_menu_small');
const user_in_menu = document.querySelector('.user_in_menu_small')
const logInMenuTitle = document.querySelector('.card-number-in-profile')
	
ico_profile.addEventListener('click', (event) =>{
	if(isSomeoneLogIn()){ //choose what windows to show if someone is log in or not
		//getUserCardNumber();
		const userLogin = getCurrentUserLogin();
		const userCard = getUserValueFromLocalStorage(userLogin, 'cardNumber');
		//insert card number into modal window
		logInMenuTitle.innerHTML = userCard;
		//make font smaller for card number
		logInMenuTitle.classList.add('auth_menu_title-small-text');

		showModalAuthLogged();
		hideModalBurgerMenu();
		}
	else{

		showModalAuthUnlogged();
		hideModalBurgerMenu();
	}
		

});

//remove menu while scrolling
addEventListener('scroll', (event) => {
	user_login_menu.classList.remove('user_login_menu-visible');
	user_in_menu.classList.remove('user_login_menu-visible');
});

//remove menu if unfocused
//click outside
const body = document.querySelector('body');

body.addEventListener('click', (event)=>{
	if(!event.target.closest('.header__icon-profile-burger')){ 
		//		console.log('not a menu');
		 hideModalAuthLogged();
		 hideModalAuthUnlogged();
		
	}
})



//call Login windows from mini menu and from library card menu

const loginRef = document.querySelectorAll('.login-ref');

for (let index = 0; index < loginRef.length; index++) {
	loginRef[index].addEventListener('click', (event) =>{
		showModalLogin();		

	});	
}


//call reg windows from mini menu and from library card menu

const registerRef = document.querySelectorAll('.register-ref');//button

for (let index = 0; index < registerRef.length; index++) {
	registerRef[index].addEventListener('click', (event) =>{
		showModalRegister();
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
//init profile modal open button

const profile_button = document.querySelector(".profile-ref"); 
profile_button.addEventListener('click', showModalProfile)

//logout button
const modalLogoutButton = document.querySelector('.logout-ref'); 

modalLogoutButton.addEventListener('click', (event)=>{
	localStorage.setItem('loggedInUser', '') //todo add check if loginuser is in localStorage to prevent error while handy delete user
	location.reload();  //reload page after logout
});
}

export function showModalAuthLogged(){	
	const user_in_menu = document.querySelector('.user_in_menu_small')
	user_in_menu.classList.toggle('user_login_menu-visible'); 

}

export function hideModalAuthLogged(){	
	const user_in_menu = document.querySelector('.user_in_menu_small')
	user_in_menu.classList.remove('user_login_menu-visible'); 

}

export function showModalAuthUnlogged(){
	const user_login_menu = document.querySelector('.user_login_menu_small');
	user_login_menu.classList.toggle('user_login_menu-visible');
}

export function hideModalAuthUnlogged(){
	const user_login_menu = document.querySelector('.user_login_menu_small');
	user_login_menu.classList.remove('user_login_menu-visible');
}



