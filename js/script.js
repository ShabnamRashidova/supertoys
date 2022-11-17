$(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= 120) {
            $(".header-top").addClass("fixed");
            $(".header-bottom").addClass("fixed");
            $(".fixed-menu").addClass("show");
            $(".back-to-top").addClass("show")
            $(".back-to-top").on("click", function () {
                $(window).scrollTop(0)
            })
             } else {
            $(".back-to-top").removeClass("show")
            $(".header-top").removeClass("fixed");
            $(".header-bottom").removeClass("fixed");
            $(".fixed-menu").removeClass("show");
        }
    });
    $(".custom-radio").on("click", (e) => {
        if ($(".custom-radio").hasClass("active")) {
            $(".custom-radio").removeClass("active")
            e.currentTarget.classList.add("active");
        } else {
            e.currentTarget.classList.add("active");
        }
    })

    $(".category-list-item").each(function () {
        $(this).click(() => {
            $(this).find(".category-list-dropdown").toggleClass("active")
            $(this).find(".fa-chevron-right").toggleClass("rotate");
        })
    })
    $(".wishlist-btn").click(function () {
        $(this).find("button").toggle();

    });
    $(".product-info").each(function () {
       
            $(this).find(".remove-product").click(()=>{
                $(this).parent().remove()
            })
                        
            
    })
    $(".close-search-icon,.bg-backdrop").click(() => {
        $(".search-content").removeClass("active")
        $(".bg-backdrop").removeClass("active")
    })
    $(".menu-btn").click(() => {
        $(".header-bottom").addClass("active")
        $(".mobile-header-overlay").addClass("active")
    })
    $(".mobile-header-overlay").click(() => {
        $(".header-bottom").removeClass("active")
        $(".mobile-header-overlay").removeClass("active")
    })
    $(".close-menu").click(() => {
        $(".header-bottom").removeClass("active")
        $(".mobile-header-overlay").removeClass("active")
    })
    $(".filter-name").click(function () {
        $(this).next("div").stop(true, false, true).slideToggle(250);
        $(this).toggleClass("up");
    });
    $('.cart-plus-minus').append(
        '<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>'
    );
    $('.qtybutton').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {

            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find('input').val(newVal);
    });
    $(".input-toggler").click(() => {
        if ($(".password").attr('type') === 'password') {
            $(".password").attr('type', 'text');
            $(".show-password-input").hide();
            $(".hide-password-input").show();

        } else {
            $(".password").attr('type', 'password')
            $(".show-password-input").show();
            $(".hide-password-input").hide();
        }


    })
    $(".profile-item").click(() => {
        $('.login-modal').show()
        $('.modal_overlay').addClass('active')
    })
    $(".register-btn").click(() => {
        if((".single-product-item").length){
        $('.register-modal').css("display","block")
        $('.login-modal').hide()
        $('.modal_overlay').addClass('active')}
    })
   
    $(".close-login-modal,.modal_overlay,.close-register-modal").click(() => {
        $('.login-modal').hide()
        $('.register-modal').hide()
        $('.product-popup-quickview').hide()
        $('.modal_overlay').removeClass('active')
    })
    $('.filter_1').on('click',function(){
        $('.filter_1').removeClass('active')
        $(this).addClass('active')
        if($(".filter-list").hasClass("active")){
            $(".grid-list-container").addClass("list");
            $(".category-block").removeClass("col-xl-3 col-lg-4 col-md-6");
            $(".category-block .product-item").addClass("list");
            $(".cart-footer .add-to-cart-button span").text("");

        }else if($(".filter-grid").hasClass("active")){
            $(".grid-list-container").removeClass("list");
            $(".category-block").addClass("col-xl-3 col-lg-4 col-md-6");
            $(".category-block .product-item").removeClass("list");
            $(".cart-footer .add-to-cart-button span").text($(".cart-footer .add-to-cart-button").data("text"));
        }
    });
    if( $('[data-fancybox="gallery"]').length){
        $('[data-fancybox="gallery"]').fancybox({
            hash : true
        })
    }
    $(".select-content .select-body").click(()=>{
        $(".select-content .select-footer").slideToggle();
        $(".select-body .arrow i").toggleClass("fa-chevron-up")
        $(".select-body .arrow i").toggleClass("fa-chevron-down")
        })
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            focusOnSelect: true,
            infinite: true,
            prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            nextArrow: '<i class="fa fa-angle-right " aria-hidden="true"></i>',
            responsive: [
              
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
            
              
                },
            ],
        focusOnSelect: true
      });
    
        $('.main-slider-wrap').slick({
            arrows: true,
            dots: true,
            dotsClass: "slick-dots",
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: $('.main-slider .arrow.prev'),
            nextArrow: $('.main-slider .arrow.next')
        });
    
    
        $('#category-slider').slick({
            infinite: true,
            arrows: false,
            dots: false,
            slidesToShow: 7,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    

        $('.products-wrapper').slick({
            arrows: true,
            dots: true,
            dotsClass: "slick-dots",
            slidesToShow: 4,
            slidesToScroll: 2,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            touchThreshold: 100,
            pauseOnHover: false,
            touchMove: true,
            draggable: true,
            autoplay: true,
            pauseOnHover: true,
            speed: 500,
            autoplaySpeed: 8000,
            prevArrow: $('.new-products .arrow.prev'),
            nextArrow: $('.new-products .arrow.next'),
            responsive: [

                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow:1,
                    }
                },
                
            ]
        });
    
   
        $('.carousel-item-wrapper-instagram').slick({
            slidesToShow: 5,
            slidesToScroll: 2,
            arrows: false,
            pauseOnHover: true,
            autoplaySpeed: 1500,
            responsive: [

                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    
  
        $('.carousel-item-wrapper2').slick({
            arrows: true,
            dots: true,
            dotsClass: "slick-dots",
            slidesToShow: 5,
            slidesToScroll: 2,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            touchThreshold: 100,
            pauseOnHover: false,
            touchMove: true,
            draggable: true,
            autoplay: true,
            pauseOnHover: true,
            speed: 500,
            autoplaySpeed: 8000,
            prevArrow: $('.new-products .arrow.prev'),
            nextArrow: $('.new-products .arrow.next'),
            responsive: [

                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 530,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    
 
        $('#seasonal-products').slick({
            arrows: false,
            dots: false,
            dotsClass: "slick-dots",
            slidesToShow: 4,
            slidesToScroll: 1, cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            touchThreshold: 100,
            pauseOnHover: false,
            touchMove: true,
            draggable: true,
            autoplay: true,
            pauseOnHover: true,
            speed: 500,
            autoplaySpeed: 8000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },

                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },

                {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    
  
        $('.wrapper-1 .last-products-wrapper').slick({
            slidesToShow: 2,
            arrows: true,
            autoplay:true,
            autoplaySpeed: 8000,
            slidesToScroll: 1,
            prevArrow: $('.wrapper-1 .arrow.prev'),
            nextArrow: $('.wrapper-1 .arrow.next')
        });
    

        $('.wrapper-2 .last-products-wrapper').slick({
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed: 8000,
            prevArrow: $('.wrapper-2 .arrow.prev'),
            nextArrow: $('.wrapper-2 .arrow.next')
        });
    
  
        $('.special-offer-wrapper').slick({
            slidesToShow: 2,
            arrows: true,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed: 8000,
            prevArrow: $('.special-offer-products .arrow.prev'),
            nextArrow: $('.special-offer-products .arrow.next'),
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    
   
        $('.single-product-wrapper').slick({
            arrows: false,
            dots: false,
            slidesToShow: 1,

        });
    
});
let inputLeft = document.getElementById("input-left");
let inputRight = document.getElementById("input-right");
let thumbLeft = document.querySelector(".slider > .thumb.left");
let thumbRight = document.querySelector(".slider > .thumb.right");
let range = document.querySelector(".slider > .range");
function setLeftValue() {
    let _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);
    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
    let percent = ((_this.value - min) / (max - min)) * 100;
    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
    document.getElementById("result-min").value = _this.value;
}
function setRightValue() {
    let _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);
    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
    let percent = ((_this.value - min) / (max - min)) * 100;
    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
    document.getElementById("result-max").value = _this.value;
}
if (inputLeft && inputRight) {
    setLeftValue();
    setRightValue();
    inputLeft.addEventListener("input", setLeftValue);
    inputRight.addEventListener("input", setRightValue);
    inputLeft.addEventListener("mouseover", function () {
        thumbLeft.classList.add("hover");
    });
    inputLeft.addEventListener("mouseout", function () {
        thumbLeft.classList.remove("hover");
    });
    inputRight.addEventListener("mouseover", function () {
        thumbRight.classList.add("hover");
    });
    inputRight.addEventListener("mouseout", function () {
        thumbRight.classList.remove("hover");
    });
}
addToCartButton = document.querySelectorAll(".add-to-cart-button");
document.querySelectorAll('.add-to-cart-button').forEach(function (addToCartButton) {
    addToCartButton.addEventListener('click', function () {
        addToCartButton.classList.add('added');
    });
});
let deleteButton = document.querySelectorAll(".delete-button");
let sebetTableRow = document.querySelectorAll(".table_1 .product-row");
for(let i = 0; i < deleteButton.length; i++){
    (function(index){
        deleteButton[i].addEventListener("click",function(){
            sebetTableRow[index].classList.add("d-none");
        })
    })(i);
}
function validateNumberInput(e) {
    if (isNaN(e.key)) {
        e.preventDefault();
    }
}
function validateNumberInput(e) {
    if (isNaN(e.key)) {
        e.preventDefault();
    }
}
    if(!!('ontouchstart' in window)){
  $('.product-item').unbind('click mouseenter mouseleave'); 
  $('.product-item').on('click',function(){

    setTimeout(function(){
       window.location.href='product_detail.html';
       },6000);
    });
}
$('.modal_container').on('show', function() {
    $('.single-product-wrapper').slick('setPosition');
}); 
var lazyLoadInstance = new LazyLoad({

  });
  $('.modal').on('shown.bs.modal', function (e) {
    $('.slider-for').slick('setPosition');
    $('.slider-nav').slick('setPosition');
  
  })
  $(".search-icon").click(() => {
    $(".search-content").addClass("active")
    $(".bg-backdrop").addClass("active")
})