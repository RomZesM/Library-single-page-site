import { checkIfKeyExistInLocalStorage, getSingleDomElementByClass } from "./utils.js";
import { isSomeoneLogIn } from "./utils.js";
import { getCurrentUserLogin } from "./utils.js";
import { getUserFullName } from "./utils.js";
import { getUserValueFromLocalStorage } from "./utils.js";



const buttonSubmit = document.getElementById('check_the_card_button'); 
const countersBlock = getSingleDomElementByClass('digital-card-counter-block'); 
const libraryCardForm = getSingleDomElementByClass('check-card-form');
const readerNameInput = document.getElementById('reader-name-id');
const readerCardNumberInput = document.getElementById('card-number')

export function digitalLibraryCardInit(){
	console.log("init digital card");
	fillDigitalCard();



	buttonSubmit.addEventListener('click', (event)=>{
		
		if(readerNameInput.value != '' && readerCardNumberInput.value != '')
		console.log(readerNameInput.value)
		console.log(readerCardNumberInput.value)
		if(readerNameInput.value === '')
			console.log('empty');
		//let userName = 
		checkIfKeyExistInLocalStorage()
	});

}


function fillDigitalCard(){
	if(isSomeoneLogIn()){
		//fill name field
		const userLogin = getCurrentUserLogin();
		const userName = getUserFullName(userLogin);
		const visitsCounter = getUserValueFromLocalStorage(userLogin, 'authCounter');
		const bookCounter = getUserValueFromLocalStorage(userLogin, 'bookCounter');
		const cardNumber = getUserValueFromLocalStorage(userLogin, 'cardNumber');
		

		readerNameInput.value = userName;
		readerCardNumberInput.value = cardNumber;
		document.getElementById('dc-visitCounter-id').innerHTML = visitsCounter;
		document.getElementById('dc-bookCounter-id').innerHTML = bookCounter;
				
		buttonSubmit.classList.add('form-button-hide');
		countersBlock.classList.add('digital-card-counter-block-visible');

	}
}