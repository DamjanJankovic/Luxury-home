const tabNav = {
    nav: document.getElementsByClassName("header__item"),
    links: document.getElementsByClassName('.header__link'),
    mobNav: document.querySelector('.mobile-nav'),
    listNav: document.querySelector('.header__list'),
    menuOpen: false,

    init: function () {
        this.bindEvents();
    },

    bindEvents: function () {
        this.mobNav.addEventListener('click', () => {
            this.listNav.classList.toggle('header__list--active');

            if (!this.menuOpen) {
                this.mobNav.classList.add('open');
                this.menuOpen = true;
            } else {
                this.mobNav.classList.remove('open');
                this.menuOpen = false;
            }
        });
    }
};

tabNav.init();


/* remove sroll from bg */
$(document).ready(function () {
    $('.mobile-nav').on('click', function () {
        $('body').hasClass('lock-scroll') ? $('body').removeClass('lock-scroll') : $('body').addClass('lock-scroll'); //if-else
    });
    var screenSize = window.innerWidth;
    if (screenSize < 600) {
        $('.header__link').on('click', function () {
            $('body').hasClass('lock-scroll') && $('body').removeClass('lock-scroll');
        });
    }
});

/* slick slider */
$(document).ready(function () {
    $('.js-slides').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        speed: 1000
    });
});

$(document).ready(function () {
    $('.slides').slick({
        dots: true,
        arrows: false,
        infinite: true,
        draggable: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
    },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1,
                    dots: false
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
});

/* accordion */
$(document).ready(function () {
    $(".panel-btn").click(function () {
        $(this).parent().addClass('active').find('.panel-body').slideToggle();
        $(".panel-btn").not(this).parent().removeClass('active').find('.panel-body').slideUp();
    });
});

/* accordion btns */
//        for (var i = 0; i < this.acc.length; i++) {
//            this.acc[i].addEventListener('click', function () {
//                this.classList.toggle("active");
//
//                var acrdTxt = this.nextElementSibling;
//                if (acrdTxt.style.display === "block") {
//                    acrdTxt.style.display = "none";
//                } else {
//                    acrdTxt.style.display = "block";
//                }
//            });
//        }
/*
$('#right-arrow').click(function () {
        var currentSlide = $('.js-social-media.active');
        var nextSlide = currentSlide.next();
        currentSlide.removeClass('active');
        nextSlide.addClass('active');

        if (nextSlide.length == 0) {
            $('.js-social-media').first().addClass('active');
        }
    });

    $('#left-arrow').click(function () {
        var currentSlide = $('.js-social-media.active');
        var prevSlide = currentSlide.prev();

        currentSlide.removeClass('active');
        prevSlide.addClass('active');

        if (prevSlide.length == 0) {
            $('.js-social-media').last().addClass('active');
        }
    });

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__list');
    let menuOpen = false;

    burger.addEventListener('click', () => {
        nav.classList.toggle('header__list--active');

        if (!menuOpen) {
            burger.classList.add('open');
            menuOpen = true;
        } else {
            burger.classList.remove('open');
            menuOpen = false;
        }
    });
}

navSlide();
*/

//$(function() {
//
////    var windowsSize = $(window).width();
//    var width = 720;
//    var animationSpeed = 1000;
//    var pause = 3000;
//    var currentSlide = 1;
//
//    var $slider = $('.js-slider');
//    var $slideContainer = $('.js-slides', $slider);
//    var $slides = $('.js-slide', $slider);
//    var $dot = $('.js-dot');
//
//    var interval;
//    
//    function startSlider() {
//        interval = setInterval(function() {
//            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
//                if (++currentSlide === $slides.length) {
//                    currentSlide = 1;
//                    $slideContainer.css('margin-left', 0);
//                }
//            });
//        }, pause);
//    }
//    function pauseSlider() {
//        clearInterval(interval);
//    }
//
//    $dot
//        .on('mouseenter', pauseSlider)
//        .on('mouseleave', startSlider);
//
//    startSlider();
//
//});
