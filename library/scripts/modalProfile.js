import { getCurrentUserLogin,
	 getSingleDomElementByClass,
	  getUserFullName,
	   getUserValueFromLocalStorage,
	    isSomeoneLogIn } from "./utils.js";

export function modalProfileInit(){

	//close-button for reg menu 
const modalProfileOverlay = document.querySelector('.modal_profile_overlay');
const modalProfileCloseButton = document.querySelector('.modal_profile-close_button');


modalProfileCloseButton.addEventListener('click', (event) =>{
	modalProfileOverlay.classList.remove('modal_profile_overlay-visible');
});
//close while clock on overlay
modalProfileOverlay.addEventListener('click', (event)=>{
	if(event.target === modalProfileOverlay){ //event include children of overlay (windows) so check if it overlay exactly
		modalProfileOverlay.classList.remove('modal_profile_overlay-visible');
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
		getSingleDomElementByClass('modal_profile-card-number').innerHTML = cardNumber;
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
	const modal_profile_overlay = document.querySelector(".modal_profile_overlay");
	fillModalProfile();
	modal_profile_overlay.classList.add('modal_profile_overlay-visible');
}

export function hideModalProfile(){
	const modal_profile_overlay = document.querySelector(".modal_profile_overlay");
	
	modal_profile_overlay.classList.remove('modal_profile_overlay-visible');
}
