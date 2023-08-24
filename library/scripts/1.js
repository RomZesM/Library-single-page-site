"strict mode"

export function sayHello(user){
	console.log(`Hello!!!, ${user}`);
}

export class Modal{
	constructor(classes){
		this.classes = classes;
	}

	buildModal(content){
		//modal
		this.modal = this.createDomNode(this.modal, 'div', this.classes)
	
		//modal-content
		this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content')
	
		//close button
		this.modalCloseButton = this.createDomNode(this.modalCloseButton, 'span', 'modal__close-icon')
		//insert code into HTML doc
		this.modalCloseButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M2 16.8507L17 2.00001" stroke="#0C0C0E" stroke-width="3"/><path d="M2 2.14928L17 17" stroke="#0C0C0E" stroke-width="3"/></svg>'
	
		this.setContent(content);
	}


	//universal Function for NoD creation
	createDomNode(node, element, ...classes){
		//example:
		// this.overlay = document.createElement('div);
		//-->
		node = document.createElement(element);
		node.classList.add(...classes);
		return node;
	}

	setContent(content){
		if(typeof content === 'string'){ 
			this.modalContent.innerHTML = content;
			}
		else{
			//add empty string instead of ?? 
			this.modalContent.innerHTML = '';//!! ---> разобраться с этим
			//add NODE into block
			this.modalContent.appendChild(content);//!! ---> разобраться с этим
		}
	}

	appendModalElements(){
		this.modal.append(this.modalCloseBtn);
		this.modal.append(this.modalContent);
	}

}

window.onload = function() {
	//generate test modal
	addTestModalWindow();


}
//по нажатию на кнопку (вешаем listener) должно сгенерироваться окно ?
function addTestModalWindow(){
	document.querySelector('test_button').addEventListener('click', () => {
		generateTestToolModal();
	})
};
//должно сгенерироваться само окно
function generateTestToolModal(){
	console.log("generate_tools_Modal")
};