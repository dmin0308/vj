window.addEventListener('load', function(){

const mainBanner = new Swiper('#mainBanner .swiper-container', {
  slidesPerView: 1.4,          // 한 번에 보여줄 슬라이드 개수
  spaceBetween: -50,          // 슬라이드 간의 간격
  centeredSlides: true,      // 가운데 정렬 모드
  loop: true,                // 반복 처리
  autoplay: {
    delay: 3000,             // 자동 롤링 딜레이 (3초)
    disableOnInteraction: false,  // 사용자 상호작용 후에도 자동 롤링 유지
  },
});

});