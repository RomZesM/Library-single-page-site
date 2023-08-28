"strict mode"
import { checkIfKeyExistInLocalStorage } from "./utils.js";




export function loginForm(){
	//close login menu
	const loginFormOverlay = document.querySelector('.login_form-overlay');
	const loginFormCloseButton = document.querySelector('.login_form-close_button');
	
		//close-button for login menu
	loginFormCloseButton.addEventListener('click', (event) =>{
		loginFormOverlay.classList.remove('login_form-overlay-visible');
	});

	//close while click on overlay
	loginFormOverlay.addEventListener('click', (closeLogOverlay));

	function closeLogOverlay(event){
		if(event.target === loginFormOverlay){
				loginFormOverlay.classList.remove('login_form-overlay-visible');
		}
	}



	const loginForm = document.querySelector('.login_form');
	let login = {};
	let pass = {};

	loginForm.addEventListener('submit', (event) => {
		if(checkIfKeyExistInLocalStorage)
		login = loginForm.elements[0]; //get first field from form
		pass = loginForm.elements[1]; //get second field from form
		
		if(checkIfKeyExistInLocalStorage(login.value)){
			localStorage.setItem('loggedInUser', `${login.value}`) //make user login if it exist
		}
		
		//localStorage.setItem(`${login.value}`, `${pass.value}` );
		
		//localStorage.setItem('login', 'aa@hm.ru');
	});
}