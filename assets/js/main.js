
$(document).ready(function(){
    $('.product').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        lazyLoad:true,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                rows: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    })
    $('.item-customer').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        lazyLoad:true,
        pauseOnHover: false,
    })
    $('.slick-top-brands').slick({
        infinite: false,
        lazyLoad:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: false,
        pauseOnHover: false
    })
})

$(document).ready(function(){
    $('.product-item').mouseover(function() {
       $('.product-image img').css("-webkit-filter", "brightness(1)"); // change css
    });

})