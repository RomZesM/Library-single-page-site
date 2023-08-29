

export function ModalBuyCardInit(){
 
const modalBuyCardOverlay = document.querySelector('.modal_buy_card-overlay');
const modalBuyCardOpenButtons = document.querySelectorAll('.book_buy_btn')
const modalBuyCardCloseButton = document.querySelector('.modal_buy_card-close_button');



modalBuyCardCloseButton.addEventListener('click', (event)=>{
	modalBuyCardOverlay.classList.remove('modal_buy_card-overlay-visible')
});
modalBuyCardOverlay.addEventListener('click', (event)=>{
	if(event.target === modalBuyCardOverlay){
		modalBuyCardOverlay.classList.remove('modal_buy_card-overlay-visible')
	}
	
});

}

export function showModalBuyCardOverlay(){
	const modalBuyCardOverlay = document.querySelector('.modal_buy_card-overlay');
	modalBuyCardOverlay.classList.add('modal_buy_card-overlay-visible')
}

export function hideModalBuyCardOverlay(){
	const modalBuyCardOverlay = document.querySelector('.modal_buy_card-overlay');
	modalBuyCardOverlay.classList.remove('modal_buy_card-overlay-visible')
}