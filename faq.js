// PARALLAX SCROLL HEADER //

let text = document.getElementById('text');

let butterflies = document.getElementById('butterflies');
let butterflies1 = document.getElementById('butterflies1');

let back = document.getElementById('back');
let actioncounter = document.getElementById('actioncounter');

let plants = document.getElementById('plants');
let turtle = document.getElementById('turtle');
let fish = document.getElementById('fish');
let piles1 = document.getElementById('piles1');
let piles2 = document.getElementById('piles2');


window.addEventListener('scroll', () => {
 let value = window.scrollY;
 
 text.style.top = 50 + value * -0.5 + '%';
 butterflies.style.top = value * -1 + 'px';
 butterflies.style.left = value * 1 + 'px';
 butterflies1.style.top = value * -1.02 + 'px';
 butterflies1.style.left = value * 1.025 + 'px';
 actioncounter.style.marginTop = value * -0.025 + 'px';
 back.style.top = value * -0.15 + 'px';
 plants.style.top = value * 0.025 + 'px';
 fish.style.left = value * 0.55 + 'px';
 turtle.style.left = value * -0.5 + 'px';
 piles1.style.left = value * -3 + 'px';
 piles2.style.left = value * 3 + 'px'; 
 });
// PARALLAX PORTRAIT SCROLL HEADER //

let textphone = document.getElementById('textphone');
let bird1phone = document.getElementById('bird1phone');
let bird2phone = document.getElementById('bird2phone');

let cloudphone = document.getElementById('cloudphone');

let sunphone = document.getElementById('sunphone');
let backphone = document.getElementById('backphone');

let plantsphone = document.getElementById('plantsphone');
let turtlephone = document.getElementById('turtlephone');
let fishphone = document.getElementById('fishphone');
let piles1phone = document.getElementById('piles1phone');
let piles2phone = document.getElementById('piles2phone');
let waterphone = document.getElementById('waterphone');

window.addEventListener('scroll', () => {
 let valuephone = window.scrollY;
 
 textphone.style.top = 20 + valuephone * -0.5 + '%';
 bird1phone.style.top = valuephone * -1.5 + 'px';
 bird1phone.style.left = valuephone * -2 + 'px';
 bird2phone.style.top = valuephone * -1.5 + 'px';
 bird2phone.style.left = valuephone * 5 + 'px';
 
 cloudphone.style.left = valuephone * -1 + 'px';
 
 sunphone.style.left = valuephone * 0.5 + 'px';
 sunphone.style.top = valuephone * 0.25 + 'px';
 
 backphone.style.top = valuephone * -0.15 + 'px';
 plantsphone.style.top = valuephone * 0.025 + 'px';
 fishphone.style.left = valuephone * 0.5 + 'px';
 turtlephone.style.left = valuephone * -0.5 + 'px';
 piles1phone.style.left = valuephone * -3 + 'px';
 piles2phone.style.left = valuephone * 3 + 'px'; 
 });

//MENU BURGER ANIMATION //
const menuAnim = document.querySelector('.menu-toggle');
let openMenu = false;
menuAnim.addEventListener('click', () => {
	if(!openMenu) {
		menuAnim.classList.add('open');
		openMenu = true;
	} else {
		menuAnim.classList.remove('open');
		openMenu = false;
	}
});

//COUNTDOWN//////////////////////////////////////////////////////////
let countDate = new Date('September 18, 2021 10:00:00').getTime();
function newYear(){
	let currentTime = new Date().getTime();
	let gapTime = countDate - currentTime;
		let seconds = 1000;
		let minutes = seconds * 60;
		let hours = minutes * 60;
		let days = hours * 24;

	let daysCount = Math.floor(gapTime / (days));
	let hoursCount = Math.floor((gapTime % (days)) / (hours));
	let minutesCount = Math.floor((gapTime % (hours)) / (minutes));
	let secondsCount = Math.floor((gapTime % (minutes)) / seconds);

	document.getElementById('days').innerText = daysCount;
	document.getElementById('hours').innerText = hoursCount;
	document.getElementById('minutes').innerText = minutesCount;
	document.getElementById('seconds').innerText = secondsCount;
}
setInterval (function(){
	newYear();
},1000);




