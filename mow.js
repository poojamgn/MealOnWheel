
   var nav = document.getElementById('navv');
   window.onscroll = function() 
 {
    if (window.pageYOffset > 100)
      {
         nav.style.background = "black" ;       
       }
    else  
         {
         nav.style.background = "transparent";
          }   
 }
  
 /**** 
  * $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });
  */