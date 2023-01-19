// import $ from 'jquery';
// import Swiper from 'swiper';
// // core version + navigation:
// import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// SwiperCore.use([Navigation, Pagination]);
// class GridSlider {
//     constructor() {
//         this.swiperSection = document.querySelectorAll(`.js-section-icon-grid-mobile-swiper:not(.initialized)`);
//         this.sliderInit();
//         this.events()
//     }
//     sliderInit() {
//         this.swiperSection.forEach((element) => {
//             element.classList.add('initialized')
//             var swiperContainer = element.querySelector('.swiper-container');
//             var swiperPagination = element.querySelector('.swiper-pagination');
//             if ($(window).width() < 768) {
//                 const swiper = new Swiper(swiperContainer, {
//                     // If we need pagination
//                     loop: true,
//                     pagination: {
//                         el: swiperPagination,
//                         clickable: true,
//                     },
//                 });
//             }
//         });
//     }

//     resizeEvents() {
//         window.addEventListener('resize', ()=>this.sliderInit());
//     }

//     events() {
//         this.resizeEvents();
//     }
// }

// export default GridSlider;
// new GridSlider();
