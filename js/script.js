// toggle-menu js//

let navbarlink = document.getElementById("nav");
let toggelebuttonburger = document.getElementById("togglebutton");

toggelebuttonburger.addEventListener('click', function() {
    navbarlink.classList.toggle('active');
})

// slider//

$(function() {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        swipe: false,


        //რესფონსივის სტილები
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
})

$(function() {
    $('.center').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        dots: true,
        swipe: true,
        centerMode: true,


        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    })
})