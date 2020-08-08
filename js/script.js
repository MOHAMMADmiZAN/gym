// ===========================================banner-part-start===========================================================
$('.banner-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-angle-double-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-double-right next"></i>',
    centerMode: true,
    centerPadding: '0',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
// ===========================================banner-part-End===========================================================
// =========gallery-part==========================
$(document).ready(function () {
    $('.venobox').venobox();
});


/////////////////////////////////testimonial///////////////////////////////////////////////////////////////////////
$('.test-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


///counter-up part///////
$('.up').counterUp({
    delay: 10,
    time: 1000
});
/////sponsor-tab/////
$('.sponsor-tab').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    prevArrow: '<i class="fas fa-angle-double-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-double-right next"></i>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

/// variables////
const win = $(window);
const html_body = $('html, body');
const stk = $('.st-menu');
const b2b = $('.back2top');
const c_stk = 'sticky';
const bdy = $('body');


//back to top fadetoogle//
win.scroll(() => win.scrollTop() > 100 ? b2b.fadeIn() : b2b.fadeOut());
//back to top effect//
b2b.click(() => html_body.animate({scrollTop: 0}, 2500));


// animation scroll js
$('.nav-item a').on('click', function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 20
            }, 1500);
            return false;
        }

    }
});


//stiky-header//
win.scroll(() => win.scrollTop() > 300 ? stk.addClass(c_stk) : stk.removeClass(c_stk));

// scroolpy
bdy.scrollspy({
    target: '.navbar',
    offset: 100
});