
export function registerMenuInit(){

	//
//----Register Menu //todo move to separate file
//
//call register windows from mini menu
const regForm = document.querySelector('.register_form');
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
//close while clock on overlay
regFormOverlay.addEventListener('click', (event)=>{
	if(event.target === regFormOverlay){ //event include children of overlay (windows) so check if it overlay exactly
		regFormOverlay.classList.remove('register_form-overlay-visible');
	}

});
//save data in local storage

let firstName = {};
let secondName = {};
let email = {};
let password = {};
let cardNumber = 1;

regForm.addEventListener('submit', (event) =>{
	
	firstName = regForm.elements[0];
	secondName = regForm.elements[1];
	email = regForm.elements[2];
	password = regForm.elements[3];
	cardNumber = getRandomInt(4_299_000_000, 50_000_000_000).toString(16);
	localStorage.setItem(`${email.value}`, JSON.stringify({
							firsrName: `${firstName.value}`, 
							secondName: `${secondName.value}`,
							password: `${password.value}`,
							cardNumber: `${cardNumber}`
							}));

});

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}
//4_299_000_000 - 50_000_000_000
}
