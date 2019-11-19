$(document).ready(function () {

// Dropdown main menu   
var firstLevelTop, secondLevelTop, firstLevelHeight, firstLevelWidth, mainMenuWidth;
$(".dropdown").hover(
    function () {
        console.log('hover');
        $('>.dropdown-menu', this).stop(true, true).fadeIn("fast");
        $(this).addClass('open');
        firstLevelTop = $('#dropdownMenuLink+.dropdown-menu').offset().top;
        firstLevelHeight = $('#dropdownMenuLink+.dropdown-menu').outerHeight();
        firstLevelWidth = $('#dropdownMenuLink+.dropdown-menu').outerWidth();
        mainMenuWidth = $('#content-width').width();
    },
    function () {
        $('>.dropdown-menu', this).stop(true, true).fadeOut("fast");
        $(this).removeClass('open');
    });

    $('.dropdown-submenu>.dropdown-item').hover(function() {
        secondLevelTop = $(this).offset().top;
        $(this).next('.dropdown-menu').css({
            "top": firstLevelTop-secondLevelTop,
            "height": firstLevelHeight,
            "width": mainMenuWidth-firstLevelWidth
        });
    });
    
    $('.dropdown-menu').hover(function() {
        $("body").css("overflow","hidden");
    }, function() {
        $("body").css("overflow","auto");
    });


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

$('.brands-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
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
        }
    ]
});

$('[data-toggle="tooltip"]').tooltip()

// landing js
$('.landing-slider-product').slick({
    slidesToShow: 4,
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
                slidesToShow: 1,
                slidesToScroll: 1
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

$('.slider-one').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
});

$('.slider-two').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [                
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },               
    ]
});

// blue border active delivery
$('.provider-total .form-check-input:checked').closest('.form-check-label').toggleClass('active');
$('.provider-total .form-check-input').change(function() {
    if($(!this.checked)) {
        var providerTotal = $(this).closest('.provider-total');
        // console.log(providerTotal);
        providerTotal.find('.form-check-label').removeClass('active');                    
        $(this).closest('.form-check-label').toggleClass('active'); 
    }
});

});//document ready end