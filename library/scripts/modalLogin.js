
import { hideModalAuthUnlogged } from "./authorisationMenu.js";
import { showModalRegister } from "./registerMenu.js";
import { checkIfUserWasRegistered, getSingleDomElementByClass, getUserKeyFromLocalStorage, getUserValueFromLocalStorage, increaseCounterInLocalStorage} from "./utils.js";

const loginFormRegisterRef = getSingleDomElementByClass('login_form-register-ref');

export function loginForm(){
	//close login menu
	const loginFormOverlay = document.querySelector('.login_form-overlay');
	const loginFormCloseButton = document.querySelector('.login_form-close_button');
	
		//close-button for login menu
	loginFormCloseButton.addEventListener('click', (event) =>{
		hideModalLogin();	
		//loginFormOverlay.classList.remove('login_form-overlay-visible');
	});

	//close while click on overlay
	loginFormOverlay.addEventListener('click', (closeLogOverlay));

	function closeLogOverlay(event){
		if(event.target === loginFormOverlay){
				hideModalLogin();	
			//loginFormOverlay.classList.remove('login_form-overlay-visible');
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
			if(getUserValueFromLocalStorage(currentUser, 'password') === pass.value){
				localStorage.setItem('loggedInUser', `${currentUser}`) //make user login if it exist
			increaseCounterInLocalStorage(`${login.value}`, 'authCounter', 1);
			hideModalLogin();
			//reload after login, work only if wrap into setTimeOut()
			// setTimeout(function(){
			// 	window.location.reload();
			// },100); 
			
			}
			else{
				console.log('password incorrect');//!del
				event.preventDefault();//prevent submition of the form	
			}
			
		}
		else{
			console.log('No such registered user or password incorrect');//!del
			event.preventDefault();//prevent submition of the form	
		}
			
	});

	loginFormRegisterRef.addEventListener('click', (event)=>{
		hideModalLogin();
		showModalRegister();
	});
}

export function hideModalLogin(){
	getSingleDomElementByClass('login_form-overlay').classList.remove('login_form-overlay-visible');
	//restart scrolling
	document.body.classList.remove('body-stop-scrolling')

}


export function showModalLogin(){
	const loginFormOverlay = document.querySelector('.login_form-overlay');
		loginFormOverlay.classList.add('login_form-overlay-visible');
		//hide auth menu
		hideModalAuthUnlogged();
		//stop scrolling
		document.body.classList.add('body-stop-scrolling')
}

function testF(){
	console.log("debug");
};