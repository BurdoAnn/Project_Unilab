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