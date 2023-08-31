"strict mode"

import { sayHello } from "./1.js";
import { createCarousel } from "./about-carousel.js";
import { createFavBooksSlider } from "./favouriteBookSlider.js";
import { authorisationMenuInit } from "./authorisationMenu.js";
import { registerMenuInit } from "./registerMenu.js";
import { loginForm } from "./login.js";
import { checkIfKeyExistInLocalStorage } from "./utils.js";
import { modalProfileInit } from "./modalProfile.js";
import { modalBuyCardInit } from "./modalBuyCard.js";
import { modalBurgerMenuInit } from "./burgerMenu.js";
import { digitalLibraryCardInit } from "./digitalLibCard.js";



 console.log("HHHHHH");
 sayHello('bub');

//--------------Start Init-------------//

//start global variable inition //todo move into single file
if(!checkIfKeyExistInLocalStorage('loggedInUser')){
	localStorage.setItem('loggedInUser', '')
}

//save the last scroll position after reload //todo move into single file
document.addEventListener("DOMContentLoaded", function(event) { 
	var scrollpos = localStorage.getItem('scrollpos');
	if (scrollpos) {
		window.scrollTo(0, scrollpos);
		//localStorage.setItem('scrollpos', 0);
	}
});
addEventListener('scroll', (event) => {
	localStorage.setItem('scrollpos', window.scrollY);
});

//--------------------------------------//

createCarousel();
createFavBooksSlider();
//
//init burger menu
modalBurgerMenuInit();

//auth menu
authorisationMenuInit();

//regMenu
registerMenuInit();

//login form
loginForm(); 

//modal Profile window
modalProfileInit();

//modal buyCard init
modalBuyCardInit();

//
digitalLibraryCardInit();


//
