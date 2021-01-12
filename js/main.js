"use strict";

//About img event
function ElBotton(elem, triggerDiff) {
  const {top} = elem.getBoundingClientRect();
  const {innerHeight} = window;
  return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
  const elems = document.querySelectorAll('.scroll-event');
  elems.forEach(ele => {
    if(ElBotton(ele, -280)) {
      ele.style.opacity = '0';
      ele.style.transform = 'translateX(100px)';
    } else {
      ele.style.opacity = '1';
      ele.style.transform = 'translateX(0)';
    }
  });
}

window.addEventListener('scroll', handleScroll);


//Work Slides
const slideItem = document.querySelectorAll('.work__slide__item');
const slider = document.querySelector('.work__slide');  
const sliderTotal = slideItem.length;
let slideItemW = 300;
const margin = 20;
const prevBtn = document.querySelector('.prev'),
      nextBtn = document.querySelector('.next');
//ul너비지정
slider.style.width = (slideItemW + margin) * sliderTotal +'px';

let currentIdx;
const winW = window.innerWidth;
function moveSlide(num){
    currentIdx = num;
    slider.style.left = -num * (slideItemW + margin) + 'px';
    if(winW > 1024) {
      slideItemW = 300;
    }else if (winW > 520) {
      slideItemW = 250;
    }else {
      slideItemW = 200;
    }
}


nextBtn.addEventListener('click', ()=> {
  if(currentIdx < sliderTotal -4){
    moveSlide(currentIdx +1);
  }else {
    moveSlide(0);
  }
});

prevBtn.addEventListener('click', ()=> {
  if(currentIdx > 0){
    moveSlide(currentIdx -1);
  }else {
    moveSlide(0);
  }
  
});





//map
	var container = document.getElementById('map');
	var options = {
		center: new kakao.maps.LatLng(37.9685396476989, 128.759549653821),
		level: 3
  };
  var map = new kakao.maps.Map(container, options);
  //마커생성
  var markerPosition  = new kakao.maps.LatLng(37.9685396476989, 128.759549653821); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

//Show "arrow up" button
const arrowBtn = document.querySelector('.arrow-up');
const homeHeight = home.getBoundingClientRect().height;
const docEl = document.documentElement;
const scrollPos = docEl.scrollTop;
document.addEventListener('scroll', ()=> {
  if(window.scrollY > homeHeight/2) {
    arrowBtn.classList.add('visible');
  } else {
    arrowBtn.classList.remove('visible');
  }
});  


//Handle "arrow up" button
arrowBtn.addEventListener('click', ()=> {
  scrollToTop('#header');
});

function scrollToTop(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior:'smooth'});

}
