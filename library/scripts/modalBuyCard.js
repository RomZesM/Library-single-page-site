
import { getCurrentUserLogin, getSingleDomElementByClass, setUserFieldInLocalstorage } from "./utils.js";

const modalBuyCardOverlay = document.querySelector('.modal_buy_card-overlay');
const modalBuyCardOpenButtons = document.querySelectorAll('.book_buy_btn')
const modalBuyCardCloseButton = document.querySelector('.modal_buy_card-close_button');
const form = getSingleDomElementByClass('credit-card-form');
const submitButton = document.getElementById('buy-card-button');
let validationFieldsMap = new Map();

export function modalBuyCardInit(){
 
// const modalBuyCardOverlay = document.querySelector('.modal_buy_card-overlay');
// const modalBuyCardOpenButtons = document.querySelectorAll('.book_buy_btn')
// const modalBuyCardCloseButton = document.querySelector('.modal_buy_card-close_button');
// const form = getSingleDomElementByClass('credit-card-form');


modalBuyCardCloseButton.addEventListener('click', (event)=>{
	modalBuyCardOverlay.classList.remove('modal_buy_card-overlay-visible')
});
modalBuyCardOverlay.addEventListener('click', (event)=>{
	if(event.target === modalBuyCardOverlay){
		modalBuyCardOverlay.classList.remove('modal_buy_card-overlay-visible')
	}
	
});
//start validation checker, add listener to all input in form?

form.addEventListener('input', debounce(function (e) {
	//todo use some array and cyckle here
								
	switch (e.target.id) {
		case 'ccf-label-bank-card-number-id':
				 //e.target.insertAdjacentHTML('afterend', '<small class="test">Sample Div</small>'); //! !todo сделать всплывающие сообщения
				validationFieldsMap.set(`${e.target.id}`,`${e.target.value}`)
				formValidator()
				break;
		case 'ccf-expiration-code-id1':
			validationFieldsMap.set(`${e.target.id}`,`${e.target.value}`)
				formValidator()
				break;
		case 'ccf-expiration-code-id2':
				validationFieldsMap.set(`${e.target.id}`,`${e.target.value}`)
				formValidator()
				break;
		case 'ccf-cvc-id':
				validationFieldsMap.set(`${e.target.id}`,`${e.target.value}`)
				formValidator()
				break;
		case 'ccf-cardholder-id':
				validationFieldsMap.set(`${e.target.id}`,`${e.target.value}`)
				formValidator()
				break;
		case 'ccf-postal-code-id':
				validationFieldsMap.set(`${e.target.id}`,`${e.target.value}`)
				formValidator()
				break;
		case 'ccf-city-id':
				validationFieldsMap.set(`${e.target.id}`,`${e.target.value}`)
				formValidator()
				break;		
	}
}));


}



export function showModalBuyCardOverlay(){
	const modalBuyCardOverlay = document.querySelector('.modal_buy_card-overlay');
	modalBuyCardOverlay.classList.add('modal_buy_card-overlay-visible')
}

export function hideModalBuyCardOverlay(){
	const modalBuyCardOverlay = document.querySelector('.modal_buy_card-overlay');
	modalBuyCardOverlay.classList.remove('modal_buy_card-overlay-visible')
}


//validator

form.addEventListener('submit', function (event){
		console.log("form validated");
		setUserFieldInLocalstorage(getCurrentUserLogin(), 'abonCard', true);
		hideModalBuyCardOverlay();

});

//function that delay checking input in form //!todo разобраться как это работает https://www.javascripttutorial.net/javascript-dom/javascript-debounce/
const debounce = (fn, delay = 300) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

function formValidator(){
	let validate = false;

	
	if(checkValueMap()){ //check  map with input value every time while
						//user print something in input fields
		validate = true;
	}

	if(validate){
		submitButton.classList.remove('disabled-button');
		submitButton.disabled = false;
	}
	else{
		submitButton.classList.add('disabled-button');
		submitButton.disabled = true;
	}
}	

function checkValueMap(){
	let validate = false;
	let validationPunkts = 0;
	//todo we can add all other validфtion rules here
	//check card.number
	if(validateDigitField(validationFieldsMap.get('ccf-label-bank-card-number-id'))){
		validationPunkts++;
	}
	//validate exp code
	if(validateDigitField(validationFieldsMap.get('ccf-expiration-code-id1'))
	&& validateDigitField(validationFieldsMap.get('ccf-expiration-code-id2'))){
		validationPunkts++;
	}
	//validate cvc
	if(validateDigitField(validationFieldsMap.get('ccf-cvc-id'))){
		validationPunkts++;
	}

	//check if all fields are filled
	if(validationFieldsMap.size === 7){
		validationPunkts++;
	}

	if(validationPunkts === 4){
		validate = true;
	}
	console.log("is validate: " + validate + " has punkts: " + validationPunkts);
	return validate;
}

function validateDigitField(stringToValidate){
	if(stringToValidate != undefined && isDigit(stringToValidate)){
		return true;
	}
	else{
		return false;
	}
	
}


function isFieldEmpty(value){
	return value === '' ? true : false;
	
}

function isBetween(length, min, max){
	 return length < min || length > max ? false : true;
}

function isDigit(string){
	if(string.match(/^[0-9]+$/) != null){
		return true
	}
	else
		return false
}

