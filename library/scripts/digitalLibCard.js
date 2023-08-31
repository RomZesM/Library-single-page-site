import { checkIfKeyExistInLocalStorage, checkIfUserWasRegistered, getSimpleValueFromLocalStorage, getSingleDomElementByClass, getUserKeyFromLocalStorage } from "./utils.js";
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
		
		if(readerNameInput.value != '' && readerCardNumberInput.value != ''){
			if(checkIfUserWasRegistered(readerCardNumberInput.value.toLowerCase())){
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


				console.log("user founded by number: " + userKey	);
				console.log("get from local storage: " + userName +' ' + secondName);
				console.log(splitedNameFromInput);
			}
			
		}
		
	
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

function fillDigitalCardUnloginned(userLogin){
	if(!isSomeoneLogIn()){
		//fill name field
		
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

		setTimeout(function () {
			buttonSubmit.classList.remove('form-button-hide');
			countersBlock.classList.remove('digital-card-counter-block-visible');
		}, 10000);
	}
}