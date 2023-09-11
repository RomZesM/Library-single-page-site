import { fillDigitalCard } from "./digitalLibCard.js";
import { showModalBuyCardOverlay } from "./modalBuyCard.js";
import { showModalLogin } from "./modalLogin.js";
import { addBookIntoUserAccount, getCurrentUserLogin, getSingleDomElementByClass, getUserValueFromLocalStorage, increaseCounterInLocalStorage, isBookInUserBookList, isSomeoneLogIn } from "./utils.js";

const bookCards = document.querySelectorAll('.book-card');
const ownBtn = '<button class="button_small button_own" disabled>Own</button>';

export function createFavBooksSlider(){
	const seasons = document.getElementsByName('seasons-fav'); //get all radio button form
	//const bookCards = document.querySelectorAll('.book-card')
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
			console.log("alarm");//!del
			makeCardsVisible();
		}
	}


	function getRadioButtonResult(){ //get result from radio button
		for(let i = 0; i < seasons.length; i++){
		if(seasons[i].checked){
			
			previousSeason = currentSeason;
			currentSeason = seasons[i].value
			
		}
	}
	}
	
	function makeCardsVisible(){
		let aa = 0;//!del
		let bb = 0;//!del

		setTimeout(chekVisibillity, 1300);

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

	//make buttons buy functional
		
	//go through cards
	for (let i = 0; i < bookCards.length; i++) {
		let currentButton = bookCards[i].querySelector('.book-btn');	
		//create button dependin on book		
		createButtonInBookCard(bookCards[i])

		//make all by button open byCardMenu if user logged in
		currentButton.addEventListener('click', (event)=>{		
			
			
			if(isSomeoneLogIn()){	
				let isHaveAbonement = getUserValueFromLocalStorage(getCurrentUserLogin(), 'abonCard');	
				if(isHaveAbonement){
					//increase book counter
					increaseCounterInLocalStorage(getCurrentUserLogin(), 'bookCounter', 1);
					//change button
					currentButton.innerHTML = ownBtn;
					buyBook(bookCards[i]);
					//change counter in digital block section
					fillDigitalCard();
				}
				else{
					showModalBuyCardOverlay();
				}					
			}
			else{
				showModalLogin();
			}
		
		});
		
	}
}

function buyBook(bookCard){
	
	// let bookTitle = bookCard.querySelector('.book_title').innerText;
	// let author = bookCard.querySelector('.book_author').innerText.slice(3);
	// let book = bookTitle + ', ' + author;
	let book = createBook(bookCard);
	addBookIntoUserAccount(getCurrentUserLogin(), book)
	//console.log("Buy: " + book);
}

function createBook(bookCard){
	let bookTitle = bookCard.querySelector('.book_title').innerText.toLowerCase();
	let author = bookCard.querySelector('.book_author').innerText.slice(3).toLowerCase();
	let book = bookTitle + ', ' + author;
	return book;
}

function createButtonInBookCard(bookCard){
	let ownBtn = '<button class="button_small button_own" disabled>Own</button>'
	let buyBtn = '<button class="button_bordered button_small button_black book_buy_btn">Buy</button>'
	let currentButton = bookCard.querySelector('.book-btn');	
	if(isSomeoneLogIn){
		if(!isBookInUserBookList(getCurrentUserLogin(), createBook(bookCard))){
			currentButton.innerHTML = buyBtn;
		}
		else{
			currentButton.innerHTML = ownBtn;				
		}
	}
	else
		currentButton.innerHTML = buyBtn;

}
	
	
