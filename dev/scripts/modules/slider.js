// import $ from 'jquery';
// import 'slick-carousel';
// class slider {
//     constructor() {
//         this.events();
//         this.sliderInit();
//         this.partnerCarousel();
//         this.articleCarousel();
//     }

//     slider01() {
//         return {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             mobileFirst: true,
//             arrows: false,
//             dots: false,
//             variableWidth: true,
//             speed: 200,
//             infinite: true,
//             autoplay: false,
//             touchMove: true,
//             touchThreshold: 5000,
//             easing: 'linear',
//             responsive: [
//                 {
//                     breakpoint: 1025,
//                     settings: 'unslick',
//                 },
//             ],
//         };
//     }

//     slider02() {
//         return {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             mobileFirst: true,
//             arrows: false,
//             dots: false,
//             variableWidth: true,
//             speed: 200,
//             infinite: true,
//             autoplay: false,
//             touchMove: true,
//             touchThreshold: 5000,
//             easing: 'linear',
//             responsive: [
//                 {
//                     breakpoint: 1025,
//                     settings: 'unslick',
//                 },
//             ],
//         };
//     }

//     testimonialCarousel(elm) {
//         const nextArrow = elm.parents('.testimonials-carousel').find('.slick-arrows__right'),
//             previousArrow = elm.parents('.testimonials-carousel').find('.slick-arrows__left');
//         return {
//             speed: 200,
//             autoplay: false,
//             touchMove: true,
//             touchThreshold: 5000,
//             easing: 'linear',
//             prevArrow: previousArrow,
//             nextArrow: nextArrow,
//         };
//     }

//     partnerCarousel() {
//         console.log('testing');
//         return {
//             initialSlide: 0,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             mobileFirst: true,
//             arrows: false,
//             dots: false,
//             variableWidth: true,
//             speed: 200,
//             infinite: false,
//             autoplay: false,
//             touchMove: true,
//             touchThreshold: 5000,
//             easing: 'linear',
//         };
//     }

//     sliderInit() {
//         if ($('.slick-01').length) {
//             $('.slick-01').each((num, elm) => {
//                 elm = $(elm);
//                 if (elm.hasClass('slick-initialized')) {
//                     elm.slick('unslick');
//                 }
//                 elm.slick(this.slider01());

//                 elm.find('.slick-current').prev().addClass('prev');
//                 elm.find('.slick-current').next().addClass('next');
//                 elm.on('edge', function (event, slick, direction) {
//                     console.log('edge was hit');
//                 });
//                 elm.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//                     elm.find('.slick-slide').removeClass('prev').removeClass('next');
//                 });
//                 elm.on('afterChange', function (event, slick, currentSlide, nextSlide) {
//                     elm.find('.slick-current').prev().addClass('prev');
//                     elm.find('.slick-current').next().addClass('next');
//                 });
//             });
//         }

//         if ($('.slick-02').length) {
//             $('.slick-02').each((num, elm) => {
//                 elm = $(elm);
//                 if (elm.hasClass('slick-initialized')) {
//                     elm.slick('unslick');
//                 }
//                 elm.slick(this.slider02());

//                 var $progressBar = $('.slick-02-progress');
//                 var $progressBarLabel = $('.slider__label');

//                 elm.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//                     var calc = (nextSlide / (slick.slideCount - 1)) * 100;

//                     $progressBar.css('background-size', calc + '% 100%').attr('aria-valuenow', calc);

//                     $progressBarLabel.text(calc + '% completed');
//                 });

//                 elm.find('.slick-current').prev().addClass('prev');
//                 elm.find('.slick-current').next().addClass('next');
//                 elm.on('edge', function (event, slick, direction) {
//                     console.log('edge was hit');
//                 });
//                 elm.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//                     elm.find('.slick-slide').removeClass('prev').removeClass('next');
//                 });
//                 elm.on('afterChange', function (event, slick, currentSlide, nextSlide) {
//                     elm.find('.slick-current').prev().addClass('prev');
//                     elm.find('.slick-current').next().addClass('next');
//                 });
//             });
//         }

