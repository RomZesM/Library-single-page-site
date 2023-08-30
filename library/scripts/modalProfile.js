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


}

export function fillModalProfile(){
	if(isSomeoneLogIn()){
		//fill name field
		const userLogin = getCurrentUserLogin();
		const userName = getUserFullName(userLogin);
		const visitsCounter = getUserValueFromLocalStorage(userLogin, 'authCount');
		
		//make smaller font for long name
		if(userName.length >= 15){
			getSingleDomElementByClass('modal_profile__username').classList.add('modal_profile__username-small-font')
		}
		else{
			getSingleDomElementByClass('modal_profile__username').classList.add('modal_profile__username-normal-font')
		}
		getSingleDomElementByClass('modal_profile__username').innerHTML = userName;
		getSingleDomElementByClass('counter_visit-counter').innerHTML = visitsCounter;
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
