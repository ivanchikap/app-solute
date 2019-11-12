$('.screenshots__carousel').slick({
    centerMode: true,
    centerPadding: '140px',
    slidesToShow: 3,
    arrows: false,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 870,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
    ]
});

$('.testimonial__carousel').slick({
    slidesToShow: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 720,
            settings: {
                arrows: false
            }
        }
    ]
});

//slicknav init
$('.header__nav').slicknav({
    label: '',
    duration: 1000,
    easingOpen: "easeOutBounce",
    appendTo: '.header .container'
});