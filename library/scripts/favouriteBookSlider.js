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
		let buff = 0;

		for(let i = 0; i < bookCards.length; i++){
		if(bookCards[i].classList.contains(`${currentSeason}-card`)){
			bookCards[i].classList.remove('hidden-book-card')
			//
			//bookCards[i].classList.add('visible-book-card')
			setTimeout(function () {
				bookCards[i].classList.remove('visuallyhidden');
			  }, 1000);
			  console.log("dddd: " + i);
		}
		else{
			if(bookCards[i].classList.contains)	
			//bookCards[i].classList.remove('visible-book-card')
			//
			buff = bookCards[i];
			buff.classList.add('visuallyhidden'); //make opasity 0 with transient
			setTimeout(function () {
				bookCards[i].classList.add('hidden-book-card');
			  }, 1000);
			  console.log("dddd: " + i);
			
			// buff.addEventListener("transitionend", (e)=> {
			// 	console.log("eeeee: " + i);
			// 	buff.classList.add('hidden-book-card')
			// });
		
		
		}
			
	}
	}
	
	
	
}