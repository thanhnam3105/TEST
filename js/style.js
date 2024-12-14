var swiper = new Swiper('#swiper-container-info', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '#swiper-button-next-info',
    prevEl: '#swiper-button-prev-info',
  },
  breakpoints:{
    768:{
      slidesPerView: 1,
      loopFillGroupWithBlank: true,
    },
    992:{
      slidesPerView: 2,
      spaceBetween: 30,
      loopFillGroupWithBlank: true,
    }
  }
});

var swiper = new Swiper('#swiper-container-card', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '#swiper-button-next-card',
    prevEl: '#swiper-button-prev-card',
  },
  768:{
    slidesPerView: 1,
    loopFillGroupWithBlank: true,
  },
  992:{
    slidesPerView: 2,
    spaceBetween: 30,
    loopFillGroupWithBlank: true,
  }
});


$(document).ready(function(){
  ScrollTop();
  StickyNavBar();
  StellarNav();
  ActiveNav();
});

function StickyNavBar(){
  $(window).on('scroll',function(){
    if($(window).scrollTop()>120){
      $('nav').addClass('sticky');
    }
    else{
      $('nav').removeClass('sticky');
    }
  });
}

function StellarNav(){
  jQuery('.stellarnav').stellarNav({
    theme: 'light',
    breakpoint: 960,
    position: 'right'
  });
}

function ScrollTop(){
  $(window).scroll(function(){
    if($(this).scrollTop()>200){
      $('.btn-scroll').fadeIn();
    }
    else{
      $('.btn-scroll').fadeOut();
    }
  });

  //smooth scrolling to top
  $('.btn-scroll').click(function(){
    $('html,body').animate({scrollTop:0},1500)
  });
}


function ActiveNav(){
  $('nav ul li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
}

// $(window).resize(function(){

//   var width = $(window).width();
//   console.log(width);
//   if (width <= 768){
//     $('nav').removeClass('sticky');
//   }
// });