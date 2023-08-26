export function createFavBooksSlider(){
	const seasons = document.getElementsByName('seasons-fav'); //get all radio button form
	const bookCards = document.querySelectorAll('.book-card')
	let currentSeason = 'winter';
	makeCardsVisible(); //make first card visible
	
	for(let i = 0; i < seasons.length; i++){ //add click event for every button
		seasons[i].addEventListener('click', (event) =>{
			getRadioButtonResult();
			makeCardsVisible();
		})
	}


	function getRadioButtonResult(){ //get result from radio button
		for(let i = 0; i < seasons.length; i++){
		if(seasons[i].checked){
			
			currentSeason = seasons[i].value
			console.log("CurrentSeason: " + currentSeason);
		}
	}
	}
	
	function makeCardsVisible(){
		for(let i = 0; i < bookCards.length; i++){
		if(bookCards[i].classList.contains(`${currentSeason}-card`)){
			bookCards[i].classList.remove('invisible-book-card')
			bookCards[i].classList.add('visible-book-card')
			console.log("BOOK");
		}
		else{
			bookCards[i].classList.remove('visible-book-card')
			bookCards[i].classList.add('invisible-book-card')
		}
			
	}
	}
	
	
	
}