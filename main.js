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
const detailBtn = document.querySelector('.details');
const modal = document.querySelector('#myModal')
const modalClose = document.querySelector('.closer-btn')
const popup = document.getElementsByClassName('detail-pop-up')[0];
const accordionBtn = document.querySelector('.accordion-btn');
const accordionOverlay = document.querySelector('.acc-overlay');
const secondAccordionBtn = document.querySelector('.accordion-btn2')
const secondAccordionOverlay = document.querySelector('.acc-overlay2')

//variables for the SQL table expansion modal.
const expandBtn = document.querySelector('.Expand')
const overlayImage = document.querySelector('.hidden-img-overlay')

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
	menu.classList.add('show-this-menu');
	console.log('working');
	button1.classList.add('hide-button');
	button2.classList.add('show-button');
	button2.classList.remove('hide-button');
	button1.classList.remove('show-button');
};

button2.onclick = function(){
	menu.classList.remove('show-this-menu');
	button2.classList.add('hide-button');
	button1.classList.add('show-button');
	button2.classList.remove('show-button');
	button1.classList.remove('hide-button');
};

function check(){
	if (accordionBtn != null) {
		accordionBtn.onclick = function(){
	accordionOverlay.classList.toggle('show-example');
	console.log('btn working');
		}
	}
}
 check()

function check2(){
	if (secondAccordionBtn != null) {
		secondAccordionBtn.onclick = function(){
	secondAccordionOverlay.classList.toggle('show-example');
	console.log('btn working');
		}
	}
}
 check2()



function modalPop(){
if (detailBtn != null) {
detailBtn.onclick = function(){
modal.style.display = "block";
console.log("modal should work")
}
}
}
modalPop()

function modalCheck(){
	if(modalClose != null){
modalClose.onclick = function(){
	modal.style.display = "none";
}
}
}

modalCheck()

function tableExpand(){
	if (expandBtn != null){
		expandBtn.onclick = function(){
			overlayImage.style.display = "block";
		}
	}
}

tableExpand()

function closeTable(){
	if(overlayImage !=null){
		overlayImage.onclick = function(){
			overlayImage.style.display = "none";
		}
	}
}

closeTable()

window.onclick = function(event){
	if (event.target == modal){
		modal.style.display = "none";
	}
}


$('.acc-title').on("click", function(){
	let accord = $(".accordion");
	if(!open){
		$(accord).slideDown(400);
		open = true;
	}else{
		$(accord).slideUp(400);
		open = false;
	}
});

$('.acc-title2').on("click", function(){
	let accord = $(".accordion2");
	if(!open){
		$(accord).slideDown(400);
		open = true;
	}else{
		$(accord).slideUp(400);
		open = false;
	}
});
