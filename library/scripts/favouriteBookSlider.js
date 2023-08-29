import { showModalBuyCardOverlay } from "./modalBuyCard.js";
import { showModalLogin } from "./modalLogin.js";
import { isSomeoneLogIn } from "./utils.js";

export function createFavBooksSlider(){
	const seasons = document.getElementsByName('seasons-fav'); //get all radio button form
	const bookCards = document.querySelectorAll('.book-card')
	let currentSeason = 'winter';
	let previousSeason = '';
	let counterHiddenCostyl = 0;

	makeAllCardsInvisible()//make all card invisible in firstload
	makeFirstCardsVisible()//make first card visible
	//makeCardsVisible(); //make first card visible
	
	for(let i = 0; i < seasons.length; i++){ //add click event for every button
		seasons[i].addEventListener('click', (event) =>{
			getRadioButtonResult();
			makeCardsVisible();			
		})
	}

	function chekVisibillity(){
		counterHiddenCostyl = 0;
		for(let i = 0; i < bookCards.length; i++){
			if(bookCards[i].classList.contains('hidden-book-card')){
				counterHiddenCostyl++;
			}			
		}
		if(counterHiddenCostyl != 12 && counterHiddenCostyl != 0){
			console.log("alarm");
			makeCardsVisible();
		}
		//console.log("kostyl: " + counterHiddenCostyl);
	}


	function getRadioButtonResult(){ //get result from radio button
		for(let i = 0; i < seasons.length; i++){
		if(seasons[i].checked){
			
			previousSeason = currentSeason;
			currentSeason = seasons[i].value
			console.log("CurrentSeason: " + currentSeason + ", prev: " + previousSeason);
		}
	}
	}
	
	function makeCardsVisible(){
		let aa = 0;//!del
		let bb = 0;//!del

		setTimeout(chekVisibillity, 1300);

		// openNewCards(currentSeason);
		// hideOldCards(previousSeason);
		

		for(let i = 0; i < bookCards.length; i++){
		if(bookCards[i].classList.contains(`${currentSeason}-card`)){
			bookCards[i].classList.remove('hidden-book-card')
		//	console.log("remove hidden: " + i);
			//
			//bookCards[i].classList.add('visible-book-card')
			
		aa = setTimeout(function () {
				bookCards[i].classList.remove('visuallyhidden');
			  }, 1000);
			//  console.log("remove visualhidden: " + i);
			
		}
		else{
				//if(bookCards[i].classList.contains)	
				//bookCards[i].classList.remove('visible-book-card')
							
				bookCards[i].classList.add('visuallyhidden'); //make opasity 0 with transient
				///console.log("add visualhidden: " + i);
			bb	= setTimeout(function () {
					bookCards[i].classList.add('hidden-book-card');
				}, 1000);
				//  console.log("add hidden: " + i);
			}
		}
		console.log(aa + " " + bb);
	}

	function makeAllCardsInvisible(){
		for(let i = 0; i < bookCards.length; i++){
			bookCards[i].classList.add('hidden-book-card');
			bookCards[i].classList.add('visuallyhidden');
		}
	}
	function makeFirstCardsVisible(){
		for(let i = 0; i < bookCards.length; i++){
			if(bookCards[i].classList.contains(`${currentSeason}-card`)){
				bookCards[i].classList.remove('hidden-book-card');	
				bookCards[i].classList.remove('visuallyhidden');
			}
			
		}
	}
	//make button buy functional

	const modalBuyCardOpenButtons = document.querySelectorAll('.book_buy_btn')

	for (let i = 0; i < modalBuyCardOpenButtons.length; i++) {
		//make all by button open byCardMenu if user logged in
		
		modalBuyCardOpenButtons[i].addEventListener('click', (event)=>{
			if(isSomeoneLogIn()){			
				showModalBuyCardOverlay();
			}
			else{
				showModalLogin();
			}
		
		});
		
	}
}
	


	
	
