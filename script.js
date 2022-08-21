const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 16,
  autoheight: false,
  loop:false,
  feeMode:false,
  centeredSlides:true,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints:{
    768: {
      centeredSlides:false
    }
  }
});

let swiperMode = () => {
if (window.matchMedia('(min-width: 768px)').matches) {
  swiper.disable();
} else if (window.matchMedia('(max-width: 768px)').matches) {
  swiper.enable();
}}

swiperMode();

window.addEventListener('resize', () => {
  swiperMode();
});


let readNextBtnBrands = document.querySelectorAll('.read-next');
let slidesTablet = document.querySelectorAll('.swiper-slide__tablet');
let btnTextShowAll = document.querySelector('.button-text__show-all');
let btnTextHide = document.querySelector('.button-text__hide');
let btnText = document.querySelector('.button-text');


readNextBtnBrands.forEach((btn) => {
btn.addEventListener('click', () => {
  for (let i = 0; i < slidesTablet.length;i++){
      slidesTablet[i].classList.toggle('hidden')
  //    if (slidesTablet[i].classList.contains('hidden')) {
  //      slidesTablet[i].classList.remove('hidden');
        //btnTextHide.classList.remove('hidden');
       //btnTextShowAll.classList.add('hidden');
  //   } else {slidesTablet[i].classList.add('hidden')
            //btnTextHide.classList.add('hidden');
            //btnTextShowAll.classList.remove('hidden');
  //           }
  // }
    btnTextShowAll.classList.toggle('hidden');
    btnTextHide.classList.toggle('hidden');
    btnTextHide.classList.toggle('button-text__hide--clicked');
    //btnTextHideAllClasses.toggle('hidden');
    //btnTextShowAllClasses.toggle('hidden');
 }})})