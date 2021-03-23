"use strict";
//--------------------------------------------------------//
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

//--------------------------------------------------------//
//REOCEAN WORK SLIDES
const slideItem = document.querySelectorAll('.work__slide__item');
const slider = document.querySelector('.work__slide');  
const sliderTotal = slideItem.length;
let slideItemW = 300;
const margin = 20;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

//ul너비지정
// slider.style.width = (slideItemW + margin) * sliderTotal +'px';

makeClone();

function makeClone(){
  for(let i = 0; i<sliderTotal; i++){
    const cloneSlide = slideItem[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slider.appendChild(cloneSlide);
  }

  for(let i = sliderTotal-1; i>=0; i--){
    const cloneSlide = slideItem[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slider.prepend(cloneSlide);
  }
  updateWidth();
  setPosition();

  setTimeout(function(){
    slider.classList.add('animated');
  },100);
}



function updateWidth(){
  const currentSlides = document.querySelectorAll('.work__slide__item');
  const newSlideCount = currentSlides.length;
  const newWidth = (slideItemW + margin) * newSlideCount +'px';
  slider.style.width = newWidth;
}

function setPosition(){
  const translateValue = -(slideItemW + margin) * sliderTotal;
  slider.style.transform = 'translateX('+ translateValue +'px)';
}

// slide moving


let currentIdx = 0;

function moveSlide(num){
  slider.style.left = -num * (slideItemW + margin) + 'px';
  currentIdx = num;
  if(currentIdx === sliderTotal || currentIdx === -sliderTotal) {
    setTimeout(function(){
      slider.classList.remove('animated');
      slider.style.left = '0px';
      currentIdx = 0;
    },500);
    setTimeout(function(){
      slider.classList.add('animated');
    },600);
  }
    workRespns();
}



nextBtn.addEventListener('click', ()=> {
  moveSlide(currentIdx + 1);
});

prevBtn.addEventListener('click', ()=> {
  moveSlide(currentIdx - 1);
});

//--------------------------------------------------------//
//KAKAO MAP
	const container = document.getElementById('map');
	const options = {
		center: new kakao.maps.LatLng(37.9685396476989, 128.759549653821),
    level: 3,
    scrollwheel: false
  };
  const map = new kakao.maps.Map(container, options);
  //마커생성
  const markerPosition  = new kakao.maps.LatLng(37.9685396476989, 128.759549653821); 

// 마커를 생성합니다
const marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);


//--------------------------------------------------------//
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
