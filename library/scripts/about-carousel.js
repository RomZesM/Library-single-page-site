///carousel
export function createCarousel(){
	let position = 0; //start position
	let gapBetweenPic = 25;
	//const slidesToShow = 3;
	const itemWidth = 450;
	//const slidesToScroll = 1;

	//const container = document.querySelector('.about-images_container');
	const track = document.querySelector('.about__images');
	//const itemsPictures = document.querySelectorAll('.about__images-item');
	const button01 = document.querySelector('.carousel-b1');
	const button02 = document.querySelector('.carousel-b2');
	const buttonCenter03 = document.querySelector('.carousel-b3');
	const button04 = document.querySelector('.carousel-b4');
	const button05 = document.querySelector('.carousel-b5');
	const arrowLeft = document.querySelector('.left_arrow_ico')
	const arrowRight = document.querySelector('.right_arrow_ico')

	//const itemCount = itemsPictures.length; //get a quantity of pictures 
	//const itemWidth = (container.clientWidth - gapBetweenPic * 2) / slidesToShow; //calculate image size (cotainer - gap)
	
	button01.addEventListener('click', (event) =>{
		position = (itemWidth * 2) + gapBetweenPic * 2;
		track.style.transform = `translateX(${position}px)`;		
	});

	button02.addEventListener('click', (event) =>{
		position = (itemWidth) + gapBetweenPic;
		track.style.transform = `translateX(${position}px)`;		
	});

	buttonCenter03.addEventListener('click', (event) =>{
		position = 0;
		track.style.transform = `translateX(${position}px)`;		
	});

	button04.addEventListener('click', (event) =>{
		position = -(itemWidth + gapBetweenPic);
		track.style.transform = `translateX(${position}px)`;
	});

	button05.addEventListener('click', (event) =>{
		position = -(itemWidth * 2 + gapBetweenPic * 2);
		track.style.transform = `translateX(${position}px)`;
		
	});

	
	arrowLeft.addEventListener('click', (event) => {
		if(position < 950){
			position = position + 475
		}		
		track.style.transform = `translateX(${position}px)`;
		
	});

	arrowRight.addEventListener('click', (event) => {
		if(position > -950){
			position = position - 475
		}
		track.style.transform = `translateX(${position}px)`;
		
	});

		window.addEventListener('resize', () => { //thah for tablet version
			if(screen.width < 770){
				position = 950;
				track.style.transform = `translateX(${position}px)`;
			}
			if(screen.width > 770){
				position = 0;
				track.style.transform = `translateX(${position}px)`;
			}
			
		});

	
}