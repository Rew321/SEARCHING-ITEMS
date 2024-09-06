
/* navbar */
$(window).scroll(function(){
    // sticky navbar on scroll script
    if(this.scrollY > 20){
        $('.header').addClass("sticky");
    }else{
        $('.header').removeClass("sticky");
    }
    
    // scroll-up button show/hide script
    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
});

// slide-up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});

// scrollline
const scrollline = document.querySelector('.scroll-line');

function fillscrollline(){
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const scrolled = window.scrollY;
  const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

  scrollline.style.width = percentScrolled + '%';
};

window.addEventListener('scroll', fillscrollline);


/* carosel*/
$(document).ready(function(){
      
   /*=============== SHOW MENU ===============*/
   const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')

   /* Menu show */
   if(navToggle){
   navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
   })
   }

   /* Menu hidden */
   if(navClose){
   navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
   })
   }     

   // owl carousel script
   $('.carousel').owlCarousel({
       margin: 20,
       loop: false,
       autoplay: true,
       autoplayTimeOut: 2000,
       autoplayHoverPause: true,
       responsive: {
           0:{
               items: 1,
               nav: false
           },
           600:{
               items: 2,
               nav: false
           },
           1000:{
               items: 3,
               nav: false
           }
       }
   });
   
});
