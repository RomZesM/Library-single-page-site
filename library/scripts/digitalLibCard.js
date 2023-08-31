import { getSingleDomElementByClass } from "./utils.js";
import { isSomeoneLogIn } from "./utils.js";
import { getCurrentUserLogin } from "./utils.js";
import { getUserFullName } from "./utils.js";
import { getUserValueFromLocalStorage } from "./utils.js";



const buttonSubmit = document.getElementById('check_the_card_button'); 
const countersBlock = getSingleDomElementByClass('digital-card-counter-block'); 

export function digitalLibraryCardInit(){
	console.log("init digital card");
	fillDigitalCard();
}


function fillDigitalCard(){
	if(isSomeoneLogIn()){
		//fill name field
		const userLogin = getCurrentUserLogin();
		const userName = getUserFullName(userLogin);
		const visitsCounter = getUserValueFromLocalStorage(userLogin, 'authCounter');
		const bookCounter = getUserValueFromLocalStorage(userLogin, 'bookCounter');
		const cardNumber = getUserValueFromLocalStorage(userLogin, 'cardNumber');
		
		// //make smaller font for long name
		// if(userName.length >= 15){
		// 	getSingleDomElementByClass('modal_profile__username').classList.add('modal_profile__username-small-font')
		// }
		// else{
		// 	getSingleDomElementByClass('modal_profile__username').classList.add('modal_profile__username-normal-font')
		// }
		document.getElementById('reader-name-id').value = userName;
		document.getElementById('card-number').value = cardNumber;
		document.getElementById('dc-visitCounter-id').innerHTML = visitsCounter;
		document.getElementById('dc-bookCounter-id').innerHTML = bookCounter;
				
		buttonSubmit.classList.add('form-button-hide');
		countersBlock.classList.add('digital-card-counter-block-visible');

	}
}