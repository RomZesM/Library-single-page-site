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