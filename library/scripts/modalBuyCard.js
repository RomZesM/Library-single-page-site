
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
	console.log("debug: " + e.target.id);
	switch (e.target.id) {
		case 'ccf-label-bank-card-number-id':
				validationFieldsMap.set(`${e.target.id}`,`${e.target.value}`)
				formVlidator()
				break;
		case 'ccf-expiration-code-id1':
			validationFieldsMap.set(`${e.target.id}`,`${e.target.value}`)
				formVlidator()
				break;
		case 'ccf-expiration-code-id2':
				validationFieldsMap.set(`${e.target.id}`,`${e.target.value}`)
				formVlidator()
				break;
		case 'ccf-cvc-id':
				validationFieldsMap.set(`${e.target.id}`,`${e.target.value}`)
				formVlidator()
				break;
		case 'ccf-cardholder-id':
				validationFieldsMap.set(`${e.target.id}`,`${e.target.value}`)
				formVlidator()
				break;
		case 'ccf-postal-code-id':
				validationFieldsMap.set(`${e.target.id}`,`${e.target.value}`)
				formVlidator()
				break;
		case 'ccf-city-id':
				validationFieldsMap.set(`${e.target.id}`,`${e.target.value}`)
				formVlidator()
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

function formVlidator(){
	let validate = false;

	
	if(checkValueMap()){ //check  map with input value every time while
						//user print something in input fields
		validate = true;
	}

	if(validate){
		submitButton.classList.remove('disabled-button');
		submitButton.disabled = false;

	}
}	

function checkValueMap(){
	//todo we cann add all other validetion rules here
	//now it jyst check if all fields are in map
	console.log(validationFieldsMap);
	return (validationFieldsMap.size === 7);
}

function isFieldEmpty(value){
	return value === '' ? true : false;
	
}

function isBetween(length, min, max){
	 return length < min || length > max ? false : true;
}


