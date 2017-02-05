var appMaster = {

    preLoader: function(){
        imageSources = []
        $('img').each(function() {
            var sources = $(this).attr('src');
            imageSources.push(sources);
        });
        if($(imageSources).load()){
            $('.pre-loader').fadeOut('slow');
        }
    },

    smoothScroll: function() {
        // Smooth Scrolling
        $('a').scroll(function() {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $(' html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        });
    },

    reviewsCarousel: function() {
        // Reviews Carousel
        $('.review-filtering').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000
        });
    },

    screensCarousel: function() {
        // Screens Carousel
        $('.filtering').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        $('.js-filter-all').on('click', function() {
            $('.filtering').slickUnfilter();
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-filter-one').on('click', function() {
            $('.filtering').slickFilter('.one');
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-filter-two').on('click', function() {
            $('.filtering').slickFilter('.two');
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-filter-three').on('click', function() {
            $('.filtering').slickFilter('.three');
            $('.filter a').removeClass('active');
            $(this).addClass('active');
        });

    },

    animateScript: function() {
        $('.scrollpoint.sp-effect1').waypoint(function(){
		$(this).removeClass('active');
		$(this).removeClass('animated');
		$(this).removeClass('fadeInLeft');
		$(this).toggleClass('active');
		$(this).toggleClass('animated fadeInLeft');
	},{offset:'100%'});
        $('.scrollpoint.sp-effect2').waypoint(function(){
		$(this).removeClass('active');
		$(this).removeClass('animated');
		$(this).removeClass('fadeInRight');
		$(this).toggleClass('active');
		$(this).toggleClass('animated fadeInRight');
	},{offset:'100%'});
        $('.scrollpoint.sp-effect3').waypoint(function(){
		$(this).removeClass('active');
		$(this).removeClass('animated');
		$(this).removeClass('fadeInDown');
		$(this).toggleClass('active');
		$(this).toggleClass('animated fadeInDown');
	},{offset:'100%'});
        $('.scrollpoint.sp-effect4').waypoint(function(){
		$(this).removeClass('active');
		$(this).removeClass('animated');
		$(this).removeClass('fadeIn');
		$(this).toggleClass('active');
		$(this).toggleClass('animated fadeIn');
	},{offset:'100%'});
        $('.scrollpoint.sp-effect5').waypoint(function(){
		$(this).removeClass('active');
		$(this).removeClass('animated');
		$(this).removeClass('fadeInUp');
		$(this).toggleClass('active');
		$(this).toggleClass('animated fadeInUp');
	},{offset:'100%'});
    },

    revSlider: function() {
        var docHeight = $(window).height();
        /*var mainSlider = $('.tp-banner').revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: docHeight,
            hideThumbs: 10,
            touchenabled: false,
            fullWidth: "on",
            hideTimerBar: "on",
            fullScreen: "on",
            onHoverStop: "off",
            fullScreenOffsetContainer: ""
        });*/
        
    },

    scrollMenu: function(){
        var num = 50; //number of pixels before modifying styles

        $(window).bind('scroll', function () {
            if (!allowScrollMenu) return;

            if ($(window).scrollTop() > num) {
                $('nav').addClass('scrolled');

            } else {
                $('nav').removeClass('scrolled');
            }
        });
    },
    placeHold: function(){
        // run Placeholdem on all elements with placeholders
        Placeholdem(document.querySelectorAll('[placeholder]'));
    }

}; // AppMaster
function calculateSlogan() {
    $('.slogan-bg-image img').css('max-height', window.innerHeight - 100);
    if (window.innerWidth >= window.innerHeight) {
        $('.slogan-bg-image img').css('max-width', window.innerWidth * 4 / 5);
        $('.slogan').css('margin-top', (window.innerHeight - 100) / 2);
    } else {
        $('.slogan-bg-image img').css('max-width', window.innerWidth);
        $('.slogan-title').css('margin-top', (window.innerHeight - 100) / 4);
    }
}

var allowScrollMenu = false;
var loadAllAnimation = function (place) {
    $('.pre-loader').css('display', 'block');
    if (place == '.home') {
        $('footer').hide();
        calculateSlogan();
    }
    setTimeout(function(){
        appMaster.preLoader();
        appMaster.smoothScroll();
        appMaster.screensCarousel();
        appMaster.animateScript();
        appMaster.revSlider();
    }, 500);
}

if (!String.prototype.endsWith) {
	String.prototype.endsWith = function (ending) {
		if (typeof ending !== 'string') {
			return false;
		}

		if (!ending) {
			return true;
		}

		return this.slice(-ending.length) === ending;
	};
}
