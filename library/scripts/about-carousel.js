///carousel

import { getSingleDomElementByClass } from "./utils.js";


	
const track = document.querySelector('.about__images');
// const button01 = document.querySelector('.carousel-b1');
// const button02 = document.querySelector('.carousel-b2');
// const buttonCenter03 = document.querySelector('.carousel-b3');
// const button04 = document.querySelector('.carousel-b4');
// const button05 = document.querySelector('.carousel-b5');
// const arrowLeft = document.querySelector('.left_arrow_ico')
// const arrowRight = document.querySelector('.right_arrow_ico')

const allButtons = getSingleDomElementByClass('about').getElementsByTagName("button")

const gapBetweenPic = 25;
const itemWidth = 450;	
let position = 0; //start position

export function createCarousel(){
	
	
	allButtons.namedItem("carousel-b1-id").addEventListener('click', (event) =>{
		// position = (itemWidth * 2) + gapBetweenPic * 2;
		
		moveTrack(2,1)		
		enableAllButtonsExceptitself(allButtons.namedItem("carousel-b1-id"));
		disableLeftEdgeButtons();
	});

	allButtons.namedItem("carousel-b2-id").addEventListener('click', (event) =>{
		// position = (itemWidth) + gapBetweenPic;
		
		moveTrack(1,1)
		enableAllButtonsExceptitself(allButtons.namedItem("carousel-b2-id"));
	});

	allButtons.namedItem("carousel-b3-id").addEventListener('click', (event) =>{
		// position = 0;
		
		moveTrack(0,1)
		enableAllButtonsExceptitself(allButtons.namedItem("carousel-b3-id"));
	});

	allButtons.namedItem("carousel-b4-id").addEventListener('click', (event) =>{
		// position = -(itemWidth + gapBetweenPic);
		
		moveTrack(1,-1)
		enableAllButtonsExceptitself(allButtons.namedItem("carousel-b4-id"));
	});

	allButtons.namedItem("carousel-b5-id").addEventListener('click', (event) =>{
		// position = -(itemWidth * 2 + gapBetweenPic * 2);
		
		moveTrack(2,-1)	
		enableAllButtonsExceptitself(allButtons.namedItem("carousel-b5-id"));
		disableRightEdgeButtons();
		
	});
	
	allButtons.namedItem("left_arrow_ico-id").addEventListener('click', (event) => {
		if(position < 950){
			position = position + 475;
			track.style.transform = `translateX(${position}px)`;
			disableRoundButton();
			
		}
		if(position === 950){
			disableLeftEdgeButtons();
		}
		// else{
		// 	enableAllButtonsExceptitself(null);
		// }
				
		
		
	});

	allButtons.namedItem("right_arrow_ico-id").addEventListener('click', (event) => {
		if(position > -950){
			position = position - 475
			track.style.transform = `translateX(${position}px)`;
			disableRoundButton();
		
		}
		//disable/enable edge buttons
		if(position === -950){
			disableRightEdgeButtons();
		}
			
		
	});

	window.addEventListener('resize', () => { //that for tablet version
		if(screen.width < 770){
			position = 950;
			allButtons.namedItem("carousel-b1-id").click();
			//track.style.transform = `translateX(${position}px)`;
		}
		if(screen.width > 770){
			position = 0;
			allButtons.namedItem("carousel-b3-id").click();
			//track.style.transform = `translateX(${position}px)`;
			
		}
		
	});
	//click first button in page start
	allButtons.namedItem("carousel-b3-id").click();
}

function enableAllButtonsExceptitself(itself){
	
		for (let i = 0; i < allButtons.length; i++) {
			const element = allButtons[i];
			element.disabled = false;
			element.classList.remove('carusel-button-current');
		}
	
	if(itself != null){		
		//disable itself
		itself.disabled = true;
		itself.classList.add('carusel-button-current');
	}
}

function moveTrack(multiplier, sign){
	position = sign * ((itemWidth * multiplier) + gapBetweenPic * multiplier);
	track.style.transform = `translateX(${position}px)`;
	
}

function disableRightEdgeButtons(){
	allButtons.namedItem("carousel-b5-id").disabled = true;
	allButtons.namedItem("right_arrow_ico-id").disabled = true;
}
function disableLeftEdgeButtons(){
	allButtons.namedItem("carousel-b1-id").disabled = true;
	allButtons.namedItem("left_arrow_ico-id").disabled = true;
}

function disableRoundButton(){
	switch (position) {
		case 950:
			
			enableAllButtonsExceptitself(allButtons.namedItem("carousel-b1-id"));
			break;
		case 475:
			
			enableAllButtonsExceptitself(allButtons.namedItem("carousel-b2-id"));
			break;
		case 0:
			
			enableAllButtonsExceptitself(allButtons.namedItem("carousel-b3-id"));
			break;
		case -475:
			
			enableAllButtonsExceptitself(allButtons.namedItem("carousel-b4-id"));
			break;
		case -950:
			
			enableAllButtonsExceptitself(allButtons.namedItem("carousel-b5-id"));
			break;	
	}
}