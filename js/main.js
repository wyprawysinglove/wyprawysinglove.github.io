

$(function(){
//--------------------------------------- scroll to up button
    $(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('.scrollToTop1').fadeIn();
		} else {
			$('.scrollToTop1').fadeOut();
		}
            });

            $('.scrollToTop1').click(function(){
                $('html, body').animate({scrollTop : 0},800);
                return false;
            });
    
//-------------------------------------- social to top:0  
        $(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.social').addClass('social-top');
		} else {
			$('.social').removeClass('social-top');
		}
            });
//--------------------------------------- scroll to item menu    
        myScroll();
//--------------------------------------- plagin for galerry    
        baguetteBox.run('.gallery');
  
//--------------------------------------- plagin show effect for block first time
    new WOW({
		offset:100
	}).init();
    //-----------------------------------------
    
    
    });
 //-------------------------------------------- scroll to item menu  
function myScroll(){

            $('#wyciecki').click(function(){
                var wyc=$('.wyciecki').offset();
                $('html, body').animate({scrollTop : wyc.top},500);
                return false;
            });
            
            $('#galeria').click(function(){
                var gal=$('.galeria').offset();
                $('html, body').animate({scrollTop : gal.top},600);
                return false;
            });
            
            $('#regulamin').click(function(){
                var regul=$('.regulamin').offset();
                $('html, body').animate({scrollTop : regul.top},900);
                return false;
            });
           
            $('#contact').click(function(){
                 var con=$('.contact').offset();
                $('html, body').animate({scrollTop : con.top},900);
                return false;
            });
//    console.log(wyc);
};
 //---------------------------------------------------------------------------  
//------------------------  script for validation form ------------------------    
  (function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
    
 //---------------------------------------------------------------------------  	





