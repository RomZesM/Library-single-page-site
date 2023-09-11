import { getCurrentUserLogin, 
		 getSimpleValueFromLocalStorage, 
		 getSingleDomElementByClass,
		 getUserFullName, 
		 getUserValueFromLocalStorage,
		 isSomeoneLogIn } from "./utils.js";
import { hideModalBurgerMenu } from "./burgerMenu.js";
import { hideModalRegister, showModalRegister } from "./registerMenu.js";
import { hideModalProfile, showModalProfile } from "./modalProfile.js";
import { hideModalLogin, showModalLogin } from "./modalLogin.js";


const ico_profile = document.querySelector('.ico-profile');
const userLoginMenu = document.querySelector('.user_login_menu_small');
const loggedUserMenuSmall = document.querySelector('.user_in_menu_small');
const logInMenuTitle = document.querySelector('.card-number-in-profile');
const iconWithInitials = getSingleDomElementByClass('icon_with_initials');
const iconWithoutInitials = getSingleDomElementByClass('icon_without_initials');

export function authorisationMenuInit(){
//Init mini menu while press user icon
	
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
		hideModalLogin();
		hideModalRegister();
		hideModalProfile();
		}
	else{

		showModalAuthUnlogged();
		hideModalBurgerMenu();
		hideModalLogin();
		hideModalRegister();
	}
		

});

//remove menu while scrolling
addEventListener('scroll', (event) => {
	userLoginMenu.classList.remove('user_login_menu-visible');
	loggedUserMenuSmall.classList.remove('user_login_menu-visible');
});

//remove menu if unfocused
//click outside
document.body.addEventListener('click', (event)=>{
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
		hideModalAuthUnlogged();
	});	
}

//call reg windows from mini menu and from library card menu

const registerRef = document.querySelectorAll('.register-ref');//button

for (let index = 0; index < registerRef.length; index++) {
	registerRef[index].addEventListener('click', (event) =>{
		showModalRegister();
		hideModalAuthUnlogged();
	});
	
}
//have name of registered user 
//todo //сделать добавление по клику, иначе 2 разных листенера на одну кнопку
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
profile_button.addEventListener('click', (e)=>{
		showModalProfile();
		hideModalAuthLogged();
});

//logout button
const modalLogoutButton = document.querySelector('.logout-ref'); 

modalLogoutButton.addEventListener('click', (event)=>{
	localStorage.setItem('loggedInUser', '') //todo add check if loginuser is in localStorage to prevent error while handy delete user
	location.reload();  //reload page after logout
});
}


export function insertUserInitialintoIcon(){

	if(isSomeoneLogIn()){
		
		let nameLoggedInUser = getUserFullName(getCurrentUserLogin()).split(' ');
		let initials = nameLoggedInUser[0].substring(0,1).concat(nameLoggedInUser[1].substring(0,1))
		
		iconWithInitials.innerHTML = initials.toUpperCase();
		iconWithoutInitials.classList.add('icon_without_initials-hide');
		iconWithInitials.classList.add('icon_with_initials-visible');	}
	
 else{
	iconWithoutInitials.classList.remove('icon_without_initials-hide');
	iconWithInitials.classList.remove('icon_with_initials-visible');
	}
}



export function showModalAuthLogged(){	
	loggedUserMenuSmall.classList.toggle('user_login_menu-visible'); 

}

export function hideModalAuthLogged(){		
	loggedUserMenuSmall.classList.remove('user_login_menu-visible'); 

}

export function showModalAuthUnlogged(){
	userLoginMenu.classList.toggle('user_login_menu-visible');
}

export function hideModalAuthUnlogged(){
	userLoginMenu.classList.remove('user_login_menu-visible');
}



