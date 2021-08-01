
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

// HIDE SHOW DIV //
const show1 = document.getElementById('op-1');
const show2 = document.getElementById('op-2');
const show3 = document.getElementById('op-3');
const show4 = document.getElementById('op-4');
const opText1 = document.getElementById('op-1-text');
const opText2 = document.getElementById('op-2-text');
const opText3 = document.getElementById('op-3-text');
const opText4 = document.getElementById('op-4-text');

show1.onclick = function(){
	opText1.style.display = "block";
	opText2.style.display = "none";
	opText3.style.display = "none";
	opText4.style.display = "none";
	show1.style.borderBottom = "5px solid white";
	show2.style.borderBottom = "none";
	show3.style.borderBottom = "none";
	show4.style.borderBottom = "none";
	show1.style.opacity = "1";
	show2.style.opacity = "0.7";
	show3.style.opacity = "0.7";
	show4.style.opacity = "0.7";

}
show2.onclick = function(){
	opText1.style.display = "none";
	opText2.style.display = "block";
	opText3.style.display = "none";
	opText4.style.display = "none";
	show1.style.borderBottom = "none";
	show2.style.borderBottom = "5px solid white";
	show3.style.borderBottom = "none";
	show4.style.borderBottom = "none";
	show1.style.opacity = "0.7";
	show2.style.opacity = "1";
	show3.style.opacity = "0.7";
	show4.style.opacity = "0.7";
}
show3.onclick = function(){
	opText1.style.display = "none";
	opText2.style.display = "none";
	opText3.style.display = "block";
	opText4.style.display = "none";
	show1.style.borderBottom = "none";
	show2.style.borderBottom = "none";
	show3.style.borderBottom = "5px solid white";
	show4.style.borderBottom = "none";
	show1.style.opacity = "0.7";
	show2.style.opacity = "0.7";
	show3.style.opacity = "1";
	show4.style.opacity = "0.7";
}
show4.onclick = function(){
	opText1.style.display = "none";
	opText2.style.display = "none";
	opText3.style.display = "none";
	opText4.style.display = "block";
	show1.style.borderBottom = "none";
	show2.style.borderBottom = "none";
	show3.style.borderBottom = "none";
	show4.style.borderBottom = "5px solid white";
	show1.style.opacity = "0.7";
	show2.style.opacity = "0.7";
	show3.style.opacity = "0.7";
	show4.style.opacity = "1";
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
var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter-up').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.numbercounter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
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

