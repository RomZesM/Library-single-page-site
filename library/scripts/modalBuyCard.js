export function ModalBuyCardInit(){
 
const modalBuyCardOverlay = document.querySelector('.modal_buy_card-overlay');
const modalBuyCardOpenButtons = document.querySelectorAll('.book_buy_btn')
const modalBuyCardCloseButton = document.querySelector('.modal_buy_card-close_button');

for (let i = 0; i < modalBuyCardOpenButtons.length; i++) {
	//make all by button open byCardMenu
	modalBuyCardOpenButtons[i].addEventListener('click', (event)=>{
		modalBuyCardOverlay.classList.add('modal_buy_card-overlay-visible')
	});
	
}

modalBuyCardCloseButton.addEventListener('click', (event)=>{
	modalBuyCardOverlay.classList.remove('modal_buy_card-overlay-visible')
});
modalBuyCardOverlay.addEventListener('click', (event)=>{
	if(event.target === modalBuyCardOverlay){
		modalBuyCardOverlay.classList.remove('modal_buy_card-overlay-visible')
	}
	
});

}