//         if ($('.slider-testimonials').length) {
//             $('.slider-testimonials').each((num, elm) => {
//                 elm = $(elm);
//                 const parentElem = elm.parents('.testimonials-carousel');
//                 if (elm.hasClass('slick-initialized')) {
//                     elm.slick('unslick');
//                 }
//                 elm.slick(this.testimonialCarousel(elm));
//                 var $statusone = parentElem.find('.slick-item-counter');
//                 var $statustwo = parentElem.find('.card-testimonials__counter');
//                 var slidesCount;
//                 var j = '';
//                 var k = '';
//                 elm.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//                     slidesCount = slick.slideCount;
//                     if (slidesCount < 10) {
//                         j = 0;
//                     } else if (slidesCount > 10) {
//                         k = 0;
//                     }
//                     var i = (currentSlide ? currentSlide : 0) + 1;
//                     $statusone.html(
//                         `<span class="font-weight-bold bg-white text-dark zindex-1 pr-4">${j}${k}${i}</span><span class="font-weight-bold bg-white text-dark zindex-1 pl-4">${j}${slick.slideCount}</span>`
//                     );
//                     $statustwo.html(
//                         `<span class="start">${j}${i}</span><span class="end">${j}${k}${slick.slideCount}</span>`
//                     );
//                 });
//             });
//         }

//         if ($('.partner-carousel-slick').length) {
//             $('.partner-carousel-slick').each((num, elm) => {
//                 elm = $(elm);
//                 const parentElem = elm.parents('.partner-carousel');
//                 if (elm.hasClass('slick-initialized')) {
//                     elm.slick('unslick');
//                 }
//                 elm.slick(this.partnerCarousel());
//                 elm.on('init', (event, slick) => {
//                     this.updateSliderCounter(slick, elm);
//                 });
//             });
//         }
//     }

//     updateSliderCounter(slick, elm, currentIndex) {
//         var slidesCount;
//         var parentElm = elm.parents('.partner-carousel');
//         slidesCount = slick.slideCount;
//         console.log(slidesCount);
//         if (slidesCount <= 3) {
//             parentElm.find('.slick-track').css('marginLeft', '0');
//             parentElm.find('.partner-carousel-slick').css('justifyContent', 'center');
//         }

//         if (slidesCount > 3) {
//             parentElm.find('.slick-track').css('marginLeft', '3px');
//         }
//     }

//     resizeEvents() {
//         // window.addEventListener('resize', this.sliderInit)
//         $(window).on('resize', () => {
//             this.sliderInit();
//         });
//     }

//     //Our Partners carousel
//     partnerCarousel() {
//         var $carousel = $('.partner-carousel-slick');

//         if ($carousel.length) {
//             var slidesCount;

//             var updateSliderCounter = function (slick, currentIndex) {
//                 slidesCount = slick.slideCount;
//                 if (slidesCount <= 3) {
//                     $('.slick-track').css('marginLeft', '0');
//                     $('.partner-carousel-slick').css('justifyContent', 'center');
//                 }

//                 if (slidesCount > 3) {
//                     $('.slick-track').css('marginLeft', '3px');
//                 }
//             };

//             $carousel.on('init', function (event, slick) {
//                 updateSliderCounter(slick);
//             });
//         }

//         $carousel.slick({
//             initialSlide: 0,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             mobileFirst: true,
//             arrows: false,
//             dots: false,
//             variableWidth: true,
//             speed: 200,
//             infinite: false,
//             autoplay: false,
//             touchMove: true,
//             touchThreshold: 5000,
//             easing: 'linear',
//         });

//         $(window).on('resize', function () {
//             $('.partner-carousel-slick').slick('resize');
//         });
//     }

//     //Our Article card carousel
//     articleCarousel() {
//         var $carouselArticle = $('.article-card-carousel-slick');

//         if ($carouselArticle.length) {
//             var slidesCount;

//             var updateSliderCounter = function (slick, currentIndex) {
//                 slidesCount = slick.slideCount;
//                 if (slidesCount <= 3) {
//                     $('.slick-track').css('marginLeft', '0');
//                     $('.article-card-carousel-slick').css('justifyContent', 'center');
//                 }

//                 if (slidesCount > 3) {
//                     $('.slick-track').css('marginLeft', '3px');
//                 }
//             };

//             $carouselArticle.on('init', function (event, slick) {
//                 updateSliderCounter(slick);
//             });
//         }

//         $carouselArticle.slick({
//             initialSlide: 0,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             mobileFirst: true,
//             arrows: false,
//             dots: false,
//             variableWidth: true,
//             speed: 200,
//             infinite: false,
//             autoplay: false,
//             touchMove: true,
//             touchThreshold: 5000,
//             easing: 'linear',
//         });

//         $(window).on('resize', function () {
//             $('.article-card-carousel-slick').slick('resize');
//         });
//     }

//     clickEvents() {}

//     events() {
//         this.clickEvents();
//         this.resizeEvents();
//     }
// }

// export default slider;
// new slider();
