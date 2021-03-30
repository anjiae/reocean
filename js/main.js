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
const slider = document.querySelector('.work__slide');   //ul
const slideItem = document.querySelectorAll('.work__slide__item'); //li
const sliderTotal = slideItem.length;
const slideItemWidth = 300;
const slideItemMargin = 20;
const maxSlides = 4;

let movement = slideItemWidth + slideItemMargin;
let responsiveMargin = 10;
let newSlide;
let newSlideItemWidth = slideItemWidth;

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

makeClone();
// copy slides function
function makeClone(){
  for(let i = 0; i<maxSlides; i++){
    const cloneSlide = slideItem[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slider.appendChild(cloneSlide);
  }

  for(let i = sliderTotal-1; i>=0; i--){
    const cloneSlide = slideItem[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slider.prepend(cloneSlide);
  }
  slideLayout(slideItemWidth,slideItemMargin);
  setSlidePosition();

  setTimeout(function(){
    slider.classList.add('animated');
  },100);
}

// make slide array layout function
function slideLayout(sw, sm){
  newSlide = document.querySelectorAll('.work__slide__item');
  movement = sw + sm;
  newSlide.forEach(function(item, index){
    item.style.left = movement * index + 'px';
    item.style.width = sw + 'px';
  });
}

function setSlidePosition(){
  const ulMovement = -sliderTotal * movement + 'px';
  slider.style.transform = 'translateX('+ ulMovement+')';
  slider.classList.add('animated');
}

// slide moving
let currentIdx = 0;

function moveSlide(num){
  slider.style.left = -num * movement + 'px';
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
}


// Auto slide show
let timer = undefined;
function autoSlide(){
  if(timer === undefined) {
    timer = setInterval(function(){
      moveSlide(currentIdx +1);
    },3000);
  }
}
autoSlide();

function stopSlide(){
  clearInterval(timer);
  timer = undefined;
}
slider.addEventListener('mouseenter', ()=> {
  stopSlide();
});
slider.addEventListener('mouseleave', ()=> {
  autoSlide();
});
nextBtn.addEventListener('mouseenter', ()=> {
  stopSlide();
});
nextBtn.addEventListener('mouseleave', ()=> {
  autoSlide();
});
prevBtn.addEventListener('mouseenter', ()=> {
  stopSlide();
});
prevBtn.addEventListener('mouseleave', ()=> {
  autoSlide();
});



// Slide Responsive

window.addEventListener('resize', function(){
  const currentWidth = document.querySelector('html').offsetWidth;
  const slidesWidth = slider.offsetWidth;

  console.log(currentWidth);
  if(currentWidth < 1024) {
    newSlideItemWidth = (slidesWidth - (responsiveMargin * maxSlides-1))/3;
    
    console.log(slidesWidth);
    console.log(newSlideItemWidth);
  }else{
    newSlideItemWidth = slideItemWidth;
    responsiveMargin = slideItemMargin;

    console.log(slidesWidth);
    console.log(newSlideItemWidth);
  }

  if(currentWidth < 768) {
    newSlideItemWidth = (slidesWidth - (responsiveMargin * maxSlides-1))/2;
    
    console.log(slidesWidth);
    console.log(newSlideItemWidth);
  }

  if(currentWidth <= 520) {
    newSlideItemWidth = slidesWidth;
    responsiveMargin = 0;
    
    console.log(slidesWidth);
    console.log(newSlideItemWidth);
  }

  slideLayout(newSlideItemWidth,responsiveMargin);
  setSlidePosition();
});


// Slide button event
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
