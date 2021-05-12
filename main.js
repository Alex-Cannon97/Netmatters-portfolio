var i = 0;
var element = document.getElementsByClassName('text-effect')[0];
var txt = element.innerText; //at this point I want txt to be set to any corresponding text values with the class 'text-effect'
// im looking for txt to equal the content within any tag with the class text-effect
var speed = 100;

//variables for the menu button and adding functionality.
const button1 = document.getElementsByClassName('hid-btn')[0];
const button2 = document.getElementsByClassName('hid-btn-2')[0];
const menu = document.getElementsByClassName('side-nav')[0];
//let hidden = menu.style.visibility === 'hidden';

//variables coming up for the detail button.
const detailbtn = document.getElementsByClassName('details')[0];
const removebtn = document.getElementsByClassName('remove')[0];
const popup = document.getElementsByClassName('detail-pop-up')[0];


element.innerText = "";

function typeWriter(){
	if (i < txt.length){
		element.innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

window.addEventListener('load', typeWriter);


button1.onclick = function(){
	menu.classList.add('show-this-menu')
	console.log('working');
	button1.classList.add('hide-button')
	button2.classList.add('show-button')
	button2.classList.remove('hide-button')
	button1.classList.remove('show-button')
};

button2.onclick = function(){
	menu.classList.remove('show-this-menu')
	button2.classList.add('hide-button')
	button1.classList.add('show-button')
	button2.classList.remove('show-button')
	button1.classList.remove('hide-button')
};

detailbtn.onclick = function(){
	popup.classList.add('show-popup')
	detailbtn.classList.add('hide-btn')
	removebtn.classList.add('show-btn')
}

removebtn.onclick = function(){
	popup.classList.remove('show-popup')
	removebtn.classList.remove('show-btn')
	detailbtn.classList.remove('hide-btn')
}