import { showModalLogin } from "./modalLogin.js";
import { checkIfUserWasRegistered, getSingleDomElementByClass } from "./utils.js";

const regForm = document.querySelector('.register_form');
const regFormOverlay = document.querySelector('.register_form-overlay');
const regFormCloseButton = document.querySelector('.register_form-close_button');
const registerFormLoginRef = getSingleDomElementByClass('register_form-login-ref');
const registerErrorMessage = getSingleDomElementByClass('register-error-message'); 

export function registerMenuInit(){

	//----Register Menu 
//close-button for reg menu 

regFormCloseButton.addEventListener('click', (event) =>{
	hideModalRegister()
});
//close while clock on overlay
regFormOverlay.addEventListener('click', (event)=>{
	if(event.target === regFormOverlay){ //event include children of overlay (windows) so check if it overlay exactly
		hideModalRegister();
	}

});
//save data in local storage

let firstName = {};
let secondName = {};
let email = {};
let password = {};
let cardNumber = 1;

regForm.addEventListener('submit', (event) =>{
	
		email = regForm.elements[2];
	if(!checkIfUserWasRegistered(email.value)){		
		firstName = regForm.elements[0];
		secondName = regForm.elements[1];
		password = regForm.elements[3];

		cardNumber = getRandomInt(4_299_000_000, 50_000_000_000).toString(16);
		localStorage.setItem(`${email.value.toLowerCase()},${cardNumber}`, JSON.stringify({
								firstName: `${firstName.value.toLowerCase()}`, 
								secondName: `${secondName.value.toLowerCase()}`,
								email: `${email.value.toLowerCase()}`,
								password: `${password.value}`,
								cardNumber: `${cardNumber}`,
								booksList: [],
								abonCard: false,
								authCounter: 1,
								bookCounter: 0
								}));
		//autologin after registration						
		localStorage.setItem('loggedInUser', `${email.value.toLowerCase()},${cardNumber}`);							
	
	}
	else{
		errorMessage();
		event.preventDefault(); //stop submit function
	}
	
});

registerFormLoginRef.addEventListener('click', (event)=>{
	hideModalRegister();
	showModalLogin();
});



function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}
//4_299_000_000 - 50_000_000_000
}

export function showModalRegister(){
	
	regFormOverlay.classList.add('register_form-overlay-visible');
	//stop scrolling
	document.body.classList.add('body-stop-scrolling')
}

export function hideModalRegister(){
	
	regFormOverlay.classList.remove('register_form-overlay-visible');
	//restart scrolling
	document.body.classList.remove('body-stop-scrolling')
}

function errorMessage(){
	registerErrorMessage.classList.add('register-error-message-visible');
				setTimeout(function(){
					registerErrorMessage.classList.remove('register-error-message-visible');
				}, 3000);
}
