$(document).ready(function() {
   // Banner Height as per window height Home Page
       var window_height = $(window).height();
         $('.banner-bg') .css({'height': ($(window_height))});
         $(window).bind('resize', function(){
         $('.banner-bg') .css({'height': ($(window).height())});
        });

   
        $('#ScrollTop').click(function() {
          $("html, body").animate({ scrollTop: 0 }, 4000);
          return false;
      });
         
      //Scroll Top Next Section 
            $("#got-to-top").click(function() {
                $('html, body').animate({
                    scrollTop: $("#section-2-scrolltop").offset().top
                }, 1000);
            });

             $('.see-more-cta').click(function() {
                $('.role-details-parent2').show();
                $('.see-more-cta').hide();
                $('.see-less').show();
                $('.profile-details-box:last-child').css('border-bottom','none');
                //$('.role-details-parent2 .profile-details-box:last-child').css('border-bottom','3px dashed #fff;');
              });
              $('.see-less').click(function() {
                $('.role-details-parent2').hide();
                $('.see-less').hide();
                $('.see-more-cta').show();
                $('.profile-details-box:last-child').css('border-bottom','3px dashed #fff !important;');

              });

}); 
