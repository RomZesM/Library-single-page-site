
import { showModalRegister } from "./registerMenu.js";
import { checkIfUserWasRegistered, getSingleDomElementByClass, getUserKeyFromLocalStorage, increaseCounterInLocalStorage} from "./utils.js";

const loginFormRegisterRef = getSingleDomElementByClass('login_form-register-ref');


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
		login = loginForm.elements[0]; //get first field from form
		pass = loginForm.elements[1]; //get second field from form
				
		if(checkIfUserWasRegistered(login.value.toLowerCase())){
			let currentUser = getUserKeyFromLocalStorage(login.value.toLowerCase());
			localStorage.setItem('loggedInUser', `${currentUser}`) //make user login if it exist
			increaseCounterInLocalStorage(`${login.value}`, 'authCounter', 1);
			hideModalLogin();
			//reload after login, work only if wrap into setTimeOut()
			setTimeout(function(){
				window.location.reload();
			},100); 
			
		}	
	});

	loginFormRegisterRef.addEventListener('click', (event)=>{
		hideModalLogin();
		showModalRegister();
	});
}

export function hideModalLogin(){
	getSingleDomElementByClass('login_form-overlay').classList.remove('login_form-overlay-visible');


}