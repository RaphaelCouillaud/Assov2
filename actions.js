// PARALLAX SCROLL HEADER //
let header = document.getElementById('header');
let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let butterflies = document.getElementById('butterflies');
let butterflies1 = document.getElementById('butterflies1');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let sun = document.getElementById('sun');
let back = document.getElementById('back');
let actioncounter = document.getElementById('actioncounter');
let plants = document.getElementById('plants');
let turtle = document.getElementById('turtle');
let fish = document.getElementById('fish');
let piles1 = document.getElementById('piles1');
let piles2 = document.getElementById('piles2');
let water = document.getElementById('water');
let watermedia = document.getElementById('watermedia');

window.addEventListener('scroll', () => {
 let value = window.scrollY;
 header.style.top = value * -0.5 + 'px';
 text.style.top = 50 + value * -0.5 + '%';
 bird1.style.top = value * -1.5 + 'px';
 bird1.style.left = value * -2 + 'px';
 bird2.style.top = value * -1.5 + 'px';
 bird2.style.left = value * 5 + 'px';
 butterflies.style.top = value * -1 + 'px';
 butterflies.style.left = value * 1 + 'px';
 butterflies1.style.top = value * -1.02 + 'px';
 butterflies1.style.left = value * 1.025 + 'px';
 cloud1.style.left = value * -2 + 'px';
 cloud2.style.left = value * 5 + 'px';
 sun.style.left = value * -0.5 + 'px';
 sun.style.top = value * 0.25 + 'px';
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


// ACTUALITES //
const allCross = document.querySelectorAll('.visible-pannel img');



allCross.forEach(element => {

    element.addEventListener('click', function(){

        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;

        const currentChoice = this.parentNode.parentNode.childNodes[3];

        // console.log(this.src);
        if(this.src.includes('plus')){
            this.src = 'img/minus.png';
            gsap.to(currentChoice, {duration: 0.5, height: height + 50, opacity: 1, transition: 'ease-in-out', padding: '20px 15px'})
        } else if (this.src.includes('minus')){
            this.src = 'img/plus.png';
            gsap.to(currentChoice, {duration: 0.5, height: 0, opacity: 0, transition: 'ease-in-out', padding: '0px 15px'})
        }
        
    })

});
// TYPE SCRIPT //
let textscript1 = "Nom de code opération : Le Débarquement";
    let array1 = Array.from(textscript1);

    Object.keys(array1).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription1").innerHTML += array1[key]),
        key * 285
      );
    });
let textscript2 = "Nom de code opération : Tempête du Marais";
    let array2 = Array.from(textscript2);

    Object.keys(array2).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription2").innerHTML += array2[key]),
        key * 290
      );
    });
let textscript3 = "Nom de code opération : Le Blockhaus";
    let array3 = Array.from(textscript3);

    Object.keys(array3).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription3").innerHTML += array3[key]),
        key * 295
      );
    });
let textscript4 = "Nom de code opération : Sentiers sauvages";
    let array4 = Array.from(textscript4);

    Object.keys(array4).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription4").innerHTML += array4[key]),
        key * 300
      );
    });
let textscript5 = "Nom de code opération : Tortues Géniales";
    let array5 = Array.from(textscript5);

    Object.keys(array5).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription5").innerHTML += array5[key]),
        key * 305
      );
    });
let textscript6 = "Nom de code opération : Girl Power";
    let array6 = Array.from(textscript6);

    Object.keys(array6).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription6").innerHTML += array6[key]),
        key * 310
      );
    });
let textscript7 = "Nom de code opération : Tempête du marais II";
    let array7 = Array.from(textscript7);

    Object.keys(array7).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription7").innerHTML += array7[key]),
        key * 315
      );
    });
let textscript8 = "Nom de code opération : Sentiers sauvages II";
    let array8 = Array.from(textscript8);

    Object.keys(array8).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription8").innerHTML += array8[key]),
        key * 320
      );
    });
let textscript9 = "Nom de code opération : Ville propre";
    let array9 = Array.from(textscript9);

    Object.keys(array9).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription9").innerHTML += array9[key]),
        key * 335
      );
    });
let textscript10 = "Nom de code opération : ⚡Tonnerre⚡ en Daire";
    let array10 = Array.from(textscript10);

    Object.keys(array10).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription10").innerHTML += array10[key]),
        key * 350
      );
    });
// HIDE SHOW ACTIONS //
const action1 = document.getElementById('ac-1'); //options
const action2 = document.getElementById('ac-2');
const action3 = document.getElementById('ac-3');
const action4 = document.getElementById('ac-4');
const action5 = document.getElementById('ac-5');
const action6 = document.getElementById('ac-6');
const action7 = document.getElementById('ac-7');
const action8 = document.getElementById('ac-8');
const action9 = document.getElementById('ac-9');
const action10 = document.getElementById('ac-10');
const showAction1 = document.getElementById('ac-1-text');//choix display
const showAction2 = document.getElementById('ac-2-text');
const showAction3 = document.getElementById('ac-3-text');
const showAction4 = document.getElementById('ac-4-text');//choix display
const showAction5 = document.getElementById('ac-5-text');
const showAction6 = document.getElementById('ac-6-text');
const showAction7 = document.getElementById('ac-7-text');//choix display
const showAction8 = document.getElementById('ac-8-text');
const showAction9 = document.getElementById('ac-9-text');
const showAction10 = document.getElementById('ac-10-text');

action1.onclick = function(){
	showAction1.style.display = "flex";
	showAction2.style.display = "none";
	showAction3.style.display = "none";		
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";
	showAction9.style.display = "none";
	showAction10.style.display = "none";
	action1.style.opacity = "1";
	action1.style.filter = "grayscale(0)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
}
action2.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "flex";
	showAction3.style.display = "none";
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";	
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "1";
	action2.style.filter = "grayscale(0)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
}
action3.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "flex";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";	
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "1";
	action3.style.filter = "grayscale(0)";	
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
}
action4.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "flex";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";	
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";	
	action4.style.opacity = "1";
	action4.style.filter = "grayscale(0.5)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";	
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
}
action5.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "flex";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";	
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";		
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "1";
	action5.style.filter = "grayscale(0)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
}
action6.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "flex";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";	
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";		
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "1";
	action6.style.filter = "grayscale(0)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
}
action7.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "flex";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";
	showAction10.style.display = "none";		
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";	
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "1";
	action7.style.filter = "grayscale(0)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
}
action8.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "flex";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";	
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";	
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "1";
	action8.style.filter = "grayscale(0)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
}
action9.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "flex";	
	showAction10.style.display = "none";	
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";	
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "1";
	action9.style.filter = "grayscale(0)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
};
action10.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "flex";	
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";	
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "1";
	action10.style.filter = "grayscale(0)";

};





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

// SKILLS BARS ANIMATION //
const skillsSection = document.getElementById('skill-bars');
const skillsSection1 = document.getElementById('skill-bars1');

const progressBars = document.querySelectorAll('.info');

function showProgress() {
  progressBars.forEach(progressBar => {
    const valueBar = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${valueBar}%`;
  });
}

function hideProgress() {
  progressBars.forEach(p => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
}

window.addEventListener('scroll',() => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const sectionPos1 = skillsSection1.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.5;

  if(sectionPos < screenPos || sectionPos1 < screenPos ){
      showProgress();
  } else{
     hideProgress();
  }
});

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

