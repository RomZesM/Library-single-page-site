import { showModalProfile } from "./modalProfile.js";
import { checkIfKeyExistInLocalStorage, checkIfUserWasRegistered, getSimpleValueFromLocalStorage, getSingleDomElementByClass, getUserKeyFromLocalStorage } from "./utils.js";
import { isSomeoneLogIn } from "./utils.js";
import { getCurrentUserLogin } from "./utils.js";
import { getUserFullName } from "./utils.js";
import { getUserValueFromLocalStorage } from "./utils.js";



const buttonSubmit = document.getElementById('check_the_card_button'); 
const buttonProfile = getSingleDomElementByClass('profile-ref-btn')
const countersBlock = getSingleDomElementByClass('digital-card-counter-block'); 
const libraryCardForm = getSingleDomElementByClass('check-card-form');
const readerNameInput = document.getElementById('reader-name-id');
const readerCardNumberInput = document.getElementById('card-number')
const suggestToLogInContainer = getSingleDomElementByClass('suggest-to-log-in-container');
const visitYourProfileContainer = getSingleDomElementByClass('visit-your-profile-container'); 


export function digitalLibraryCardInit(){
	
	fillDigitalCard();



	buttonSubmit.addEventListener('click', (event)=>{
		
		if(readerNameInput.value != '' && readerCardNumberInput.value != ''){

			
			if(checkIfUserWasRegistered(readerCardNumberInput.value.toLowerCase())){

				console.log("gg");

				let userKey = getUserKeyFromLocalStorage(readerCardNumberInput.value.toLowerCase())
				let userName = getUserValueFromLocalStorage(userKey, 'firstName')
				let secondName = getUserValueFromLocalStorage(userKey, 'secondName')
				let splitedNameFromInput = readerNameInput.value.toLowerCase().split(' ').filter((element)=> element != '') ;
				if(splitedNameFromInput.length === 2 || splitedNameFromInput.length === 1){
					if(splitedNameFromInput.length === 2){
						if(splitedNameFromInput[0] === userName && splitedNameFromInput[1] === secondName){
							fillDigitalCardUnloginned(userKey)
						}
					}
					if(splitedNameFromInput.length === 1){
						if(splitedNameFromInput[0] === userName){
							fillDigitalCardUnloginned(userKey)
						}

					}
				}
			}
			
		}	
	});

	buttonProfile.addEventListener('click', (element) =>{
			showModalProfile();
	});

}


export function fillDigitalCard(){
	if(isSomeoneLogIn()){
		//fill name field
		const userLogin = getCurrentUserLogin();
		const userName = getUserFullName(userLogin);
		const visitsCounter = getUserValueFromLocalStorage(userLogin, 'authCounter');
		const bookCounter = getUserValueFromLocalStorage(userLogin, 'bookCounter');
		const cardNumber = getUserValueFromLocalStorage(userLogin, 'cardNumber');
		

		readerNameInput.value = userName;
		readerCardNumberInput.value = cardNumber.toUpperCase();
		readerNameInput.classList.add('fields-after-login')
		readerCardNumberInput.classList.add('fields-after-login')
		document.getElementById('dc-visitCounter-id').innerHTML = visitsCounter;
		document.getElementById('dc-bookCounter-id').innerHTML = bookCounter;
				
		buttonSubmit.classList.add('form-button-hide');
		countersBlock.classList.add('digital-card-counter-block-visible');
		//change right part of digital cart section
		suggestToLogInContainer.classList.add('suggest-to-log-in-container-hide')
		visitYourProfileContainer.classList.add('visit-your-profile-container-visible')

	}
}

function fillDigitalCardUnloginned(userLogin){
	if(!isSomeoneLogIn()){
		//fill name field
		
		const userName = getUserFullName(userLogin);
		const visitsCounter = getUserValueFromLocalStorage(userLogin, 'authCounter');
		const bookCounter = getUserValueFromLocalStorage(userLogin, 'bookCounter');
		const cardNumber = getUserValueFromLocalStorage(userLogin, 'cardNumber');
		

		readerNameInput.value = userName;
		readerCardNumberInput.value = cardNumber.toUpperCase();
		readerNameInput.classList.add('fields-after-login')
		readerCardNumberInput.classList.add('fields-after-login')
		document.getElementById('dc-visitCounter-id').innerHTML = visitsCounter;
		document.getElementById('dc-bookCounter-id').innerHTML = bookCounter;
				
		buttonSubmit.classList.add('form-button-hide');
		countersBlock.classList.add('digital-card-counter-block-visible');
	

		setTimeout(function () {
			buttonSubmit.classList.remove('form-button-hide');
			countersBlock.classList.remove('digital-card-counter-block-visible');
			readerNameInput.value = '';
			readerCardNumberInput.value = '';
			
		}, 10000);
	}
}

