$(document).ready(function(){
  $(function() {
          $('.headlineMoving').animatedHeadline({
              animationType: 'rotate-1'
          });
      });


      $(".owl-carousel").owlCarousel({
         // items: 3,
         autoplay: true,
        loop: true,
        nav: false,
        autoplayTimeout: 6000,
        autoplay: 1500,
        smartSpeed: 1500,
        responsive: {
            1200: {
                items: 4,
            },
            768: {
                items: 3,
            },
            480: {
                items: 2,
            },
            320: {
                items: 1,
            },
        }
      });
      var mixer = mixitup('.work_container');

});

var mybutton = document.querySelector('#myBtn');
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";

  }else {
    mybutton.style.display = "none";
  }
}
function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop  = 0;
}
// $(document).ready(function(){
//
// $('.au_right_side ').click(function(){
//   $('.au_right_side').addClass('animated bounceInLeft');
// });
//
//
// });
