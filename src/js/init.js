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
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
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