"strict mode"

// console.log("Итогова оценка - 100") 
// console.log("1. Вёрстка валидная +10")
// console.log("2 Вёрстка семантическая +16")
// console.log("Вёрстка соответствует макету **+54**")
// console.log("- блок `<header>` +8:\n- секция `Welcome` +4.\n- секция `About` +6;\n")
// console.log("- секция `Favorites` +8\n- секция `CoffeShop` +6\n- секция `Contacts` +6\n- секция `LibraryCard` +8\n- блок `<footer>` +8\n")
// console.log("4. Общие требования к верстке +20\n")


// function hello(){
// 	console.log("Hello!");
// 	addTagsClickHandler();
// 	getColletion();
// 	//getColletion2();
// }

// const addTagsClickHandler = () =>{
// 	document.querySelector('.about__carousel, .about__images').addEventListener('click', (e) => {
// 		console.log(e);
// 	})
// }

// function getColletion(){
// 	for(let i = 0; i < document.body.childNodes.length; i++){
// 		console.log(document.body.childNodes[i]);
// 	}
// }
// function getColletion2(){
// 	for(let i = 0; i < document.body.header.childNodes.length; i++){
// 		console.log(document.body.header.childNodes[i]);
// 	}
// }


//window.onload = hello();

const burger = document?.querySelector('.burger_icon'); //get .class from DOM
const nav_menu = document?.querySelector('.navigation')
const body = document?.querySelector('body')


console.log(burger);
console.log("----------------------------------------------")
console.log(nav_menu);

burger.addEventListener('click', () => { //when we CLICK on burger
	nav_menu?.classList.toggle('navigation--visible'); //add some another class
													//in css make navigation-visible display=none	
	burger?.classList.toggle('burger--active-animate');

	body?.classList.toggle('stop-scroll') //add for body to stop scroll while menu is visible
});





