//Slide Menu
$(document).ready(function(){
    $('.menu-icon').click(function(){
        $('.menu-container').slideToggle('slow');
    });
    $('.click').click(function(){
        $('.menu-container').slideUp('slow');
    });
});
//Scroll slow
$(document).ready(function(){
    $('.click,.next-section a').on('click',function(){
      $('html,body').animate({
          scrollTop:$($.attr(this, 'href')).offset().top
      }, 1000);
        return false;
    });
});
//Wow
new WOW().init();

//scrollify
$(function() {
          $.scrollify({
            section : ".scroll",
          });
        });
//Mixitup
var mixer = mixitup('.work-grid-container');