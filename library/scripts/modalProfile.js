import { getCurrentUserLogin,
	 getSingleDomElementByClass,
	  getUserFullName,
	   getUserValueFromLocalStorage,
	    isSomeoneLogIn } from "./utils.js";

const modalProfileOverlay = document.querySelector('.modal_profile_overlay');
const modalProfileCloseButton = document.querySelector('.modal_profile-close_button');

export function modalProfileInit(){

	//close-button for reg menu 
modalProfileCloseButton.addEventListener('click', (event) =>{
		hideModalProfile()
});
//close while clock on overlay
modalProfileOverlay.addEventListener('click', (event)=>{
	if(event.target === modalProfileOverlay){ //event include children of overlay (windows) so check if it overlay exactly
		hideModalProfile()
	}

});
//init copy button
const copyButton = getSingleDomElementByClass('modal_profile-card-number-copyico');
const elementWithTextToCopy = getSingleDomElementByClass('modal_profile-card-number');

copyButton.addEventListener('click', (event ) =>{
	let txt = elementWithTextToCopy.textContent;
	navigator.clipboard.writeText(`${txt}`)
});

}

export function fillModalProfile(){
	if(isSomeoneLogIn()){
		//fill name field
		const userLogin = getCurrentUserLogin();
		const userName = getUserFullName(userLogin);
		const visitsCounter = getUserValueFromLocalStorage(userLogin, 'authCounter');
		const bookCounter = getUserValueFromLocalStorage(userLogin, 'bookCounter');
		const cardNumber = getUserValueFromLocalStorage(userLogin, 'cardNumber');
		
		//make smaller font for long name
		if(userName.length >= 15){
			getSingleDomElementByClass('modal_profile__username').classList.add('modal_profile__username-small-font')
		}
		else{
			getSingleDomElementByClass('modal_profile__username').classList.add('modal_profile__username-normal-font')
		}
		getSingleDomElementByClass('modal_profile__username').innerHTML = userName;
		getSingleDomElementByClass('counter_visit-counter').innerHTML = visitsCounter;
		getSingleDomElementByClass('counter_books-counter').innerHTML = bookCounter;
		getSingleDomElementByClass('modal_profile-card-number').innerHTML = cardNumber.toUpperCase();
		insertBooksIntoProfile();
	}
}


function insertBooksIntoProfile(){
	//<li><p class="rented-books-book-title">Dominicana, Angie Cruz</p></li>
	
	if(isSomeoneLogIn()){
		const booksList = getUserValueFromLocalStorage(getCurrentUserLogin(),'booksList');
		const htmlRentetBooksList = getSingleDomElementByClass('rented-books-list');
		let generatedList = ''
		for (let i = 0; i < booksList.length; i++) {
			const book = booksList[i];
			let li = `<li><p class="rented-books-book-title">${book}</p></li>`
			generatedList = generatedList.concat(' ', li);
			
		}
		htmlRentetBooksList.innerHTML = generatedList;
	}
	
}

export function clearModalProfile(){

}

export function showModalProfile(){

	//const modal_profile_overlay = document.querySelector(".modal_profile_overlay");
	fillModalProfile();
	modalProfileOverlay.classList.add('modal_profile_overlay-visible');
	//stop scrolling
	document.body.classList.add('body-stop-scrolling')
}

export function hideModalProfile(){
	//const modal_profile_overlay = document.querySelector(".modal_profile_overlay");
	
	modalProfileOverlay.classList.remove('modal_profile_overlay-visible');
	//restart scrolling
	document.body.classList.remove('body-stop-scrolling')
}
