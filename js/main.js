"use strict";
//work slide
const slider = document.querySelector('.work__slide'),
      slideItemx = document.querySelectorAll('.work__slide__item'),
      currentIdx = 0,
      slideLength = slideItemx.length,
      prevBtn = document.querySelector('.prev'),
      nextBtn = document.querySelector('.next');




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
