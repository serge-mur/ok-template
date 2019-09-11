$(document).ready(function () {

// https://github.com/Mango/slideout
var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
});
function close(eve) {
    eve.preventDefault();
    slideout.close();
}
slideout
    .on('beforeopen', function () {
        this.panel.classList.add('panel-open');
    })
    .on('open', function () {
        this.panel.addEventListener('click', close);
    })
    .on('beforeclose', function () {
        this.panel.classList.remove('panel-open');
        this.panel.removeEventListener('click', close);
    });
document.querySelector('.toggle-button').addEventListener('click', function() {
    slideout.toggle();
});

// Sticky navbar
// Custom function which toggles between sticky class (is-sticky)
var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop) {
        stickyWrapper.height(stickyHeight);
        sticky.addClass("is-sticky");
    }
    else {
        sticky.removeClass("is-sticky");
        stickyWrapper.height('auto');
    }
};
// Find all data-toggle="sticky-onscroll" elements
$('[data-toggle="sticky-onscroll"]').each(function () {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');
    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
        stickyToggle(sticky, stickyWrapper, $(this));
    });
    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
});

function toggleSidebar() {
    var w = $(window).width();
    if (w <= 991) {
        $('#sidebar>.collapse').removeClass('show');
    } else {
        $('#sidebar>.collapse').addClass('show');
    }
}

$(window).resize(function () {
    toggleSidebar();
});

toggleSidebar();


// slider in card detail
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    // dots: true,
    // centerMode: true,
    focusOnSelect: true
});

$('.slider-product').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
             slidesToScroll: 3
            }
        },                  
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },               
        {
            breakpoint: 321,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});



    $('[data-toggle="tooltip"]').tooltip()


});//document ready end