// SHOW HIDE ANSWERS //
const question1 = document.getElementById('question-1');
const question2 = document.getElementById('question-2');
const question3 = document.getElementById('question-3');
const question4 = document.getElementById('question-4');
const question5 = document.getElementById('question-5');
const question6 = document.getElementById('question-6');
const question7 = document.getElementById('question-7');
const question8 = document.getElementById('question-8');
const answer1 = document.getElementById('question-1-text');
const answer2 = document.getElementById('question-2-text');
const answer3 = document.getElementById('question-3-text');
const answer4 = document.getElementById('question-4-text');
const answer5 = document.getElementById('question-5-text');
const answer6 = document.getElementById('question-6-text');
const answer7 = document.getElementById('question-7-text');
const answer8 = document.getElementById('question-8-text');


question1.onclick = function(){
	answer1.style.display = "block";
	answer2.style.display = "none";	
	answer3.style.display = "none";	
	answer4.style.display = "none";	
	answer5.style.display = "none";	
	answer6.style.display = "none";	
	answer7.style.display = "none";	
	answer8.style.display = "none";		
	question1.style.opacity = "1";
	question1.style.transform = "scale(1.1)";
	question2.style.opacity = "0.5";
	question2.style.transform = "scale(1)";	
	question3.style.opacity = "0.5";
	question3.style.transform = "scale(1)";		
	question4.style.opacity = "0.5";
	question4.style.transform = "scale(1)";		
	question5.style.opacity = "0.5";
	question5.style.transform = "scale(1)";		
	question6.style.opacity = "0.5";	
	question6.style.transform = "scale(1)";	
	question7.style.opacity = "0.5";
	question7.style.transform = "scale(1)";	
	question8.style.opacity = "0.5";
	question8.style.transform = "scale(1)";	
}
question2.onclick = function(){
	answer1.style.display = "none";
	answer2.style.display = "block";
	answer3.style.display = "none";	
	answer4.style.display = "none";	
	answer5.style.display = "none";	
	answer6.style.display = "none";	
	answer7.style.display = "none";	
	answer8.style.display = "none";		
	question1.style.opacity = "0.5";
	question1.style.transform = "scale(1)";
	question2.style.opacity = "1";
	question2.style.transform = "scale(1.1)";	
	question3.style.opacity = "0.5";
	question3.style.transform = "scale(1)";		
	question4.style.opacity = "0.5";
	question4.style.transform = "scale(1)";		
	question5.style.opacity = "0.5";
	question5.style.transform = "scale(1)";		
	question6.style.opacity = "0.5";	
	question6.style.transform = "scale(1)";	
	question7.style.opacity = "0.5";
	question7.style.transform = "scale(1)";	
	question8.style.opacity = "0.5";
	question8.style.transform = "scale(1)";	
}
question3.onclick = function(){
	answer1.style.display = "none";
	answer2.style.display = "none";	
	answer3.style.display = "block";	
	answer4.style.display = "none";	
	answer5.style.display = "none";	
	answer6.style.display = "none";	
	answer7.style.display = "none";	
	answer8.style.display = "none";		
	question1.style.opacity = "0.5";
	question1.style.transform = "scale(1)";
	question2.style.opacity = "0.5";
	question2.style.transform = "scale(1)";	
	question3.style.opacity = "1";
	question3.style.transform = "scale(1.1)";		
	question4.style.opacity = "0.5";
	question4.style.transform = "scale(1)";		
	question5.style.opacity = "0.5";
	question5.style.transform = "scale(1)";		
	question6.style.opacity = "0.5";	
	question6.style.transform = "scale(1)";	
	question7.style.opacity = "0.5";
	question7.style.transform = "scale(1)";	
	question8.style.opacity = "0.5";
	question8.style.transform = "scale(1)";	
}
question4.onclick = function(){
	answer1.style.display = "none";
	answer2.style.display = "none";	
	answer3.style.display = "none";	
	answer4.style.display = "block";	
	answer5.style.display = "none";	
	answer6.style.display = "none";	
	answer7.style.display = "none";	
	answer8.style.display = "none";	
	question1.style.opacity = "0.5";
	question1.style.transform = "scale(1)";
	question2.style.opacity = "0.5";
	question2.style.transform = "scale(1)";	
	question3.style.opacity = "0.5";
	question3.style.transform = "scale(1)";		
	question4.style.opacity = "1";
	question4.style.transform = "scale(1.1)";		
	question5.style.opacity = "0.5";
	question5.style.transform = "scale(1)";		
	question6.style.opacity = "0.5";	
	question6.style.transform = "scale(1)";	
	question7.style.opacity = "0.5";
	question7.style.transform = "scale(1)";	
	question8.style.opacity = "0.5";
	question8.style.transform = "scale(1)";		
}
question5.onclick = function(){
	answer1.style.display = "none";
	answer2.style.display = "none";	
	answer3.style.display = "none";	
	answer4.style.display = "none";	
	answer5.style.display = "block";	
	answer6.style.display = "none";	
	answer7.style.display = "none";	
	answer8.style.display = "none";		
	question1.style.opacity = "0.5";
	question1.style.transform = "scale(1)";
	question2.style.opacity = "0.5";
	question2.style.transform = "scale(1)";	
	question3.style.opacity = "0.5";
	question3.style.transform = "scale(1)";		
	question4.style.opacity = "0.5";
	question4.style.transform = "scale(1)";		
	question5.style.opacity = "1";
	question5.style.transform = "scale(1.1)";		
	question6.style.opacity = "0.5";	
	question6.style.transform = "scale(1)";	
	question7.style.opacity = "0.5";
	question7.style.transform = "scale(1)";	
	question8.style.opacity = "0.5";
	question8.style.transform = "scale(1)";		
}
question6.onclick = function(){
	answer1.style.display = "none";
	answer2.style.display = "none";	
	answer3.style.display = "none";	
	answer4.style.display = "none";	
	answer5.style.display = "none";	
	answer6.style.display = "block";	
	answer7.style.display = "none";		
	answer8.style.display = "none";		
	question1.style.opacity = "0.5";
	question1.style.transform = "scale(1)";
	question2.style.opacity = "0.5";
	question2.style.transform = "scale(1)";	
	question3.style.opacity = "0.5";
	question3.style.transform = "scale(1)";		
	question4.style.opacity = "0.5";
	question4.style.transform = "scale(1)";		
	question5.style.opacity = "0.5";
	question5.style.transform = "scale(1)";		
	question6.style.opacity = "1";	
	question6.style.transform = "scale(1.1)";	
	question7.style.opacity = "0.5";
	question7.style.transform = "scale(1)";
	question8.style.opacity = "0.5";
	question8.style.transform = "scale(1)";		
}
question7.onclick = function(){
	answer1.style.display = "none";
	answer2.style.display = "none";	
	answer3.style.display = "none";	
	answer4.style.display = "none";	
	answer5.style.display = "none";	
	answer6.style.display = "none";	
	answer7.style.display = "block";
	answer8.style.display = "none";	
	question1.style.opacity = "0.5";
	question1.style.transform = "scale(1)";
	question2.style.opacity = "0.5";
	question2.style.transform = "scale(1)";	
	question3.style.opacity = "0.5";
	question3.style.transform = "scale(1)";		
	question4.style.opacity = "0.5";
	question4.style.transform = "scale(1)";		
	question5.style.opacity = "0.5";
	question5.style.transform = "scale(1)";		
	question6.style.opacity = "0.5";	
	question6.style.transform = "scale(1)";	
	question7.style.opacity = "1";
	question7.style.transform = "scale(1.1)";
	question8.style.opacity = "0.5";
	question8.style.transform = "scale(1)";		
}
question8.onclick = function(){
	answer1.style.display = "none";
	answer2.style.display = "none";	
	answer3.style.display = "none";	
	answer4.style.display = "none";	
	answer5.style.display = "none";	
	answer6.style.display = "none";	
	answer7.style.display = "none";
	answer8.style.display = "block";	
	question1.style.opacity = "0.5";
	question1.style.transform = "scale(1)";
	question2.style.opacity = "0.5";
	question2.style.transform = "scale(1)";	
	question3.style.opacity = "0.5";
	question3.style.transform = "scale(1)";		
	question4.style.opacity = "0.5";
	question4.style.transform = "scale(1)";		
	question5.style.opacity = "0.5";
	question5.style.transform = "scale(1)";		
	question6.style.opacity = "0.5";	
	question6.style.transform = "scale(1)";	
	question7.style.opacity = "0.5";
	question7.style.transform = "scale(1)";	
	question8.style.opacity = "1";
	question8.style.transform = "scale(1.1)";
	
}



////////////////////////////////////////////////////////////////////////////
//INTERSECTION OBSERVER hori//
const ratio = 0.1
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}
const handleIntersect = function (entries, observer) {
	entries.forEach(function (entry) {
		if (entry.intersectionRatio > ratio) {
			entry.target.classList.add('reveal-visible')
			observer.unobserve(entry.target)			
		}
		})
}
const observerIntersect = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (revealTitle) {
	observerIntersect.observe(revealTitle)
})
///////////////////////////////////////////////////////////////



// SCROLL TO TOP //
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  
if (window.pageYOffset > 600) {
toTop.classList.add("up");
} else {
toTop.classList.remove("up");
}
})
//////////////////////////////////////////////////////////////////////////////////////

